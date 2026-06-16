// Regionale SEO-Landingpages. Inhalte von der bestehenden Live-Seite
// (coderocker.at/<slug>/) übernommen und ins CodeRocker-Designsystem überführt.
// Ortsbezug bleibt erhalten (Zweck = lokale Suchmaschinenoptimierung), die
// "Laufkundschaft/vor-Ort"-Formulierungen wurden auf remote/Termin nach
// Vereinbarung umgeschrieben.

export interface RegionSection {
  heading: string;
  body: string[];
}
export interface RegionFaq {
  q: string;
  a: string[];
}
export interface RegionStep {
  t: string;
  d: string;
}
export interface Region {
  slug: string;
  /** SEO Title */
  title: string;
  /** Meta Description */
  description: string;
  /** Eyebrow / Kicker */
  eyebrow: string;
  /** H1 (HTML erlaubt für grad-text) */
  h1: string;
  /** Lead unter der H1 */
  lead: string;
  kind: 'webdesign' | 'seo';
  testimonial?: { quote: string; author?: string; role?: string };
  sections: RegionSection[];
  /** Überschreibt den Standard-Prozess (z. B. 5-Schritte-SEO) */
  process?: { heading: string; lead?: string; steps: RegionStep[] };
  faq?: RegionFaq[];
  /** Leistungs-Karten anzeigen (Default: true bei webdesign) */
  showLeistungen?: boolean;
}

const praxisStimme = {
  quote:
    'Ich bin mit der Arbeit von CodeRocker hochzufrieden. Die Praxishomepage ist rundum gelungen und ich freue mich jedes Mal, wenn ich die Seite selber öffne. Die Arbeit ist hochprofessionell und kundenorientiert und die Zusammenarbeit hat viel Spaß gemacht.',
  author: 'Zufriedener Kunde',
};

