# Homepage Wolfgang Schmidt — Vollständige Dokumentation
*Stand: 29. April 2026*

---

## 1. Projektübersicht
Wolfgang Schmidt (Bundesminister a.D., ehemaliger Chef des Bundeskanzleramts) betreibt zwei eigenständige Web-Auftritte:

- **wolfgang-schmidt.eu** als persönliche Hauptseite (Privatperson, politische/biografische Inhalte). Drei Hilfs-/Redirect-Domains zeigen darauf: `office-ws.de`, `schmidt-hamburg.de`, `schmidt-sabugal.de`.
- **wwsadvisory.com** als Hauptseite der **WWS Advisory GmbH** (geschäftlich, eingetragen im Handelsregister AG Charlottenburg HRB 286558 B). Die Schwesterdomain `wws-advisory.de` leitet als Redirect dorthin.

Alle Hauptseiten sind statische Sites auf GitHub Pages mit DE/EN/ES Sprachumschalter. Tracking erfolgt über einen selbst gehosteten Matomo-Server (auf `schmidt-sabugal.de`, Strato-Hosting).

---

## 2. Domain-Architektur (Stand 29.04.2026)

| Domain | Registrar | DNS | Hosting | Funktion |
|--------|-----------|-----|---------|----------|
| `wolfgang-schmidt.eu` | Porkbun | Porkbun → GitHub Pages | GitHub Pages | **Hauptdomain Privatperson** (DE/EN/ES) |
| `office-ws.de` | STRATO | STRATO → GitHub Pages | GitHub Pages | Redirect → wolfgang-schmidt.eu (Matomo-Source-Tracking) |
| `schmidt-hamburg.de` | STRATO | STRATO → GitHub Pages | GitHub Pages | Redirect → wolfgang-schmidt.eu (Matomo-Source-Tracking) |
| `schmidt-sabugal.de` | STRATO | STRATO | **STRATO Apache** | Matomo-Server + Weiterleitung |
| `sabugal.de` | STRATO | STRATO | STRATO | Reserviert |
| `wwsadvisory.com` | Porkbun | Porkbun → GitHub Pages | GitHub Pages | **Hauptdomain WWS Advisory GmbH** (EN-Default, DE/EN/ES) |
| `wws-advisory.de` | Porkbun | Porkbun → GitHub Pages | GitHub Pages | Redirect → wwsadvisory.com/?lang=de |

**Wichtig:** Strato hostet aktiv den Matomo-Server unter `schmidt-sabugal.de`. Bei jedem Aufruf einer der Hauptseiten werden anonymisierte Tracking-Daten an diesen Strato-Server gesendet. Hosting der Hauptseiten selbst erfolgt ausschließlich auf GitHub Pages.

### DNS-Einträge Hauptdomains (GitHub Pages)
```
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
CNAME www wowas007.github.io
```

---

## 3. GitHub-Repos

| Repo | URL | Funktion |
|------|-----|----------|
| `ws-office` | github.com/wowas007/ws-office | wolfgang-schmidt.eu (Hauptseite Privat) |
| `office-ws` | github.com/wowas007/office-ws | office-ws.de (Redirect, *2026-04-29 umbenannt von office-ws-redirect*) |
| `schmidt-hamburg-redirect` | github.com/wowas007/schmidt-hamburg-redirect | schmidt-hamburg.de (Redirect mit Matomo-Tracking) |
| `wws-advisory-com` | github.com/wowas007/wws-advisory-com | wwsadvisory.com (Hauptseite GmbH) |
| `wws-advisory` | github.com/wowas007/wws-advisory | wws-advisory.de (Redirect auf wwsadvisory.com) |
| `wws-advisory-de` | github.com/wowas007/wws-advisory-de | *Legacy, Pages deaktiviert; Domain wurde am 2026-04-29 ans Repo `wws-advisory` gegeben* |
| `wws-advisory-preview` | github.com/wowas007/wws-advisory-preview | Preview/Sandbox |

