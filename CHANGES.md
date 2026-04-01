# CHANGES — ws-office Website

*Letzte Aktualisierung: 1. April 2026, 14:30 Uhr*

## Projektstruktur

```
~/OneDrive/2 Dokumente/Homepage/
├── office-ws/              ← Hauptseite (Repo: github.com/wowas007/ws-office)
├── wws-advisory-com/       ← (Unterordner von office-ws, eigenes Repo)
├── wws-advisory-de/        ← (Unterordner von office-ws, eigenes Repo)
└── wws-advisory-preview/   ← Preview neues GmbH-Layout (Repo: github.com/wowas007/wws-advisory-preview)
```

### Git-Workflow

```bash
cd "/Users/wolfgangschmidt/Library/CloudStorage/OneDrive-Persönlich/2 Dokumente/Homepage/office-ws"
git add [dateien] && git commit -m "..." && git push
```

### GitHub Pages Deploy prüfen

```bash
curl -s 'https://api.github.com/repos/wowas007/ws-office/actions/runs?per_page=2' | python3 -c "import json,sys; runs=json.load(sys.stdin)['workflow_runs']; [print(r['status'], r['conclusion'], r['head_sha'][:7]) for r in runs]"
```

---

## Aktuelle URLs

| URL | Funktion |
|-----|----------|
| https://office-ws.de | Hauptseite (GitHub Pages) |
| https://wolfgang-schmidt.eu | → office-ws.de (wird neue Hauptdomain, DNS bei Porkbun auf GitHub Pages) |
| https://wws-advisory.de | Beratung DE — zeigt aktuell "Bundesminister a.D." (GitHub Pages) |
| https://wwsadvisory.com | Beratung EN — zeigt aktuell "Bundesminister a.D." (GitHub Pages) |
| https://wowas007.github.io/wws-advisory-preview/ | Preview neues GmbH-Layout |
| https://wowas007.github.io/wws-advisory-preview/variante-a.html | Variante A: WWS Advisory in einer Zeile |
| https://wowas007.github.io/wws-advisory-preview/variante-b.html | Variante B: WWS über Advisory gestapelt |
| https://schmidt-sabugal.de/ | Leitet weiter auf office-ws.de (STRATO) |
| https://schmidt-sabugal.de/matomo/ | Matomo Dashboard (Login) |

---

## Domain-Architektur

| Domain | Registrar | DNS/Hosting | Funktion |
|--------|-----------|-------------|----------|
| office-ws.de | STRATO | GitHub Pages (Custom Domain) | Aktuelle Hauptseite |
| wolfgang-schmidt.eu | **Porkbun** (frisch transferiert) | **Porkbun DNS → GitHub Pages IPs** | Wird neue Hauptdomain |
| wws-advisory.de | Porkbun | GitHub Pages | Advisory DE |
| wwsadvisory.com | Porkbun | GitHub Pages | Advisory EN |
| schmidt-sabugal.de | STRATO | STRATO (Weiterleitung + Matomo) | Private Seite / Matomo |
| schmidt-hamburg.de | STRATO | STRATO | (noch bei Warenform) |
| sabugal.de | STRATO | STRATO | Wird Adrianas private Seite |

### DNS wolfgang-schmidt.eu (bei Porkbun gesetzt)
- 4x A-Record: 185.199.108/109/110/111.153 (GitHub Pages)
- CNAME www → wowas007.github.io
- Nameserver: curitiba/fortaleza/maceio/salvador.ns.porkbun.com ✅ propagiert

---

## Aktueller Stand

### Dateien (office-ws)

- `index.html` (DE), `en/index.html`, `es/index.html` — Hauptseiten
- `medien.html`, `en/medien.html`, `es/medien.html` — Medien-Seiten
- `biografie.html`, `en/biografie.html`, `es/biografie.html` — Biografie-Seiten
- `impressum.html`, `en/impressum.html`, `es/impressum.html`
- `datenschutz.html` — inkl. Matomo-Abschnitt mit Opt-Out
- `css/style.css`, `js/main.js`
- `img/bio/` — Fotos für Biografie-Seite
- `CNAME` — Custom Domain office-ws.de (muss auf wolfgang-schmidt.eu geändert werden!)

### WWS Advisory Preview (wws-advisory-preview)

- `index.html` — Aktuelles Layout (WWS Advisory in einer Zeile, vorherige Version)
- `variante-a.html` — WWS Advisory in einer Zeile, kleinere Schrift, GmbH winzig rechts
- `variante-b.html` — WWS über ADVISORY gestapelt, GmbH klein, Wolfgang Schmidt groß
- `img/hero.webp` — Hero-Foto (gleich wie auf wws-advisory.de)
- Design: WWS fett (900), Advisory leicht (300), Logo oben links mit Trennstrich
- Text: "Deutsche, europäische und internationale Politik. / Sicherheit, Technologie und Verteidigung. / Wirtschaft und Finanzen."
- Sprachumschalter DE|EN oben rechts
- Links: wolfgang-schmidt.eu + info@wws-advisory.de unten rechts, Impressum|Datenschutz unten links