export const regionen: Region[] = [
  {
    slug: 'webdesign-salzburg',
    title: 'Webdesign Salzburg » + SEO » CodeRocker',
    description:
      'Optimiertes Webdesign für Salzburg inklusive Suchmaschinenoptimierung und Festpreis-Angebote. Erreichen Sie mehr Kunden online!',
    eyebrow: 'webdesign · salzburg',
    h1: 'Webdesign <span class="grad-text">Salzburg</span>',
    lead: 'Optimiertes Webdesign inklusive Suchmaschinenoptimierung und fairen Festpreis-Angeboten – damit Sie online sichtbar werden und mehr Kunden erreichen.',
    kind: 'webdesign',
    testimonial: {
      quote:
        'Von der Webseitenplanung über das Realisieren individueller Wünsche bis hin zum Endgespräch bezüglich der Webseiten-Performance ist CodeRocker eine wirklich sehr gute Empfehlung! Verlässliche Zusammenarbeit und tolle Hilfe bei SEO. Ich freue mich immer wieder, wenn ich selbst die Seite öffne!',
      author: 'Fabian Suppik',
      role: 'Physiotherapeut in Salzburg',
    },
    sections: [
      {
        heading: 'Ganzheitliches Webdesign aus Salzburg',
        body: [
          'Webdesign sehen wir immer als ganzheitliches Projekt. Im Gegensatz zu einer klassischen Werbeagentur haben wir uns voll und ganz auf optimiertes Webdesign und Online Marketing spezialisiert. Natürlich optimieren wir Ihre Webseite für alle Endgeräte (Responsive Design) und sorgen dafür, dass Sie online auch gefunden werden (SEO).',
          'Ein wertschätzender Umgang mit Klienten und Partnern, transparente Preise (Festpreisangebote) und eine individuelle Beratung nach „Best Practice“ zeichnen uns aus.',
          'Selbstverständlich arbeiten wir mit WordPress – dem beliebtesten CMS-System der Welt.',
        ],
      },
    ],
    faq: [
      {
        q: 'Webdesign Preise – wie viel kostet eine Webseite?',
        a: [
          'Je nach Projekt werden unterschiedliche Lösungen benötigt – somit gibt es auch keine fertigen „Preispakete“.',
          'Eine Firmenwebseite inklusive SEO-freundlicher Umsetzung können wir ab ca. 1.299 Euro realisieren.',
        ],
      },
      {
        q: 'Gibt es Festpreisangebote?',
        a: [
          'Bei uns bekommen Sie Festpreisangebote. Die Preise setzen sich nach den benötigten Anforderungen zusammen. In einem kostenlosen Erstgespräch legen wir die einzelnen Arbeitsschritte fest und erstellen für Sie ein individuelles Angebot.',
        ],
      },
      {
        q: 'Wie läuft unser 4-Schritte-Webdesign-Prozess ab?',
        a: [
          'Die Erstellung einer Webseite läuft über unseren bewährten 4-Schritte-Prozess. Dieser startet mit einer kostenlosen Beratung und einer ersten Analyse und reicht über Konzept und Entwicklung bis zum Go-live.',
        ],
      },
      {
        q: 'Sind wir nur in Salzburg tätig?',
        a: [
          'Unser Office befindet sich in Hallein, wenige Kilometer von der Mozartstadt Salzburg entfernt. Wir betreuen unsere Kunden jedoch im gesamten deutschsprachigen Raum – ortsunabhängig per Video-Call, Telefon und E-Mail. Persönliche Termine im Office sind nach Vereinbarung möglich.',
        ],
      },
    ],
  },
  {
    slug: 'webdesign-hallein',
    title: 'Webdesign Hallein inkl. SEO » CodeRocker',
    description:
      'Ihr Partner für Webdesign in Hallein inkl. Suchmaschinenoptimierung. So werden Sie bei Google & Co. besser gefunden.',
    eyebrow: 'webdesign · hallein',
    h1: 'Webdesign aus <span class="grad-text">Hallein</span>',
    lead: 'Moderne Firmenwebseiten für Start-ups, Selbstständige sowie kleine und mittlere Unternehmen – inklusive Suchmaschinenoptimierung, damit Sie sicher gefunden werden.',
    kind: 'webdesign',
    testimonial: praxisStimme,
    sections: [
      {
        heading: 'Ihre Webagentur in Hallein',
        body: [
          'Eine gute Webseite ist für uns erst dann eine gute Webseite, wenn sie den Zweck erfüllt, für den sie gemacht wird. Denn eine Webseite ist in vielen Fällen nicht nur das Aushängeschild Ihrer Firma, sondern auch ein Akquisekanal, über den Sie neue Kunden gewinnen können.',
          'Aus diesem Grund wird bei uns jede Webseite standardmäßig suchmaschinenoptimiert ausgeliefert. So legen wir eine solide Basis dafür, dass Ihre Webseite online gut gefunden werden kann.',
        ],
      },
      {
        heading: 'Professionelles Webdesign aus Hallein',
        body: [
          'CodeRocker – Ihr Partner für Webdesign in Hallein und darüber hinaus. Wir erstellen Ihre Webseite und beraten Sie auch gerne im Bereich Suchmaschinenoptimierung (SEO) und Online Marketing.',
          'Unsere Kunden sind vor allem EPUs sowie klein- und mittelgroße Betriebe. Dabei sind wir nicht nur in Hallein tätig, sondern im gesamten deutschsprachigen Raum.',
          'Je nachdem, in welcher Branche Sie tätig sind, kann auch eine erweiterte Suchmaschinenoptimierung (SEO Plus) sinnvoll sein. So erreichen Sie mehr potenzielle Kunden über Ihre Webseite und können Ihren Umsatz steigern.',
        ],
      },
      {
        heading: 'Webdesign Preise',
        body: [
          'Wir mögen keine Abzocke! Deshalb sind unsere Preise fair und transparent. Los geht es bei uns bereits ab 1.199 Euro – und selbst in diesem Preisbereich liefern wir unsere Webseiten bereits SEO-optimiert aus.',
          'Selbstverständlich achten wir auf eine DSGVO-konforme Umsetzung Ihres Internetauftritts und führen bei jedem Projekt eine Ladezeitenoptimierung durch. Uns ist es wichtig, auch bei günstigen Projekten eine hohe Qualität zu liefern.',
        ],
      },
    ],
  },
  {
    slug: 'webdesign-pongau',
    title: 'Webdesign Pongau » Wir erstellen Ihre Webseite » CodeRocker',
    description:
      'Webdesign Pongau: professionelles Webdesign zu fairen Preisen (Festpreis-Angebote) inklusive Suchmaschinenoptimierung.',
    eyebrow: 'webdesign · pongau',
    h1: 'Webdesign <span class="grad-text">Pongau</span>',
    lead: 'Wir erstellen Ihre Webseite – SEO-optimiert und unkompliziert.',
    kind: 'webdesign',
    testimonial: praxisStimme,
    sections: [
      {
        heading: 'Sie benötigen eine Webseite?',
        body: [
          'Dann sind wir der richtige Partner für Sie! Neben klassischem Webdesign haben wir uns auch auf SEO und Online Marketing spezialisiert. Wir sorgen dafür, dass Ihre Webseite online besser gefunden werden kann.',
          'Aus diesem Grund wird bei uns jede Webseite SEO-optimiert ausgeliefert. Bei Bedarf bieten wir auch erweiterte SEO-Maßnahmen. Gerade die lokale Suchmaschinenoptimierung kann dafür sorgen, dass Sie von mehr Kunden aus der Region Pongau und darüber hinaus gefunden werden.',
        ],
      },
      {
        heading: 'Webdesign Pongau – professionell und individuell',
        body: [
          'Für uns ist Webdesign immer ein ganzheitlicher Prozess: Eine Webseite soll nicht nur richtig gut aussehen, sondern vor allem auch ein Magnet für neue Kunden sein.',
          'Aus diesem Grund integrieren wir SEO grundsätzlich in unseren Entwicklungsprozess und achten auf eine gute User-Experience.',
        ],
      },
      {
        heading: 'Responsive Webdesign – optimiert für alle Endgeräte',
        body: [
          'Mehr als 50 % aller Webseitenaufrufe werden heutzutage über mobile Endgeräte getätigt. Umso wichtiger ist es, dass Ihre Webseite perfekt für mobile Geräte optimiert ist.',
          'Wir erstellen pixelperfekte Webseiten, die auf allen Endgeräten gut aussehen. Bereits ab 1.299 Euro erstellen wir Ihre optimierte Firmenwebseite – inklusive Responsive Design und SEO-freundlicher Umsetzung.',
        ],
      },
    ],
  },
  {
    slug: 'webdesign-pinzgau',
    title: 'Webdesign Pinzgau » CodeRocker',
    description:
      'Webdesign Pinzgau: optimierte Webseiten für Firmen, Selbstständige und Neugründer – inklusive Suchmaschinenoptimierung und Festpreis-Angeboten.',
    eyebrow: 'webdesign · pinzgau',
    h1: 'Webdesign <span class="grad-text">Pinzgau</span>',
    lead: 'Optimierte Webseiten für Firmen, Selbstständige und Neugründer aus dem Pinzgau und darüber hinaus.',
    kind: 'webdesign',
    testimonial: praxisStimme,
    sections: [
      {
        heading: 'Sie benötigen eine Webseite?',
        body: [
          'Dann sind wir der richtige Partner für Sie! Wir erstellen optimierte Webseiten für Firmen, Selbstständige und Neugründer aus dem Pinzgau und darüber hinaus.',
          'Unsere Überzeugung: Ihre Webseite ist viel mehr als nur eine digitale Visitenkarte. Idealerweise stärkt Ihre Firmenwebseite Ihre Marke, sorgt für Neukunden und trägt so zur Umsatzsteigerung bei.',
        ],
      },
      {
        heading: 'Webdesign Preise',
        body: [
          'Bereits ab 1.299 Euro erstellen wir Ihre optimierte Firmenwebseite – inklusive Responsive Design und SEO-freundlicher Umsetzung.',
          'Gerne übernehmen wir auch die Texterstellung sowie die Erstellung oder den Einkauf professioneller Bilder für Sie.',
        ],
      },
      {
        heading: 'Unser Einsatzgebiet',
        body: [
          'Auch wenn wir im angrenzenden Tennengau stationiert sind, ist Webdesign Pinzgau bei uns Programm. Wir betreuen vor allem EPUs sowie kleine bis mittelgroße Unternehmen – ortsunabhängig im gesamten deutschsprachigen Raum.',
        ],
      },
    ],
  },
  {
    slug: 'webdesign-klagenfurt',
    title: 'Webdesign Klagenfurt » CodeRocker',
    description:
      'Webdesign für Klagenfurt zum Festpreis – optimierte Webseiten inklusive Suchmaschinenoptimierung. Gewinnen Sie mehr Kunden über Ihre Webseite.',
    eyebrow: 'webdesign · klagenfurt',
    h1: 'Webdesign für <span class="grad-text">Klagenfurt</span>',
    lead: 'Optimiertes Webdesign zum Festpreis. Gewinnen Sie mehr Kunden über Ihre Webseite.',
    kind: 'webdesign',
    testimonial: praxisStimme,
    sections: [
      {
        heading: 'Webdesign Klagenfurt – mehr Besucher dank SEO',
        body: [
          'Unsere Online-Marketing- und Webagentur hilft Kunden aus Österreich und Deutschland dabei, eine optimierte Homepage umzusetzen.',
          'Bei uns wird jedes Webdesign inklusive SEO (Suchmaschinenoptimierung) umgesetzt. Das sorgt für mehr Besucher und somit auch für mehr Umsatz. Gerne erstellen wir auch Ihre Webseite für Ihren Betrieb in und um Klagenfurt.',
        ],
      },
      {
        heading: 'Wir beraten Sie kostenlos',
        body: [
          'Gerne beraten wir Sie in einem kostenlosen Erstgespräch und zeigen Ihnen dabei Chancen und Möglichkeiten rund um Ihre (zukünftige) Webseite auf.',
        ],
      },
    ],
  },
  {
    slug: 'webdesign-chiemgau',
    title: 'Webdesign Chiemgau » + SEO » CodeRocker',
    description:
      'Optimiertes Webdesign für Kunden aus dem Chiemgau – von Bad Reichenhall bis Traunstein. Inklusive SEO und Festpreisangeboten.',
    eyebrow: 'webdesign · chiemgau',
    h1: 'Webdesign <span class="grad-text">Chiemgau</span>',
    lead: 'Professionelles Webdesign – SEO-optimiert und unkompliziert.',
    kind: 'webdesign',
    testimonial: praxisStimme,
    sections: [
      {
        heading: 'Webdesign Chiemgau – aus Salzburg',
        body: [
          'Weil wir verstanden haben, dass Ihre zukünftige Webseite nicht nur das Aushängeschild Ihres Unternehmens ist, sondern ein wichtiger Akquisekanal für Neukunden, wird bei uns jedes Webdesign inklusive Suchmaschinenoptimierung umgesetzt.',
          'Stationiert sind wir im benachbarten Salzburg, doch unser Einsatzgebiet reicht weit darüber hinaus. Wir konnten bereits mehrere Projekte für Kunden aus dem Chiemgau – von Bad Reichenhall bis Traunstein – erfolgreich umsetzen.',
        ],
      },
    ],
  },
  {
    slug: 'seo-salzburg',
    title: 'SEO aus Salzburg » Agentur CodeRocker',
    description:
      'Erfahren Sie mehr zu unseren SEO-Dienstleistungen: lokale Suchmaschinenoptimierung, SEO-Betreuung und Keyword-Analyse.',
    eyebrow: 'seo · salzburg',
    h1: 'SEO aus <span class="grad-text">Salzburg</span>',
    lead: 'Sie wollen mit Ihrem Produkt oder Ihrer Dienstleistung online besser gefunden werden, um mehr potenzielle Kunden zu erreichen? Wir erledigen das für Sie.',
    kind: 'seo',
    showLeistungen: false,
    sections: [
      {
        heading: 'Ihre SEO-Agentur aus Salzburg',
        body: [
          'Wir von CodeRocker sind keine klassische Full-Service-Werbeagentur, sondern haben uns voll und ganz auf Webdesign und Suchmaschinenoptimierung spezialisiert.',
        ],
      },
      {
        heading: 'SEO aus Salzburg – für ganz Österreich und Deutschland',
        body: [
          'Stationiert ist unsere Webdesign- und SEO-Agentur in Hallein – rund 15 Kilometer südlich von Salzburg. Projekte setzen wir jedoch nicht nur lokal in Salzburg Stadt und Land um, sondern wir betreuen Kunden aus dem gesamten deutschsprachigen Raum.',
        ],
      },
    ],
    process: {
      heading: 'Professionelles SEO: unser 5-Schritte-Prozess',
      lead: 'Suchmaschinenoptimierung ist ein ganzheitlicher, laufender Prozess. So gehen wir vor:',
      steps: [
        {
          t: 'Keyword-Recherche / Ist-Zustand',
          d: 'Wir ermitteln die wichtigsten Suchbegriffe rund um Ihre Leistungen und prüfen, für welche Begriffe Ihre Seite bereits gefunden wird – und auf welcher Position.',
        },
        {
          t: 'Konkurrenz-Analyse',
          d: 'Anhand der recherchierten Keywords ermitteln wir die Stärke Ihrer Konkurrenz und leiten daraus Potenzial und Maßnahmen ab.',
        },
        {
          t: 'On-Page-SEO-Maßnahmen',
          d: 'Wir optimieren Inhalte, Metadaten, Bilder, HTML-Struktur, interne Verlinkung und Ladezeiten – immer mit Fokus auf eine gute User-Experience.',
        },
        {
          t: 'Backlink-Möglichkeiten (Off-Page-SEO)',
          d: 'Wir ermitteln essenzielle Backlink-Möglichkeiten und zeigen sie Ihnen auf. Auf Wunsch kümmern wir uns um die externe Verlinkung.',
        },
        {
          t: 'Laufende SEO-Betreuung & Bericht',
          d: 'Wir betreuen Ihre Webseite über mindestens 6 Monate und liefern monatliche Berichte zum Ranking-Verlauf der wichtigsten Suchbegriffe.',
        },
      ],
    },
  },
];
