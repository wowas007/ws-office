# ws-office — Änderungsprotokoll

Dieses Dokument dokumentiert alle Änderungen am Projekt.
Sowohl Claude (hier im Chat) als auch Claude in VS Code lesen diese Datei zuerst,
bevor sie Änderungen vornehmen — um Konflikte zu vermeiden.

---

## Aktueller Stand (30.03.2026)

### Dateistruktur
```
ws-office/
├── index.html          ← Hauptseite DE
├── en/index.html       ← Englisch
├── es/index.html       ← Spanisch
├── impressum.html      ← Impressum (mit Posthinweis + Social Icons)
├── datenschutz.html    ← Datenschutz
├── medien.html         ← Medien-Übersicht (50+ Artikel, neueste zuerst)
├── medien/archiv.html  ← Archivierte Artikel (8 Stück)
├── css/style.css       ← Gemeinsames Stylesheet
├── js/main.js          ← Navigation, Animationen, Formular
├── img/
│   ├── hero.webp       ← Hero-Hintergrundbild (petrolblau)
│   ├── logo.svg        ← WS-Monogramm (weiß)
│   └── foto.jpg        ← Porträtfoto (roter Hintergrund)
├── wws-advisory-de/    ← Landing Page DE (→ wws-advisory.de)
│   ├── index.html
│   └── CNAME
├── wws-advisory-com/   ← Landing Page EN (→ wwsadvisory.com)
│   ├── index.html
│   └── CNAME
└── CHANGES.md          ← Diese Datei
```

### Design-Grundlage
- **Fonts:** Lato (Hero-Überschriften) + Poppins (Body, Tags)
- **Farben:**
  - Hero: `#2d4a5e` (Petrolblau)
  - Tags / Über-Sektion: `#a7afbc` (Blaugrau)
  - Vita / Kontakt-Sektion: `#576f84` (Mittelblau)
  - Footer: `#1e3345` (Dunkelblau)
- **Hero:** Vollbild-Foto, Name rechts unten (WOLFGANG dünn / SCHMIDT fett)
- **Navigation:** Transparent über Hero, wird bei Scroll dunkel (scrolled-Klasse)

### Navigation (index.html)
- „Über" → `#ueber` (zeigt auf Tags-Sektion — ersten grauen Kasten)
- „Vita" → `#vita`
- „Medien" → `medien.html` (separate Seite, kein Anchor)
- „Kontakt" → `#kontakt`

### Schlagworte (tags-text, alle 3 Sprachen)
- **Hamburger in Berlin** · Vater · **Europäer** · Transatlantiker · **Politikstratege** · Sicherheitspolitiker
- (früher: Kompromissefinder / Staatsmodernisierer)

### Sektionen (index.html)
- `id="ueber"` → Tags-Sektion (Schlagworte: Hamburger in Berlin etc.)
- `id="ueber-text"` → Über-Sektion (Foto + Biografie-Text)
- `id="vita"` → Timeline
- `id="medien"` → Teaser mit Button „Alle Artikel →" zu medien.html
- `id="kontakt"` → Kontaktformular (Formspree)

### Kontaktformular
- Formspree-Action: `https://formspree.io/f/homepage@office-ws.de`
- Spam-Honeypot: `_gotcha`-Feld vorhanden

### GitHub Pages (Test-URL)
- `https://wowas007.github.io/ws-office/`
- Alle absoluten Links verwenden `/ws-office/` als Basispfad

### Landing Pages (WWS Advisory)
- **wws-advisory.de** (deutsch): Fullscreen Hero, „Bundesminister a.D.", Social Icons (LinkedIn, X, Instagram) oben rechts
- **wwsadvisory.com** (englisch): Fullscreen Hero, „Former Federal Minister", Social Icons oben rechts
- Beide als separate GitHub-Repos: `wowas007/wws-advisory-de`, `wowas007/wws-advisory-com`
- DNS bei Porkbun konfiguriert (A-Records → GitHub Pages IPs, CNAME www → wowas007.github.io)
- SSL/HTTPS aktiviert für beide Domains
- Social-Media-Links:
  - LinkedIn: https://www.linkedin.com/in/wolfgang-schmidt-germany
  - X: https://x.com/W_Schmidt_
  - Instagram: https://www.instagram.com/wowashamburg/

### Noch offen
- biografie.html: Ausführliche Biografie-Seite erstellen (Verlinkung aus Über-Text bereits vorhanden)
- EN + ES Versionen: Medien-Link in Navigation noch nicht aktualisiert
- Deployment auf echte Domains (schmidt-sabugal.de etc.) — später
- Neue Bilder in img/ noch nicht eingebunden: IMG_3752.jpeg, IMG_4369.JPG, Portrait 1–4

---

## Änderungshistorie

