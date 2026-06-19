# AGENTS.md — Anweisungen für KI-Assistenten

> Diese Datei ist der **tool-übergreifende Standard** (gelesen von Claude Code, Codex, Cursor, Gemini CLI u. a.).
> Sie ist die **einzige Quelle der Wahrheit** für KI-Regeln in diesem Projekt. `CLAUDE.md` importiert sie.
> Wenn du als KI an dieser Website arbeitest: **lies diese Datei zuerst und halte dich daran.**

## Was das hier ist
Eine statische Website, gebaut mit **Astro**. Ziel ist eine **technisch perfekte** Seite (SEO, Performance, saubere Strukturdaten) bei **einfachster Wartung**. Die Seite hat **kein Backend** — alle Kontaktpunkte sind `mailto:`-Links.

## Stack & Befehle
- **Framework:** Astro 5 (statischer Output, `format: 'directory'`, `trailingSlash: 'always'`).
- **Sprache der Inhalte:** Deutsch (Österreich).
- **Befehle:**
  - `npm install` — Abhängigkeiten installieren (einmalig).
  - `npm run dev` — lokale Vorschau auf http://localhost:4321.
  - `npm run build` — Produktions-Build nach `dist/` (Default = **Staging**: noindex, keine Sitemap).
  - `PUBLIC_SITE_LIVE=true npm run build` — **Live-Build** (Indexierung + Sitemap an).
  - `npm run preview` — gebauten `dist/`-Ordner lokal ansehen.

## Die 7 goldenen Regeln (nicht brechen)
1. **Eine Quelle der Wahrheit.** Firmendaten (Name, Telefon, Adresse, E-Mail) **nur** aus `src/data/site.ts`. Niemals in Seiten hartkodieren.
2. **Design nur über Tokens.** Farben, Schrift, Abstände, Radien kommen aus den CSS-Variablen in `src/styles/global.css`. **Keine** hartkodierten Hex-Farben oder `px`-Schriftgrößen in einzelnen Seiten.
3. **E-Mail nie im Klartext.** Sichtbare Mail-Adressen immer über `src/components/ObfuscatedEmail.astro`. Nie `mailto:service@…` direkt ins HTML schreiben, auch nicht ins JSON-LD.
4. **Secrets niemals in den Code.** FTP-/Zugangsdaten gehören in Umgebungsvariablen / GitHub-Secrets, **nie** in eine Datei, die committet oder deployt wird.
5. **Meta über das Layout.** Jede Seite nutzt `BaseLayout.astro` und setzt `title` + `description` als Props. SEO/OG/Canonical/JSON-LD werden zentral dort erzeugt — nicht pro Seite duplizieren.
6. **Inhalte datengetrieben.** Wiederkehrende Seitentypen (Regionen, Referenzen) kommen aus `src/data/*.ts` + dynamischen Routen, nicht als handkopierte Einzelseiten.
7. **Im Zweifel: einfach.** Lieber eine simple, verständliche Lösung als die theoretisch optimale. Diese Seite wird von Menschen ohne Technik-Hintergrund gepflegt.

## Wo was liegt
| Zweck | Datei |
|---|---|
| Firmendaten & Navigation | `src/data/site.ts` |
| Regionale Landingpages (Daten) | `src/data/regionen.ts` → `src/pages/[region].astro` |
| Referenzen/Projekte (Daten) | `src/data/projekte.ts` → `src/pages/referenzen/[slug].astro` |
| Layout, Meta, SEO, JSON-LD | `src/layouts/BaseLayout.astro` |
| Design-Tokens (Farben/Schrift/Abstände) | `src/styles/global.css` |
| E-Mail-Schutz | `src/components/ObfuscatedEmail.astro` |
| Wiederverwendbare Bausteine | `src/components/` |
| robots.txt / llms.txt / statische Dateien | `public/` |
| Deploy (GitHub→Hostinger FTP) | `.github/workflows/deploy-hostinger.yml` |
| Deploy (Netlify) | `netlify.toml` |

## Eine neue Seite anlegen (Kurzform)
1. Datei unter `src/pages/<name>.astro` anlegen.
2. `BaseLayout` importieren, `title` + `description` setzen.
3. Inhalte mit vorhandenen Komponenten (`PageHero`, `Advantages`, …) und Token-Klassen aufbauen.
4. Interne Verlinkung ergänzen (Navigation in `site.ts`, falls die Seite ins Menü soll).
5. `npm run build` läuft fehlerfrei durch.

## Qualitäts-Checkliste vor „fertig"
- [ ] `npm run build` ohne Fehler.
- [ ] `title` + `description` gesetzt, eindeutig pro Seite.
- [ ] Keine hartkodierten Farben/Größen (Tokens benutzt).
- [ ] Keine Klartext-E-Mail im `dist/`-HTML.
- [ ] Firmendaten kommen aus `site.ts`.
- [ ] Siehe `course/perfektion-checkliste.md` für den vollständigen Technik-Check.

## Niemals tun
- Live-Site (Branch `main`) direkt bearbeiten ohne Review.
- Zugangsdaten, API-Keys oder Passwörter committen.
- Strukturdaten erfinden (z. B. Fake-Bewertungen ins JSON-LD).
- Den Default-Build ohne `PUBLIC_SITE_LIVE=true` für die Live-Seite verwenden (er ist absichtlich noindex).
