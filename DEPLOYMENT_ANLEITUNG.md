# Deployment Anleitung für Agrar Paul auf AWS EC2

## Voraussetzungen
- AWS EC2-Instanz (Amazon Linux 2023) ist gestartet
- SSH-Zugang zur EC2-Instanz
- Projekt-Archiv und Deployment-Skript sind auf die EC2-Instanz kopiert

## Deployment-Schritte

### 1. Mit EC2-Instanz verbinden
```bash
ssh -i "C:\Users\Dennis\Desktop\Software\transcribe\skriptyy.pem" -o StrictHostKeyChecking=no ec2-user@13.61.150.21
```

### 2. Deployment-Skript ausführbar machen
```bash
chmod +x deploy.sh
```

### 3. Deployment starten
```bash
./deploy.sh
```

Das Skript führt automatisch folgende Schritte aus:
- Erstellt das Projektverzeichnis `/home/ec2-user/agrar-paul`
- Extrahiert das Projekt-Archiv
- Installiert Node.js 18
- Installiert PM2 (Process Manager)
- Installiert Projekt-Dependencies
- Baut das Next.js-Projekt
- Installiert und konfiguriert Nginx als Reverse Proxy
- Startet die Anwendung mit PM2
- Konfiguriert Autostart für PM2

### 4. Deployment überprüfen

Nach erfolgreichem Deployment sollte die Anwendung unter der öffentlichen IP-Adresse der EC2-Instanz erreichbar sein:
```
http://13.61.150.21
```

### 5. Nützliche Befehle für die Verwaltung

#### PM2 (Process Manager)
```bash
pm2 status          # Status aller Prozesse anzeigen
pm2 logs            # Logs anzeigen
pm2 logs agrar-paul # Logs nur für agrar-paul
pm2 restart agrar-paul # Anwendung neu starten
pm2 stop agrar-paul    # Anwendung stoppen
pm2 delete agrar-paul  # Anwendung aus PM2 entfernen
```

#### Nginx (Web Server)
```bash
sudo systemctl status nginx    # Nginx Status
sudo systemctl restart nginx  # Nginx neu starten
sudo systemctl stop nginx     # Nginx stoppen
sudo systemctl start nginx    # Nginx starten
sudo tail -f /var/log/nginx/error.log  # Nginx Error Logs
sudo tail -f /var/log/nginx/access.log # Nginx Access Logs
```

#### System-Logs
```bash
journalctl -u nginx -f  # Nginx Service Logs
journalctl -f           # Alle System Logs
```

### 6. Firewall/Security Groups

Stellen Sie sicher, dass in den AWS Security Groups folgende Ports geöffnet sind:
- Port 80 (HTTP) - für den Web-Traffic
- Port 22 (SSH) - für SSH-Zugang
- Port 443 (HTTPS) - optional für SSL

### 7. SSL/HTTPS (Optional)

Für Produktionsumgebungen sollten Sie SSL einrichten:
```bash
# Certbot für Let's Encrypt installieren
sudo yum install -y certbot python3-certbot-nginx

# SSL-Zertifikat erstellen (Domain erforderlich)
sudo certbot --nginx -d ihre-domain.de
```

### 8. Troubleshooting

#### Anwendung läuft nicht
```bash
pm2 logs agrar-paul  # Anwendungs-Logs prüfen
pm2 restart agrar-paul  # Anwendung neu starten
```

#### Nginx-Probleme
```bash
sudo nginx -t  # Nginx-Konfiguration testen
sudo systemctl status nginx  # Nginx Status prüfen
sudo tail -f /var/log/nginx/error.log  # Error Logs
```

#### Port-Probleme
```bash
sudo netstat -tlnp | grep :80   # Prüfen welcher Prozess Port 80 verwendet
sudo netstat -tlnp | grep :3000 # Prüfen ob Next.js auf Port 3000 läuft
```

### 9. Updates deployen

Für zukünftige Updates:
1. Neues Archiv erstellen und auf EC2 kopieren
2. Anwendung stoppen: `pm2 stop agrar-paul`
3. Neue Dateien extrahieren
4. Dependencies aktualisieren: `npm install`
5. Projekt neu builden: `npm run build`
6. Anwendung starten: `pm2 start agrar-paul`

## Wichtige Hinweise

- Die Anwendung läuft auf Port 3000 intern
- Nginx leitet Traffic von Port 80 auf Port 3000 weiter
- PM2 sorgt dafür, dass die Anwendung automatisch neu startet bei Fehlern
- Logs werden im `/home/ec2-user/agrar-paul/logs/` Verzeichnis gespeichert
- Bei Problemen zuerst die Logs prüfen: `pm2 logs agrar-paul`
