# Homepage Wolfgang Schmidt — Vollständige Dokumentation

*Stand: 1. April 2026*

---

## 1. Projektübersicht

Die Website **wolfgang-schmidt.eu** ist die persönliche Web-Präsenz von Wolfgang Schmidt (Bundesminister a.D., ehemaliger Chef des Bundeskanzleramts). Sie ist als statische Website mit GitHub Pages gehostet, dreisprachig (DE/EN/ES) und umfasst eine Startseite mit Hero-Bereich, Biografie, Medienübersicht und Kontakt.

Daneben existieren zwei Advisory-Seiten (**wws-advisory.de** und **wwsadvisory.com**) für die WWS Advisory GmbH (in Gründung) sowie eine Preview-Seite für das neue GmbH-Layout.

---

## 2. Domain-Architektur

| Domain | Registrar | DNS/Hosting | Funktion |
|--------|-----------|-------------|----------|
| `wolfgang-schmidt.eu` | Porkbun | Porkbun DNS → GitHub Pages | **Hauptdomain** |
| `office-ws.de` | STRATO | GitHub Pages (eigenes Redirect-Repo) | Leitet auf wolfgang-schmidt.eu |
| `wws-advisory.de` | Porkbun | GitHub Pages | Advisory-Seite (DE) |
| `wwsadvisory.com` | Porkbun | GitHub Pages | Advisory-Seite (EN) |
| `schmidt-sabugal.de` | STRATO | STRATO Apache | Weiterleitung + Matomo |
| `schmidt-hamburg.de` | STRATO | STRATO | (noch bei Warenform) |
| `sabugal.de` | STRATO | STRATO | Reserviert |

### DNS-Einträge wolfgang-schmidt.eu (Porkbun)
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   wowas007.github.io
```

### Nameserver: `curitiba/fortaleza/maceio/salvador.ns.porkbun.com`

---

## 3. GitHub-Repos

| Repo | URL | Funktion |
|------|-----|----------|
| `ws-office` | github.com/wowas007/ws-office | Hauptseite (wolfgang-schmidt.eu) |
| `wws-advisory-de` | github.com/wowas007/wws-advisory-de | wws-advisory.de |
| `wws-advisory-com` | github.com/wowas007/wws-advisory-com | wwsadvisory.com |
| `wws-advisory-preview` | github.com/wowas007/wws-advisory-preview | Preview GmbH-Layout |
| `office-ws-redirect` | github.com/wowas007/office-ws-redirect | Redirect office-ws.de → wolfgang-schmidt.eu |

### Git-Workflow
```bash
cd ~/Library/CloudStorage/OneDrive-Persönlich/2\ Dokumente/Homepage/office-ws
git add [dateien] && git commit -m "Beschreibung" && git push
```

### Deploy prüfen
```bash
curl -s 'https://api.github.com/repos/wowas007/ws-office/actions/runs?per_page=1' \
  | python3 -c "import json,sys; r=json.load(sys.stdin)['workflow_runs'][0]; print(r['status'], r['conclusion'], r['head_sha'][:7])"
