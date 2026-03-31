# iCloud+ E-Mail mit eigener Domain einrichten

*Anleitung für Domains bei STRATO (und anderen Registraren)*

## Voraussetzungen

- iCloud+ Abo (ab 0,99 €/Monat, bis zu 5 eigene Domains)
- Primäre iCloud-Mail-Adresse muss eingerichtet sein
- Zwei-Faktor-Authentifizierung aktiviert
- Zugang zur DNS-Verwaltung beim Domain-Registrar (z.B. STRATO, Porkbun)

## Schritt 1: Domain in iCloud hinzufügen

**Auf dem iPhone:**
1. Einstellungen → [dein Name] → iCloud → Mail (unter "In iCloud gesichert")
2. Tippe auf "Eigene E-Mail-Domain"
3. Wähle "Domain hinzufügen, die dir gehört"
4. Wähle "Nur du" oder "Du und andere Personen"
5. Gib den Domainnamen ein (z.B. `office-ws.de`)
6. Lege die gewünschte(n) E-Mail-Adresse(n) an

**Alternativ im Browser:**
1. Gehe zu https://icloud.com/icloudplus
2. Wähle "Eigene E-Mail-Domain"
3. Wähle "Domain hinzufügen, die dir gehört"
4. Folge den gleichen Schritten wie oben

## Schritt 2: DNS-Einträge notieren

iCloud zeigt dir 5 DNS-Einträge an, die du beim Registrar setzen musst:

| Nr | Typ | Host/Präfix | Wert (Beispiel) |
|----|-----|-------------|-----------------|
| 1 | TXT | @ (leer) | `apple-domain=XXXXXXXXXX` |
| 2 | TXT | @ (leer) | `v=spf1 include:icloud.com ~all` |
| 3 | MX | @ (leer) | `mx01.mail.icloud.com` (Priorität 10) |
| 4 | MX | @ (leer) | `mx02.mail.icloud.com` (Priorität 10) |
| 5 | CNAME | `sig1._domainkey` | `sig1.dkim.DOMAIN.at.icloudmailadmin.com` |

**Wichtig:** Die Werte sind pro Domain individuell! Immer die von iCloud angezeigten Werte verwenden.

## Schritt 3: DNS-Einträge bei STRATO setzen

### STRATO Kundencenter → Domains → [Domain] → DNS-Verwaltung

### MX-Records
- Bestehende MX-Records löschen (z.B. smtpin.rzone.de)
- Neuer MX: `mx01.mail.icloud.com` → Priorität: **niedrig**
- Neuer MX: `mx02.mail.icloud.com` → Priorität: **niedrig**
- **Hinweis:** Bei STRATO das Host-Feld leer lassen (nicht @ eingeben). Ohne Punkt am Ende eingeben.

### SPF-Regel
- "Keine STRATO SPF-Regel" auswählen (damit STRATO keinen eigenen SPF generiert)
- SPF wird stattdessen als TXT-Record eingetragen (siehe unten)

### DMARC-Regel
- "STRATO Standard DMARC-Regel" kann bleiben

### TXT-Records (unter "TXT- und CNAME-Records → verwalten")
- **TXT-Record 1:** Präfix leer, Wert: `apple-domain=XXXXXXXXXX`
- **TXT-Record 2:** Präfix leer, Wert: `v=spf1 include:icloud.com ~all`

### CNAME-Record
- **Typ:** CNAME
- **Präfix:** `sig1._domainkey`
- **Wert:** `sig1.dkim.DOMAIN.at.icloudmailadmin.com` (ohne Punkt am Ende)

## Schritt 4: Konfiguration abschließen

1. Zurück auf dem iPhone (oder icloud.com)
2. Tippe auf "Konfiguration abschließen"
3. iCloud prüft die DNS-Einträge (kann ein paar Minuten dauern)
4. Bei Erfolg: Domain ist aktiv, E-Mails können gesendet und empfangen werden

### DNS-Propagierung prüfen (Terminal)
```bash
dig +short TXT domain.de
dig +short MX domain.de
dig +short CNAME sig1._domainkey.domain.de
```

## Schritt 5: E-Mail-Adressen verwalten

- Auf dem iPhone: Einstellungen → iCloud → Mail → Eigene E-Mail-Domain → [Domain]
- Dort können neue Adressen hinzugefügt oder gelöscht werden
- Bis zu 3 E-Mail-Adressen pro Domain

## Hinweise bei DNS-Verwaltung über Porkbun

Bei Porkbun ist die DNS-Verwaltung flexibler als bei STRATO:
- Host-Feld: leer lassen für die Root-Domain
- MX-Priorität: Zahlenwert 10 direkt eingebbar
- Keine Einschränkungen bei TXT/CNAME-Records

## Eingerichtete Domains

| Domain | Status | E-Mail-Adressen | Datum |
|--------|--------|-----------------|-------|
| office-ws.de | ✅ Aktiv | info@office-ws.de | 31.03.2026 |
| wolfgang-schmidt.eu | ✅ Aktiv | ws@wolfgang-schmidt.eu | 31.03.2026 |

## Wichtig: E-Mail-Migration

Beim Umstellen der MX-Records von einem alten Anbieter (z.B. Openprovider) auf iCloud:
- Alte E-Mails können über iCloud.com importiert werden (nicht bei allen Anbietern)
- Während der DNS-Propagierung (bis zu 48h) können E-Mails beim alten oder neuen Anbieter ankommen
- Erst nach erfolgreicher Verifizierung den alten E-Mail-Dienst kündigen
