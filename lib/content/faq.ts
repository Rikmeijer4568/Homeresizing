export interface FAQItem {
  id: string;
  vraag: string;
  antwoord: string;
  categorie: 'algemeen' | 'aanpak' | 'privacy' | 'kosten' | 'praktisch';
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    categorie: 'aanpak',
    vraag: 'Moet ik alles wegdoen bij een downsizing?',
    antwoord:
      'Absoluut niet. U bepaalt zelf wat er met uw spullen gebeurt. Wij helpen u structureren en kiezen, maar de regie ligt altijd bij u. Wij werken met de labels "Mee naar nieuw huis", "Naar familie", "Doneren", "Verkopen" en "Afvoeren" — en niets gaat zonder uw akkoord.',
  },
  {
    id: '2',
    categorie: 'aanpak',
    vraag: 'Wie bepaalt wat er met mijn spullen gebeurt?',
    antwoord:
      'U. Altijd. Wij stellen vragen, bieden overzicht en helpen u keuzes te maken — maar de beslissing ligt volledig bij u. We gaan nooit sneller dan u prettig vindt.',
  },
  {
    id: '3',
    categorie: 'privacy',
    vraag: 'Werken jullie discreet?',
    antwoord:
      'Ja, discreet werken is een kernwaarde. Wij gaan zorgvuldig om met uw persoonlijke bezittingen en informatie. We bespreken uw situatie nooit met derden zonder uw toestemming. Onze partners hebben dezelfde vertrouwelijkheidsstandaard.',
  },
  {
    id: '4',
    categorie: 'aanpak',
    vraag: 'Wat als er onenigheid is in de familie over spullen?',
    antwoord:
      'Dit komt vaker voor dan u denkt. Wij zijn neutraal en hebben geen belang bij de uitkomst. We begeleiden het gesprek, brengen overzicht en helpen tot een oplossing te komen waar iedereen mee kan leven. Soms is een apart familiemoment zinvol — dat organiseren we graag.',
  },
  {
    id: '5',
    categorie: 'praktisch',
    vraag: 'Kunnen jullie ook samenwerken met een makelaar?',
    antwoord:
      'Ja. We werken geregeld samen met makelaars en kunnen de timing van ontruiming en oplevering afstemmen op de verkoop van uw woning. We zorgen ook dat de woning bezemschoon wordt opgeleverd.',
  },
  {
    id: '6',
    categorie: 'praktisch',
    vraag: 'Doen jullie ook alleen opruimen, zonder verhuizing?',
    antwoord:
      'Zeker. Downsizing en ontspullen kan los van een verhuizing. Sommige klanten willen eerst opruimen en dan rustig nadenken over de volgende stap. Dat is prima — ons Bronze pakket is hier speciaal voor.',
  },
  {
    id: '7',
    categorie: 'praktisch',
    vraag: 'Wat als ik nog geen nieuwe woning heb?',
    antwoord:
      'Geen probleem. We helpen u alvast met de voorbereiding: inventariseren, uitzoeken en plannen. Zodra de nieuwe woning bekend is, passen we de planning aan. We kunnen ook helpen bij de zoektocht naar passende woonvormen.',
  },
  {
    id: '8',
    categorie: 'kosten',
    vraag: 'Zijn jullie verzekerd?',
    antwoord:
      'Ja. Wij werken met een aansprakelijkheidsverzekering en onze verhuispartners zijn WA-verzekerd voor transportschade. U kunt ons hierover gerust vragen bij het kennismakingsgesprek.',
  },
  {
    id: '9',
    categorie: 'kosten',
    vraag: 'Hoe worden de kosten bepaald?',
    antwoord:
      'De prijs hangt af van de grootte van uw woning, de hoeveelheid spullen, de afstand en de diensten die u nodig heeft. Na de gratis intake ontvangt u een heldere, vaste offerte — geen verrassingen achteraf.',
  },
  {
    id: '10',
    categorie: 'kosten',
    vraag: 'Kan ik ook losse diensten afnemen?',
    antwoord:
      'Ja. Naast onze pakketten bieden we losse modules aan: digitaliseren van foto\'s, coördinatie van schoonmaak, verkoop van waardevolle items, of extra verhuisdagen. Vraag naar de mogelijkheden.',
  },
  {
    id: '11',
    categorie: 'aanpak',
    vraag: 'Hoe gaan jullie om met herinneringen en emotionele spullen?',
    antwoord:
      'Met respect en geduld. We nemen de tijd. Als iets emotioneel zwaar is, stoppen we even en gaan we het gesprek aan. We doen niets overhaast. Sommige klanten kiezen ervoor om bepaalde spullen te fotograferen voordat ze afscheid nemen — dat helpt.',
  },
  {
    id: '12',
    categorie: 'praktisch',
    vraag: 'Hoe houden jullie familie op afstand op de hoogte?',
    antwoord:
      'Via wekelijkse updates per e-mail, WhatsApp of een telefoongesprek — wat het meest prettig is. Familie kan op verzoek ook meekijken bij bepaalde stappen. We bespreken dit vooraf met u.',
  },
  {
    id: '13',
    categorie: 'privacy',
    vraag: 'Wat doen jullie met mijn persoonsgegevens?',
    antwoord:
      'Wij verwerken alleen de gegevens die nodig zijn om u goed te helpen. We voldoen aan de AVG. U kunt te allen tijde uw gegevens inzien, wijzigen of laten verwijderen. Zie onze privacyverklaring voor details.',
  },
  {
    id: '14',
    categorie: 'praktisch',
    vraag: 'In welk gebied werken jullie?',
    antwoord:
      'Wij zijn actief door heel Nederland. Bel of mail ons gerust om te bespreken of uw locatie tot ons werkgebied behoort.',
  },
  {
    id: '15',
    categorie: 'algemeen',
    vraag: 'Hoe snel kunnen jullie starten?',
    antwoord:
      'Na de gratis intake en het akkoord op de offerte plannen we samen een startmoment. Afhankelijk van uw tijdlijn en onze bezetting kan dat binnen enkele weken zijn. Neem contact op voor de actuele beschikbaarheid.',
  },
];

export const faqCategorieen = [
  { value: 'all', label: 'Alle vragen' },
  { value: 'aanpak', label: 'Onze aanpak' },
  { value: 'kosten', label: 'Kosten & offerte' },
  { value: 'privacy', label: 'Privacy & discretie' },
  { value: 'praktisch', label: 'Praktisch' },
];
