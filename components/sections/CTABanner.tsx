import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31 XX XXX XX XX';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showPhone?: boolean;
}

export function CTABanner({
  title = 'Twijfelt u? Begin met een gratis downsizing check.',
  subtitle = 'Geen verplichtingen. We luisteren, denken mee en geven een eerlijk advies. Geheel vrijblijvend.',
  ctaLabel = 'Gratis Downsizing Check aanvragen',
  ctaHref = '/contact',
  showPhone = true,
}: CTABannerProps) {
  return (
    <section
      className="section bg-[#1B3A5C]"
      aria-labelledby="cta-banner-heading"
    >
      <div className="container text-center">
        <p className="text-[#C8965A] font-semibold text-sm uppercase tracking-widest mb-4">
          Vrijblijvend contact
        </p>
        <h2
          id="cta-banner-heading"
          className="text-white mb-5 max-w-2xl mx-auto"
        >
          {title}
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
          {showPhone && (
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-white border-2 border-white/40 hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 no-underline min-h-[56px]"
              aria-label={`Bel direct: ${PHONE}`}
            >
              <Phone size={20} aria-hidden="true" />
              {PHONE}
            </a>
          )}
        </div>

        <p className="mt-6 text-white/50 text-sm">
          Reactie binnen 24 uur op werkdagen &middot; Ma–vr 09:00–17:30
        </p>
      </div>
    </section>
  );
}