### Matomo Tracking

- Tracker-URL: `//schmidt-sabugal.de/matomo/`
- Site-ID 1: office-ws.de (13 HTML-Dateien)
- Site-ID 2: wws-advisory.de (1 HTML-Datei)
- Site-ID 3: wwsadvisory.com (1 HTML-Datei)

### CSS Cache-Buster

Aktuell: `style.css?v=20260402a`, `main.js?v=20260402a`

---

## Offene Aufgaben

### Morgen früh (1. April 2026)
- [x] **wolfgang-schmidt.eu als Hauptdomain aktivieren** — CNAME-Datei im ws-office Repo von `office-ws.de` auf `wolfgang-schmidt.eu` ändern, GitHub Pages Custom Domain updaten
- [x] **office-ws.de Weiterleitung** — auf wolfgang-schmidt.eu weiterleiten (Porkbun URL-Forwarding oder eigenes Repo)
- [x] **HTTPS prüfen** — Let's Encrypt Zertifikat für wolfgang-schmidt.eu abwarten

### WWS Advisory GmbH (ab 8. April 2026)
- [ ] **GmbH-Gründung abwarten** (Notar 8. April)
- [ ] **Variante A oder B finalisieren** — Wolfgang entscheidet
- [ ] **Englische Version** der Advisory-Seite erstellen
- [ ] **Impressum + Datenschutz** für Advisory-Seite erstellen (GmbH-Pflichtangaben: Adresse, HRB, Geschäftsführer)
- [ ] **Live-Schaltung** — Preview-Inhalt in wws-advisory-de und wws-advisory-com Repos übernehmen
- [ ] **GmbH-Daten eintragen**: Adresse (voraussichtlich Adalbertstraße 14, München), HRB Berlin-Charlottenburg, E-Mail

### Sonstige
- [ ] **sabugal.de** — Adrianas private Seite gestalten (Split-Screen Mexiko/Berlin war Idee, aber sie sind nicht mehr zusammen → wird ihre Seite)
- [ ] **E-Mail-Konsolidierung** — Openprovider → iCloud+ prüfen (5 Domains im €9,99-Paket)
- [ ] **schmidt-hamburg.de** von Warenform übernehmen
- [ ] **STRATO SSL für wolfgang-schmidt.eu** — prüfen ob HTTPS über STRATO noch nötig (Domain ist jetzt bei Porkbun)
- [ ] **STRATO Speicherplatz** klären (~32 GB angezeigt, nur ~6 GB belegt)
- [ ] **STRATO Datenbanken** aufräumen (alte WordPress-DBs)

---

## Änderungshistorie

### 2026-04-01 (Vormittag) — wolfgang-schmidt.eu live, Domain-Umzug komplett

**Hauptdomain-Umzug:**
- CNAME-Datei im ws-office Repo von `office-ws.de` auf `wolfgang-schmidt.eu` geändert
- GitHub Pages Custom Domain auf wolfgang-schmidt.eu gesetzt (via gh API)
- SSL-Zertifikat automatisch genehmigt (gültig bis 30.06.2026)
- HTTPS Enforcing aktiviert
- Alle canonical/hreflang-URLs in 6 HTML-Dateien von office-ws.de auf wolfgang-schmidt.eu umgestellt
- E-Mail-Adressen (info@office-ws.de) bewusst beibehalten

**office-ws.de Redirect:**
- Neues Repo `wowas007/office-ws-redirect` erstellt
- index.html + 404.html mit JS-Redirect auf wolfgang-schmidt.eu (inkl. Pfad-Weiterleitung)
- GitHub Pages aktiviert mit Custom Domain office-ws.de
- SSL-Zertifikat vorhanden und aktiv

**Bug-Fix (gestern Nacht committed):**
- More/Más-Link in en/index.html und es/index.html zeigte auf deutsche Biografie (../biografie.html → biografie.html)

**Biografie-Text:**
- Passage zum Beauftragten für die Nachrichtendienste geprüft — enthält bereits Fach-/Rechtsaufsicht BND, Bundessicherheitsrat, Zusammenarbeit mit befreundeten Diensten → Text ist vollständig

### 2026-04-01 (Nacht) — Advisory-Redesign, Domain-Transfer, Matomo-Fix

**Matomo-Fix:**
- schmidt-sabugal.de/matomo/ war nicht erreichbar (301-Redirect auf office-ws.de)
- .htaccess auf STRATO war bereits korrekt konfiguriert (Matomo-Ausnahme vorhanden)
- Problem war Browser-Cache des alten 301-Redirects → Cmd+Shift+R löst es

