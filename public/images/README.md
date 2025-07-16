# Bilder-Organisation für Agrar Paul Website

## Ordnerstruktur

### `/public/images/logo/`
- **Zweck**: Logo des Landwirtschaftsbetriebs
- **Empfohlene Formate**: PNG (mit transparentem Hintergrund), SVG
- **Empfohlene Größen**: 
  - Logo für Header: 200x80px oder ähnliches Seitenverhältnis
  - Favicon: 32x32px, 64x64px
- **Dateinamen**: `logo.png`, `logo.svg`, `favicon.ico`

### `/public/images/maschinen/`
- **Zweck**: Bilder aller landwirtschaftlichen Maschinen und Geräte
- **Empfohlene Formate**: JPG, PNG
- **Empfohlene Größen**: Mindestens 800x600px für gute Qualität
- **Komprimierung**: Optimiert für Web (nicht zu groß, aber gute Qualität)

#### Erwartete Maschinenbilder (basierend auf Dienstleistungen):

1. **John Deere Traktor**
   - Dateiname: `john-deere-6250r.jpg`
   - Beschreibung: John Deere 6.250 R, 250 PS

2. **Pflanzenschutzspritze**
   - Dateiname: `inuma-spritze.jpg`
   - Beschreibung: Inuma Pflanzenschutzspritze (blaues Bild vorhanden)

3. **Düngerstreuer**
   - Dateiname: `rauch-axera-hemc.jpg`
   - Beschreibung: Rauch-Axera HEMC Düngerstreuer

4. **Bodenbearbeitung**
   - Dateiname: `horsch-tiger-6as.jpg`
   - Beschreibung: Horsch Tiger 6 AS (6m Arbeitsbreite) - **NOCH KEIN BILD VORHANDEN**

5. **Transport-Mulde**
   - Dateiname: `mulde-24-kubik.jpg`
   - Beschreibung: 24-Kubik-Mulde für Schüttgüter-Transport

6. **Häckselwagen**
   - Dateiname: `haeckselwagen-40-kubik.jpg`
   - Beschreibung: 40-Kubik-Häckselwagen

7. **Schneepflug**
   - Dateiname: `schneepflug-schiebeschild.jpg`
   - Beschreibung: Schneepflug-Schiebeschild für Winterdienst

### Zusätzliche Bilder (optional)
- **Betriebsbilder**: Allgemeine Bilder vom Hof, Arbeiten auf dem Feld
- **Dateinamen**: `betrieb-01.jpg`, `feld-arbeit-01.jpg`, etc.

## Bildoptimierung

### Empfohlene Bildgrößen:
- **Hero-Bilder**: 1920x1080px oder 1200x800px
- **Galerie-Bilder**: 800x600px oder 1024x768px
- **Thumbnail**: 300x200px

### Dateigröße:
- **Ziel**: Unter 500KB pro Bild für schnelle Ladezeiten
- **Tools**: TinyPNG, ImageOptim oder ähnliche Komprimierungstools

### Dateinamen-Konventionen:
- Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Beschreibende Namen
- Beispiel: `john-deere-traktor-feld.jpg`

## Nächste Schritte

1. **Logo hinzufügen**: Logo in `/logo/` Ordner
2. **Maschinenbilder hinzufügen**: Alle verfügbaren Bilder in `/maschinen/` Ordner
3. **Bildoptimierung**: Bilder für Web optimieren
4. **Fehlende Bilder**: Horsch Tiger 6 AS Bild noch erforderlich

## Technische Integration

Die Bilder werden in der Next.js-Anwendung über den `/public/images/` Pfad eingebunden:
- Logo: `/images/logo/logo.png`
- Maschinen: `/images/maschinen/inuma-spritze.jpg`

Die Website wird automatisch alle Bilder aus dem Maschinen-Ordner laden und in der Galerie anzeigen.