```

### CDN-Cache erzwingen (bei Bildproblemen)
```bash
echo "$(date)" > .deploy-trigger && git add . && git commit -m "force CDN refresh" && git push
```

---

## 4. Dateistruktur

```
office-ws/
├── CNAME                          # Custom Domain: wolfgang-schmidt.eu
├── CHANGES.md                     # Änderungshistorie
├── MEDIEN_HINZUFUEGEN.md          # Anleitung für neue Medieneinträge
├── index.html                     # Startseite (DE)
├── biografie.html                 # Biografie-Langfassung (DE)
├── medien.html                    # Medien-Übersicht (DE)
├── impressum.html                 # Impressum (DE)
├── datenschutz.html               # Datenschutz mit Matomo Opt-Out
├── en/
│   ├── index.html                 # Startseite (EN)
│   ├── biografie.html             # Biografie (EN)
│   ├── medien.html                # Medien (EN)
│   └── impressum.html             # Impressum (EN)
├── es/
│   ├── index.html                 # Startseite (ES)
│   ├── biografie.html             # Biografie (ES)
│   ├── medien.html                # Medien (ES)
│   └── impressum.html             # Impressum (ES)
├── css/
│   └── style.css                  # Hauptstylesheet (578 Zeilen)
├── js/
│   └── main.js                    # JavaScript (219 Zeilen)
├── fonts/
│   ├── lato-300.woff2             # Lato Light
│   ├── lato-400.woff2             # Lato Regular
│   ├── lato-900.woff2             # Lato Black
│   ├── poppins-400.woff2          # Poppins Regular
│   └── poppins-700.woff2          # Poppins Bold
├── img/
│   ├── hero.webp                  # Hero-Foto (Startseite)
│   ├── logo.svg                   # WS-Logo
│   ├── bio/                       # Biografie-Fotos
│   ├── press/                     # Pressefotos
│   └── vt01.jpg ... vt20.jpg      # Vita-Timeline-Thumbnails
├── aktuelles_archiv.json          # Altdaten von schmidt-hamburg.de
├── medien/
│   ├── archiv.html                # Ältere Medieneinträge
│   └── neue-eintraege.html        # Temporär: neue Einträge zum Einfügen
└── wws-advisory-de/               # Unterordner (eigenes Repo)
    └── wws-advisory-com/          # Unterordner (eigenes Repo)
```

---

## 5. Design-System

### Farben
```css
--petrol:      #2d4a5e;   /* Haupt-Hintergrund (Hero, Nav, Footer) */
--petrol-dark: #1e3345;   /* Dunklere Variante */
--tags-bg:     #a7afbc;   /* Medien-Kacheln, Tags */
--vita-bg:     #576f84;   /* Vita-Timeline-Hintergrund */
--white:       #ffffff;
--black:       #000000;
```

### Schriftarten
```css
--lato:    'Lato', sans-serif;      /* Hero-Überschriften, Nav */
--poppins: 'Poppins', sans-serif;   /* Body-Text, Überschriften, Tags */
```

| Schrift | Gewicht | Verwendung |
|---------|---------|------------|
| Lato Light (300) | Hero-Vorname, Navigationslinks |
| Lato Regular (400) | Fließtext in Hero-Bereich |
| Lato Black (900) | Hero-Nachname (SCHMIDT) |
| Poppins Regular (400) | Body-Text, Teaser |
| Poppins Bold (700) | Überschriften, Medien-Titel |

### Navigationsleiste
- Höhe: `--nav-h: 80px`
- Position: `fixed`, oben
- Versteckt sich nach 2,5 Sekunden ohne Scrollen
- Wird beim Scrollen wieder sichtbar
- Transparenter Hintergrund → wird bei Scroll `scrolled` (mit Hintergrund)

---

## 6. HTML-Struktur der Startseite (index.html)

Die Startseite besteht aus folgenden Sektionen:

### 6.1 Navigation (`<nav>`)
```html
<nav>
  <a class="nav-logo" href="/"><img src="img/logo.svg" alt="Wolfgang Schmidt" /></a>
  <div class="nav-right">
    <div class="lang-switcher">
      <a href="/" class="active">de</a>
      <a href="/en/">en</a>
      <a href="/es/">es</a>
    </div>
    <ul class="nav-links">
      <li><a href="#ueber">Über</a></li>
      <li><a href="#vita">Vita</a></li>
      <li><a href="/medien.html">Medien</a></li>
      <li><a href="#kontakt">Kontakt</a></li>
    </ul>
    <button class="menu-toggle" aria-label="Menü"><span></span><span></span><span></span></button>
  </div>
