# Die „technische Perfektion"-Checkliste

Das ist der Qualitätsstandard, der eine Website von „sieht okay aus" zu **technisch perfekt** macht. Das Gute: In diesem Projekt passiert das **meiste automatisch** — durch das Template, `AGENTS.md` und den Build. Diese Liste zeigt dir, *was* dahintersteckt und *wie du es prüfst*.

Legende: ✅ = im Projekt bereits eingebaut · 🔧 = du musst nur Inhalte liefern · 🧪 = so prüfst du es.

## 1. Auffindbarkeit (SEO-Grundlagen)
- ✅ **Eindeutiger Titel & Beschreibung pro Seite** — zentral über `BaseLayout.astro`, gesetzt als `title`/`description`.
- ✅ **Canonical-URL** — verhindert Duplicate-Content-Probleme.
- ✅ **Open Graph & Twitter Cards** — schöne Vorschau beim Teilen in Social Media.
- ✅ **Sitemap** (`@astrojs/sitemap`) — Liste aller Seiten für Suchmaschinen (nur im Live-Build).
- ✅ **robots.txt** (`public/robots.txt`) — sagt Crawlern, was erlaubt ist, und verweist auf die Sitemap.
- 🧪 Prüfen: [Google Rich Results Test](https://search.google.com/test/rich-results) + Seitenquelltext ansehen (`<title>`, `<meta name="description">`, `<link rel="canonical">` vorhanden?).

## 2. Strukturierte Daten (damit Google die Firma „versteht")
- ✅ **JSON-LD** in `BaseLayout.astro`: `ProfessionalService`/`LocalBusiness` (Name, Telefon, Adresse, Öffnungszeiten, Gebiet), `WebSite`, `BreadcrumbList`.
- ⚠️ **Nur echte Daten** — keine erfundenen Bewertungen. (Bewertungen sind absichtlich nicht enthalten.)
- 🧪 Prüfen: Rich Results Test → keine Fehler, Firmendaten korrekt erkannt.

## 3. KI-Auffindbarkeit (neu & zukunftssicher)
- ✅ **llms.txt** (`public/llms.txt`) — eine Markdown-Karte der Seite für KI-Suchsysteme (ChatGPT, Claude, Gemini & Co.). Wie eine Sitemap, aber für KI.
- 🔧 Aktuell halten: Bei neuen wichtigen Seiten einen Link in `public/llms.txt` ergänzen.
- 🧪 Prüfen: `https://deine-domain/llms.txt` aufrufen → valides Markdown, wichtigste Seiten verlinkt.

## 4. Tempo & Technik (Performance)
- ✅ **Statische Seiten** (Astro baut reines HTML) — sehr schnell, kein langsames Backend.
- ✅ **Schriften lokal gehostet** (`@fontsource/*`) — kein langsames Nachladen von Google.
- ✅ **Bilder optimiert** (`sharp`) — kleinere Dateien, schnellere Ladezeit.
- ✅ **Lange Cache-Zeiten** für Assets (`netlify.toml` / Deploy-Header).
- 🧪 Prüfen: [PageSpeed Insights](https://pagespeed.web.dev/) → Werte für SEO & Best Practices möglichst bei 100.

## 5. Schutz & Sauberkeit
- ✅ **E-Mail-Verschleierung** (`ObfuscatedEmail.astro`) — Adresse für Spam-Bots unlesbar, für Menschen normal nutzbar.
- ✅ **Staging-Modus** — Default-Build ist `noindex` (Testseite wird nicht von Google indexiert); Live-Build mit `PUBLIC_SITE_LIVE=true`.
- ✅ **Keine Secrets im Code** — Zugangsdaten nur in Umgebungsvariablen/GitHub-Secrets.
- 🧪 Prüfen: Im gebauten `dist/`-HTML nach der Klartext-E-Mail suchen → darf **nicht** vorkommen.

## 6. Wartbarkeit (damit Pflege einfach bleibt)
- ✅ **Eine Quelle der Wahrheit** für Firmendaten (`site.ts`) und Design (Tokens in `global.css`).
- ✅ **Datengetriebene Seiten** (Regionen/Referenzen aus `src/data/*.ts`) — neue Einträge = ein Datensatz, keine kopierten Seiten.
- 🧪 Prüfen: Telefonnummer in `site.ts` ändern → erscheint überall aktualisiert.

---

### Schnell-Check vor dem Veröffentlichen
1. `npm run build` läuft fehlerfrei.
2. Titel + Beschreibung auf jeder neuen Seite gesetzt.
3. Keine Klartext-E-Mail im `dist/`-HTML.
4. `llms.txt` enthält neue wichtige Seiten.
5. Rich Results Test ohne Fehler.
6. PageSpeed-Werte gut (SEO/Best Practices ~100).
