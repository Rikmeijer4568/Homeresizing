import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Clock, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Button } from '@/components/ui/Button';
import { services } from '@/lib/content/services';
import type { FAQItem } from '@/lib/content/faq';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.titel,
    description: service.beschrijving,
  };
}

export default async function DienstDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  // Convert service FAQ to FAQItem format
  const faqItems: FAQItem[] = service.faq.map((f, i) => ({
    id: `${slug}-faq-${i}`,
    vraag: f.vraag,
    antwoord: f.antwoord,
    categorie: 'praktisch',
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.titel,
    description: service.beschrijving,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Home Resizing',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        title={`${service.icoon} ${service.titel}`}
        subtitle={service.subtitel}
        ctaPrimary={{ label: 'Vraag een gratis intake aan', href: '/contact' }}
        ctaSecondary={{ label: 'Bekijk pakketten', href: '/pakketten' }}
        compact
      />

      <section className="section bg-white">
        <div className="container">
          {/* Back link */}
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 text-[#64748B] text-sm hover:text-[#1B3A5C] no-underline mb-10 transition-colors"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Terug naar alle diensten
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-[#1B3A5C] mb-4">Wat wij doen</h2>
              <ul className="space-y-3 mb-10">
                {service.watWeDoen.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="flex-shrink-0 mt-0.5 text-[#C8965A]"
                      aria-hidden="true"
                    />
                    <span className="text-[#1C2B3A]">{item}</span>
                  </li>
                ))}
              </ul>

              {faqItems.length > 0 && (
                <>
                  <h2 className="text-[#1B3A5C] mb-4">Veelgestelde vragen</h2>
                  <FAQAccordion items={faqItems} className="mb-8" />
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#FAF8F5] rounded-xl p-6 border border-[#E2DDD8]">
                <div className="flex items-center gap-2 mb-3">
                  <Users size={18} className="text-[#C8965A]" aria-hidden="true" />
                  <h3 className="text-[#1B3A5C] text-base">Voor wie?</h3>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">{service.voorWie}</p>
              </div>

              <div className="bg-[#FAF8F5] rounded-xl p-6 border border-[#E2DDD8]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} className="text-[#C8965A]" aria-hidden="true" />
                  <h3 className="text-[#1B3A5C] text-base">Doorlooptijd</h3>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">{service.duur}</p>
              </div>

              <div className="bg-[#1B3A5C] rounded-xl p-6 text-white">
                <h3 className="text-white text-base mb-2">Resultaat</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">{service.resultaat}</p>
                <Button href="/contact" variant="primary" fullWidth>
                  Intake aanvragen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
