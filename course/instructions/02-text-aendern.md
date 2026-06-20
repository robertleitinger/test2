# Mega-Prompt: Text oder Inhalt ändern

## Ziel
Einen bestehenden Text auf der Website ändern (Überschrift, Absatz, Button-Beschriftung, Telefonnummer …) — schnell und ohne etwas kaputt zu machen.

## Mega-Prompt (kopieren & Platzhalter ersetzen)

```
Ändere einen Inhalt auf unserer Astro-Website. Halte dich an AGENTS.md.

Was soll geändert werden:
- Seite/Ort: [z. B. "Startseite, der Abschnitt über uns" ODER "Footer, die Telefonnummer"]
- Aktueller Text (wenn bekannt): [TEXT ODER "weiß ich nicht, bitte suchen"]
- Neuer Text / gewünschte Änderung: [NEUER TEXT]

Anforderungen:
1. Wenn es sich um Firmendaten handelt (Name, Telefon, Adresse, E-Mail, Öffnungszeiten), ändere sie NUR in site.ts — nicht an einzelnen Stellen.
2. Wenn der Text auf mehreren Seiten vorkommt, sag mir das und frag, ob überall geändert werden soll.
3. Ändere nichts am Layout oder Design, nur den genannten Inhalt.
4. Führe danach `npm run build` aus und bestätige, dass er fehlerfrei läuft.

Sag mir am Ende, in welcher Datei du was geändert hast.
```

## Erwartetes Ergebnis
- Der Text ist geändert, sonst nichts.
- Bei Firmendaten: Änderung in `site.ts`, dadurch überall aktualisiert.
- `npm run build` läuft fehlerfrei; in der Vorschau (`npm run dev`) siehst du die Änderung sofort.

## Häufige Fehler
- **Telefonnummer/E-Mail an einer einzelnen Stelle ändern:** Falsch — diese Daten gehören in `site.ts`, damit sie überall stimmen. Der Prompt oben sorgt dafür.
- **Unklare Ortsangabe:** „Ändere den Text oben" ist mehrdeutig. Lieber Seite + Abschnitt nennen, oder den aktuellen Text mitliefern.
- **Vorschau nicht aktualisiert:** Wenn `npm run dev` läuft, aktualisiert sich die Seite automatisch. Sonst Browser neu laden.
