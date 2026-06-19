# Hier starten — deine erste Website mit KI (ganz ohne Vorwissen)

Willkommen! Dieser Kurs zeigt dir, wie du mit einem KI-Assistenten (z. B. Claude) **technisch perfekte Websites** baust und pflegst — auch wenn du noch nie programmiert hast. Du musst **keinen Code verstehen**. Du beschreibst, was du willst, und kopierst fertige „Mega-Prompts" (vorbereitete Anweisungen) in deinen KI-Assistenten.

## Wie dieser Kurs funktioniert
- **Mega-Prompts** liegen im Ordner `course/instructions/`. Jeder ist ein fertiger Text zum **Kopieren und Einfügen** in deinen KI-Assistenten.
- Du kannst jeden Mega-Prompt auf 3 Arten nutzen — such dir aus, was zu deinem Tool passt:
  1. **Direkt einfügen:** Text kopieren, in den Chat einfügen, deine Details ergänzen, abschicken.
  2. **Als Skill speichern** (z. B. in Claude Code), damit du ihn per Kurzbefehl aufrufst.
  3. **In einem Ordner ablegen** (z. B. bei Claude Cowork), damit dein Assistent ihn als Vorlage findet.
- Die Datei **`AGENTS.md`** im Hauptordner sagt deinem KI-Assistenten, **welche Regeln** für die Website gelten (damit immer sauber gearbeitet wird). Du musst sie nicht verstehen — sie sorgt im Hintergrund für Qualität.

## Was du einmalig brauchst
1. **Einen KI-Assistenten**, der auf Dateien zugreifen kann — z. B. **Claude Desktop / Cowork**, **Claude Code** oder ein vergleichbares Tool.
2. **Node.js** auf deinem Rechner (das ist das Programm, das die Website „baut"). Dein Assistent kann dir bei der Installation helfen.
3. Diesen Projektordner, geöffnet in deinem Assistenten.

> Wenn dein Assistent in einer abgeschotteten Umgebung läuft (z. B. **Cowork**), braucht er einen **Terminal-Zugang per MCP** (z. B. „Desktop Commander"), um den Bau-Befehl auszuführen — und optional einen **FTP-MCP**, um die Seite hochzuladen. Mehr dazu in `course/maintenance.md`.

## Deine ersten 3 Schritte
1. **Vorschau starten:** Sag deinem Assistenten: *„Führe `npm install` und dann `npm run dev` aus und gib mir die Vorschau-Adresse."* → Du siehst die Seite im Browser unter `http://localhost:4321`.
2. **Etwas ändern:** Öffne `course/instructions/02-text-aendern.md`, kopiere den Mega-Prompt, trage deine Änderung ein, schick ihn ab. Die Vorschau aktualisiert sich automatisch.
3. **Veröffentlichen:** Wenn es dir gefällt, folge `course/instructions/08-deploy-veroeffentlichen.md`.

## Die wichtigste Regel für dich
Du musst nichts „richtig machen" im technischen Sinn — dafür sorgen die Vorlagen und `AGENTS.md`. **Beschreibe einfach in normalen Worten, was du willst.** Der Assistent kümmert sich um SEO, Tempo und sauberen Aufbau.

➡️ Nächster Schritt: **`course/curriculum.md`** für den vollständigen Lernpfad (kommt als Nächstes), oder direkt zu den Mega-Prompts in **`course/instructions/`**.
