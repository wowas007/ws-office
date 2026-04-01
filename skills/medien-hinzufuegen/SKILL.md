---
name: medien-hinzufuegen
description: Fuege neue Medieneintraege (Artikel, Interviews, Podcasts, TV-Auftritte) zur Homepage von Wolfgang Schmidt hinzu. Nutze diesen Skill wenn der Nutzer einen Link zu einem Artikel, Interview, Podcast oder TV-Auftritt sendet und diesen auf der Medien-Seite eintragen moechte. Auch wenn der Nutzer sagt fuege das hinzu, trag das ein, neuer Medieneintrag, oder aehnliches. Der Skill liest die URL aus, erstellt den HTML-Eintrag im korrekten Format und fuegt ihn in medien.html (und optional en/medien.html, es/medien.html) ein.
---

# Medien hinzufuegen — Skill fuer die Homepage Wolfgang Schmidt

## Zweck

Dieser Skill ermoeglicht das schnelle Hinzufuegen neuer Medieneintraege (Artikel, Interviews, Podcasts, TV-Auftritte) zur Website wolfgang-schmidt.eu. Der Nutzer gibt nur einen Link (und optional Zusatzinfos) — Claude erledigt den Rest.

## Trigger

- Nutzer sendet einen Link zu einem Artikel/Interview/Podcast/Video
- Nutzer sagt "fuege das hinzu", "trag das ein", "neuer Medieneintrag", "neues Interview"
- Nutzer erwaehnt "medien.html", "Medien-Seite", "Presse"

## Projektpfad

```
~/Library/CloudStorage/OneDrive-Persönlich/2 Dokumente/Homepage/office-ws/
```

## Workflow

### Schritt 1: Link aufrufen und Inhalte extrahieren

Rufe die URL mit web_fetch auf und extrahiere:
- **Datum** der Veroeffentlichung
- **Quelle** (Name des Mediums, z.B. "ZDF · Markus Lanz", "Spiegel Online")
- **Titel** des Beitrags
- **Untertitel** (optional, z.B. "Zu Gast in der Sendung vom 19. Februar 2026")
- **Teaser** (1–3 Saetze Zusammenfassung)

Falls der Link nicht aufrufbar ist (Paywall etc.), frage den Nutzer nach den fehlenden Informationen.

### Schritt 2: HTML-Eintrag erstellen

Erstelle den Eintrag in exakt diesem Format:

```html
      <!-- NEU TT.MM.JJJJ -->
      <div class="artikel-card">
        <div class="artikel-date">TT.MM.JJJJ</div>
        <div class="artikel-source">QUELLENNAME</div>
        <div class="artikel-title">TITEL DES BEITRAGS</div>
        <div class="artikel-subtitle">UNTERTITEL</div>
        <div class="artikel-teaser">TEASER-TEXT (1-3 Saetze)</div>
        <a class="artikel-link" href="URL" target="_blank">LINKTEXT</a>
      </div>
```

### Regeln fuer den Link-Text:

| Medientyp | Link-Text |
|-----------|-----------|
| Zeitungsartikel | `Artikel lesen` |
| TV-Sendung (ZDF, ARD etc.) | `Sendung ansehen` |
| YouTube-Video | `Video ansehen` |
| Podcast (Spotify, Apple etc.) | `Podcast hören` |
| Interview (Text) | `Interview lesen` |
| Interview (Video) | `Interview ansehen` |
| Blog-Post | `Beitrag lesen` |

### Regeln fuer die Quelle:

- Bei Plattform + Sendung: `Plattform · Sendungsname` (z.B. "ZDF · Markus Lanz")
- Bei fremdsprachigen Beitraegen: `Name (auf Englisch)` oder `Name (auf Spanisch)`
- Bei Podcasts: `Spotify · Podcastname` oder `Apple Podcasts · Podcastname`

### Schritt 3: In medien.html einfuegen

1. Oeffne `medien.html` mit Filesystem:read_file
2. Finde die Zeile `<div class="artikel-grid">` 
3. Fuege den neuen Eintrag **direkt nach** dieser Zeile ein (neueste zuerst!)
4. Speichere die Datei

### Schritt 4: Frage nach EN/ES

Frage den Nutzer: "Soll ich den Eintrag auch in die englische (en/medien.html) und/oder spanische (es/medien.html) Version eintragen?"

Falls ja:
- Uebersetze Titel, Untertitel und Teaser
- Passe den Link-Text an (EN: "Read article", "Watch video", "Listen to podcast" / ES: "Leer artículo", "Ver vídeo", "Escuchar podcast")
- Fuege in en/medien.html bzw. es/medien.html ein

### Schritt 5: Git commit und push

```bash
cd ~/Library/CloudStorage/OneDrive-Persönlich/2\ Dokumente/Homepage/office-ws
git add medien.html en/medien.html es/medien.html
git commit -m "Neuer Medieneintrag: [TITEL-KURZ]"
git push
```

### Schritt 6: Bestaetigung

Bestaetigen mit:
- Titel des Eintrags
- Link zur Live-Seite: https://wolfgang-schmidt.eu/medien.html
- Hinweis: "Die Startseite zeigt automatisch die neuesten 6 Eintraege."

## Beispiel-Interaktion

**Nutzer:** https://www.zdf.de/video/talk/markus-lanz-114/markus-lanz-vom-19-februar-2026-102

**Claude:**
1. Ruft die URL auf
2. Extrahiert: Datum 19.02.2026, Quelle "ZDF · Markus Lanz", Titel "Markus Lanz: Vier Jahre Krieg in der Ukraine"
3. Erstellt den HTML-Block
4. Fuegt ihn oben in medien.html ein
5. Fragt: "Auch in EN/ES eintragen?"
6. Committet und pusht
7. Bestaetigt: "Neuer Eintrag live: Markus Lanz: Vier Jahre Krieg in der Ukraine"

## Hinweise

- Die Startseite (index.html) laedt die ersten 6 Eintraege automatisch per JS aus medien.html — kein manuelles Update noetig
- Alte Eintraege koennen nach medien/archiv.html verschoben werden
- Eintraege in medien.html sind nach Datum sortiert (neueste oben)
- Der Teaser sollte nie laenger als 3 Saetze sein
- Falls der subtitle nicht sinnvoll ist, kann er weggelassen werden
