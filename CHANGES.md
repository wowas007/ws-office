# CHANGES — ws-office Website

*Letzte Aktualisierung: 31. März 2026*

## Projektstruktur

```
~/OneDrive/2 Dokumente/Homepage/
├── office-ws/              ← Hauptseite (dieses Repo: github.com/wowas007/ws-office)
├── wws-advisory-com/       ← (geplant, aktuell noch Unterordner von office-ws)
└── wws-advisory-de/        ← (geplant, aktuell noch Unterordner von office-ws)
```

### Git-Workflow

```bash
cd /Users/wolfgangschmidt/Library/CloudStorage/OneDrive-Persönlich/2 Dokumente/Homepage/office-ws
git add [dateien] && git commit -m "..." && git push
```

### Cache-Buster aktualisieren

Python-Script `bust.py` im Root — aktualisiert alle style.css und main.js Referenzen

### GitHub Pages Deploy prüfen

```bash
curl -s 'https://api.github.com/repos/wowas007/ws-office/actions/runs?per_page=2' | python3 -c "import json,sys; runs=json.load(sys.stdin)['workflow_runs']; [print(r['status'], r['conclusion'], r['head_sha'][:7]) for r in runs]"
```

---

## Aktueller Stand

### Dateien

- `index.html` (DE), `en/index.html`, `es/index.html` — Hauptseiten
- `medien.html`, `en/medien.html`, `es/medien.html` — Medien-Seiten
- `biografie.html`, `en/biografie.html`, `es/biografie.html` — Biografie-Seiten
- `impressum.html`, `en/impressum.html`, `es/impressum.html`
- `datenschutz.html`
- `css/style.css` (+ `style2.css` als identische Kopie, Cache-Workaround)
- `js/main.js`
- `img/bio/` — Fotos für Biografie-Seite

### CSS Cache-Buster

Aktuell: `style.css?v=20260402a`, `main.js?v=20260402a`

---

## Offene Aufgaben

- [ ] **Impressum-Adresse** auf GmbH-Adresse wechseln sobald eingetragen
  - Dateien: `impressum.html`, `en/impressum.html`, `es/impressum.html`
  - Aktuell: c/o SPD Eimsbüttel, Helene-Lange-Straße 1, 20144 Hamburg
- [ ] **Deployment auf echte Domains** (schmidt-sabugal.de etc.)
  - Basispfad von `/ws-office/` auf `/` ändern in allen HTML-Dateien
- [ ] **Biografie-Fotos** ggf. austauschen/ergänzen aus `img/Vita-Auswahl/`
  - Aktuell: bio-podium, bio-kanzleramt, bio-panel, bio-persoenlich, bio-wahlkampf, bio-privat
- [ ] **Menüband-Anpassung** (wurde angekündigt, noch ausstehend)
- [ ] **wws-advisory-Ordner** als Geschwister neben office-ws verschieben

---

## Änderungshistorie

### 2026-03-31 — Matomo Analytics installiert

- Matomo 5.8.0 auf STRATO installiert (PHP + MariaDB)
- Tracking-Code in alle 13 HTML-Seiten eingefügt (Site-ID 1)
- Tracking-Code in wws-advisory-de (Site-ID 2) und wws-advisory-com (Site-ID 3) eingefügt
- Dashboard: http://5136804.swh.strato-hosting.eu/matomo/

### 2026-03-31 — Custom Domain office-ws.de auf GitHub Pages

- CNAME-Datei erstellt (office-ws.de)
- Basispfad /ws-office/ auf / geändert (158 Ersetzungen in 14 Dateien)
- DNS A-Record bei STRATO auf GitHub-Pages-IP umgestellt (185.199.108.153)
- DNS CNAME www auf wowas007.github.io
- Canonical URLs auf https://office-ws.de/ aktualisiert
- SSL via GitHub Pages (Enforce HTTPS pending)


### 2026-03-31 — Projektordner verschoben

- Umzug von `~/Downloads/ws-office/` nach `~/OneDrive/2 Dokumente/Homepage/office-ws/`
- Git remote + History bleibt erhalten
- wws-advisory-com/ und wws-advisory-de/ wandern als Unterordner mit

### 2026-03-31 — Biografie Formatierungen und Ergänzungen (DE/EN/ES)

- Bundessicherheitsrat fett
- G7/G20-Deputy-Satz an vorherigen Absatz angefügt (keine Leerzeile)
- Olaf Scholz fett
- Volljurist fett
- Willy-Brandt-Kreis nicht mehr fett; ECFR und Baden-Badener Unternehmergespräche neu fett
- weitreichendes Netzwerk fett
- Neuer vorletzter Absatz: „Er ist Vater zweier erwachsener Töchter und spricht neben Deutsch fließend Englisch und Spanisch."
- ILO-Titel korrigiert: „Direktor für die Internationale Arbeitsorganisation" → „**Direktor der Internationalen Arbeitsorganisation**" (fett)
- „Büro" → „Buero" an zwei Stellen (Jugendorganisation der SPE + ECOSY)

### 2026-03-30 — Biografie-Seiten (DE/EN/ES)

- `biografie.html` erstellt: Fließtext ohne Zwischenüberschriften, nur Fettungen
- 4 Fotos eingebettet: Podium (vollbreite), Kanzleramt (rechts floatend), Panel (vollbreite), Persönlich (links floatend)
- `en/biografie.html` + `es/biografie.html` erstellt — muttersprachlich, deutsche Begriffe erklärt
- Fotos aus `img/Vita-Auswahl/` optimiert nach `img/bio/`

### 2026-03-30 — Medien

- Startseite DE/EN/ES lädt automatisch erste 6 Einträge aus medien.html (JS fetch)
- Karten auf Startseite klickbar (öffnen Artikel in neuem Tab)
- Neueste Einträge: Agenda Pública 29.03.2026, IP Quarterly 26.03.2026

### 2026-03-30 — Navigation & Layout

- Nav: versteckt sich nach 2.5s Idle, erscheint beim Scrollen
- Footer: Logo entfernt, Impressum/Datenschutz links, Copyright rechts
- Bild bei „Über" sticky (wie Vita)
- Kontakt: padding-bottom reduziert

### 2026-03-30 — GitHub Pages

- Submodule `wws-advisory-com` + `wws-advisory-de` entfernt (verursachten exit code 128)
- Deployments laufen wieder zuverlässig
