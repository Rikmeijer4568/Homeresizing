import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/Card';

const stappen = [
  {
    nummer: '01',
    titel: 'Intake & plan',
    beschrijving:
      'Gratis kennismakingsgesprek (telefonisch of op locatie). Wij inventariseren uw woning, wensen en tijdlijn. U ontvangt een Downsizing Plan (PDF) met planning en eerste indicatie.',
    icoon: '🗂️',
  },
  {
    nummer: '02',
    titel: 'Sorteren & beslissen',
    beschrijving:
      'In begeleide sessies sorteert u uw spullen met de labels: Mee · Familie · Doneren · Verkopen · Afvoeren. U bepaalt alles — wij helpen kiezen en houden het overzicht.',
    icoon: '🏷️',
  },
  {
    nummer: '03',
    titel: 'Verhuisregie',
    beschrijving:
      'Wij coördineren het verhuisbedrijf, de inpakservice, eventuele opslag en de eindschoonmaak. Op de verhuisdag zijn wij persoonlijk aanwezig.',
    icoon: '🚚',
  },
  {
    nummer: '04',
    titel: 'Inrichten & oplevering',
    beschrijving:
      'Uw nieuwe woning wordt ingericht op basis van een plattegrond. Alles staat op zijn plek, de keuken is werkend, de slaapkamer is klaar. U woont.',
    icoon: '🏡',
  },
];

interface ProcessStepsProps {
  showCTA?: boolean;
}

export function ProcessSteps({ showCTA = true }: ProcessStepsProps) {
  return (
    <section className="section bg-white" aria-labelledby="steps-heading">
      <div className="container">
        <SectionHeader
          label="Onze werkwijze"
          title="Helder, rustig, stap voor stap."
          subtitle="Geen chaos. Geen verassingen. Elk traject volgt een bewezen aanpak — op uw tempo."
          centered
        />

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {stappen.map((stap, index) => (
            <div key={stap.nummer} className="relative">
              {/* Connector line (desktop) */}
              {index < stappen.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%_-_24px)] w-12 h-0.5 bg-[#E2DDD8] z-0"
                  aria-hidden="true"
                />
              )}

              <div className="bg-[#FAF8F5] rounded-xl p-6 border border-[#E2DDD8] relative z-10">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl" aria-hidden="true">{stap.icoon}</span>
                  <span className="text-[#C8965A] font-bold text-2xl">{stap.nummer}</span>
                </div>
                <h3 className="text-[#1B3A5C] mb-2">{stap.titel}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{stap.beschrijving}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nazorg */}
        <div className="bg-[#1B3A5C]/5 border border-[#1B3A5C]/15 rounded-xl p-6 mb-10 text-center max-w-2xl mx-auto">
          <p className="text-[#1B3A5C] font-semibold mb-1">+ Nazorg</p>
          <p className="text-[#64748B] text-sm">
            Na 1–2 weken bezoeken wij u in uw nieuwe woning voor een check-in en om laatste punten
            af te ronden. Geen openstaande eindjes.
          </p>
        </div>

        {showCTA && (
          <div className="text-center">
            <Button href="/contact" variant="primary" size="lg">
              Plan een kennismakingsgesprek
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
