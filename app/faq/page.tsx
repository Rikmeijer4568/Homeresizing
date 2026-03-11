import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { faqItems } from '@/lib/content/faq';
import { SectionHeader } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen (FAQ)',
  description:
    'Antwoorden op de meest gestelde vragen over downsizing, verhuisregie, kosten, privacy en werkwijze van Home Resizing.',
};

const categorieen = [
  { key: 'aanpak', label: 'Onze aanpak' },
  { key: 'kosten', label: 'Kosten & offerte' },
  { key: 'privacy', label: 'Privacy & discretie' },
  { key: 'praktisch', label: 'Praktisch' },
  { key: 'algemeen', label: 'Algemeen' },
];

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.vraag,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.antwoord,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HeroSection
        title="Veelgestelde vragen — eerlijke antwoorden."
        subtitle="We beantwoorden de vragen die klanten ons het meest stellen. Staat uw vraag er niet bij? Bel of mail ons."
        ctaPrimary={{ label: 'Stel uw vraag direct', href: '/contact' }}
        compact
      />

      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container">
          <SectionHeader
            id="faq-heading"
            label="FAQ"
            title="Antwoorden op uw vragen"
            centered
          />

          <div className="max-w-3xl mx-auto">
            {categorieen.map(({ key, label }) => {
              const items = faqItems.filter((f) => f.categorie === key);
              if (items.length === 0) return null;
              return (
                <div key={key} className="mb-12">
                  <h2 className="text-[#C8965A] text-sm font-semibold uppercase tracking-widest mb-5">
                    {label}
                  </h2>
                  <FAQAccordion items={items} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Staat uw vraag er niet bij?"
        subtitle="Bel of mail ons direct — wij geven een eerlijk antwoord."
        ctaLabel="Neem contact op"
      />
    </>
  );
}
