# CHANGES — ws-office Website
*Letzte Aktualisierung: 2. April 2026*

## Projektstruktur
```
~/OneDrive/2 Dokumente/Homepage/
├── office-ws/          ← Hauptseite (Repo: github.com/wowas007/ws-office)
├── wws-advisory-com/   ← (Unterordner von office-ws, eigenes Repo)
├── wws-advisory-de/    ← (Unterordner von office-ws, eigenes Repo)
└── wws-advisory-preview/ ← Preview neues GmbH-Layout (Repo: github.com/wowas007/wws-advisory-preview)
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
| https://wolfgang-schmidt.eu | Hauptseite (GitHub Pages) |
| https://office-ws.de | → leitet auf wolfgang-schmidt.eu weiter |
| https://wws-advisory.de | Beratung DE — zeigt aktuell "Bundesminister a.D." (GitHub Pages) |
| https://wwsadvisory.com | Beratung EN — zeigt aktuell "Bundesminister a.D." (GitHub Pages) |
| https://wowas007.github.io/wws-advisory-preview/ | Preview neues GmbH-Layout |
| https://wowas007.github.io/wws-advisory-preview/variante-a.html | Variante A: WWS Advisory in einer Zeile |
| https://wowas007.github.io/wws-advisory-preview/variante-b.html | Variante B: WWS über Advisory gestapelt |
| https://schmidt-sabugal.de/ | Leitet direkt auf wolfgang-schmidt.eu (STRATO .htaccess) |
| https://schmidt-sabugal.de/matomo/ | Matomo Dashboard (Login) |

---

## Domain-Architektur
| Domain | Registrar | DNS/Hosting | Funktion |
|--------|-----------|-------------|----------|
| wolfgang-schmidt.eu | **Porkbun** | Porkbun DNS → GitHub Pages | **Hauptdomain** |
| office-ws.de | STRATO | GitHub Pages (office-ws-redirect Repo) | Leitet auf wolfgang-schmidt.eu |
| wws-advisory.de | Porkbun | GitHub Pages | Advisory DE |
| wwsadvisory.com | Porkbun | GitHub Pages | Advisory EN |
| schmidt-sabugal.de | STRATO | STRATO (Weiterleitung + Matomo) | Private Seite / Matomo |
| schmidt-hamburg.de | STRATO | STRATO | (noch bei Warenform) |
| sabugal.de | STRATO | STRATO | Wird Adrianas private Seite |

### DNS wolfgang-schmidt.eu (bei Porkbun gesetzt)
- 4x A-Record: 185.199.108/109/110/111.153 (GitHub Pages)
- - CNAME www → wowas007.github.io
  - - Nameserver: curitiba/fortaleza/maceio/salvador.ns.porkbun.com ✅ propagiert
   
    - ---

    ## Aktueller Stand

    ### Dateien (office-ws)
    - `index.html` (DE), `en/index.html`, `es/index.html` — Hauptseiten
    - - `medien.html`, `en/medien.html`, `es/medien.html` — Medien-Seiten
      - - `biografie.html`, `en/biografie.html`, `es/biografie.html` — Biografie-Seiten
        - - `impressum.html`, `en/impressum.html`, `es/impressum.html`
          - - `datenschutz.html` — inkl. Matomo-Abschnitt mit Opt-Out
            - - `css/style.css`, `js/main.js`
              - - `img/bio/` — Fotos für Biografie-Seite
                - - `CNAME` — Custom Domain wolfgang-schmidt.eu
                 
                  - ### WWS Advisory Preview (wws-advisory-preview)
                  - - `index.html` — Aktuelles Layout (WWS Advisory in einer Zeile, vorherige Version)
                    - - `variante-a.html` — WWS Advisory in einer Zeile, kleinere Schrift, GmbH winzig rechts
                      - - `variante-b.html` — WWS über ADVISORY gestapelt, GmbH klein, Wolfgang Schmidt groß
                        - - `img/hero.webp` — Hero-Foto (gleich wie auf wws-advisory.de)
                          - - Design: WWS fett (900), Advisory leicht (300), Logo oben links mit Trennstrich
                            - - Text: "Deutsche, europäische und internationale Politik. / Sicherheit, Technologie und Verteidigung. / Wirtschaft und Finanzen."
                              - - Sprachumschalter DE|EN oben rechts
                                - - Links: wolfgang-schmidt.eu + info@wws-advisory.de unten rechts, Impressum|Datenschutz unten links
                                 
                                  - ### Matomo Tracking
                                  - - Tracker-URL: `//schmidt-sabugal.de/matomo/`
                                    - - Site-ID 1: wolfgang-schmidt.eu (vormals office-ws.de, 13 HTML-Dateien)
                                      - - Site-ID 2: wws-advisory.de (1 HTML-Datei)
                                        - - Site-ID 3: wwsadvisory.com (1 HTML-Datei)
                                         
                                          - ### CSS Cache-Buster
                                          - Aktuell: `style.css?v=20260402a`, `main.js?v=20260402a`
                                         
                                          - ---

                                          ## Offene Aufgaben

                                          ### WWS Advisory GmbH (ab 8. April 2026)
                                          - [ ] **GmbH-Gründung abwarten** (Notar 8. April)
                                          - [ ] - [ ] **Variante A oder B finalisieren** — Wolfgang entscheidet
                                          - [ ] - [ ] **Englische Version** der Advisory-Seite erstellen
                                          - [ ] - [ ] **Impressum + Datenschutz** für Advisory-Seite erstellen (GmbH-Pflichtangaben)
                                          - [ ] - [ ] **Live-Schaltung** — Preview-Inhalt in wws-advisory-de und wws-advisory-com Repos übernehmen
                                          - [ ] - [ ] **GmbH-Daten eintragen**: Adresse, HRB Berlin-Charlottenburg, E-Mail
                                         
                                          - [ ] ### Sonstige
                                          - [ ] - [ ] **sabugal.de** — Adrianas private Seite gestalten
                                          - [ ] - [ ] **E-Mail-Konsolidierung** — Openprovider → iCloud+ prüfen (5 Domains im €9,99-Paket)
                                          - [ ] - [ ] **schmidt-hamburg.de** von Warenform übernehmen
                                          - [ ] - [ ] **STRATO Speicherplatz** klären (~32 GB angezeigt, nur ~6 GB belegt)
                                          - [ ] - [ ] **STRATO Datenbanken** aufräumen (alte WordPress-DBs)
                                         
                                          - [ ] ---
                                         
                                          - [ ] ## Änderungshistorie
                                         
                                          - [ ] ### 2026-04-02 — schmidt-sabugal.de Weiterleitung bereinigt
                                          - [ ] - `.htaccess` in `/schmidt-sabugal-web/` von `office-ws.de` auf `wolfgang-schmidt.eu` umgestellt
                                          - [ ] - Redirect-Kette verkürzt: `schmidt-sabugal.de → office-ws.de → wolfgang-schmidt.eu` → jetzt direkt: `schmidt-sabugal.de → wolfgang-schmidt.eu`
                                          - [ ] - Matomo unter `schmidt-sabugal.de/matomo/` weiterhin erreichbar ✅
                                         
                                          - [ ] ### 2026-04-01 (Vormittag) — wolfgang-schmidt.eu live, Domain-Umzug komplett
                                          - [ ] **Hauptdomain-Umzug:**
                                          - [ ] - CNAME-Datei im ws-office Repo von `office-ws.de` auf `wolfgang-schmidt.eu` geändert
                                          - [ ] - GitHub Pages Custom Domain auf wolfgang-schmidt.eu gesetzt (via gh API)
                                          - [ ] - SSL-Zertifikat automatisch genehmigt (gültig bis 30.06.2026)
                                          - [ ] - HTTPS Enforcing aktiviert
                                          - [ ] - Alle canonical/hreflang-URLs in 6 HTML-Dateien von office-ws.de auf wolfgang-schmidt.eu umgestellt
                                          - [ ] - E-Mail-Adressen (info@office-ws.de) bewusst beibehalten
                                         
                                          - [ ] **office-ws.de Redirect:**
                                          - [ ] - Neues Repo `wowas007/office-ws-redirect` erstellt
                                          - [ ] - index.html + 404.html mit JS-Redirect auf wolfgang-schmidt.eu (inkl. Pfad-Weiterleitung)
                                          - [ ] - GitHub Pages aktiviert mit Custom Domain office-ws.de
                                          - [ ] - SSL-Zertifikat vorhanden und aktiv
                                         
                                          - [ ] **Bug-Fix:**
                                          - [ ] - More/Más-Link in en/index.html und es/index.html zeigte auf deutsche Biografie
                                         
                                          - [ ] ### 2026-04-01 (Nacht) — Advisory-Redesign, Domain-Transfer, Matomo-Fix
                                          - [ ] **Matomo-Fix:**
                                          - [ ] - schmidt-sabugal.de/matomo/ war nicht erreichbar (301-Redirect auf office-ws.de)
                                          - [ ] - .htaccess auf STRATO war bereits korrekt konfiguriert (Matomo-Ausnahme vorhanden)
                                          - [ ] - Problem war Browser-Cache des alten 301-Redirects → Cmd+Shift+R löst es
                                         
                                          - [ ] **Domain-Transfer:**
                                          - [ ] - wolfgang-schmidt.eu zu Porkbun transferiert (AuthInfo-Code von STRATO)
                                          - [ ] - DNS bei Porkbun eingerichtet: 4x A-Record GitHub Pages + CNAME www
                                          - [ ] - Nameserver auf Porkbun umgestellt → DNS propagiert ✅
                                         
                                          - [ ] **WWS Advisory Redesign:**
                                          - [ ] - Neues Repo `wws-advisory-preview` auf GitHub erstellt
                                          - [ ] - Drei Layout-Iterationen: Variante A (eine Zeile) und Variante B (gestapelt)
                                         
                                          - [ ] ### 2026-03-31 — Matomo Analytics + HTTPS + Custom Domain
                                          - [ ] - Matomo 5.8.0 auf STRATO installiert (PHP + MariaDB 11.8)
                                          - [ ] - 3 Websites in Matomo angelegt (office-ws.de, wws-advisory.de, wwsadvisory.com)
                                          - [ ] - Tracking-Code in alle 15 HTML-Seiten eingefügt
                                          - [ ] - Custom Domain office-ws.de auf GitHub Pages eingerichtet
                                          - [ ] - Basispfad /ws-office/ auf / geändert
                                          - [ ] - Enforce HTTPS aktiviert
                                          - [ ] - WordPress auf STRATO gelöscht, Webspace aufgeräumt
                                          - [ ] - schmidt-sabugal.de: Domain zeigt auf /schmidt-sabugal-web/ (Weiterleitung + Matomo-Symlink)
                                         
                                          - [ ] ### 2026-03-31 — Projektordner verschoben
                                          - [ ] - Umzug von `~/Downloads/ws-office/` nach `~/OneDrive/2 Dokumente/Homepage/office-ws/`
                                         
                                          - [ ] ### 2026-03-31 — Biografie Formatierungen und Ergänzungen (DE/EN/ES)
                                          - [ ] - Bundessicherheitsrat fett, G7/G20-Deputy-Satz zusammengeführt
                                          - [ ] - Olaf Scholz fett, Volljurist fett
                                          - [ ] - Neuer Absatz: Töchter und Sprachen
                                         
                                          - [ ] ### 2026-03-30 — Biografie-Seiten (DE/EN/ES)
                                          - [ ] - biografie.html erstellt: Fließtext, 4 Fotos
                                          - [ ] - en/biografie.html + es/biografie.html erstellt
                                         
                                          - [ ] ### 2026-03-30 — Medien, Navigation, GitHub Pages
                                          - [ ] - Startseite lädt erste 6 Medieneinträge (JS fetch)
                                          - [ ] - Nav: auto-hide nach 2.5s, Footer umgestaltet
                                          - [ ] - Submodule-Problem gelöst, Deployments stabil
