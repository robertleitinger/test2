// Zentrale Seitendaten – an einer Stelle pflegen, überall verwendet.

export const site = {
  name: 'CodeRocker',
  url: 'https://www.coderocker.at',
  tagline: 'Webdesign & Online Marketing das rockt',
  owner: 'Robert Leitinger',
  experienceYears: 11,
  email: 'service@coderocker.at',
  phone: '+43 676 4305969',
  phoneHref: 'tel:+436764305969',
  street: 'Kornsteinplatz 10',
  postalCode: '5400',
  city: 'Hallein',
  country: 'Österreich',
  hours: 'Mo–Fr 09–17 Uhr',
  uid: 'ATU78794413',
  rating: '5,0',
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  {
    label: 'Leistungen',
    href: '/leistungen/',
    children: [
      { label: 'Webdesign', href: '/leistungen/webdesign/' },
      { label: 'SEO', href: '/leistungen/seo/' },
      { label: 'WordPress Agentur', href: '/leistungen/wordpress-agentur/' },
      { label: 'SEO Consulting', href: '/leistungen/seo-consultant/' },
    ],
  },
  { label: 'Referenzen', href: '/referenzen/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const footerLinks = {
  navigation: [
    { label: 'Startseite', href: '/' },
    { label: 'Leistungen', href: '/leistungen/' },
    { label: 'Referenzen', href: '/referenzen/' },
    { label: 'Über uns', href: '/ueber-uns/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ],
  // Lokale Landingpages folgen in einer späteren Phase – derzeit als Text dargestellt.
  schwerpunkte: [
    'Webdesign Salzburg',
    'Webdesign Hallein',
    'Webdesign Pongau',
    'Webdesign Pinzgau',
    'Webdesign Klagenfurt',
    'Webdesign Chiemgau',
    'SEO Salzburg',
  ],
  information: [
    { label: 'AGB', href: '/agb/' },
    { label: 'Datenschutzerklärung', href: '/datenschutz/' },
    { label: 'Impressum', href: '/impressum/' },
  ],
};