</nav>
```

### 6.2 Hero-Bereich (`#hero`)
Vollbild-Foto mit Overlay, Name groß rechts unten:
```html
<section id="hero">
  <img class="hero-bg" src="img/hero.webp" alt="Wolfgang Schmidt" />
  <div class="hero-overlay"></div>
  <div class="hero-text">
    <span class="hero-firstname">Wolfgang</span>
    <span class="hero-lastname">Schmidt</span>
    <span class="hero-title">Bundesminister a.D.</span>
  </div>
</section>
```

### 6.3 Über-Bereich (`#ueber` + `#ueber-text`)
Kurztext mit Foto, "Mehr"-Link führt zu biografie.html.

### 6.4 Vita-Timeline (`#vita`)
Vertikale Timeline mit Einträgen, die per IntersectionObserver animiert eingeblendet werden:
```html
<section id="vita">
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-year">2021 – 2025</div>
      <div class="timeline-content">
        <h3>Chef des Bundeskanzleramts</h3>
        <p>Bundesminister für besondere Aufgaben...</p>
      </div>
    </div>
    <!-- weitere Einträge -->
  </div>
</section>
```

### 6.5 Medien-Bereich (`#medien`)
Grid mit den ersten 6 Einträgen aus medien.html, geladen per JS-Fetch:
```html
<section id="medien">
  <h2>In den Medien</h2>
  <div class="media-grid">
    <!-- wird per JS aus medien.html befüllt -->
  </div>
  <a href="/medien.html" class="media-more">Alle Medienauftritte →</a>
</section>
```

### 6.6 Kontakt (`#kontakt`)
E-Mail-Adresse (JS-verschleiert), Social-Media-Links.

### 6.7 Footer
Copyright, Links zu Impressum/Datenschutz.

---

## 7. Medien-Seite (medien.html)

Die Medien-Seite zeigt alle Medieneinträge als Kachel-Grid. Jeder Eintrag hat dieses Format:

```html
<div class="artikel-card">
  <div class="artikel-date">29.03.2026</div>
  <div class="artikel-source">Agenda Pública (auf Spanisch)</div>
  <div class="artikel-title">Wolfgang Schmidt y Enma López: La respuesta a Trump...</div>
  <div class="artikel-subtitle">Interview mit Enma López (PSOE) – veröffentlicht am 29. März 2026</div>
  <div class="artikel-teaser">In Madrid sprach Wolfgang Schmidt mit Enma López...</div>
  <a class="artikel-link" href="https://example.com/artikel" target="_blank">Interview lesen</a>
</div>
```

### Felder pro Eintrag:
| Feld | CSS-Klasse | Beschreibung |
|------|-----------|--------------|
| Datum | `.artikel-date` | Format: `TT.MM.JJJJ` |
| Quelle | `.artikel-source` | z.B. "ZDF · Markus Lanz" oder "Spiegel Online" |
| Titel | `.artikel-title` | Überschrift des Beitrags |
| Untertitel | `.artikel-subtitle` | Optional: Zusatzinfo (kursiv) |
| Teaser | `.artikel-teaser` | 1–3 Sätze Beschreibung |
| Link | `.artikel-link` | URL zum Beitrag, Text z.B. "Artikel lesen", "Video ansehen", "Podcast hören" |

### Link-Text-Konventionen:
- Zeitungsartikel → `Artikel lesen`
- TV-Sendung → `Sendung ansehen`
- YouTube-Video → `Video ansehen`
- Podcast → `Podcast hören`
- Interview → `Interview lesen`

### Sortierung:
Neueste Einträge stehen **oben** in der HTML-Datei. Das JS auf der Startseite (main.js) lädt die ersten 6 Karten per `fetch()` und zeigt sie als Preview.

### "Mehr laden"-Button:
Am Ende der sichtbaren Einträge gibt es einen Button, der per JS weitere Karten einblendet (`.hidden`-Klasse wird entfernt).

---

## 8. Biografie-Seite (biografie.html)

