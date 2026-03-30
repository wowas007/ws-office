# Neuen Medieneintrag hinzufügen

## So geht es — so einfach wie möglich

Schick mir einfach in diesem Chat einen oder mehrere der folgenden Dinge:

- **Einen Link** (YouTube, ZDF, Spiegel, ZEIT, Podcast, etc.)
- **Einen Text** (Beschreibung, Pressemitteilung, Ankündigung)
- **Beides zusammen**

Ich erledige dann automatisch:
1. Link aufrufen und Inhalt auslesen
2. Datum, Quelle, Titel und Teaser formulieren
3. Eintrag in `medien.html` einfügen (neueste Einträge zuerst)
4. Direkt zu GitHub pushen
5. Live unter `wowas007.github.io/ws-office/medien.html`

---

## Format eines Eintrags (zur Orientierung)

```
Datum      z.B. 19.02.2026
Quelle     z.B. ZDF · Markus Lanz
Titel      z.B. Markus Lanz: Vier Jahre Krieg in der Ukraine
Untertitel z.B. Zu Gast in der Sendung vom 19. Februar 2026
Teaser     1–2 Sätze Beschreibung
Link       URL zur Sendung / zum Artikel
```

---

## Beispiel

**Du schreibst:**
> https://www.zdf.de/video/talk/markus-lanz-114/markus-lanz-vom-19-februar-2026-102

**Ich mache:**
- Seite aufrufen, Titel und Beschreibung auslesen
- Eintrag formulieren und oben in die Liste einfügen
- Pushen → fertig

---

## Hinweise

- **Reihenfolge:** Neueste Einträge erscheinen automatisch zuerst
- **Mehrere auf einmal:** Kein Problem — einfach alle Links hintereinander schicken
- **Kein Link vorhanden:** Text reicht auch — ich formuliere den Eintrag daraus
- **Korrektur nötig:** Einfach sagen, ich passe direkt an und pushe neu
- **"Mehr"-Button:** Die ersten 6 Einträge sind sichtbar, der Rest erscheint per Klick

---

## Wo liegt die Datei

```
ws-office/medien.html        ← hier werden Einträge eingefügt
ws-office/medien/archiv.html ← hier landen ältere/nicht mehr relevante Einträge
```

---

## Technischer Hintergrund (nur zur Info)

Claude hat direkten Zugriff auf:
- Den `ws-office`-Ordner auf dem Mac
- GitHub via Terminal (`git push`)
- Den Browser (Links aufrufen, Inhalte lesen)

Kein manuelles Eingreifen nötig.
