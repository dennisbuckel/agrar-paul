@echo off
echo ===== Agrar Paul Quick Deployment =====
echo.

REM Timestamp für Archiv-Namen
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "timestamp=%YYYY%%MM%%DD%_%HH%%Min%%Sec%"

echo 1. Baue das Projekt...
call npm run build
if %errorlevel% neq 0 (
    echo FEHLER: Build fehlgeschlagen!
    pause
    exit /b 1
)

echo 2. Erstelle Archiv mit Timestamp: agrar-paul_%timestamp%.tar.gz
tar -czf agrar-paul_%timestamp%.tar.gz --exclude=node_modules --exclude=.git --exclude=.next/cache .

echo 3. Kopiere Archiv auf EC2-Instanz...
scp -i "C:\Users\Dennis\Desktop\Software\transcribe\skriptyy.pem" -o StrictHostKeyChecking=no agrar-paul_%timestamp%.tar.gz ec2-user@13.61.150.21:/home/ec2-user/

echo 4. Kopiere Update-Skript auf EC2-Instanz...
scp -i "C:\Users\Dennis\Desktop\Software\transcribe\skriptyy.pem" -o StrictHostKeyChecking=no update-app.sh ec2-user@13.61.150.21:/home/ec2-user/

echo.
echo ===== Upload abgeschlossen! =====
echo.
echo Führen Sie nun auf der EC2-Instanz aus:
echo ssh -i "C:\Users\Dennis\Desktop\Software\transcribe\skriptyy.pem" ec2-user@13.61.150.21
echo chmod +x update-app.sh
echo ./update-app.sh agrar-paul_%timestamp%.tar.gz
echo.
echo Oder für automatisches Update:
echo ssh -i "C:\Users\Dennis\Desktop\Software\transcribe\skriptyy.pem" ec2-user@13.61.150.21 "chmod +x update-app.sh && ./update-app.sh agrar-paul_%timestamp%.tar.gz"
echo.
pause
