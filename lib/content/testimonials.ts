export interface Testimonial {
  id: string;
  initialen: string;
  naam: string;
  leeftijd: number;
  plaats: string;
  type: 'huis-naar-appartement' | 'kinderen-op-afstand' | 'veel-inboedel' | 'solo';
  typeLabel: string;
  quote: string;
  relatie?: string; // bijv. "Dochter van mevrouw K."
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    initialen: 'M.V.',
    naam: 'Mevrouw Van den Berg',
    leeftijd: 78,
    plaats: 'Haarlem',
    type: 'huis-naar-appartement',
    typeLabel: 'Van huis naar appartement',
    quote:
      'Na 42 jaar in ons huis voelde de verhuizing overweldigend. [Naam] nam alles uit handen — van het uitzoeken van onze spullen tot de eerste kop koffie in ons nieuwe appartement. Ik had het echt niet zonder haar gekund.',
  },
  {
    id: '2',
    initialen: 'P.K.',
    naam: 'De heer Koster',
    leeftijd: 81,
    plaats: 'Amsterdam',
    type: 'veel-inboedel',
    typeLabel: 'Grote inboedel',
    quote:
      'Wij hadden een enorm huis vol met een leven lang herinneringen. Het was emotioneel zwaar, maar het gevoel van regie houden over wat er met alles gebeurde gaf enorm veel rust. Alles verliep precies zoals beloofd.',
  },
  {
    id: '3',
    initialen: 'A.W.',
    naam: 'Mevrouw Willemsen',
    leeftijd: 75,
    plaats: 'Utrecht',
    type: 'kinderen-op-afstand',
    typeLabel: 'Kinderen op afstand',
    quote:
      'Mijn kinderen wonen in het buitenland en konden er niet bij zijn. Ze kregen elke week een update en foto\'s. Dat gaf ons allemaal rust. De samenwerking was professioneel én heel menselijk.',
  },
  {
    id: '4',
    initialen: 'J.L.',
    naam: 'Jan L.',
    leeftijd: 68,
    plaats: 'Rotterdam',
    type: 'huis-naar-appartement',
    typeLabel: 'Van huis naar appartement',
    quote:
      'Ik had dit nooit zelf kunnen organiseren. Van verhuisbedrijf tot schoonmaak, van donaties tot de inrichting van mijn nieuwe woning — alles werd geregeld. Ik hoefde er zelf nauwelijks iets voor te doen.',
  },
  {
    id: '5',
    initialen: 'S.B.',
    naam: 'Sophie B.',
    leeftijd: 45,
    plaats: 'Den Haag',
    type: 'kinderen-op-afstand',
    typeLabel: 'Familie geregeld',
    relatie: 'Dochter van mevrouw T. (80, Leiden)',
    quote:
      'Mijn moeder wilde absoluut niet dat ik alles zou regelen — ze wilde haar zelfstandigheid bewaren. [Naam] begreep dat perfect en betrok mijn moeder bij elke stap. Ik voelde me gerust en mijn moeder voelde zich gerespecteerd.',
  },
  {
    id: '6',
    initialen: 'H.M.',
    naam: 'Herman en Maria M.',
    leeftijd: 74,
    plaats: 'Amstelveen',
    type: 'veel-inboedel',
    typeLabel: 'Grote inboedel',
    quote:
      'Onze woning stond bomvol na 35 jaar. We waren bang dat alles zomaar weggegooid zou worden. Niets was minder waar — alles kreeg een bestemming: familie, goede doelen, of een nieuw thuis. Dat voelde goed.',
  },
];

export const testimonialFilters = [
  { value: 'all', label: 'Alle verhalen' },
  { value: 'huis-naar-appartement', label: 'Van huis naar appartement' },
  { value: 'kinderen-op-afstand', label: 'Kinderen op afstand' },
  { value: 'veel-inboedel', label: 'Grote inboedel' },
];
