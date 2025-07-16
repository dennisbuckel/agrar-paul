# Schnelle Updates für Agrar Paul

## Für zukünftige Updates - Nur 2 Schritte!

### Schritt 1: Lokales Quick-Deploy ausführen
```bash
# Im Projektverzeichnis ausführen:
quick-deploy.bat
```

Das Skript macht automatisch:
- ✅ Projekt builden
- ✅ Archiv mit Timestamp erstellen
- ✅ Auf EC2-Instanz hochladen
- ✅ Update-Skript hochladen

### Schritt 2: Update auf EC2-Instanz ausführen
```bash
# SSH-Verbindung zur EC2-Instanz:
ssh -i "C:\Users\Dennis\Desktop\Software\transcribe\skriptyy.pem" ec2-user@13.61.150.21

# Update ausführen (Archiv-Name wird von quick-deploy.bat angezeigt):
chmod +x update-app.sh
./update-app.sh agrar-paul_YYYYMMDD_HHMMSS.tar.gz
```

## Noch schneller - Ein-Zeilen-Update:
```bash
# Alles in einem Befehl (nach quick-deploy.bat):
ssh -i "C:\Users\Dennis\Desktop\Software\transcribe\skriptyy.pem" ec2-user@13.61.150.21 "chmod +x update-app.sh && ./update-app.sh agrar-paul_YYYYMMDD_HHMMSS.tar.gz"
```

## Was passiert beim Update automatisch:

### Auf der lokalen Maschine (quick-deploy.bat):
1. 🔨 **Build**: `npm run build`
2. 📦 **Archiv**: Erstellt `agrar-paul_TIMESTAMP.tar.gz`
3. ⬆️ **Upload**: Kopiert Archiv und Update-Skript auf EC2

### Auf der EC2-Instanz (update-app.sh):
1. 💾 **Backup**: Sichert aktuelle Version
2. ⏹️ **Stop**: Stoppt laufende Anwendung
3. 🗑️ **Clean**: Entfernt alte Dateien (behält node_modules)
4. 📂 **Extract**: Extrahiert neue Version
5. 📦 **Dependencies**: Aktualisiert nur bei Bedarf
6. 🔨 **Build**: Baut Projekt auf Server
7. ▶️ **Start**: Startet Anwendung mit PM2
8. 🔄 **Reload**: Lädt Nginx neu
9. 🧹 **Cleanup**: Entfernt alte Archive

## Vorteile des Update-Systems:

- ⚡ **Schnell**: Nur 2 Befehle für komplettes Update
- 🔒 **Sicher**: Automatische Backups vor jedem Update
- 📊 **Übersichtlich**: Timestamped Archive
- 🔄 **Rollback**: Einfache Wiederherstellung möglich
- 🧹 **Sauber**: Automatische Bereinigung alter Dateien

## Troubleshooting:

### Build-Fehler lokal:
```bash
npm install  # Dependencies aktualisieren
npm run build  # Manuell testen
```

### Update-Fehler auf EC2:
```bash
pm2 logs agrar-paul  # Logs prüfen
pm2 restart agrar-paul  # Neustart versuchen
```

### Rollback bei Problemen:
```bash
# Letztes Backup wiederherstellen:
cd /home/ec2-user/backups
ls -la  # Verfügbare Backups anzeigen
cp -r agrar-paul-backup-YYYYMMDD_HHMMSS/* /home/ec2-user/agrar-paul/
cd /home/ec2-user/agrar-paul
pm2 restart agrar-paul
```

## Status prüfen:
```bash
pm2 status  # PM2 Status
pm2 logs agrar-paul  # Anwendungs-Logs
sudo systemctl status nginx  # Nginx Status
curl http://localhost  # Lokaler Test
```

## Wichtige Dateien:
- `quick-deploy.bat` - Lokales Deployment-Skript
- `update-app.sh` - Server Update-Skript  
- `ecosystem.config.js` - PM2 Konfiguration
- `/home/ec2-user/backups/` - Backup-Verzeichnis
- `/home/ec2-user/agrar-paul/logs/` - Log-Dateien

Die Anwendung ist nach erfolgreichem Update erreichbar unter: **http://13.61.150.21**
