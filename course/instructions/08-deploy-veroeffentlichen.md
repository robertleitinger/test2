# Mega-Prompt: Website veröffentlichen (live stellen)

## Ziel
Deine Änderungen ins Internet bringen. Es gibt **zwei Wege** — wähle den, der zu deinem Setup passt.

---

## Weg A — Profi: GitHub → Auto-Deploy
Wenn dein Projekt mit GitHub verbunden ist, veröffentlicht sich die Seite **automatisch**, sobald du deine Änderungen hochlädst (über `.github/workflows/deploy-hostinger.yml` und/oder Netlify).

### Mega-Prompt
```
Veröffentliche meine Änderungen über GitHub. Halte dich an AGENTS.md.

1. Führe `npm run build` aus und stelle sicher, dass er fehlerfrei läuft.
2. Committe die Änderungen mit einer klaren, kurzen Beschreibung dessen, was geändert wurde.
3. Pushe auf den aktuellen Arbeits-Branch (nicht direkt auf main).
4. Sag mir, dass der Auto-Deploy startet, und wie ich den Status sehe.

WICHTIG: Niemals Zugangsdaten oder Passwörter committen.
```

### Ergebnis
- Der Build läuft in GitHub Actions, die Seite wird automatisch aktualisiert.
- Eine **Vorschau-/Staging-URL** zeigt das Ergebnis, bevor es auf die echte Domain geht.

---

## Weg B — Einfach/Desktop: Cowork + FTP
Wenn du **kein GitHub** nutzt, sondern lokal arbeitest (z. B. mit **Claude Cowork**), kannst du direkt bauen und per FTP hochladen.

**Einmalig nötig:**
- Ein **Terminal-MCP** (z. B. „Desktop Commander"), damit der Assistent `npm run build` ausführen kann (Cowork läuft abgeschottet und braucht diese Brücke).
- Ein **FTP-MCP**, eingerichtet mit den Zugangsdaten deines Webhosters.
- Deine FTP-Zugangsdaten liegen in einer **sicheren Einstellung/Umgebungsvariable**, NICHT in einer Projektdatei.

### Mega-Prompt
```
Baue und veröffentliche meine Website per FTP. Halte dich an AGENTS.md.

1. Führe über den Terminal-MCP `npm run build` aus (Live-Build mit PUBLIC_SITE_LIVE=true, wenn dies die echte Domain ist).
2. Prüfe kurz: liegt im dist/-Ordner eine index.html und sind sitemap + llms.txt vorhanden?
3. Lade über den FTP-MCP den GESAMTEN Inhalt des dist/-Ordners in das Web-Stammverzeichnis (document root) meines Hosts.
4. Bestätige, welche Dateien hochgeladen wurden.

WICHTIG: Verwende die FTP-Zugangsdaten nur aus der sicheren Konfiguration. Schreibe sie niemals in eine Datei oder in den Chat-Verlauf.
```

### Ergebnis
- Die gebaute Seite liegt auf deinem Webspace und ist unter deiner Domain erreichbar.

---

## Vor jedem Veröffentlichen (beide Wege)
- [ ] `npm run build` ohne Fehler.
- [ ] Neue wichtige Seiten in `public/llms.txt` ergänzt.
- [ ] In der Vorschau (`npm run preview`) sieht alles richtig aus.
- [ ] Für die echte Domain: Live-Build (`PUBLIC_SITE_LIVE=true`), damit Sitemap + Indexierung aktiv sind.

## Häufige Fehler
- **Staging-Build live gestellt:** Der Default-Build ist absichtlich `noindex`. Für die echte Domain `PUBLIC_SITE_LIVE=true` verwenden.
- **Nur einen Teil hochgeladen:** Immer den **gesamten** `dist/`-Inhalt spiegeln, sonst fehlen Dateien.
- **Zugangsdaten im Code:** Niemals. Nur in sicheren Umgebungsvariablen/Secrets.