**wolfgang-schmidt.eu:**
- Weiterleitung von schmidt-hamburg.de → office-ws.de im STRATO-Panel geändert
  - A-Record auf STRATO Standard-IP zurückgesetzt → Umleitung-Menüpunkt wurde aktiv
  - Header-Redirect 301 auf office-ws.de eingerichtet
  - SSL-Zertifikat fehlt noch bei STRATO (HTTPS schlägt fehl, HTTP funktioniert)
- **Domain-Transfer zu Porkbun durchgeführt** (AuthInfo-Code von STRATO)
- DNS bei Porkbun eingerichtet: 4x A-Record GitHub Pages + CNAME www
- Nameserver auf Porkbun umgestellt → DNS propagiert ✅

**WWS Advisory Redesign:**
- Neues Repo `wws-advisory-preview` auf GitHub erstellt (wowas007/wws-advisory-preview)
- GitHub Pages aktiviert → Preview unter wowas007.github.io/wws-advisory-preview/
- Drei Layout-Iterationen durchgearbeitet:
  - Erste Version: WWS/ADVISORY gestapelt (wie WOLFGANG/SCHMIDT auf Hauptseite)
  - Variante A: WWS Advisory in einer Zeile, kleinere Schrift, GmbH winzig rechts daneben
  - Variante B: WWS über ADVISORY gestapelt, gleiche Größe, GmbH klein, Wolfgang Schmidt groß
- Design-Entscheidungen:
  - WWS = font-weight 900 (fett), Advisory = font-weight 300 (leicht)
  - Logo oben links: "WWS" fett + Trennstrich + "Advisory" dünn (wie Logo-Vorschläge)
  - Sprachumschalter DE|EN oben rechts
  - Kein LinkedIn/X → stattdessen Verweis auf wolfgang-schmidt.eu
  - Beschreibungstext: drei Zeilen (Politik / Sicherheit / Wirtschaft)
- Live-Seiten (wws-advisory.de + wwsadvisory.com) auf altes Layout zurückgesetzt (Revert)
- Branch `advisory-gmbh-vorbereitung` im wws-advisory-de Repo gesichert

**sabugal.de:**
- Idee: Split-Screen Mexiko-Stadt / Berlin (Unsplash-Bilder)
- Wird Adrianas private Seite (nicht mehr gemeinsam)
- Vertagt auf später

### 2026-03-31 — Matomo Analytics + HTTPS + Custom Domain

- Matomo 5.8.0 auf STRATO installiert (PHP + MariaDB 11.8)
- 3 Websites in Matomo angelegt (office-ws.de, wws-advisory.de, wwsadvisory.com)
- Tracking-Code in alle 15 HTML-Seiten eingefügt
- Datenschutz: IP-Anonymisierung 2 Bytes, cookieloses Tracking erzwungen
- Datenschutzerklärung um Matomo-Abschnitt mit JS-basiertem Opt-Out ergänzt
- Custom Domain office-ws.de auf GitHub Pages eingerichtet (CNAME + DNS)
- Basispfad /ws-office/ auf / geändert (158 Ersetzungen in 14 Dateien)
- Enforce HTTPS aktiviert
- WordPress auf STRATO gelöscht, Webspace aufgeräumt (olaf/, STRATO-apps/ entfernt)
- schmidt-sabugal.de: Domain zeigt auf /schmidt-sabugal-web/ (Weiterleitung + Matomo-Symlink)
- Tracker-URL final auf //schmidt-sabugal.de/matomo/ umgestellt (HTTPS, kein Mixed Content)
- trusted_hosts in Matomo-Config ergänzt
- Submodule-Referenzen wws-advisory aus Index entfernt (.gitignore aktualisiert)
- Biografie: Bild bei Sicherheitspolitik-Absatz auf bio-msc.jpeg geändert
- Biografie: „Er ist Anhänger" → „Wolfgang Schmidt ist Anhänger"

### 2026-03-31 — Projektordner verschoben

- Umzug von `~/Downloads/ws-office/` nach `~/OneDrive/2 Dokumente/Homepage/office-ws/`
- Git remote + History bleibt erhalten

### 2026-03-31 — Biografie Formatierungen und Ergänzungen (DE/EN/ES)

- Bundessicherheitsrat fett, G7/G20-Deputy-Satz zusammengeführt
- Olaf Scholz fett, Volljurist fett
- ECFR und Baden-Badener Unternehmergespräche fett, weitreichendes Netzwerk fett
- Neuer Absatz: Töchter und Sprachen
- ILO-Titel korrigiert, Büro → Buero

### 2026-03-30 — Biografie-Seiten (DE/EN/ES)

- biografie.html erstellt: Fließtext, 4 Fotos
- en/biografie.html + es/biografie.html erstellt

### 2026-03-30 — Medien, Navigation, GitHub Pages

- Startseite lädt erste 6 Medieneinträge (JS fetch)
- Nav: auto-hide nach 2.5s, Footer umgestaltet
- Submodule-Problem gelöst, Deployments stabil
