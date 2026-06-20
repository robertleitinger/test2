# Mega-Prompt: Neue Unterseite anlegen

## Ziel
Eine neue, technisch saubere Unterseite erstellen (z. B. eine neue Leistung, eine Aktion, eine Info-Seite) — mit korrektem SEO-Titel, Beschreibung und passendem Aufbau, ohne dass du dich um Technik kümmern musst.

## Mega-Prompt (kopieren & Platzhalter ersetzen)

```
Lege eine neue Unterseite für unsere Astro-Website an. Halte dich strikt an die Regeln in AGENTS.md.

Details der Seite:
- Thema/Zweck: [WORUM GEHT ES, z. B. "Leistung: Logo-Design"]
- Gewünschte Web-Adresse (URL-Pfad): [z. B. /leistungen/logo-design/]
- Soll ins Hauptmenü? [JA/NEIN]
- Wichtigste Botschaften / Inhalte (Stichpunkte reichen):
  - [PUNKT 1]
  - [PUNKT 2]
  - [PUNKT 3]
- Gewünschte Handlungsaufforderung (Call-to-Action): [z. B. "Jetzt anfragen"]

Anforderungen:
1. Nutze BaseLayout.astro und setze einen eindeutigen, suchmaschinenfreundlichen `title` und eine `description` (ca. 150 Zeichen, mit Hauptbegriff).
2. Verwende vorhandene Komponenten (PageHero, Advantages usw.) und ausschließlich die Design-Tokens aus global.css — keine hartkodierten Farben oder Schriftgrößen.
3. Firmendaten nur aus site.ts beziehen. E-Mail nur über ObfuscatedEmail.
4. Wenn die Seite ins Menü soll, ergänze sie in der Navigation in site.ts.
5. Schreibe die Texte auf Deutsch, klar und nutzenorientiert.
6. Führe danach `npm run build` aus und bestätige, dass er fehlerfrei durchläuft.

Zeig mir am Ende kurz, welche Datei(en) du erstellt/geändert hast und wie ich die Seite in der Vorschau aufrufe.
```

## Erwartetes Ergebnis
- Eine neue Datei unter `src/pages/...` mit deinem Inhalt.
- Eindeutiger Titel + Beschreibung (in der Vorschau im Browser-Tab sichtbar).
- `npm run build` läuft fehlerfrei.
- Falls gewünscht: Die Seite erscheint im Menü.

## Häufige Fehler
- **Vergessene Beschreibung:** Wenn du keine Inhalte vorgibst, rät die KI. Lieber 2–3 Stichpunkte mitgeben.
- **Doppelte Inhalte:** Für wiederkehrende Seitentypen (Region, Referenz) **keine** Einzelseite anlegen — dort gibt es eigene Daten-Dateien (`src/data/*.ts`). Sag der KI das Thema, sie wählt den richtigen Weg.
- **URL mit Umlauten/Großbuchstaben:** Pfade klein und ohne Umlaute (`ue` statt `ü`).
