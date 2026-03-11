import type { Metadata } from 'next';
import { Quote } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { testimonials } from '@/lib/content/testimonials';
import { SectionHeader } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Reviews & verhalen',
  description:
    'Ervaringen van mensen die kleiner gingen wonen en hun families, begeleid door Home Resizing. Lees hun verhalen.',
};

export default function ReviewsPage() {
  return (
    <>
      <HeroSection
        title="Verhalen die ertoe doen."
        subtitle="Elke verhuizing is persoonlijk. Dit zijn ervaringen van mensen die wij mochten begeleiden — in hun eigen woorden."
        ctaPrimary={{ label: 'Schrijf uw eigen verhaal — begin hier', href: '/contact' }}
        compact
      />

      <section className="section bg-white" aria-labelledby="reviews-heading">
        <div className="container">
          <SectionHeader
            id="reviews-heading"
            label="Klantervaringen"
            title="Wat klanten over ons zeggen"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <figure
                key={item.id}
                className="bg-[#FAF8F5] rounded-xl p-7 border border-[#E2DDD8] shadow-[0_2px_16px_rgba(27,58,92,0.06)] flex flex-col"
              >
                <Quote
                  size={28}
                  className="text-[#C8965A] mb-4 flex-shrink-0"
                  aria-hidden="true"
                />
                <blockquote className="flex-1 mb-6">
                  <p className="text-[#1C2B3A] leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption>
                  <div className="flex items-center gap-3 border-t border-[#E2DDD8] pt-4">
                    <div
                      className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white text-sm font-bold">
                        {item.initialen.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1C2B3A] text-sm">
                        {item.relatie ?? `${item.naam} (${item.leeftijd})`}
                      </p>
                      <p className="text-[#64748B] text-xs">
                        {item.plaats} · {item.typeLabel}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="section bg-[#FAF8F5]" aria-labelledby="cases-heading">
        <div className="container max-w-3xl mx-auto text-center">
          <SectionHeader
            id="cases-heading"
            label="Cases"
            title="Uitgebreide verhalen — binnenkort"
            subtitle="We werken aan uitgebreide case-studies met de volledige aanpak, uitdaging en resultaat. Kom binnenkort terug."
            centered
          />
          <div className="bg-white rounded-xl p-8 border border-[#E2DDD8]">
            <p className="text-[#64748B]">
              Heeft u een verhuizing met ons doorlopen en wilt u uw verhaal delen?{' '}
              <a href="/contact" className="text-[#C8965A] font-semibold">
                Neem contact op
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
