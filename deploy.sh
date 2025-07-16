#!/bin/bash

# Deployment-Skript für agrar-paul auf AWS EC2
echo "=== Agrar Paul Deployment Script ==="

# Verzeichnis erstellen und wechseln
echo "1. Erstelle Projektverzeichnis..."
mkdir -p /home/ec2-user/agrar-paul
cd /home/ec2-user/agrar-paul

# Archiv extrahieren
echo "2. Extrahiere Projektdateien..."
tar -xzf /home/ec2-user/agrar-paul.tar.gz

# Node.js installieren (falls nicht vorhanden)
echo "3. Installiere Node.js..."
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# PM2 global installieren
echo "4. Installiere PM2..."
sudo npm install -g pm2

# Dependencies installieren
echo "5. Installiere Projekt-Dependencies..."
npm install

# Projekt builden
echo "6. Baue das Projekt..."
npm run build

# PM2 Logs-Verzeichnis erstellen
echo "7. Erstelle Logs-Verzeichnis..."
mkdir -p logs

# Nginx installieren und konfigurieren
echo "8. Installiere und konfiguriere Nginx..."
sudo yum update -y
sudo yum install -y nginx

# Nginx Konfiguration erstellen
sudo tee /etc/nginx/conf.d/agrar-paul.conf > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Nginx starten und aktivieren
echo "9. Starte Nginx..."
sudo systemctl start nginx
sudo systemctl enable nginx

# PM2 Anwendung starten
echo "10. Starte die Anwendung mit PM2..."
pm2 start ecosystem.config.js

# PM2 beim Systemstart aktivieren
echo "11. Konfiguriere PM2 für Autostart..."
pm2 startup
pm2 save

echo "=== Deployment abgeschlossen! ==="
echo "Die Anwendung sollte jetzt unter http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4) erreichbar sein"
echo ""
echo "Nützliche Befehle:"
echo "- PM2 Status: pm2 status"
echo "- PM2 Logs: pm2 logs"
echo "- PM2 Restart: pm2 restart agrar-paul"
echo "- Nginx Status: sudo systemctl status nginx"
echo "- Nginx Logs: sudo tail -f /var/log/nginx/error.log"
