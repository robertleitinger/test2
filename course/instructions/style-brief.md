# Mega-Prompt: Style-Brief (den Look der Seite vorgeben)

## Ziel
Das Aussehen deiner Website bestimmen — Farben, Stimmung, Schrift-Charakter — **ohne CSS zu können**. Du beschreibst den gewünschten Look in normalen Worten, die KI setzt ihn über die zentralen **Design-Tokens** um. Dadurch ändert sich der Look der **ganzen** Seite konsistent, statt jede Seite einzeln anzufassen.

> **Zwei Wege:** Passt einer der fertigen Looks? Dann nimm `design-preset-waehlen.md` (schneller). Willst du einen **eigenen** Look? Dann diesen Style-Brief. Zum Ansehen der Looks: `course/design-system/preview.html` im Browser öffnen.

## Mega-Prompt (kopieren & Platzhalter ersetzen)

```
Passe das Design unserer Website an. Ändere AUSSCHLIESSLICH die Design-Tokens (CSS-Variablen) in unserer zentralen Stil-Quelle — das ist die Token-Datei des Projekts (bei diesem Projekt src/styles/global.css, im Starter course/design-system/tokens.css). Orientiere dich an den vorhandenen Token-Namen und am Aufbau der Presets in course/design-system/presets/. Halte dich an AGENTS.md. Verändere keine einzelnen Seiten oder Komponenten.

Mein Stil-Wunsch:
- Branche / Was wir machen: [z. B. "Yoga-Studio", "Steuerberatung", "Tech-Startup"]
- Stimmung in 3 Worten: [z. B. "ruhig, hochwertig, warm" ODER "modern, kräftig, technisch"]
- Hell oder dunkel? [HELL / DUNKEL]
- Lieblings- / Markenfarben (falls vorhanden): [z. B. "#2E7D32 Grün" oder "weiß nicht, schlag was vor"]
- Schrift-Charakter: [z. B. "seriös & klassisch", "modern & geometrisch", "verspielt"]
- Was soll vermieden werden: [z. B. "kein grelles Neon", "nicht zu verspielt"]

Anforderungen:
1. Setze ein stimmiges Farbsystem über die Tokens (Hintergrund, Flächen, Text, Akzentfarbe, Linien) mit gutem Kontrast (Lesbarkeit/Barrierefreiheit beachten).
2. Wähle passende Schrift-Tokens; nutze möglichst bereits eingebundene Schriften (@fontsource), sonst schlage Alternativen vor, bevor du etwas Neues hinzufügst.
3. Erkläre mir in 3–4 Sätzen in einfachen Worten, welche Wirkung dein Farb-/Schriftkonzept hat.
4. Führe `npm run dev` aus, damit ich das Ergebnis sofort in der Vorschau sehe.

Wenn dir Angaben fehlen, mach einen begründeten Vorschlag statt zu raten.
```

## Erwartetes Ergebnis
- Nur die **Token-Werte** in der zentralen Stil-Quelle wurden geändert.
- Die gesamte Seite hat einen neuen, einheitlichen Look.
- Du bekommst eine kurze Begründung des Konzepts in Alltagssprache.

## Tipp: Stil schnell wechseln
Weil alles über Tokens läuft, kannst du verschiedene Looks ausprobieren, indem du den Prompt mit anderen Stichworten erneut abschickst. Es gibt außerdem **4 fertige Presets** zum direkten Auswählen (Dark Signature, Dark Ocean, Clean Light, Warm Editorial) — siehe `course/design-system/` und den Mega-Prompt `design-preset-waehlen.md`.

## Häufige Fehler
- **Zu vage:** „Mach es schön" hilft der KI nicht. 3 Stimmungs-Worte + hell/dunkel reichen schon für ein gutes Ergebnis.
- **Einzelne Seiten umfärben lassen:** Führt zu Flickenteppich. Immer über die Tokens gehen (macht der Prompt automatisch).
- **Schlechter Kontrast:** Heller Text auf hellem Grund ist unlesbar. Der Prompt fordert guten Kontrast — bei Bedarf explizit „bitte WCAG-Kontrast prüfen" ergänzen.
