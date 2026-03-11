export interface Service {
  id: string;
  slug: string;
  titel: string;
  subtitel: string;
  beschrijving: string;
  watWeDoen: string[];
  voorWie: string;
  resultaat: string;
  duur: string;
  faq: Array<{ vraag: string; antwoord: string }>;
  icoon: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'downsizing-ontspullen',
    titel: 'Downsizing & ontspullen',
    subtitel: 'Rust in uw woning, rust in uw hoofd',
    beschrijving:
      'Na jaren van wonen stapelen spullen zich op. Wij helpen u gestructureerd en respectvol te sorteren — zodat u weet wat er met alles gebeurt en zelf de regie houdt.',
    icoon: '🏠',
    watWeDoen: [
      'Inventarisatie van uw woning (ruimte voor ruimte)',
      'Begeleide sorteersessies op uw tempo',
      'Labelen: Mee / Familie / Doneren / Verkopen / Afvoeren',
      'Regelen van donaties aan goede doelen of kringloopwinkels',
      'Coördinatie van afvoer en verwerking',
      'Schriftelijke eindrapportage',
    ],
    voorWie:
      'Voor senioren die willen opruimen vóórdat ze verhuizen, of gewoon thuis meer ruimte willen creëren.',
    resultaat: 'Een overzichtelijke, rustgevende woning en duidelijkheid over elke categorie spullen.',
    duur: 'Gemiddeld 2–6 sessies van 3–4 uur, verspreid over 2–6 weken',
    faq: [
      {
        vraag: 'Moet ik er zelf bij zijn?',
        antwoord:
          'Bij voorkeur ja, zodat u zelf beslist wat er met uw spullen gebeurt. Is dit niet mogelijk? Dan overleggen we op afstand.',
      },
      {
        vraag: 'Wat gebeurt er met waardevolle spullen?',
        antwoord:
          'We geven advies over de beste route: familie, veiling, Marktplaats of een vakspecialist. U beslist.',
      },
    ],
  },
  {
    id: '2',
    slug: 'verhuisregie',
    titel: 'Verhuisregie A–Z',
    subtitel: 'Wij coördineren alles, u verhuist zorgeloos',
    beschrijving:
      'Van planning tot verhuisdag: wij regelen alle partijen (verhuizer, lift, parkeervergunning, schoonmaak) en zijn persoonlijk aanwezig zodat alles soepel verloopt.',
    icoon: '🚚',
    watWeDoen: [
      'Verhuisplanning en tijdlijn op maat',
      'Selectie en aansturing van verhuisbedrijf',
      'Regelen parkeervergunning en lift indien nodig',
      'Coördinatie inpakservice',
      'Persoonlijke aanwezigheid op verhuisdag',
      'Coördinatie eindschoonmaak bronwoning',
      'Wekelijkse voortgangsupdate aan u en familie',
    ],
    voorWie:
      'Voor iedereen die de verhuisorganisatie volledig uit handen wil geven.',
    resultaat: 'Een vlekkeloze verhuisdag zonder stress, met alles geregeld.',
    duur: 'Voorbereiding 2–8 weken, verhuisdag 1–2 dagen',
    faq: [
      {
        vraag: 'Werken jullie met vaste verhuisbedrijven?',
        antwoord:
          'We werken met een netwerk van betrouwbare verhuispartners. Welke partner we inzetten hangt af van uw situatie en locatie.',
      },
      {
        vraag: 'Zijn jullie aanwezig op de verhuisdag zelf?',
        antwoord:
          'Ja, wij zijn persoonlijk aanwezig om alles te coördineren en problemen direct op te lossen.',
      },
    ],
  },
  {
    id: '3',
    slug: 'inpakken-uitpakken',
    titel: 'Inpakken, uitpakken & inrichten',
    subtitel: 'Uw nieuwe woning direct als thuis',
    beschrijving:
      'Wij pakken uw spullen professioneel in, transporteren ze veilig en richten uw nieuwe woning in op basis van een vooraf gemaakte plattegrond. U stapt binnen en woont.',
    icoon: '📦',
    watWeDoen: [
      'Professioneel inpakken met kwalitatief materiaal',
      'Labelen per ruimte voor efficiënt uitpakken',
      'Uitpakken en plaatsen in nieuwe woning',
      'Plattegrondplanning (meubels, elektronica)',
      'Ophangen schilderijen en gordijnen',
      'Keuken, slaapkamer en badkamer volledig werkend opleveren',
      'Afvalverwerking verpakkingsmateriaal',
    ],
    voorWie:
      'Voor wie direct wil kunnen wonen zonder dozen en chaos.',
    resultaat: 'Een ingerichte, functionele woning op de eerste dag.',
    duur: '1–3 dagen, afhankelijk van woninggrootte',
    faq: [
      {
        vraag: 'Pakt u ook breekbare en waardevolle items in?',
        antwoord:
          'Ja, met professioneel materiaal (spiegel- en kunstwerk-verpakking, bubbeltjesfolie) en extra aandacht.',
      },
    ],
  },
  {
    id: '4',
    slug: 'digitaliseren',
    titel: 'Digitaliseren foto\'s & documenten',
    subtitel: 'Uw herinneringen veilig bewaard voor altijd',
    beschrijving:
      'Dozen vol foto\'s, dia\'s en documenten worden gedigitaliseerd en overzichtelijk georganiseerd. Zo blijven uw herinneringen bewaard en deelbaar met de familie.',
    icoon: '📷',
    watWeDoen: [
      'Scannen van analoge foto\'s (per album of bulk)',
      'Digitaliseren van dia\'s en negatieven',
      'Scannen van belangrijke documenten',
      'Ordenen in mappen (per jaar, persoon of thema)',
      'Opslaan op USB, harde schijf of cloud naar keuze',
      'Optioneel: online fotoboek samenstellen',
    ],
    voorWie:
      'Voor iedereen met dozen vol analoge herinneringen die bewaard en gedeeld moeten kunnen worden.',
    resultaat: 'Een digitaal archief van uw herinneringen, beschikbaar voor uzelf en uw familie.',
    duur: 'Afhankelijk van hoeveelheid; 1 album = gemiddeld 2–4 uur',
    faq: [
      {
        vraag: 'Wat als ik niet weet wat ik wil bewaren?',
        antwoord:
          'Wij kunnen u helpen selecteren. U bekijkt samen met ons en beslist.',
      },
    ],
  },
  {
    id: '5',
    slug: 'verkoop-waardevolle-items',
    titel: 'Verkoop waardevolle items',
    subtitel: 'Uw spullen vinden een nieuw thuis én leveren op',
    beschrijving:
      'Antiek, sieraden, kunst of bijzondere meubels? Wij adviseren over de beste verkooproute en coördineren het proces — zodat u een eerlijke prijs krijgt zonder gedoe.',
    icoon: '💎',
    watWeDoen: [
      'Inventarisatie waardevolle items',
      'Advies over verkooproute (veiling, taxateur, Marktplaats, dealer)',
      'Coördinatie taxatie indien gewenst',
      'Aansturing verkoopproces',
      'Afrekening en rapportage',
    ],
    voorWie:
      'Voor wie antiek, kunst of bijzondere meubels op een eerlijke manier wil verkopen.',
    resultaat: 'Een eerlijke opbrengst zonder dat u er zelf achteraan hoeft.',
    duur: 'Afhankelijk van route; veiling 2–6 weken',
    faq: [
      {
        vraag: 'Hoe wordt uw vergoeding berekend?',
        antwoord:
          'Wij werken op commissiebasis: een percentage van de verkoopopbrengst, afgesproken vooraf.',
      },
    ],
  },
  {
    id: '6',
    slug: 'nazorg',
    titel: 'Nazorg & afronding',
    subtitel: 'Geen loshangende eindjes, alles netjes afgesloten',
    beschrijving:
      'Na de verhuizing bezoeken wij u in de nieuwe woning om te controleren of alles goed zit, laatste puntjes af te ronden en te zorgen dat u zich echt thuis voelt.',
    icoon: '🤝',
    watWeDoen: [
      'Nazorgbezoek 1–2 weken na verhuisdag',
      'Checklist afwerking: hangend, functioneel, wifi',
      'Coördinatie ontbrekende leveringen',
      'Aandacht voor welzijn en welbevinden',
      'Schriftelijke afsluiting van het project',
    ],
    voorWie:
      'Inbegrepen in Silver en Gold pakket; ook los af te nemen als losse dienst.',
    resultaat: 'U woont en alles klopt — zonder openstaande punten.',
    duur: '1 bezoek van 2–3 uur',
    faq: [
      {
        vraag: 'Is nazorg verplicht?',
        antwoord:
          'Nee, maar wij raden het sterk aan. De praktijk leert dat er altijd kleine dingen zijn die na de verhuisdag aandacht vragen.',
      },
    ],
  },
];
