# Homepage Wolfgang Schmidt — Vollständige Dokumentation
*Stand: 2. April 2026*

---

## 1. Projektübersicht
Die Website **wolfgang-schmidt.eu** ist die persönliche Web-Präsenz von Wolfgang Schmidt (Bundesminister a.D., ehemaliger Chef des Bundeskanzleramts). Sie ist als statische Website mit GitHub Pages gehostet, dreisprachig (DE/EN/ES) und umfasst eine Startseite mit Hero-Bereich, Biografie, Medienübersicht und Kontakt. Daneben existieren zwei Advisory-Seiten (**wws-advisory.de** und **wwsadvisory.com**) für die WWS Advisory GmbH (in Gründung) sowie eine Preview-Seite für das neue GmbH-Layout.

---

## 2. Domain-Architektur
| Domain | Registrar | DNS/Hosting | Funktion |
|--------|-----------|-------------|----------|
| `wolfgang-schmidt.eu` | Porkbun | Porkbun DNS → GitHub Pages | **Hauptdomain** |
| `office-ws.de` | STRATO | GitHub Pages (eigenes Redirect-Repo) | Leitet auf wolfgang-schmidt.eu |
| `wws-advisory.de` | Porkbun | GitHub Pages | Advisory-Seite (DE) |
| `wwsadvisory.com` | Porkbun | GitHub Pages | Advisory-Seite (EN) |
| `schmidt-sabugal.de` | STRATO | STRATO Apache | Weiterleitung + Matomo |
| `schmidt-hamburg.de` | STRATO | STRATO DNS → GitHub Pages (eigenes Redirect-Repo) | Leitet auf wolfgang-schmidt.eu (mit Matomo-Tracking) |
| `sabugal.de` | STRATO | STRATO | Reserviert |

### DNS-Einträge wolfgang-schmidt.eu (Porkbun)
```
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
CNAME www wowas007.github.io
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
| `schmidt-hamburg-redirect` | github.com/wowas007/schmidt-hamburg-redirect | Redirect schmidt-hamburg.de → wolfgang-schmidt.eu (mit Matomo-Kampagnen-Tracking) |

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
├── CNAME                    # Custom Domain: wolfgang-schmidt.eu
├── CHANGES.md               # Änderungshistorie
├── MEDIEN_HINZUFUEGEN.md    # Anleitung für neue Medieneinträge
├── index.html               # Startseite (DE)
├── biografie.html           # Biografie-Langfassung (DE)
├── medien.html              # Medien-Übersicht (DE)
├── impressum.html           # Impressum (DE)
├── datenschutz.html         # Datenschutz mit Matomo Opt-Out
├── en/
│   ├── index.html           # Startseite (EN)
│   ├── biografie.html       # Biografie (EN)
│   ├── medien.html          # Medien (EN)
│   └── impressum.html       # Impressum (EN)
├── es/
│   ├── index.html           # Startseite (ES)
│   ├── biografie.html       # Biografie (ES)
│   ├── medien.html          # Medien (ES)
│   └── impressum.html       # Impressum (ES)
├── css/
│   └── style.css            # Hauptstylesheet (578 Zeilen)
├── js/
│   └── main.js              # JavaScript (219 Zeilen)
├── fonts/
│   ├── lato-300.woff2       # Lato Light
│   ├── lato-400.woff2       # Lato Regular
│   ├── lato-900.woff2       # Lato Black
│   ├── poppins-400.woff2    # Poppins Regular
│   └── poppins-700.woff2    # Poppins Bold
├── img/
│   ├── hero.webp            # Hero-Foto (Startseite)
│   ├── logo.svg             # WS-Logo
│   ├── bio/                 # Biografie-Fotos
│   ├── press/               # Pressefotos
│   └── vt01.jpg ... vt20.jpg # Vita-Timeline-Thumbnails
├── aktuelles_archiv.json    # Altdaten von schmidt-hamburg.de
├── medien/
│   ├── archiv.html          # Ältere Medieneinträge
│   └── neue-eintraege.html  # Temporär: neue Einträge zum Einfügen
└── wws-advisory-de/         # Unterordner (eigenes Repo)
└── wws-advisory-com/        # Unterordner (eigenes Repo)
```

---

## 5. Design-System

### Farben
```css
--petrol: #2d4a5e;       /* Haupt-Hintergrund (Hero, Nav, Footer) */
--petrol-dark: #1e3345;  /* Dunklere Variante */
--tags-bg: #a7afbc;      /* Medien-Kacheln, Tags */
--vita-bg: #576f84;      /* Vita-Timeline-Hintergrund */
--white: #ffffff;
--black: #000000;
```

