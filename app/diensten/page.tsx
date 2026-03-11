import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { services } from '@/lib/content/services';

export const metadata: Metadata = {
  title: 'Onze diensten',
  description:
    'Van downsizing en ontspullen tot verhuisregie, inpakservice en digitalisering. Bekijk alle diensten van Home Resizing.',
};

export default function DienstenPage() {
  return (
    <>
      <HeroSection
        title="Alle diensten — op maat voor uw situatie."
        subtitle="Of u nu alleen wilt opruimen of de complete verhuizing uit handen wilt geven: wij hebben een passende dienst."
        ctaPrimary={{ label: 'Gratis intake aanvragen', href: '/contact' }}
        ctaSecondary={{ label: 'Bekijk pakketten', href: '/pakketten' }}
        compact
      />

      <section className="section bg-white" aria-labelledby="diensten-heading">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#C8965A] font-semibold text-sm uppercase tracking-widest mb-3">
              Wat wij bieden
            </p>
            <h2 id="diensten-heading" className="text-[#1B3A5C] mb-4">
              Zes gespecialiseerde diensten
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Elke dienst kunt u los afnemen of combineren via een van onze pakketten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/diensten/${service.slug}`}
                className="group bg-[#FAF8F5] rounded-xl p-7 border border-[#E2DDD8] hover:shadow-[0_6px_24px_rgba(27,58,92,0.12)] hover:border-[#C8965A]/40 transition-all duration-200 no-underline block"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{service.icoon}</div>
                <h3 className="text-[#1B3A5C] mb-2 group-hover:text-[#C8965A] transition-colors">
                  {service.titel}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">{service.subtitel}</p>
                <span className="inline-flex items-center gap-1 text-[#C8965A] font-semibold text-sm group-hover:gap-2 transition-all">
                  Lees meer
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
