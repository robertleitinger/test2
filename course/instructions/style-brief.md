# Mega-Prompt: Style-Brief (den Look der Seite vorgeben)

## Ziel
Das Aussehen deiner Website bestimmen — Farben, Stimmung, Schrift-Charakter — **ohne CSS zu können**. Du beschreibst den gewünschten Look in normalen Worten, die KI setzt ihn über die zentralen **Design-Tokens** um. Dadurch ändert sich der Look der **ganzen** Seite konsistent, statt 30 Seiten einzeln anzufassen.

## Mega-Prompt (kopieren & Platzhalter ersetzen)

```
Passe das Design unserer Astro-Website an. Ändere AUSSCHLIESSLICH die Design-Tokens (CSS-Variablen) in src/styles/global.css. Halte dich an AGENTS.md. Verändere keine einzelnen Seiten oder Komponenten.

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
- Nur `src/styles/global.css` (die Token-Werte) wurde geändert.
- Die gesamte Seite hat einen neuen, einheitlichen Look.
- Du bekommst eine kurze Begründung des Konzepts in Alltagssprache.

## Tipp: Stil schnell wechseln
Weil alles über Tokens läuft, kannst du verschiedene Looks ausprobieren, indem du den Prompt mit anderen Stichworten erneut abschickst. (Ab Phase 2 gibt es zusätzlich fertige **Style-Presets** zum direkten Auswählen — siehe `course/roadmap.md`.)

## Häufige Fehler
- **Zu vage:** „Mach es schön" hilft der KI nicht. 3 Stimmungs-Worte + hell/dunkel reichen schon für ein gutes Ergebnis.
- **Einzelne Seiten umfärben lassen:** Führt zu Flickenteppich. Immer über die Tokens gehen (macht der Prompt automatisch).
- **Schlechter Kontrast:** Heller Text auf hellem Grund ist unlesbar. Der Prompt fordert guten Kontrast — bei Bedarf explizit „bitte WCAG-Kontrast prüfen" ergänzen.