### Schriftarten
```css
--lato: 'Lato', sans-serif;      /* Hero-Überschriften, Nav */
--poppins: 'Poppins', sans-serif; /* Body-Text, Überschriften, Tags */
```

| Schrift | Gewicht | Verwendung |
|---------|---------|------------|
| Lato Light (300) | | Hero-Vorname, Navigationslinks |
| Lato Regular (400) | | Fließtext in Hero-Bereich |
| Lato Black (900) | | Hero-Nachname (SCHMIDT) |
| Poppins Regular (400) | | Body-Text, Teaser |
| Poppins Bold (700) | | Überschriften, Medien-Titel |

### Navigationsleiste
- Höhe: `--nav-h: 80px`
- - Position: `fixed`, oben
  - - Versteckt sich nach 2,5 Sekunden ohne Scrollen
    - - Wird beim Scrollen wieder sichtbar
      - - Transparenter Hintergrund → wird bei Scroll `scrolled` (mit Hintergrund)
       
        - ---

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
        Vertikale Timeline mit Einträgen, die per IntersectionObserver animiert eingeblendet werden.

        ### 6.5 Medien-Bereich (`#medien`)
        Grid mit den ersten 6 Einträgen aus medien.html, geladen per JS-Fetch.

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
        | Link | `.artikel-link` | URL zum Beitrag |

        ### Link-Text-Konventionen:
        - Zeitungsartikel → `Artikel lesen`
        - - TV-Sendung → `Sendung ansehen`
          - - YouTube-Video → `Video ansehen`
            - - Podcast → `Podcast hören`
              - - Interview → `Interview lesen`
               
                - ### Sortierung: Neueste Einträge stehen **oben** in der HTML-Datei.
               
                - ---

                ## 8. Biografie-Seite (biografie.html)
                Fließtext-Biografie mit eingestreuten Fotos (float links/rechts). Strukturiert durch `<div class="clearfix">` mit `<figure class="bio-img portrait left/right">`. Gleiche Struktur in EN und ES.

                ---

                ## 9. JavaScript (js/main.js)

                ### 9.1 Navigation Auto-Hide
                - Nav wird nach 2,5 Sekunden ohne Scrollen ausgeblendet
                - - Beim Scrollen wird sie wieder eingeblendet
                 
                  - ### 9.2 Back-to-Top-Button
                  - - Erscheint ab `scrollY > 300`
                   
                    - ### 9.3 Home-Button (nur auf Unterseiten)
                    - - Zeigt einen runden Home-Button (unten rechts, fixed)
                     
                      - ### 9.4 Medien-Grid Auto-Load
                      - - Holt per `fetch()` die medien.html der aktuellen Sprache
                        - - Extrahiert die ersten 6 `.artikel-card`-Elemente
                         
                          - ### 9.5 Timeline Scroll-Reveal
                          - - `IntersectionObserver` beobachtet `.timeline-item`-Elemente
                           
                            - ### 9.6 Anchor-Scroll mit Nav-Offset
                            - - Alle `#`-Links scrollen smooth unter Berücksichtigung der Nav-Höhe
                             
                              - ---

                              ## 10. CSS-Architektur (css/style.css)

                              Das Stylesheet ist 578 Zeilen lang und folgt diesem Aufbau:

                              1. Font-Face-Definitionen (Lato + Poppins, lokal)
                              2. 2. CSS Custom Properties (`:root`)
                                 3. 3. Reset & Base-Styles
                                    4. 4. Navigation (fixed, transparent → scrolled)
                                       5. 5. Hero-Bereich (Fullscreen-Bild, Overlay, animierte Typo)
                                          6. 6. Über-Bereich (Grid mit Bild + Text)
                                             7. 7. Vita-Timeline (vertikale Linie, animierte Items)
                                                8. 8. Medien-Grid (Auto-Fit-Spalten)
                                                   9. 9. Kontakt (zentriert, Links)
                                                      10. 10. Footer
                                                          11. 11. Back-to-Top-Button
                                                              12. 12. Mobile Breakpoints (768px, 480px)
                                                                 
                                                                  13. ---
                                                                 
                                                                  14. ## 11. Matomo Analytics
                                                                  15. - **Dashboard:** https://schmidt-sabugal.de/matomo/
                                                                      - - **Hosted auf:** STRATO (PHP + MariaDB)
                                                                        - - **Tracker-URL:** `//schmidt-sabugal.de/matomo/`
                                                                          - - **Cookieloses Tracking:** `_paq.push(['disableCookies']);`
                                                                            - - **IP-Anonymisierung:** 2 Bytes
                                                                             
                                                                              - | Site-ID | Domain |
                                                                              - |---------|--------|
                                                                              - | 1 | wolfgang-schmidt.eu (vormals office-ws.de) |
                                                                              - | 2 | wws-advisory.de |
                                                                              - | 3 | wwsadvisory.com |
                                                                             
                                                                              - ---

                                                                              ## 12. E-Mail-Verschleierung
                                                                              Auf allen Seiten wird die E-Mail-Adresse per JS zusammengebaut:
                                                                              ```javascript
                                                                              var u = 'info', d = 'office-ws.de';
                                                                              document.getElementById('email-link').href = 'mailto:' + u + '@' + d;
                                                                              ```

                                                                              ---

                                                                              ## 13. STRATO-Server
                                                                              - **SSH:** `ssh -o UpdateHostKeys=no stu450909147@5136804.ssh.w1.strato.hosting`
                                                                              - - **Matomo:** Installiert unter `/matomo/` im Webspace
                                                                                - - **Weiterleitung schmidt-sabugal.de:** per `.htaccess` in `/schmidt-sabugal-web/`
                                                                                  - - **.htaccess:**
                                                                                    - ```apache
                                                                                      RewriteEngine On
                                                                                      RewriteRule ^matomo/ - [L]
                                                                                      RewriteCond %{REQUEST_URI} !^/matomo/
                                                                                      RewriteRule ^(.*)$ https://wolfgang-schmidt.eu/$1 [R=301,L]
                                                                                      ErrorDocument 404 /fehler.html
                                                                                      ```

                                                                                      **Hinweis:** Die Weiterleitung zeigt direkt auf `wolfgang-schmidt.eu` (korrigiert am 02.04.2026). Matomo unter `schmidt-sabugal.de/matomo/` bleibt ausgenommen und ist weiterhin erreichbar.

                                                                                      ---

                                                                                      ## 14. WWS Advisory Preview
                                                                                      Preview des neuen Layouts für die WWS Advisory GmbH unter:
                                                                                      `https://wowas007.github.io/wws-advisory-preview/`

                                                                                      ### Varianten:
                                                                                      - `variante-a.html` — "WWS Advisory" in einer Zeile, kleinere Schrift, GmbH winzig rechts
                                                                                      - - `variante-b.html` — "WWS" über "ADVISORY" gestapelt, gleiche Größe
                                                                                       
                                                                                        - ### Design-Prinzipien:
                                                                                        - - Gleiche Schrift (Lato) und Farbe (#2d4a5e) wie Hauptseite
                                                                                          - - WWS = font-weight 900 (fett), Advisory = font-weight 300 (leicht)
                                                                                            - - Logo oben links: "WWS" fett + Trennstrich + "Advisory" dünn
                                                                                              - - Sprachumschalter DE|EN oben rechts
                                                                                                - - Verweis auf wolfgang-schmidt.eu + E-Mail unten rechts
                                                                                                  - - Impressum | Datenschutz unten links
                                                                                                   
                                                                                                    - ---
                                                                                                    
                                                                                                    ## 15. Nützliche Befehle
                                                                                                    
                                                                                                    ### Bild verkleinern (macOS)
                                                                                                    ```bash
                                                                                                    sips -Z 1400 'input.jpg' --out 'output.jpg'
                                                                                                    ```
                                                                                                    
                                                                                                    ### Cache-Buster aktualisieren
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
- **GitHub Pages SSL-Zertifikate: Reihenfolge beachten!** — Bei Domain-Umstellungen auf GitHub Pages IMMER erst alle DNS-Einträge (A-Records UND CNAME für www) auf GitHub Pages umstellen und die Propagation abwarten, BEVOR GitHub Pages aktiviert wird. Wenn das Zertifikat ausgestellt wird, während der www-CNAME noch auf den alten Server zeigt, deckt es nur die Apex-Domain ab, nicht www. GitHub cached Zertifikate aggressiv; ein Workaround ist, die Custom Domain auf `www.domain.de` (statt die Apex-Domain) zu setzen, um eine Neuausstellung für beide Varianten zu erzwingen. (Erfahrung aus Umstellung schmidt-hamburg.de, 14.04.2026)
                                                                                                         
                                                                                                          - ---
                                                                                                          
                                                                                                          ## 17. Cache-Buster-Versionen
                                                                                                          Aktuell in den HTML-Dateien:
                                                                                                          ```html
                                                                                                          <link rel="stylesheet" href="css/style.css?v=20260402a" />
                                                                                                          <script src="js/main.js?v=20260402a"></script>
                                                                                                          ```
                                                                                                          Bei CSS/JS-Änderungen den Query-String hochzählen (z.B. `20260402b`).
