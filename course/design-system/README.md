# Design-System — Look „bestellen" ohne CSS

Hier wohnt das **Aussehen** deiner Website: Farben, Schriften, Abstände. Alles steckt in **Design-Tokens** (Variablen). Du änderst Tokens → der Look ändert sich überall. Du musst **kein CSS können**.

## Die Dateien
| Datei | Was sie macht |
|---|---|
| `tokens.css` | **Die aktive Stil-Quelle.** Hier stehen alle Werte deines Looks (Standard = „Dark Signature"), ausführlich erklärt. |
| `presets/` | **Das Menü fertiger Looks** zum Auswählen (siehe unten). Jede Datei ist ein kompletter Token-Satz. |
| `demo.css` | Beispiel-Bausteine (Buttons, Karten …), die **nur Tokens** verwenden. Beweis: Look-Wechsel färbt alles um. |
| `preview.html` | **Vorschau zum Öffnen im Browser** (kein Build nötig). Oben rechts den Look live umschalten. |

## So siehst du es sofort
Öffne `preview.html` per Doppelklick im Browser. Oben rechts kannst du zwischen den Presets wechseln und vergleichen.

## Das Preset-Menü
| Preset | Stimmung | Passt zu |
|---|---|---|
| **Dark Signature** | dunkel, violett, energetisch | Tech, Startup, Agentur |
| **Dark Ocean** | dunkel, ruhig, Teal-Akzent | Beratung, Medizin, B2B |
| **Clean Light** | hell, klar, freundlich | KMU, Dienstleister, Praxis |
| **Warm Editorial** | warm, hochwertig, Serifen | Coaching, Studio, Gastro, Boutique |

## Den Look deiner Website festlegen
**Weg A — Preset wählen:** Kopiere die Werte aus z. B. `presets/clean-light.css` in deine `tokens.css`. Fertig. (Der Mega-Prompt `../instructions/design-preset-waehlen.md` macht das für dich.)

**Weg B — eigenen Look beschreiben:** Nutze den Mega-Prompt `../instructions/style-brief.md` und beschreibe Branche, Stimmung und Farben in normalen Worten — die KI setzt die Tokens.

## Die wichtigste Regel
**Bausteine verwenden nur Tokens, niemals feste Farben** (kein `#fff` direkt im Code). Nur so bleibt jeder Look mit einem Handgriff austauschbar. Diese Regel steht auch in der `AGENTS.md` im Hauptordner — dein KI-Assistent hält sich daran.

> Dieses Design-System ist die Vorlage, die das spätere **Starter-Template** (Phase 4) übernimmt.
