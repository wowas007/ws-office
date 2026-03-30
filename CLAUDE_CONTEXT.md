# Projekt-Kontext: ws-office — Homepage Wolfgang Schmidt

## Stand: 30. März 2026

---

## Projektziel
Statische, framework-freie Homepage für Wolfgang Schmidt (Bundesminister a.D.).
Dreisprachig (DE/EN/ES), minimalistisch, ohne CMS-Abhängigkeit.

---

## Repository & URLs
- GitHub: `https://github.com/wowas007/ws-office`
- GitHub Pages (Test): `https://wowas007.github.io/ws-office/`
- Lokaler Ordner: `/Users/wolfgangschmidt/Downloads/ws-office/`
- Später produktiv: `schmidt-sabugal.de` und weitere Domains

---

## Dateistruktur
```
ws-office/
├── index.html              ← Hauptseite DE
├── en/index.html           ← Englisch
├── es/index.html           ← Spanisch
├── medien.html             ← Medien-Übersicht (50+ Artikel, neueste zuerst)
├── medien/archiv.html      ← Archivierte Artikel
├── impressum.html          ← Impressum (inkl. Social Icons)
├── datenschutz.html        ← Datenschutz
├── css/style.css           ← Gemeinsames Stylesheet
├── js/main.js              ← Navigation, Animationen, Formular
├── img/
│   ├── hero.webp           ← Hero-Hintergrundbild (Petrolblau)
│   ├── logo.svg            ← WS-Monogramm (weiß)
│   └── foto.jpg            ← Porträtfoto (roter Hintergrund)
├── CHANGES.md              ← Vollständiges Änderungsprotokoll
├── MEDIEN_HINZUFUEGEN.md   ← Anleitung für neue Medieneinträge
└── CLAUDE_CONTEXT.md       ← Diese Datei
```

---

## Design
- **Fonts:** Lato (Hero) + Poppins (Body/Tags) — Google Fonts
- **Farben:** Petrolblau `#2d4a5e` (Hero), Blaugrau `#a7afbc` (Tags+Über), Mittelblau `#576f84` (Vita+Kontakt), Dunkelblau `#1e3345` (Footer)
- **Hero:** Vollbild-Foto links, Name rechts unten (WOLFGANG dünn / SCHMIDT fett)
- **Navigation:** Transparent über Hero, petrolblauer Hintergrund bei Scroll (`nav.scrolled`)

---

## Sektionen (index.html DE)
| ID | Inhalt |
|---|---|
| `#ueber` | Tags-Sektion: Schlagworte (Hamburger in Berlin. Vater. **Europäer**. Transatlantiker. **Politikstratege**. Sicherheitspolitiker.) |
| `#ueber-text` | Über-Sektion: Foto + Biografie-Text (grauer Hintergrund wie Tags) |
| `#vita` | Timeline: 20 Stationen von 1970 bis heute |
| `#medien` | Teaser + 6 aktuelle Medieneinträge + Button → medien.html |
| `#kontakt` | Formular (Formspree) + Social Icons (LinkedIn, X, Instagram) |

---

## Schlagworte (alle 3 Sprachen)
| DE | EN | ES |
|---|---|---|
| Hamburger in Berlin. Vater. **Europäer**. Transatlantiker. **Politikstratege**. Sicherheitspolitiker. | Hamburger in Berlin. Father. **European**. Transatlanticist. **Political strategist**. Security policy expert. | Hamburgués en Berlín. Padre. **Europeo**. Transatlántico. **Estratega político**. Experto en política de seguridad. |

---

## Medien-Seite (medien.html)
- 50+ Einträge, chronologisch (neueste zuerst)
- Erste 6 sichtbar, Rest per „Weitere Medien anzeigen"-Button
- Einträge von 2017 bis 2026
- Neueste: Agenda Pública (29.03.2026), IP Quarterly (26.03.2026), Kreisky Forum (10.03.2026)
- **Neuen Eintrag hinzufügen:** Link/Text hier im Chat schicken → ich baue ein und pushe

---

## Technisches
- **Kontaktformular:** Formspree `https://formspree.io/f/homepage@office-ws.de`
- **Pfade:** Alle absoluten Links mit `/ws-office/` als Basis (für GitHub Pages)
- **Beim Deployment auf echte Domain:** Basispfad auf `/` ändern (einmaliger Befehl)
- **scroll-margin-top:** Alle `section[id]` haben `scroll-margin-top: var(--nav-h)` für korrekte Anker-Navigation

---

## Workflow für neue Medieneinträge
1. Link oder Text hier im Chat schicken
2. Ich rufe Inhalt ab, formuliere Datum/Quelle/Titel/Teaser
3. Eintrag wird oben in `medien.html` eingefügt
4. Direkt gepusht zu GitHub → live in ~60 Sekunden

---

## Noch offen
- `biografie.html`: Ausführliche Biografie (Link aus Über-Text bereits vorhanden)
- EN/ES: Medien-Link in Navigation noch nicht aktualisiert
- Deployment auf schmidt-sabugal.de und weitere Domains
- Neue Bilder in `img/` noch nicht eingebunden (Portrait 1–4, IMG_3752, IMG_4369)

---

## Prompt für VS Code (Claude-Extension)
```
Lies zuerst CHANGES.md und CLAUDE_CONTEXT.md im Projektordner.
Wir bauen die Homepage von Wolfgang Schmidt als statische Website.
Alle Dateien liegen in /Users/wolfgangschmidt/Downloads/ws-office/.
Bitte bestätige kurz welche Dateien du siehst und was offen ist.
Wir arbeiten auf Deutsch.
```
