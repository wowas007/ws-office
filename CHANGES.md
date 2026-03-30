# CHANGES.md — ws-office

Letzte Aktualisierung: 30. März 2026

---

## Aktueller Stand (Stand: Commit 30.03.2026 abends)

### Dateistruktur
- `index.html` — Hauptseite DE (CSS: style.css?v=20260331e)
- `en/index.html` — Englisch
- `es/index.html` — Spanisch
- `medien.html` / `en/medien.html` / `es/medien.html` — Medienübersicht
- `impressum.html` / `en/impressum.html` / `es/impressum.html` — Impressum
- `datenschutz.html` — Datenschutz (nur DE)
- `css/style.css` — Gemeinsames Stylesheet
- `js/main.js` — Navigation, Scroll, Sprachumschalter, Back-to-top
- `img/vita-portrait.jpg` — Portrait für Vita-Sektion (zugeschnitten)
- `fonts/` — Lato 300/400/900 Normal + Poppins 400/700 (lokal)

---

## Hero-Sektion
- Wolfgang: Lato 300, Schmidt: Lato 900 — beide line-height: 0.85
- Bundesminister / former Federal Minister / exministro federal: Lato 300, margin-top: -10px
- Einheitlich für alle drei Sprachen — kein inline-style
- Schriftdateien: Lato Normal (nicht Italic) direkt von schmidt-sabugal.de

---

## Über-Sektion
- Tags-Text: Poppins, color: #576f84 (wie schmidt-sabugal.de)
- „Netzwerker" / „Networker" entfernt → 3 Zeilen in DE/EN/ES
- Biografie: Poppins 400, 20px

---

## Vita-Sektion
- Layout: grid 1fr 42%, kein Gap
- Bild rechts: sticky (top: nav-h), height: calc(100vh - nav-h)
- object-fit: cover, object-position: top left
- Mobil (≤900px): Bild ausgeblendet
- Timeline-Spalte: padding-right 60px, padding-bottom 80px

---

## Medien-Seite
- Padding-top: calc(nav-h + 40px), kein padding-top auf .medien-page
- Sprachumschalter: zeigt direkt auf jeweilige medien.html
- Nav-Links: alle auf #ueber/#vita/#medien/#kontakt (korrekte IDs)

---

## Kontakt-Sektion
- Social Icons zwischen Kontakttext und Pressefotos
- Pressefotos: max-width 560px, gap 12px, 3 Spalten

---

## Impressum / Datenschutz
- DE/EN/ES Impressum: Sprachumschalter zeigt auf jeweilige Impressum-Version
- Datenschutz: alle Sprachen zeigen auf /ws-office/datenschutz.html (nur DE)
- Alle Footer-Links: absolute Pfade (/ws-office/...)
- Nav-Links überall: #ueber / #vita / #medien / #kontakt

---

## Sprachumschalter (main.js)
- Auf Seiten ohne Hash (medien, impressum, datenschutz): direkt navigieren
- Auf Seiten mit Hash: sessionStorage-Trick für Safari-Scroll

---

## Back-to-top Button
- Per main.js dynamisch eingefügt auf allen Seiten
- Erscheint ab 300px Scroll, rund, transparent petrolblau ↑
- Klick: scrollt zu top: 0

---

## CSS Cache-Buster
- Alle index.html: style.css?v=20260331e
- Medien/Impressum/Datenschutz: style.css?v=20260330d (oder ohne Versionierung)

---

## Letzte Korrekturen (30.03.2026 abends)
- en/medien.html: Nav-Anker #about/#contact → #ueber/#kontakt
- es/medien.html Footer: ../datenschutz.html → absoluter Pfad
- en/index.html + es/index.html Footer: ../datenschutz.html → absoluter Pfad
- style2.css mit aktuellem style.css überschrieben (Browser-Cache-Workaround)
- Hero-Titel: einheitlich margin-top -10px, font-weight 300, kein inline-style

---

## Offene Aufgaben
- [ ] biografie.html erstellen (Link im Über-Abschnitt vorhanden)
- [ ] Deployment auf echte Domains (Basispfad von /ws-office/ auf /)
- [ ] style2.css aus Repository entfernen (sobald Browser-Cache abgelaufen)