### Lokale Verzeichnisse (OneDrive)
```
~/Library/CloudStorage/OneDrive-Persönlich/2 Dokumente/Homepage/
├── office-ws/                    # Repo ws-office (wolfgang-schmidt.eu)
├── office-ws-site/               # Repo office-ws (office-ws.de Redirect)
├── schmidt-hamburg-redirect/     # Repo schmidt-hamburg-redirect
├── wws-advisory-com/             # Repo wws-advisory-com (wwsadvisory.com)
├── wws-advisory-de/              # Repo wws-advisory (wws-advisory.de Redirect)
└── wws-advisory-preview/         # Repo wws-advisory-preview
```
*Hinweis Verzeichnisnamen: historisch gewachsen, nicht 1:1 mit Repo-Namen.*

### Git-Workflow
```bash
cd ~/Library/CloudStorage/OneDrive-Persönlich/2\ Dokumente/Homepage/<verzeichnis>
git add -A && git commit -m "Beschreibung" && git push
```

### gh CLI ist authentifiziert
```bash
gh auth status   # Logged in als wowas007 via keyring
```

---

## 4. Matomo-Konfiguration

| Site ID | Domain | Status |
|---------|--------|--------|
| 1 | wolfgang-schmidt.eu | Aktiv |
| 2 | wws-advisory.de | Wird kaum noch genutzt (jetzt Redirect) |
| 3 | wwsadvisory.com | Aktiv (seit 2026-04-29) |
| 4 | office-ws.de | **Im Matomo-Backend noch anzulegen** — derzeit kein eigenes Tracking, da die Domain reiner Redirect ist; Matomo-Source-Tracking erfolgt über URL-Parameter (`?mtm_source=office-ws.de`) gegen Site ID 1. |

**Tracker-URL:** `//schmidt-sabugal.de/matomo/`

**Matomo-Backend:** Login-Daten in `office-ws/matomo-zugangsdaten.md`.

**Source-Tracking statt eigener Site IDs:** Bei Redirect-Domains (`office-ws.de`, `schmidt-hamburg.de`) wird der Traffic mit `?mtm_source=<domain>&mtm_medium=redirect` an die Zieldomain weitergegeben. Im Matomo-Backend erscheint der Traffic dann unter Acquisition → Campaigns, ohne dass eine separate Site ID benötigt wird.

---

## 5. Rechtliche Setup-Entscheidungen (Stand 2026-04-29)

### Impressum

| Site | Diensteanbieter | Anschrift |
|------|-----------------|-----------|
| wolfgang-schmidt.eu | Wolfgang Schmidt (Privatperson) | c/o WWS Advisory GmbH, Adalbertstraße 14, 80799 München |
| wwsadvisory.com / wws-advisory.de | WWS Advisory GmbH | Adalbertstraße 14, 80799 München (Sitz Berlin; Handelsregister AG Charlottenburg HRB 286558 B; Geschäftsführer Wolfgang Schmidt) |
| office-ws.de / schmidt-hamburg.de | – (Redirect-Domains, Impressum der Zielseite gilt) | – |

**Postsendungs-Hinweis** auf allen Impressen: „Sollten Sie eine Postsendung zukommen lassen wollen, bitten wir um vorherige Kontaktaufnahme per E-Mail."

### Aufsichtsbehörde Datenschutz

**Berliner Beauftragte für Datenschutz und Informationsfreiheit (BlnBDI)**, Alt-Moabit 59–61, 10555 Berlin, datenschutz-berlin.de

Begründung: Wolfgang Schmidt ist in **Berlin** gemeldet (Privatperson → Wohnsitz maßgeblich). Die WWS Advisory GmbH hat ihren **Sitz in Berlin** (auch wenn die Postanschrift in München ist). Beide Aufsichten daher BlnBDI.

### Datenschutzerklärungen

Alle Hauptseiten haben dreisprachige Datenschutzerklärungen (DE/EN/ES) mit:
- Verantwortlicher
- Hosting GitHub Pages (US-Datenübermittlung via EU-US Data Privacy Framework)
- Matomo + funktionierende Opt-out-Box (Cookie `mtm_consent_removed`)
- Lokale Schriften (kein Google-Fonts-Tracking)
- Aufsichtsbehörde BlnBDI

