import type { Metadata } from 'next';
import { CheckCircle, MessageCircle, Eye, Heart } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Voor kinderen en familie op afstand',
  description:
    'Woont u ver weg en wilt u uw ouder(s) helpen met verhuizen? Wij zijn uw ogen en handen. Wekelijkse updates, volledige coördinatie.',
};

const voordelen = [
  'Wij zijn uw ogen en handen ter plaatse',
  'Wekelijkse voortgangsupdate per e-mail of WhatsApp',
  'U kunt op verzoek aanwezig zijn bij sleutelmomenten',
  'Begeleiding bij verdeling van erfstukken tussen familieleden',
  'Neutrale positie: wij faciliteren, u en uw ouder(s) beslissen',
  'Één contactpersoon voor alle vragen en updates',
];

const communicatieStappen = [
  {
    icon: Eye,
    titel: 'Wij zijn ter plaatse',
    tekst: 'U woont ver weg of heeft het druk. Wij komen bij uw ouder(s) thuis en houden u op de hoogte van elke stap.',
  },
  {
    icon: MessageCircle,
    titel: 'Wekelijkse update',
    tekst: 'Per e-mail, WhatsApp of telefoon — wat voor u het prettigst is. U weet altijd hoe het gaat.',
  },
  {
    icon: Heart,
    titel: 'Respect voor uw ouder',
    tekst: 'We zorgen ervoor dat uw ouder zich gehoord en gerespecteerd voelt. De regie ligt bij hem of haar.',
  },
];

export default function FamiliePage() {
  return (
    <>
      <HeroSection
        title="Uw ouder(s) verdienen de beste begeleiding. Ook als u ver weg woont."
        subtitle="Wij zijn uw ogen en handen. U bent betrokken bij elke beslissing — wij zijn aanwezig ter plaatse. Wekelijkse updates, volledige transparantie."
        ctaPrimary={{ label: 'Plan een gesprek voor uw ouder(s)', href: '/contact' }}
        ctaSecondary={{ label: 'Bekijk onze werkwijze', href: '/werkwijze' }}
        compact
      />

      {/* Voordelen */}
      <section className="section bg-white" aria-labelledby="familie-voordelen-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                id="familie-voordelen-heading"
                label="Voor kinderen op afstand"
                title="U regelt het. Wij voeren uit."
                subtitle="Samen met u bepalen we de aanpak. Wij zijn aanwezig bij uw ouder(s) — u houdt de touwtjes in handen."
              />
              <ul className="space-y-3">
                {voordelen.map((item) => (
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

            <div className="space-y-5">
              {communicatieStappen.map(({ icon: Icon, titel, tekst }) => (
                <div
                  key={titel}
                  className="flex items-start gap-4 bg-[#FAF8F5] rounded-xl p-5 border border-[#E2DDD8]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1B3A5C]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#1B3A5C]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[#1B3A5C] text-base mb-1">{titel}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Erfstukken */}
      <section className="section bg-[#FAF8F5]" aria-labelledby="erfstukken-heading">
        <div className="container max-w-3xl mx-auto text-center">
          <SectionHeader
            id="erfstukken-heading"
            label="Erfstukken & verdeling"
            title="Wij begeleiden de verdeling eerlijk en neutraal."
            subtitle="Sieraden, antiek, meubels — stukken die emotionele waarde hebben voor meerdere familieleden. Wij faciliteren het gesprek zonder te oordelen."
            centered
          />
          <div className="bg-white rounded-xl p-7 border border-[#E2DDD8] shadow-[0_2px_12px_rgba(27,58,92,0.06)] text-left">
            <p className="text-[#1C2B3A] leading-relaxed mb-4">
              Familieleden hebben soms uiteenlopende wensen. Dat is begrijpelijk. Als neutrale
              partij helpen wij het gesprek te faciliteren, overzicht te bewaren en tot een
              oplossing te komen waar iedereen mee kan leven.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              Wanneer nodig plannen we een apart familiemoment in — op locatie of videobellen —
              zodat iedereen betrokken is, ook degenen die ver weg wonen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA for family */}
      <section className="section bg-[#1B3A5C]" aria-labelledby="familie-cta-heading">
        <div className="container text-center">
          <h2 id="familie-cta-heading" className="text-white mb-4 max-w-xl mx-auto">
            Wilt u dit regelen voor uw ouder(s)?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            Neem contact op — wij bespreken uw situatie en hoe wij kunnen helpen.
          </p>
          <Button
            href="/contact?aanvrager=familie"
            variant="primary"
            size="lg"
          >
            Ik regel dit voor mijn ouder(s)
          </Button>
        </div>
      </section>
    </>
  );
}
