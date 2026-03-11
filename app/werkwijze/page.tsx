import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Onze werkwijze',
  description:
    'Stap voor stap door uw verhuizing: intake, sorteren, verhuisregie, inrichten en nazorg. Helder, rustig en op uw tempo.',
};

const stappen = [
  {
    nummer: '01',
    emoji: '🗂️',
    titel: 'Intake & plan',
    intro:
      'Alles begint met een goed gesprek. Gratis, vrijblijvend, bij u thuis of telefonisch.',
    details: [
      'We inventariseren uw woning, uw situatie en uw wensen',
      'We bespreken uw tijdlijn en eventuele familie-omstandigheden',
      'U ontvangt een Downsizing Plan (PDF) met een duidelijke planning',
      'U ontvangt een eerste kostprijsindicatie — geen verplichtingen',
    ],
    resultaat: 'Een helder plan op maat en een indicatie van de investering.',
  },
  {
    nummer: '02',
    emoji: '🏷️',
    titel: 'Sorteren & beslissen',
    intro:
      'Dit is de meest persoonlijke stap. Wij begeleiden u door elke ruimte — op uw tempo.',
    details: [
      'We werken met vijf labels: Mee · Familie · Doneren · Verkopen · Afvoeren',
      'Niets gaat zonder uw expliciete akkoord',
      'Emotioneel beladen spullen krijgen extra aandacht en tijd',
      'Wij houden het overzicht en de planning bij',
      'Coördinatie van donaties en afvoer is inbegrepen',
    ],
    resultaat: 'Een geordende woning en volledige duidelijkheid over elke categorie.',
  },
  {
    nummer: '03',
    emoji: '🚚',
    titel: 'Verhuisregie',
    intro:
      'Wij coördineren alle partijen — u hoeft zelf niets te regelen.',
    details: [
      'Selectie en aansturing van een betrouwbaar verhuisbedrijf',
      'Regelen van parkeervergunning en lift indien nodig',
      'Professionele inpakservice (inclusief breekbare items)',
      'Coördinatie van eindschoonmaak bronwoning',
      'Wekelijkse voortgangsupdate voor u en uw familie',
      'Persoonlijke aanwezigheid op de verhuisdag',
    ],
    resultaat: 'Een vlekkeloze verhuisdag — u stapt in, de rest regelen wij.',
  },
  {
    nummer: '04',
    emoji: '🏡',
    titel: 'Inrichten & oplevering',
    intro:
      'Uw nieuwe woning wordt ingericht zodat u direct kunt wonen. Geen dozen, geen chaos.',
    details: [
      'Plattegrondplanning vooraf: elk meubel weet waar het naartoe gaat',
      'Uitpakken per ruimte op volgorde: keuken, slaapkamer, woonkamer',
      'Ophangen schilderijen, spiegels en gordijnen',
      'Keuken, badkamer en slaapkamer volledig werkend opgeleverd',
      'Afvalverwerking van alle verpakkingsmaterialen',
    ],
    resultaat: 'Een ingericht, werkend thuis op dag één.',
  },
  {
    nummer: '05',
    emoji: '🤝',
    titel: 'Nazorg',
    intro:
      'Na 1–2 weken bezoeken wij u in uw nieuwe woning. Geen openstaande eindjes.',
    details: [
      'Check-in op uw welzijn en het functioneren van de woning',
      'Afronden van kleine openstaande punten',
      'Coördinatie van eventuele nog te leveren items',
      'Schriftelijke afsluiting van het traject',
    ],
    resultaat: 'Alles staat, alles klopt. U woont.',
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <HeroSection
        title="Onze werkwijze: helder, rustig, stap voor stap."
        subtitle="Geen chaos. Geen verassingen. Elk traject volgt een bewezen aanpak — afgestemd op uw tempo en situatie."
        ctaPrimary={{ label: 'Plan een kennismakingsgesprek', href: '/contact' }}
        ctaSecondary={{ label: 'Bekijk pakketten', href: '/pakketten' }}
      />

      <section className="section bg-white" aria-label="Werkwijze stappen">
        <div className="container">
          <div className="space-y-16">
            {stappen.map((stap, index) => (
              <div
                key={stap.nummer}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl" aria-hidden="true">{stap.emoji}</span>
                    <div>
                      <p className="text-[#C8965A] font-bold text-sm">Stap {stap.nummer}</p>
                      <h2 className="text-[#1B3A5C]">{stap.titel}</h2>
                    </div>
                  </div>
                  <p className="text-[#64748B] text-lg leading-relaxed mb-6">{stap.intro}</p>
                  <ul className="space-y-3 mb-6">
                    {stap.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="flex-shrink-0 mt-0.5 text-[#C8965A]"
                          aria-hidden="true"
                        />
                        <span className="text-[#1C2B3A]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#1B3A5C]/5 border border-[#1B3A5C]/15 rounded-xl p-4">
                    <p className="text-[#1B3A5C] font-semibold text-sm">
                      Resultaat: <span className="font-normal text-[#64748B]">{stap.resultaat}</span>
                    </p>
                  </div>
                </div>

                <div className={`bg-[#FAF8F5] rounded-2xl p-8 border border-[#E2DDD8] ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <div className="text-6xl mb-4 text-center" aria-hidden="true">{stap.emoji}</div>
                  <p className="text-center text-[#C8965A] font-bold text-5xl">{stap.nummer}</p>
                  <p className="text-center text-[#1B3A5C] font-semibold mt-2">{stap.titel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Klaar om te beginnen? Plan een vrijblijvend gesprek."
        subtitle="Wij komen graag bij u langs of bellen u op een moment dat u schikt."
      />
    </>
  );
}
