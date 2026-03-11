import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31 XX XXX XX XX';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  compact?: boolean;
}

export function HeroSection({
  title = 'Zorgeloos kleiner wonen — zonder stress over spullen.',
  subtitle = 'Wij begeleiden en regelen uw verhuizing van A tot Z: van uitzoeken en doneren tot inpakken, verhuizen en uw nieuwe woning volledig ingericht opleveren.',
  ctaPrimary = { label: 'Gratis Downsizing Check aanvragen', href: '/contact' },
  ctaSecondary,
  imageSrc = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format',
  imageAlt = 'Warm gesprek aan keukentafel',
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative bg-[#FAF8F5] ${compact ? 'pt-28 pb-16' : 'pt-32 pb-20'}`}
      aria-labelledby="hero-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-[#C8965A] font-semibold text-sm uppercase tracking-widest mb-4">
              Verhuisregie voor senioren · Heel Nederland
            </p>
            <h1
              id="hero-heading"
              className="text-[#1B3A5C] mb-6"
            >
              {title}
            </h1>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Button href={ctaPrimary.href} variant="primary" size="lg">
                {ctaPrimary.label}
              </Button>
              {ctaSecondary ? (
                <Button href={ctaSecondary.href} variant="outline" size="lg">
                  {ctaSecondary.label}
                </Button>
              ) : (
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#1B3A5C] hover:text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 no-underline min-h-[56px]"
                  aria-label={`Bel direct: ${PHONE}`}
                >
                  <Phone size={20} aria-hidden="true" />
                  Bel direct
                </a>
              )}
            </div>

            {/* Discrete label */}
            <div className="mt-8 flex items-center gap-2 text-[#64748B] text-sm">
              <span aria-hidden="true" className="text-[#C8965A]">✓</span>
              <span>Gratis en vrijblijvend gesprek</span>
              <span className="text-[#E2DDD8]">·</span>
              <span aria-hidden="true" className="text-[#C8965A]">✓</span>
              <span>Reactie binnen 24 uur</span>
              <span className="text-[#E2DDD8]">·</span>
              <span aria-hidden="true" className="text-[#C8965A]">✓</span>
              <span>Discreet</span>
            </div>
          </div>

          {/* Image */}
          {!compact && (
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(27,58,92,0.16)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-[420px] object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* Floating trust card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-[0_4px_20px_rgba(27,58,92,0.12)] p-4 max-w-[220px]">
                <p className="text-[#C8965A] font-bold text-2xl">100%</p>
                <p className="text-[#1C2B3A] font-semibold text-sm">Tevreden klanten</p>
                <p className="text-[#64748B] text-xs mt-1">&quot;Eindelijk rust na 40 jaar.&quot;</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