Auf wolfgang-schmidt.eu zusätzlich: Strato-Hosting-Hinweis (für den Matomo-Server unter schmidt-sabugal.de).

---

## 6. Design-System (Hauptseiten)

### wolfgang-schmidt.eu (klassisch, hero-orientiert)
- **Schriftarten:** Lato + Poppins (lokal)
- **Hero-Foto** + Vita-Timeline + Medien-Übersicht
- **Farbpalette:**
  ```
  --petrol: #2d4a5e       /* Hauptakzent */
  --petrol-dark: #1e3345
  --tags-bg: #a7afbc
  --vita-bg: #576f84
  ```

### wwsadvisory.com (minimalistisch, helle Landing)
- **Schriftart:** Albert Sans 300/400/600 (lokal über `@fontsource/albert-sans`)
- **Layout:** Content unten links, Sprachumschalter oben rechts (fixed), Footer unten rechts (fixed)
- **Farbpalette:**
  ```
  --bg: #fafafa
  --fg: #1d1d1f
  --muted: #86868b
  --link: #424245
  ```
- **WWS** (bold 600) + **Advisory** (light 300, grau) als Wortmarke
- DE/EN/ES Sprachumschalter mit Fade-Animation, URL-Parameter `?lang=de` respektiert (für Redirect von wws-advisory.de)
- Footer-Links wechseln je nach Sprache zur passenden Impressums-/Datenschutz-Datei

---

## 7. Setup-Workflow für neue Redirect-Domains

Pattern (analog zu schmidt-hamburg-redirect, office-ws):

1. STRATO: A-Records auf 185.199.108–111.153, CNAME www → wowas007.github.io
2. Neues Repo `<domain>-redirect` anlegen
3. CNAME-Datei mit Domain-Namen
4. index.html: meta-refresh + JS-Redirect mit `?mtm_source=<domain>&mtm_medium=redirect`
5. 404.html mit gleichem Redirect
6. Push, GitHub Pages aktivieren mit Custom Domain
7. Auf SSL-Zertifikat warten (1–10 Min)

**Bekannte SSL-Eigenheit (von schmidt-hamburg.de):** Wenn beim ersten Pages-Build der www-CNAME noch nicht propagiert ist, deckt das Zertifikat nur den Apex ab. Workaround: vorübergehend `www.<domain>` als primäre Custom Domain setzen, bis das Zertifikat beide deckt, dann zurück auf Apex.

---

## 8. Bekannte offene Punkte

- **Matomo Site ID 4** für office-ws.de noch nicht im Backend angelegt. Aktuell läuft das Tracking über Source-Parameter gegen Site ID 1 (wolfgang-schmidt.eu); das funktioniert sauber. Eine eigene Site ID 4 wäre nur nötig, wenn office-ws.de eines Tages wieder eine eigenständige Seite mit eigenem Inhalt würde.
- **Repo `wws-advisory-de`** liegt verwaist auf GitHub. Pages ist dort deaktiviert, die Domain wurde am 29.04.2026 ans Repo `wws-advisory` umgezogen. Repo könnte archiviert werden.

---

## 9. Änderungsprotokoll (Auszug)

- **2026-04-29** — WWS Advisory live: helle Landing auf wwsadvisory.com (EN-Default) als Master, wws-advisory.de als Redirect dorthin. Matomo + Opt-out auf allen GmbH-Seiten aktiviert. Aufsichtsbehörde auf BlnBDI Berlin korrigiert (vorher Hamburg). Impressum/Datenschutz mit c/o-Adresse umgestellt. office-ws.de zurück als Redirect (Repo umbenannt `office-ws-redirect` → `office-ws`).
- **2026-04-29** — GmbH eingetragen (HRB 286558 B AG Charlottenburg).
- **2026-04** — wolfgang-schmidt.eu Datenschutz/Impressum DE/EN/ES auf c/o-Adresse umgestellt.
- **2026-04** — schmidt-hamburg.de von Strato/Warenform auf GitHub Pages Redirect umgezogen.
- **2026-03** — Erste Konzepte für WWS Advisory Landing.