| Datum | Wer | Was |
|---|---|---|
| 20.03.2026 | Claude (Chat) | Projekt gestartet, alle Dateien erstellt |
| 20.03.2026 | Claude (Chat) | Design nach Original analysiert (Lato/Poppins, Petrolfarben) |
| 20.03.2026 | Claude (Chat) | Logo heruntergeladen (logo.svg) |
| 20.03.2026 | Claude (Chat) | Medien-Seite mit 39 Artikeln + Archiv erstellt |
| 20.03.2026 | Claude (Chat) | scroll-margin-top Fix für Navigation |
| 20.03.2026 | Claude (Chat) | Über-Anker auf Tags-Sektion verschoben (id=ueber) |
| 20.03.2026 | Claude (Chat) | CHANGES.md angelegt |
| 20.03.2026 | Claude (Chat) | Nav scrolled-Stil in style.css ergänzt (petrolblauer Hintergrund bei Scroll) |
| 20.03.2026 | Claude (Chat) | 13 neue Medieneinträge in medien.html eingefügt (YouTube, ZDF, ZEIT, Spiegel, Spotify) · Spotify-Episodentitel noch als Platzhalter |
| 30.03.2026 | Claude (Chat) | Schlagworte in Hero-Sektion angepasst: Kompromissefinder→Europäer, Staatsmodernisierer→Politikstratege (alle 3 Sprachen) |
| 30.03.2026 | Claude (Chat) | Über-Text EN + ES neu verfasst: muttersprachlich, mit Erklärungen für deutsche Besonderheiten (Zeitenwende, Kanzleramt etc.) |
| 29.03.2026 | Claude (Cowork) | Landing Page wws-advisory.de (DE) erstellt — Fullscreen Hero + Social Icons |
| 29.03.2026 | Claude (Cowork) | Landing Page wwsadvisory.com (EN) erstellt — Fullscreen Hero + Social Icons |
| 29.03.2026 | Claude (Cowork) | GitHub-Repos wws-advisory-de + wws-advisory-com angelegt, Pages aktiviert |
| 29.03.2026 | Claude (Cowork) | DNS bei Porkbun konfiguriert (A-Records, CNAME www) für beide Domains |
| 29.03.2026 | Claude (Cowork) | SSL-Zertifikate + HTTPS-Enforcement für beide Domains aktiviert |
| 29.03.2026 | Claude (Cowork) | impressum.html: Posthinweis ergänzt, Social-Media-Icons (LinkedIn, X, Instagram) untereinander hinzugefügt |
| 29.03.2026 | Claude (Cowork) | Mac DNS auf Google/Cloudflare umgestellt (8.8.8.8, 8.8.4.4, 1.1.1.1) |
| 29.03.2026 | Claude (Cowork) | Über-Text komplett neu geschrieben: kürzerer, wirkungsvoller Text mit Link zu ausführlicher Biografie (biografie.html, noch zu erstellen) |
| 29.03.2026 | Claude (Cowork) | Über-Text: ECFR/BBUG-Absatz mit Heute-Absatz zusammengeführt, Fettungen angepasst (nur „weitreichendes Netzwerk" + Amtstitel), erste Aufzählung BM/StS/StR gekürzt |
| 29.03.2026 | Claude (Cowork) | Vita-Timeline komplett überarbeitet: 20 Stationen von 1970 bis heute, inkl. AdR, EMK-Vorsitz, IUSY, Studium, Referendariat, Zivildienst |
| 29.03.2026 | Claude (Chat) | index.html: Über-Text neu gefasst (biografisch, 5 Absätze, inkl. ECFR/BBUG) |
| 30.03.2026 | Claude (Chat) | Medien: 50+ Einträge, alle Links ergänzt, Texte überarbeitet (kein „Ich"), Reihenfolge chronologisch |
| 30.03.2026 | Claude (Chat) | Medien: Neue Einträge 2026 (Agenda Pública, IP Quarterly, El Circo del Poder/UC3M) |
| 30.03.2026 | Claude (Chat) | Medien: „Weitere Medien anzeigen"-Button, erste 6 sichtbar |
| 30.03.2026 | Claude (Chat) | Fix: Schlagworte DE auf GitHub korrekt angekommen (Europäer, Politikstratege) |
| 30.03.2026 | Claude (Chat) | Fix: Über-Text Hintergrundfarbe grau (#ueber-text background: var(--tags-bg)) |
| 30.03.2026 | Claude (Chat) | Über-Text EN + ES muttersprachlich verfasst, Zeitenwende/Kanzleramt erklärt |
| 30.03.2026 | Claude (Chat) | CHANGES.md + CLAUDE_CONTEXT.md aktualisiert auf Stand 30.03.2026 |

---

## Regeln für Claude in VS Code

1. **Immer zuerst diese Datei lesen** bevor du Änderungen machst
2. **Nach jeder Änderung** diese Datei aktualisieren (Datum, Was)
3. **Nie Dateien überschreiben** die hier als „aktuell" markiert sind, ohne den Stand zu kennen
4. **Bekannte offene Punkte** oben unter „Noch offen" abarbeiten

## Regeln für Claude im Chat

1. Änderungen direkt auf dem Mac vornehmen (Filesystem-Tool) und pushen
2. Diese Datei nach jeder Änderung aktualisieren
3. Nur geänderte Dateien als ZIP liefern, nie das komplette Projekt