Fließtext-Biografie mit eingestreuten Fotos (float links/rechts). Strukturiert durch `<div class="clearfix">` mit `<figure class="bio-img portrait left/right">`.

Gleiche Struktur in EN und ES (en/biografie.html, es/biografie.html).

---

## 9. JavaScript (js/main.js)

Die gesamte Logik liegt in einer `DOMContentLoaded`-Callback-Funktion:

### 9.1 Navigation Auto-Hide
- Nav wird nach 2,5 Sekunden ohne Scrollen ausgeblendet
- Beim Scrollen wird sie wieder eingeblendet
- Bei geöffnetem Mobilmenü wird nicht ausgeblendet

### 9.2 Back-to-Top-Button
- Erscheint ab `scrollY > 300`
- Scrollt smooth nach oben bei Klick

### 9.3 Home-Button (nur auf Unterseiten)
- Zeigt einen runden Home-Button (unten rechts, fixed)
- Erkennt die aktuelle Sprache und verlinkt entsprechend

### 9.4 Medien-Grid Auto-Load
- Holt per `fetch()` die medien.html der aktuellen Sprache
- Parst das HTML mit `DOMParser`
- Extrahiert die ersten 6 `.artikel-card`-Elemente
- Baut daraus `.media-item`-Divs für die Startseite
- Macht jede Karte komplett klickbar

### 9.5 Timeline Scroll-Reveal
- `IntersectionObserver` beobachtet `.timeline-item`-Elemente
- Bei Sichtbarkeit wird `.visible` hinzugefügt (CSS-Animation)
- Gestaffelt um 80ms pro Element

### 9.6 Anchor-Scroll mit Nav-Offset
- Alle `#`-Links scrollen smooth unter Berücksichtigung der Nav-Höhe
- Sprachumschalter bewahrt den aktuellen Anker via `sessionStorage`

---

## 10. CSS-Architektur (css/style.css)

Das Stylesheet ist 578 Zeilen lang und folgt diesem Aufbau:

1. **Font-Face-Definitionen** (Lato + Poppins, lokal)
2. **CSS Custom Properties** (`:root`)
3. **Reset & Base-Styles**
4. **Navigation** (fixed, transparent → scrolled)
5. **Hero-Bereich** (Fullscreen-Bild, Overlay, animierte Typo)
6. **Über-Bereich** (Grid mit Bild + Text)
7. **Vita-Timeline** (vertikale Linie, animierte Items)
8. **Medien-Grid** (Auto-Fit-Spalten)
9. **Kontakt** (zentriert, Links)
10. **Footer**
11. **Back-to-Top-Button**
12. **Mobile Breakpoints** (768px, 480px)

### Key CSS-Klassen:

| Klasse | Verwendung |
|--------|-----------|
| `.hero-bg` | Hintergrundbild, `object-fit: cover` |
| `.hero-overlay` | Gradient-Overlay rechts (transparent → petrol) |
| `.hero-firstname` | Lato 300, groß, animiert |
| `.hero-lastname` | Lato 900, größer, animiert |
| `.timeline-item` | Timeline-Einträge mit Scroll-Reveal |
| `.media-item` | Einzelne Medien-Kachel auf Startseite |
| `.artikel-card` | Medien-Kachel auf medien.html |
| `.nav-links` | Desktop-Navigation |
| `.menu-toggle` | Hamburger-Menü (mobil) |

---

## 11. Matomo Analytics

- **Dashboard:** https://schmidt-sabugal.de/matomo/
- **Hosted auf:** STRATO (PHP + MariaDB)
- **Tracker-URL:** `//schmidt-sabugal.de/matomo/`
- **Cookieloses Tracking:** `_paq.push(['disableCookies']);`
- **IP-Anonymisierung:** 2 Bytes

| Site-ID | Domain |
|---------|--------|
| 1 | wolfgang-schmidt.eu (vormals office-ws.de) |
| 2 | wws-advisory.de |
| 3 | wwsadvisory.com |

