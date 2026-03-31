# CHANGES — ws-office Website

*Letzte Aktualisierung: 31. März 2026*

## Projektstruktur

```
~/OneDrive/2 Dokumente/Homepage/
├── office-ws/              ← Hauptseite (Repo: github.com/wowas007/ws-office)
├── wws-advisory-com/       ← (aktuell noch Unterordner von office-ws, eigenes Repo)
└── wws-advisory-de/        ← (aktuell noch Unterordner von office-ws, eigenes Repo)
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
| https://wws-advisory.de | Beratung DE (GitHub Pages) |
| https://wwsadvisory.com | Beratung EN (GitHub Pages) |
| https://schmidt-sabugal.de/ | Leitet weiter auf office-ws.de |
| https://schmidt-sabugal.de/matomo/ | Matomo Dashboard (Login) |

---

## Aktueller Stand

### Dateien

- `index.html` (DE), `en/index.html`, `es/index.html` — Hauptseiten
- `medien.html`, `en/medien.html`, `es/medien.html` — Medien-Seiten
- `biografie.html`, `en/biografie.html`, `es/biografie.html` — Biografie-Seiten
- `impressum.html`, `en/impressum.html`, `es/impressum.html`
- `datenschutz.html` — inkl. Matomo-Abschnitt mit Opt-Out
- `css/style.css`, `js/main.js`
- `img/bio/` — Fotos für Biografie-Seite
- `CNAME` — Custom Domain office-ws.de

### Matomo Tracking

- Tracker-URL: `//schmidt-sabugal.de/matomo/`
- Site-ID 1: office-ws.de (13 HTML-Dateien)
- Site-ID 2: wws-advisory.de (1 HTML-Datei)
- Site-ID 3: wwsadvisory.com (1 HTML-Datei)

### CSS Cache-Buster

Aktuell: `style.css?v=20260402a`, `main.js?v=20260402a`

---

## Offene Aufgaben

- [ ] **wolfgang-schmidt.eu als Hauptdomain** — Transfer zu Porkbun, GitHub Pages einrichten
- [ ] **E-Mail-Konsolidierung** — Openprovider → iCloud+ prüfen (5 Domains im €9,99-Paket)
- [ ] **Impressum-Adresse** auf GmbH-Adresse wechseln sobald eingetragen
- [ ] **wws-advisory-Seiten** im Hero anpassen (WWS Advisory GmbH)
- [ ] **schmidt-hamburg.de** von Warenform übernehmen
- [ ] **sabugal.de** klären (Seite für Frau)
- [ ] **STRATO Speicherplatz** klären (~32 GB angezeigt, nur ~6 GB belegt → Support kontaktieren)
- [ ] **STRATO Datenbanken** aufräumen (alte WordPress-DBs: schmidt-hamburg.de 11 MB, schmidt-sabugal.de 91 MB → löschbar)
- [ ] **Biografie-Fotos** ggf. austauschen/ergänzen aus `img/Vita-Auswahl/`
- [ ] **Menüband-Anpassung** (wurde angekündigt, noch ausstehend)

---

## Änderungshistorie

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
