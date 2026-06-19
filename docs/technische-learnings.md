# Technische Learnings & wiederverwendbare Regeln

> Sammlung allgemeiner Erkenntnisse aus dem CodeRocker-Projekt (statisches Astro,
> Hosting bei Hostinger, Deploy via GitHub Actions). Gedacht als Basis für
> projektübergreifende Standardregeln. Wird laufend ergänzt.

---

## 1. Hosting & Deployment (statisches Astro auf Hostinger)

- **Statischer Build genügt:** `npm run build` → `dist/` (reines HTML/CSS/JS, Directory-URLs mit Trailing-Slash). Läuft auf Apache/Hostinger ohne SSR-Adapter, ohne Rewrite-Regeln.
- **Auto-Deploy via GitHub Actions + FTP:** Trigger bei `push` (Branches `claude/**`, `main`) + `workflow_dispatch`. `concurrency`-Gruppe, damit sich parallele Deploys nicht überholen. Der Workflow deployt immer den Branch, auf dem er liegt.
- **Sandbox-Netz nur HTTPS (443):** Aus der Cloud-/Agent-Umgebung sind FTP (21), FTPS (990) und SFTP (22) blockiert – Direkt-Upload von dort unmöglich. Deshalb **muss** der Upload über die CI laufen (GitHub-Runner haben vollen Netzzugang). Vor Annahmen immer mit TCP-Test prüfen (`/dev/tcp/host/port`).
- **Hostinger-Pfad-Eigenheit (wichtig!):** Ein Subdomain-FTP-Account *startet* zwar im Unterordner `public_html`, aber die **FTP-Wurzel `/` ist der echte Document-Root** der Subdomain (URL `/`). → `server-dir: /`. Nach dem ersten Deploy per `curl` gegenprüfen, wo die Dateien wirklich landen (`/` vs. `/public_html/`), z. B. über `<title>` und `/index.html`.
- **Apache-Index-Reihenfolge:** Hostinger zeigt eine `default.php`-Platzhalterseite, solange keine `index.html` im Docroot liegt. Sobald die eigene `index.html` da ist, wird sie davor ausgeliefert.
- **Transiente FTP-Timeouts abfangen:** Hostinger drosselt wiederholte FTP-Verbindungen → Fehler „Timeout (control socket)". Lösung: Upload mit **automatischen Wiederholversuchen + Backoff** (Bash-Loop um `lftp`). Für Accounts ohne FTPS: Plain FTP erzwingen (`set ftp:ssl-allow no`).
- **Bei starker Drosselung:** Viele Deploys in kurzer Zeit verschärfen das Rate-Limit. Dann **nicht** aggressiv parallel uploaden – sonst verheddert sich `lftp` in einem Reconnect-Loop und hängt minutenlang. Stattdessen: **eine** Verbindung (`net:connection-limit 1`, `mirror:parallel-transfer-count 1`), `ftp:use-feat no`, **harter Abbruch pro Versuch** (`timeout 90 lftp …`) und ein **Job-Timeout** (`timeout-minutes`). So scheitert ein gedrosselter Versuch schnell und der nächste greift nach dem Cooldown.
- **Deploy-Churn vermeiden:** Reine Doku-/Markdown-Änderungen vom Deploy ausnehmen (`on.push.paths-ignore: ['docs/**', '**.md']`) – spart Builds und schont das FTP-Rate-Limit.
- **Zugangsdaten nur als GitHub Secrets** (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`), nie ins Repo. `FTP_SERVER` = nur Host/IP, **ohne** `ftp://`. Secret-Namen exakt (Groß/Klein).
- **Build-Output (`dist/`) nicht committen** – wird in der CI gebaut. Doku/Notizen liegen außerhalb von `dist/`, werden also nicht mitveröffentlicht.

## 2. SEO

- **Staging/Test-Domains schützen:** Default-Build = `noindex, nofollow` per Meta + **keine** Sitemap; erst im Live-Build (Flag, z. B. `PUBLIC_SITE_LIVE=true`) Index erlauben + Sitemap erzeugen. Verhindert Duplicate Content und versehentliche Indexierung der Testumgebung.
- **Canonical pro Seite** auf die Live-Domain – auch auf Staging, damit keine Test-URL als Original gilt.
- **Strukturierte Daten (JSON-LD):** `LocalBusiness`/`ProfessionalService` mit **Telefon, Adresse, geo, Öffnungszeiten** – das sind die lokal-SEO-relevanten Felder. **E-Mail ist kein Ranking-Faktor** und von Google bei `LocalBusiness` nicht empfohlen → kann/sollte raus (auch wegen Harvesting). Nur belegbare Daten ins Schema, kein Fake-`aggregateRating`.
- **Pro Seite:** eindeutiger `<title>`, Meta-Description, OG-/Twitter-Tags, `robots.txt`.
- **Bilder über `astro:assets`** → automatisch WebP + feste Maße (Performance, weniger CLS).
- **E-Mail-Verschleierung ≠ Cloaking:** Cloaking = Googlebot andere *Inhalte* zeigen als Nutzern, um zu manipulieren. Eine Kontakt-Mail per JS zusammenzubauen ist erlaubte Praxis und **ohne SEO-Nachteil**. Sichtbarer Inhalt bleibt im statischen HTML → Crawlbarkeit unberührt.
- **A11y zahlt auf UX/SEO ein:** `prefers-reduced-motion` respektieren, sichtbarer Keyboard-Focus, semantisches Markup.

## 3. Spam-Schutz & Kontakt

- **mailto-only-Seiten:** Es gibt keinen Formular-Spam-Vektor – das reale Risiko ist **E-Mail-Harvesting**. Adresse **Base64-codiert** ins HTML (kein Klartext, kein `mailto:`), per kleinem JS zum echten `mailto:` zusammenbauen (Progressive Enhancement).
- **Fallback nicht vergessen:** menschenlesbare, Regex-resistente Form (`name [at] domain [punkt] tld`) ohne JS sichtbar → Barrierefreiheit **und** rechtliche Erreichbarkeit im Impressum (§ 5 ECG / DSGVO).
- **Alle Vorkommen mitnehmen:** sichtbare Links **plus** Klartext in Datenschutz/Impressum **plus** `email` im JSON-LD – sonst bleibt ein Leak.
- **Echtes Formular (späterer Ausbau):** Honeypot (verstecktes Feld) + Zeit-Falle + **Cloudflare Turnstile** (DSGVO-freundlicher als Google reCAPTCHA). Backend-Wahl mit Trade-off: **PHP auf Hostinger** (Daten bleiben auf eigenem EU-Server) vs. **Form-Service** (z. B. Web3Forms – schnell, aber Auftragsverarbeitung/US-Transfer beachten).

## 4. Code- & Architektur-Prinzipien

- **Single Source of Truth:** zentrale Datendatei (`src/data/site.ts`) für Kontakt-/Firmendaten – überall referenziert, einmal pflegen.
- **Wiederverwendbare Komponenten** statt dupliziertem Markup (z. B. `ObfuscatedEmail.astro` für alle E-Mail-Stellen).
- **Progressive Enhancement + `<noscript>`-Fallbacks:** Funktioniert ohne JS grundlegend, mit JS komfortabler.
- **View Transitions (`ClientRouter`):** Skripte an `astro:page-load` binden, damit sie nach SPA-Navigation erneut laufen; `transition:persist`-Elemente idempotent behandeln (Guard gegen Doppel-Init).
- **Verifikation gehört zum Task:** nach dem Build über `dist/` greppen (z. B. „keine Klartext-Mail mehr"), live per `curl` prüfen (HTTP-Status, `<title>`, `robots`-Meta). Nicht „blind" committen.

---

_Letzte Aktualisierung: 2026-06-19_
