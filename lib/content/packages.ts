export interface Package {
  id: string;
  naam: string;
  kleur: 'bronze' | 'silver' | 'gold';
  prijsRange: string;
  prijsVanaf: string;
  doelgroep: string;
  beschrijving: string;
  inbegrepen: string[];
  nietInbegrepen?: string[];
  populair?: boolean;
}

export const packages: Package[] = [
  {
    id: 'bronze',
    naam: 'Bronze',
    kleur: 'bronze',
    prijsRange: '€ 1.500 – € 3.000',
    prijsVanaf: '€ 1.500',
    doelgroep: 'Wilt u opruimen en uitzoeken vóórdat u verhuist — of gewoon thuis meer rust en ruimte?',
    beschrijving:
      'Inventarisatie en begeleide sorteersessies. Wij helpen u gestructureerd door uw woning: wat gaat mee, wat gaat naar familie, wat wordt gedoneerd of afgevoerd.',
    inbegrepen: [
      'Gratis intake en downsizing plan (PDF)',
      'Begeleide sorteersessies (2–4 sessies)',
      'Labelen: Mee / Familie / Doneren / Verkopen / Afvoeren',
      'Coördinatie donaties (goede doelen, kringloop)',
      'Coördinatie afvoer (inclusief planning transporteur)',
      'Eindrapportage met overzicht bestemming per categorie',
    ],
    nietInbegrepen: [
      'Inpak- en uitpakservice',
      'Verhuiscoördinatie',
      'Inrichting nieuwe woning',
    ],
  },
  {
    id: 'silver',
    naam: 'Silver',
    kleur: 'silver',
    prijsRange: '€ 4.000 – € 8.000',
    prijsVanaf: '€ 4.000',
    doelgroep: 'U wilt de gehele verhuizing uit handen geven, van sorteren tot verhuisdag.',
    beschrijving:
      'Volledige begeleiding van start tot verhuisdag. Wij coördineren alle partijen: verhuizer, schoonmaak, donaties en uw familie.',
    populair: true,
    inbegrepen: [
      'Alles uit het Bronze pakket',
      'Verhuisregie (planning + aansturing verhuizer)',
      'Professionele inpakservice',
      'Coördinatie schoonmaak (bron- en eventueel bestemmingswoning)',
      'Wekelijkse update aan u en/of familie',
      'Aanwezig op verhuisdag',
      'Basisuitpakken nieuwe woning (keuken, slaapkamer, badkamer)',
    ],
    nietInbegrepen: [
      'Volledige inrichtingsservice',
      'Digitalisering foto\'s/documenten',
    ],
  },
  {
    id: 'gold',
    naam: 'Gold',
    kleur: 'gold',
    prijsRange: '€ 7.500 – € 15.000',
    prijsVanaf: '€ 7.500',
    doelgroep: 'U wilt zorgeloos en volledig ontzorgd worden — van eerste gesprek tot wonen in uw nieuwe thuis.',
    beschrijving:
      'Concierge A–Z. Wij regelen alles, van de eerste intake tot uw nieuwe woning volledig ingericht en werkend is opgeleverd. U hoeft nergens aan te denken.',
    inbegrepen: [
      'Alles uit het Silver pakket',
      'Volledige inrichtingsservice nieuwe woning (inclusief plattegrondplanning)',
      'Digitaliseren herinneringen: foto\'s, documenten, dia\'s',
      'Begeleiding verkoop waardevolle items (op commissiebasis)',
      'Coördinatie wifi/TV/telefoon installatie (add-on)',
      'Nazorgbezoek na 1–2 weken',
      'Persoonlijk aanspreekpunt gedurende het gehele traject',
    ],
  },
];

export const addOns = [
  {
    id: 'digitaliseren',
    naam: 'Digitaliseren foto\'s & documenten',
    beschrijving: 'Analoge foto\'s, dia\'s en documenten digitaal bewaren',
    prijs: 'Per album of per uur — op aanvraag',
  },
  {
    id: 'verkoop',
    naam: 'Verkoop waardevolle items',
    beschrijving: 'Via veiling, Marktplaats of vakspecialisten',
    prijs: 'Op commissiebasis',
  },
  {
    id: 'opslag',
    naam: 'Opslagcoördinatie',
    beschrijving: 'Tijdelijke opslag tijdens de overgangsperiode',
    prijs: 'Op aanvraag',
  },
  {
    id: 'schoonmaak',
    naam: 'Eindschoonmaak oplevering',
    beschrijving: 'Bezemschone oplevering aan nieuwe eigenaar of verhuurder',
    prijs: 'Op aanvraag',
  },
];

export const prijsFactoren = [
  { factor: 'Woninggrootte', uitleg: 'Aantal kamers en verdiepingen' },
  { factor: 'Hoeveelheid spullen', uitleg: 'Omvang van de inboedel na 30–50 jaar wonen' },
  { factor: 'Afstand', uitleg: 'Afstand tussen huidige en nieuwe woning' },
  { factor: 'Tijdlijn', uitleg: 'Spoed of ruime planning — beiden mogelijk' },
  { factor: 'Extra diensten', uitleg: 'Digitalisering, verkoop, schoonmaak, opslag' },
];
