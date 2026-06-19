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
  { label: 'Leistungen', href: '/leistungen/' },
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
  // De-fokussierte Leistungen – nur noch über den Footer erreichbar.
  weitere: [
    { label: 'Suchmaschinenoptimierung', href: '/leistungen/seo/' },
    { label: 'WordPress Agentur', href: '/leistungen/wordpress-agentur/' },
    { label: 'SEO Consulting', href: '/leistungen/seo-consultant/' },
  ],
  information: [
    { label: 'AGB', href: '/agb/' },
    { label: 'Datenschutzerklärung', href: '/datenschutz/' },
    { label: 'Impressum', href: '/impressum/' },
  ],
  // Regionale SEO-Landingpages – intern verlinkt, damit sie nicht verwaisen.
  regionen: [
    { label: 'Webdesign Salzburg', href: '/webdesign-salzburg/' },
    { label: 'Webdesign Hallein', href: '/webdesign-hallein/' },
    { label: 'Webdesign Pongau', href: '/webdesign-pongau/' },
    { label: 'Webdesign Pinzgau', href: '/webdesign-pinzgau/' },
    { label: 'Webdesign Klagenfurt', href: '/webdesign-klagenfurt/' },
    { label: 'Webdesign Chiemgau', href: '/webdesign-chiemgau/' },
    { label: 'SEO Salzburg', href: '/seo-salzburg/' },
  ],
};
