# Roadmap — Aufbau des Kursprodukts

Dieses System wird in Phasen aufgebaut. Die Live-Website bleibt dabei das **lebende Referenz-Beispiel**; das Kursmaterial entsteht **additiv** im Ordner `course/` und (später) als sauberes `starter/`-Template.

## ✅ Phase 1 — Fundament: KI-Anweisungen + technische Perfektion
- `AGENTS.md` (tool-übergreifende Regeln) + dünnes `CLAUDE.md`.
- `public/llms.txt` (KI-Suchkarte) ergänzt.
- `course/start-here.md`, `course/perfektion-checkliste.md`, diese Roadmap.
- Mega-Prompt-Bibliothek in `course/instructions/` (Start: Seite anlegen, Text ändern, veröffentlichen, Style-Brief).

## ✅ Phase 2 — Design-/Stil-Vorgabe-System
- Standalone-Design-System in `course/design-system/`: voll-tokenisierte `tokens.css`, `demo.css` (nur Tokens), `preview.html` (Vorschau ohne Build) und `README.md`.
- 4 fertige Presets: **Dark Signature**, **Dark Ocean**, **Clean Light**, **Warm Editorial**.
- Mega-Prompts: `design-preset-waehlen.md` (Preset wählen) + `style-brief.md` (eigenen Look beschreiben).
- Live-Site-Look bewusst unangetastet; das System ist die Vorlage für den Starter (Phase 4).

## ⏳ Phase 3 — Wartung & Staging
- Staging-Workflow (Testseite vor Live) verständlich erklärt.
- Zwei Veröffentlichungs-Wege als Module: (A) GitHub→Auto-Deploy, (B) Cowork + Terminal-MCP + FTP-MCP.
- `course/maintenance.md` als Klick-für-Klick-Runbook je Tool.

## ⏳ Phase 4 — Generisches Starter-Template
- `starter/`: entkernte, wiederverwendbare Version der Architektur mit Platzhaltern zum Befüllen.

## ⏳ Phase 5 — Kurs-Curriculum + Drehbücher
- `course/curriculum.md` (Modul-/Lektionsplan) + Video-Drehbücher (`course/scripts/`).

## 🔮 Phase 6 (später) — Backend & Sicherheit
- Formulare mit Spam-Schutz (Honeypot + Turnstile), einfache Server-/Edge-Funktionen.
- Grundregeln Sicherheit & DSGVO (Secrets, Datenfluss, Einwilligung).
- Bleibt bewusst **einfach** und baut auf demselben Prinzip auf: beschreiben statt programmieren.
