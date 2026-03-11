import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeader } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Kleiner wonen in een nieuwe levensfase',
  description:
    'Verhuisregie en downsizing voor mensen die kleiner willen wonen. U houdt altijd de regie. Wij begeleiden op uw tempo, met respect voor uw herinneringen.',
};

const geruststelling = [
  'U bepaalt wat er met uw spullen gebeurt — altijd',
  'Wij gaan op uw tempo, niet op het onze',
  'Geen spullen weggooien zonder uw akkoord',
  'Uw privacy en bezittingen behandelen wij met de grootste zorg',
  'U krijgt één vaste contactpersoon gedurende het hele traject',
  'Familie mag aanwezig zijn bij elke stap, als u dat wilt',
];

const vragen = [
  {
    vraag: 'Hoe gaan jullie om met herinneringen?',
    antwoord:
      'Met grote zorgvuldigheid. Elk voorwerp heeft een verhaal — wij nemen de tijd om te luisteren. Sommige klanten fotograferen dierbare spullen voor ze er afscheid van nemen. Dat helpt.',
  },
  {
    vraag: 'Wat als ik het even niet meer weet?',
    antwoord:
      'Dan stoppen we. We zetten een kopje koffie en praten. Er is geen haast. Onze aanpak is bewust rustig en begripvol.',
  },
  {
    vraag: 'Moet ik alles zelf aanwezig zijn?',
    antwoord:
      'Wij raden het aan, maar het is niet altijd nodig. Samen bepalen we wat op welk moment uw aanwezigheid vraagt.',
  },
];

export default function SeniorenPage() {
  return (
    <>
      <HeroSection
        title="U hoeft dit niet alleen te doen. En u houdt de regie."
        subtitle="Wij begrijpen dat een verhuizing na 30 of 40 jaar wonen meer is dan dozen sjouwen. Het is een levensgebeurtenis. Wij begeleiden u — op uw tempo, met respect voor uw herinneringen."
        ctaPrimary={{ label: 'Gratis Downsizing Check aanvragen', href: '/contact' }}
        ctaSecondary={{ label: 'Bel direct voor een gesprek', href: 'tel:0000000000' }}
        compact
      />

      {/* Geruststelling */}
      <section className="section bg-white" aria-labelledby="seniorgerust-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                id="seniorgerust-heading"
                label="U houdt de regie"
                title="Uw woning, uw spullen, uw keuzes."
                subtitle="Niets wordt besloten zonder uw akkoord. Wij adviseren en helpen kiezen — maar u bent de baas."
              />
              <ul className="space-y-3">
                {geruststelling.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5 text-[#C8965A]"
                      aria-hidden="true"
                    />
                    <span className="text-[#1C2B3A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#E2DDD8]">
              <p className="text-[#C8965A] font-semibold text-sm uppercase tracking-widest mb-4">
                Hoe wij omgaan met herinneringen
              </p>
              <p className="text-[#1C2B3A] text-lg leading-relaxed mb-4">
                &ldquo;Elk voorwerp heeft een verhaal. We nemen de tijd om te luisteren — en we
                gaan pas verder als u er klaar voor bent.&rdquo;
              </p>
              <p className="text-[#64748B] leading-relaxed">
                We werken met vijf categorieën: <strong>Mee</strong> naar uw nieuwe woning,{' '}
                <strong>Familie</strong>, <strong>Doneren</strong>, <strong>Verkopen</strong> en{' '}
                <strong>Afvoeren</strong>. Alles met uw goedkeuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vragen */}
      <section className="section bg-[#FAF8F5]" aria-labelledby="seniorvragen-heading">
        <div className="container max-w-3xl mx-auto">
          <SectionHeader
            id="seniorvragen-heading"
            title="Vragen die wij vaak horen"
            centered
          />
          <div className="space-y-6">
            {vragen.map(({ vraag, antwoord }) => (
              <div
                key={vraag}
                className="bg-white rounded-xl p-7 border border-[#E2DDD8] shadow-[0_2px_12px_rgba(27,58,92,0.06)]"
              >
                <h3 className="text-[#1B3A5C] mb-3">{vraag}</h3>
                <p className="text-[#64748B] leading-relaxed">{antwoord}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps showCTA={false} />

      <CTABanner
        title="Klaar om te beginnen? Wij komen graag bij u langs."
        subtitle="Een gratis kennismakingsgesprek, bij u thuis of telefonisch. Geen verplichtingen."
        ctaLabel="Gratis Downsizing Check aanvragen"
      />
    </>
  );
}