### Tracking-Code (in jeder HTML-Datei):
```html
<script>
  var _paq = window._paq = window._paq || [];
  _paq.push(['disableCookies']);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//schmidt-sabugal.de/matomo/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
```

### Datenschutz (datenschutz.html):
Enthält Matomo-Abschnitt mit JS-basiertem Opt-Out-Mechanismus.

---

## 12. E-Mail-Verschleierung

Auf allen Seiten wird die E-Mail-Adresse per JS zusammengebaut, um Spam zu vermeiden:
```javascript
var u = 'info', d = 'office-ws.de';
document.getElementById('email-link').href = 'mailto:' + u + '@' + d;
```

---

## 13. STRATO-Server

- **SSH:** `ssh -o UpdateHostKeys=no stu450909147@5136804.ssh.w1.strato.hosting`
- **Matomo:** Installiert unter `/matomo/` im Webspace
- **Weiterleitung schmidt-sabugal.de:** per `.htaccess` mit Ausnahme für `/matomo/`
- **.htaccess:**
```apache
RewriteEngine On
RewriteRule ^matomo/ - [L]
RewriteCond %{REQUEST_URI} !^/matomo/
RewriteRule ^(.*)$ https://office-ws.de/$1 [R=301,L]
ErrorDocument 404 /fehler.html
```

**Hinweis:** Die Weiterleitung in der .htaccess zeigt noch auf office-ws.de, nicht wolfgang-schmidt.eu. Da die Domain über DNS umgezogen ist und office-ws.de selbst weiterleitet, funktioniert es trotzdem — aber bei Gelegenheit sollte auch die .htaccess aktualisiert werden.

---

## 14. WWS Advisory Preview

Preview des neuen Layouts für die WWS Advisory GmbH unter:
`https://wowas007.github.io/wws-advisory-preview/`

### Varianten:
- `variante-a.html` — "WWS Advisory" in einer Zeile, kleinere Schrift, GmbH winzig rechts
- `variante-b.html` — "WWS" über "ADVISORY" gestapelt, gleiche Größe

### Design-Prinzipien:
- Gleiche Schrift (Lato) und Farbe (#2d4a5e) wie Hauptseite
- WWS = font-weight 900 (fett), Advisory = font-weight 300 (leicht)
- Logo oben links: "WWS" fett + Trennstrich + "Advisory" dünn
- Sprachumschalter DE|EN oben rechts
- Beschreibungstext: drei Zeilen
- Verweis auf wolfgang-schmidt.eu + E-Mail unten rechts
- Impressum | Datenschutz unten links

---

## 15. Nützliche Befehle

### Bild verkleinern (macOS)
```bash
sips -Z 1400 'input.jpg' --out 'output.jpg'
```

### Cache-Buster aktualisieren
In allen HTML-Dateien den Query-String ändern:
```bash
sed -i '' 's/style.css?v=ALT/style.css?v=NEU/g' *.html en/*.html es/*.html
```

### GitHub Pages Cache erzwingen
```bash
echo "$(date)" > .deploy-trigger && git add . && git commit -m "cache bust" && git push
```

---

## 16. Bekannte Eigenheiten

- **GitHub Pages cached Bilder aggressiv** — bei Bildänderungen den .deploy-trigger nutzen
- **301-Redirects werden vom Browser gecacht** — bei Domain-Änderungen Cmd+Shift+R oder Inkognito nutzen
- **Safari scroll-margin-top** hat Probleme — daher JS-basierter Scroll mit Nav-Offset
- **E-Mail-Adresse bleibt info@office-ws.de** — unabhängig von der Domain-Umstellung

---

## 17. Cache-Buster-Versionen

Aktuell in den HTML-Dateien:
```html
<link rel="stylesheet" href="css/style.css?v=20260402a" />
<script src="js/main.js?v=20260402a"></script>
```

Bei CSS/JS-Änderungen den Query-String hochzählen (z.B. `20260402b`).
