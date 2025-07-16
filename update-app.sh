#!/bin/bash

# Update-Skript für agrar-paul auf AWS EC2
# Verwendung: ./update-app.sh <archiv-name.tar.gz>

if [ $# -eq 0 ]; then
    echo "Fehler: Kein Archiv-Name angegeben!"
    echo "Verwendung: ./update-app.sh <archiv-name.tar.gz>"
    exit 1
fi

ARCHIVE_NAME=$1
APP_DIR="/home/ec2-user/agrar-paul"
BACKUP_DIR="/home/ec2-user/backups"

echo "===== Agrar Paul Update Script ====="
echo "Archiv: $ARCHIVE_NAME"
echo "App-Verzeichnis: $APP_DIR"
echo ""

# Prüfen ob Archiv existiert
if [ ! -f "/home/ec2-user/$ARCHIVE_NAME" ]; then
    echo "Fehler: Archiv $ARCHIVE_NAME nicht gefunden!"
    exit 1
fi

# Backup-Verzeichnis erstellen
echo "1. Erstelle Backup-Verzeichnis..."
mkdir -p $BACKUP_DIR

# Aktuelles Backup erstellen (falls App bereits existiert)
if [ -d "$APP_DIR" ]; then
    echo "2. Erstelle Backup der aktuellen Version..."
    BACKUP_NAME="agrar-paul-backup-$(date +%Y%m%d_%H%M%S)"
    cp -r $APP_DIR $BACKUP_DIR/$BACKUP_NAME
    echo "Backup erstellt: $BACKUP_DIR/$BACKUP_NAME"
    
    # PM2 Anwendung stoppen
    echo "3. Stoppe laufende Anwendung..."
    cd $APP_DIR
    pm2 stop agrar-paul 2>/dev/null || echo "Anwendung war nicht gestartet"
else
    echo "2. Keine bestehende Installation gefunden - Erstinstallation"
fi

# App-Verzeichnis erstellen/leeren
echo "4. Bereite App-Verzeichnis vor..."
mkdir -p $APP_DIR
cd $APP_DIR

# Alte Dateien entfernen (außer node_modules für schnellere Installation)
echo "5. Entferne alte Dateien..."
find . -maxdepth 1 -not -name 'node_modules' -not -name '.' -not -name 'logs' -exec rm -rf {} + 2>/dev/null

# Neues Archiv extrahieren
echo "6. Extrahiere neues Archiv..."
tar -xzf /home/ec2-user/$ARCHIVE_NAME

# Dependencies aktualisieren (nur wenn package.json geändert wurde)
echo "7. Prüfe und aktualisiere Dependencies..."
if [ -f "package-lock.json" ]; then
    npm ci --production
else
    npm install --production
fi

# Projekt builden
echo "8. Baue das Projekt..."
npm run build

# Logs-Verzeichnis sicherstellen
echo "9. Erstelle Logs-Verzeichnis..."
mkdir -p logs

# PM2 Anwendung starten
echo "10. Starte Anwendung mit PM2..."
pm2 start ecosystem.config.js

# PM2 Konfiguration speichern
echo "11. Speichere PM2 Konfiguration..."
pm2 save

# Nginx neu laden (falls Konfiguration geändert wurde)
echo "12. Lade Nginx-Konfiguration neu..."
sudo systemctl reload nginx 2>/dev/null || echo "Nginx reload fehlgeschlagen - möglicherweise nicht installiert"

# Status prüfen
echo ""
echo "===== Update abgeschlossen! ====="
echo ""
echo "Status-Überprüfung:"
pm2 status
echo ""
echo "Anwendung sollte erreichbar sein unter: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo '13.61.150.21')"
echo ""
echo "Nützliche Befehle:"
echo "- Logs anzeigen: pm2 logs agrar-paul"
echo "- Status prüfen: pm2 status"
echo "- Anwendung neu starten: pm2 restart agrar-paul"
echo "- Backup wiederherstellen: cp -r $BACKUP_DIR/$BACKUP_NAME/* $APP_DIR/"
echo ""

# Alte Archive aufräumen (behalte nur die letzten 5)
echo "13. Räume alte Archive auf..."
cd /home/ec2-user
ls -t agrar-paul_*.tar.gz 2>/dev/null | tail -n +6 | xargs rm -f 2>/dev/null || true

echo "Update erfolgreich abgeschlossen!"
