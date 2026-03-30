# CHANGES.md — ws-office

Letzte Aktualisierung: 30. März 2026

---

## Aktueller Stand

### Dateistruktur
- `index.html` — Hauptseite DE
- `en/index.html` — Englisch
- `es/index.html` — Spanisch
- `medien.html` / `en/medien.html` / `es/medien.html` — Medienübersicht
- `impressum.html` / `en/impressum.html` / `es/impressum.html` — Impressum
- `datenschutz.html` — Datenschutz (nur DE)
- `css/style.css` — Gemeinsames Stylesheet (v=20260331a)
- `js/main.js` — Navigation, Scroll, Sprachumschalter, Back-to-top
- `img/vita-portrait.jpg` — Portrait für Vita-Sektion

---

## Erledigte Änderungen (30.03.2026)

### Medien-Seite
- Padding-top wie Vita/Kontakt (nav-h + 40px)
- Sprachumschalter zeigt direkt auf jeweilige medien.html (DE/EN/ES)

### Kontakt-Sektion
- Social Icons zwischen Kontakttext und Pressefotos
- Pressefotos kleiner (max-width 560px, gap 12px)

### Über-Sektion
- Textfarbe #576f84 (wie schmidt-sabugal.de)
- „Netzwerker" entfernt in DE/EN/ES → 3 Zeilen

### Sprachumschalter
- Impressum: zeigt auf jeweilige Sprachversion
- Datenschutz: alle drei Sprachen zeigen auf datenschutz.html (DE)
- main.js: bei Seiten ohne Hash wird direkt navigiert (robust)

### Back-to-top Button
- Erscheint ab 300px Scroll, rund, transparent petrolblau
- Per main.js dynamisch eingefügt → gilt für alle Seiten

### Vita-Bild
- `img/vita-portrait.jpg` eingebunden
- Layout: 1fr 42%, kein Gap, Bild oben bündig
- Bild: sticky (top: nav-h), height: 100vh - nav-h
- object-fit: cover, object-position: top left
- Mobil (≤900px): Bild ausgeblendet

### Anker-Links vereinheitlicht
- Alle Sprachen nutzen identische IDs: #ueber, #vita, #medien, #kontakt
- EN/ES Impressum: #about/#contact → #ueber/#kontakt korrigiert
- ES Impressum/medien.html: #sobre/#contacto → #ueber/#kontakt

---

## Offene Aufgaben

- [ ] biografie.html erstellen (Link im Über-Abschnitt vorhanden)
- [ ] Deployment auf echte Domains (Basispfad von /ws-office/ auf /)
- [ ] CLAUDE_CONTEXT.md aktualisieren
