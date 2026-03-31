# CHANGES.md — ws-office Website
*Letzte Aktualisierung: 31. März 2026*

## Aktueller Stand

### Dateien
- `index.html` (DE), `en/index.html`, `es/index.html` — Hauptseiten
- `medien.html`, `en/medien.html`, `es/medien.html` — Medien-Seiten
- `biografie.html`, `en/biografie.html`, `es/biografie.html` — Biografie-Seiten (NEU)
- `impressum.html`, `en/impressum.html`, `es/impressum.html`
- `datenschutz.html`
- `css/style.css` (+ `style2.css` als identische Kopie, Cache-Workaround)
- `js/main.js`
- `img/bio/` — 4 optimierte Fotos für Biografie-Seite

### CSS Cache-Buster
Aktuell: `style.css?v=20260402a`, `main.js?v=20260402a`

---

## Erledigte Aufgaben (31.03.2026)

### Biografie (biografie.html)
- ILO-Titel korrigiert: „Direktor für die Internationale Arbeitsorganisation" → „**Direktor der Internationalen Arbeitsorganisation**" (fett)
- „Büro" → „Buero" an zwei Stellen (Jugendorganisation der SPE + ECOSY)

---

## Erledigte Aufgaben (30.03.2026)

### Biografie-Seiten (DE/EN/ES)
- `biografie.html` erstellt: Fließtext ohne Zwischenüberschriften, nur Fettungen
- 4 Fotos eingebettet: Podium (vollbreite), Kanzleramt (rechts floatend), Panel (vollbreite), Persönlich (links floatend)
- `en/biografie.html` + `es/biografie.html` erstellt — muttersprachlich, deutsche Begriffe erklärt
- Fotos aus `img/Vita-Auswahl/` optimiert nach `img/bio/`

### Medien
- Startseite DE/EN/ES lädt automatisch erste 6 Einträge aus medien.html (JS fetch)
- Karten auf Startseite klickbar (öffnen Artikel in neuem Tab)
- Neueste Einträge: Agenda Pública 29.03.2026, IP Quarterly 26.03.2026

### Navigation & Layout
- Nav: versteckt sich nach 2.5s Idle, erscheint beim Scrollen
- Footer: Logo entfernt, Impressum/Datenschutz links, Copyright rechts
- Bild bei „Über" sticky (wie Vita)
- Kontakt: padding-bottom reduziert

### GitHub Pages
- Submodule `wws-advisory-com` + `wws-advisory-de` entfernt (verursachten exit code 128)
- Deployments laufen wieder zuverlässig

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

---

## Technische Hinweise

### Git-Workflow
```bash
cd /Users/wolfgangschmidt/Downloads/ws-office
git add [dateien] && git commit -m "..." && git push
```

### Cache-Buster aktualisieren
Python-Script `bust.py` im Root — aktualisiert alle style.css und main.js Referenzen

### GitHub Pages Deploy prüfen
```bash
curl -s 'https://api.github.com/repos/wowas007/ws-office/actions/runs?per_page=2' | python3 -c "import json,sys; runs=json.load(sys.stdin)['workflow_runs']; [print(r['status'], r['conclusion'], r['head_sha'][:7]) for r in runs]"
```
