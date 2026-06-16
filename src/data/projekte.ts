// Referenz-/Projektdaten. Inhalte und Bilder von der bestehenden Live-Seite
// (coderocker.at/referenzen/<slug>/) übernommen. Bilder liegen unter
// src/assets/images/projekte/<slug>.png (freigestelltes Mockup) und
// <slug>-shot.(jpg|png) (Screenshot). Auflösung der Bilder via import.meta.glob
// im Template, daher hier nur die Slugs als Referenz.

export interface Projekt {
  slug: string;
  name: string;
  /** Kurzlabel unter dem Projektnamen */
  tag: string;
  /** Live-URL des Kundenprojekts (optional) */
  url?: string;
  /** Beschreibungsabsätze */
  text: string[];
  /** Dateiendung des Screenshots (Banner). Default: jpg */
  shotExt?: 'jpg' | 'png';
}

export const projekte: Projekt[] = [
  {
    slug: 'chiropraktiker-webseite',
    name: 'THE EASE – Chiropraktik',
    tag: 'Webdesign · Onepager',
    url: 'https://theease.de/',
    text: ['Modernes One-Page-Webdesign für eine sympathische Chiropraktikerin aus Hamburg.'],
  },
  {
    slug: 'kung-fu-webseite',
    name: 'Chin-Woo Energieoase',
    tag: 'Webdesign · Kampfkunst',
    url: 'https://energieoase.ch/',
    text: ['In der Chin-Woo Energieoase dreht sich alles um Kampfkunst, Selbstverteidigung, Kung-Fu und die traditionelle asiatische Kultur.'],
  },
  {
    slug: 'adlerblick-onlineshop',
    name: 'Adlerblick Onlineshop',
    tag: 'Webdesign · Onlineshop',
    url: 'https://adlerblick.shop/',
    text: [
      'Wir sind sehr stolz darauf, dass wir für die Firma Adlerblick GmbH aus Saalfelden ein sehr großes und ambitioniertes Projekt umsetzen durften.',
      'Der Adlerblick Onlineshop bietet tausende Produkte aus dem Bereich Sanitär, Heizung, Installation und mehr.',
    ],
  },
  {
    slug: 'veritec-solution-gmbh',
    name: 'Veritec Solution GmbH',
    tag: 'Webdesign · Elektrotechnik',
    url: 'https://veritec.at/',
    shotExt: 'png',
    text: [
      'Die Veritec Solution GmbH aus Saalfelden am Steinernen Meer bietet innovative Lösungen rund um Elektroinstallation, Kältetechnik, Netzwerkinstallationen und mehr.',
      'Wir sind sehr dankbar dafür, dass wir für diese innovative Firma ein modernes und optimiertes Webdesign umsetzen durften.',
    ],
  },
  {
    slug: 'physiotherapie-fabian-suppik',
    name: 'Physiotherapie Fabian Suppik',
    tag: 'Webdesign · Praxis',
    url: 'https://physio-salzburg.com/',
    text: [
      'Fabian Suppik betreibt seine eigene Physiotherapie-Praxis im Herzen von Salzburg.',
      'Wir durften die moderne Praxiswebseite umsetzen und bedanken uns nochmals für die gute Zusammenarbeit!',
    ],
  },
  {
    slug: 'dr-buergel',
    name: 'Hausarzt Dr. Bürgel',
    tag: 'Webdesign · Arztpraxis',
    url: 'https://praxis-buergel.de/',
    text: [
      'Wir sind sehr stolz darauf, dass wir die neue Praxiswebseite von Dr. Georg Bürgel gestalten durften!',
      'Die Hausarztpraxis befindet sich im Herzen von Berchtesgaden. Für Dr. Georg Bürgel und sein gesamtes Praxisteam können wir eine absolute Empfehlung aussprechen!',
    ],
  },
  {
    slug: 'kraftvoll-und-sicher',
    name: 'Kraftvoll & Sicher',
    tag: 'Webdesign · Körperarbeit',
    url: 'https://kraftvollundsicher.at/',
    text: ['Craniosakrale Körperarbeit & Mentaltraining – darum geht es bei Kraftvoll und Sicher. Wir haben den passenden Onlineauftritt dazu umgesetzt.'],
  },
  {
    slug: 'podologie-kolb',
    name: 'Podologie Kolb',
    tag: 'Redesign · Praxis',
    url: 'https://podologie-kolb.de/',
    text: [
      'Die Podologie Kolb aus Waging am See bietet medizinische Fußpflege sowie kosmetische Dienstleistungen.',
      'Die alte Webseite war nicht responsive und auch optisch nicht mehr zeitgemäß. Somit wurden wir mit einem Re-Design der Webseite beauftragt. Umgesetzt wurde das Projekt auf Basis des CMS WordPress. Neben schnellen Ladezeiten stand auch die suchmaschinenfreundliche Umsetzung des Webauftritts im Fokus.',
    ],
  },
  {
    slug: '99blickwinkel-magazin',
    name: '99blickwinkel – Fotografie Magazin',
    tag: 'Webdesign · SEO · Magazin',
    url: 'https://www.99blickwinkel.com/',
    text: [
      'Dieses Projekt wird von Robert Leitinger, dem Inhaber von CodeRocker, betrieben. Bei 99blickwinkel handelt es sich um ein ausführliches Online-Magazin rund um das Thema Fotografie. Hier findet man Reviews, Testberichte und Tutorials.',
      'Durch gezielte Suchmaschinenoptimierung erreicht 99blickwinkel.com mehrere 100.000 Besucher im Jahr. Jeden Monat erscheinen neue Inhalte.',
    ],
  },
  {
    slug: 'robert-leitinger',
    name: 'Online Marketing Magazin',
    tag: 'Webdesign · SEO · Magazin',
    url: 'https://robert-leitinger.com/',
    text: [
      'Ein hauseigenes Projekt. Hier findet man Tipps, Tricks und Tutorials zu den Themen SEO, WordPress und Online-Marketing-Strategien.',
      'Das Projekt wird von Robert Leitinger, dem Inhaber von CodeRocker, betrieben. Hier gibt er sein Wissen aus dem Bereich Online Marketing kostenlos weiter. Außerdem findet man hier auch Testberichte sowie Produktvergleiche und Empfehlungen. Vor Kurzem wurden auch die R-Tools (eine Sammlung von kostenlos nutzbaren SEO-Tools) auf der Seite integriert.',
    ],
  },
  {
    slug: 'lifestyyler-2',
    name: 'Lifestyle Magazin',
    tag: 'Webdesign · Magazin',
    url: 'https://lifestyyler.com/',
    text: [
      'Lifestyyler ist ein Lifestyle-Magazin rund um die Themen Fitness, Freizeit und Unterhaltung.',
      'Hier wurde ein modernes Blog-Magazin-Layout sowie das komplette Corporate Design erstellt. Die Inhalte werden nach und nach erweitert.',
    ],
  },
  {
    slug: 'micropart-onlineshop',
    name: 'Micropart Onlineshop',
    tag: 'Webdesign · Onlineshop',
    text: ['Im Micropart Onlineshop können Sie Windows-Betriebssysteme und Microsoft-Office-Pakete kaufen. Wir bedanken uns an dieser Stelle nochmals für den Auftrag und die wirklich gute Zusammenarbeit!'],
  },
];
