import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/Card';
import { testimonials } from '@/lib/content/testimonials';

interface TestimonialsSectionProps {
  count?: number;
  showLink?: boolean;
  className?: string;
}

export function TestimonialsSection({
  count = 3,
  showLink = true,
  className = '',
}: TestimonialsSectionProps) {
  const items = testimonials.slice(0, count);

  return (
    <section
      className={`section bg-white ${className}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <SectionHeader
          label="Wat klanten zeggen"
          title="Verhalen die ertoe doen"
          subtitle="Elke verhuizing is persoonlijk. Dit zijn ervaringen van mensen die wij mochten begeleiden."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {items.map((item) => (
            <figure
              key={item.id}
              className="bg-[#FAF8F5] rounded-xl p-7 border border-[#E2DDD8] flex flex-col"
            >
              <Quote
                size={28}
                className="text-[#C8965A] mb-4 flex-shrink-0"
                aria-hidden="true"
              />
              <blockquote className="flex-1">
                <p className="text-[#1C2B3A] leading-relaxed italic mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption>
                <div className="flex items-center gap-3">
                  {/* Avatar initials */}
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

        {showLink && (
          <div className="text-center">
            <Button href="/reviews" variant="outline">
              Lees alle verhalen
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
