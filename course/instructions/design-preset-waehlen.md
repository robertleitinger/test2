# Mega-Prompt: Fertiges Design-Preset wählen

## Ziel
Den kompletten Look deiner Website in einem Schritt auf einen **fertigen Stil** umstellen — ganz ohne CSS. Du wählst aus dem Preset-Menü, die KI übernimmt die Farben/Schriften in deine zentrale Token-Datei.

## Die Auswahl (Preset-Menü)
- **Dark Signature** — dunkel, violett, energetisch (Tech, Startup, Agentur)
- **Dark Ocean** — dunkel, ruhig, Teal-Akzent (Beratung, Medizin, B2B)
- **Clean Light** — hell, klar, freundlich (KMU, Dienstleister, Praxis)
- **Warm Editorial** — warm, hochwertig, Serifen (Coaching, Studio, Gastro, Boutique)

> Zum Ansehen vorher: `course/design-system/preview.html` im Browser öffnen und oben rechts durchschalten.

## Mega-Prompt (kopieren & Preset-Namen einsetzen)

```
Stelle das Design unserer Website auf ein fertiges Preset um. Halte dich an AGENTS.md.

Gewünschtes Preset: [z. B. "Clean Light"]

Anforderungen:
1. Nimm die Token-Werte aus der passenden Datei in course/design-system/presets/
   (z. B. clean-light.css) und übertrage sie in unsere aktive Stil-Quelle
   (die zentrale Token-Datei, bei diesem Projekt src/styles/global.css bzw. im
   Starter course/design-system/tokens.css).
2. Ändere AUSSCHLIESSLICH die Design-Tokens (Farben, Schriften, Layout-Werte).
   Fasse keine einzelnen Seiten oder Komponenten an.
3. Prüfe den Kontrast: Text muss auf dem neuen Hintergrund gut lesbar sein
   (Ziel WCAG AA).
4. Starte danach die Vorschau (npm run dev), damit ich das Ergebnis sehe.

Sag mir kurz, welche Datei du geändert hast.
```

## Erwartetes Ergebnis
- Nur die Token-Werte wurden ersetzt.
- Die gesamte Website hat den neuen, einheitlichen Look.
- Inhalt und Aufbau sind unverändert.

## Häufige Fehler
- **Einzelne Seiten umfärben lassen:** Falsch — immer nur die Tokens tauschen.
- **Helles Preset, aber Text bleibt hell:** Auf gut definierte Text-Tokens achten (der Prompt prüft den Kontrast). Bei Problemen „bitte Kontrast WCAG AA sicherstellen" ergänzen.
- **Eigener Wunsch statt Menü:** Wenn keins der Presets passt, nutze stattdessen `style-brief.md` und beschreibe den Look frei.
