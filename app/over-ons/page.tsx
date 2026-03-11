import type { Metadata } from 'next';
import { CheckCircle, MapPin } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeader } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Leer ons kennen. Home Resizing is opgericht vanuit de overtuiging dat iedereen in een nieuwe levensfase recht heeft op een respectvolle, zorgeloze overgang naar een nieuwe woonsituatie.',
};

const kernwaarden = [
  {
    titel: 'Discreet',
    beschrijving:
      'Uw situatie en bezittingen behandelen we vertrouwelijk. Altijd.',
  },
  {
    titel: 'Respectvol',
    beschrijving:
      'We luisteren, nemen de tijd en respecteren uw tempo en keuzes.',
  },
  {
    titel: 'Doorpakken',
    beschrijving:
      'Warmte en empathie én een heldere aanpak. We organiseren en regelen — tot het klaar is.',
  },
];

export default function OverOnsPage() {
  return (
    <>
      <HeroSection
        title="Persoonlijk, professioneel en oprecht betrokken."
        subtitle="Home Resizing is opgericht vanuit de overtuiging dat iedereen in een nieuwe levensfase recht heeft op een respectvolle, zorgeloze overgang — hoe groot of klein de verhuizing ook is."
        ctaPrimary={{ label: 'Maak kennis via een gratis gesprek', href: '/contact' }}
        compact
      />

      {/* Oprichter */}
      <section className="section bg-white" aria-labelledby="oprichter-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Foto placeholder */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(27,58,92,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format"
                  alt="Oprichter van Home Resizing"
                  className="w-full h-[480px] object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#C8965A] text-white rounded-xl p-4">
                <p className="font-bold text-sm">[Naam]</p>
                <p className="text-white/80 text-xs">Oprichter & Directeur</p>
              </div>
            </div>

            {/* Verhaal */}
            <div>
              <SectionHeader
                id="oprichter-heading"
                label="Mijn verhaal"
                title="Waarom ik dit doe"
              />
              <div className="space-y-4 text-[#64748B] leading-relaxed mb-8">
                <p>
                  [Persoonlijk verhaal van de oprichter — bijv. eigen ervaring met verhuizing van
                  een ouder, motivatie voor het starten van dit bedrijf, wat hen drijft.]
                </p>
                <p>
                  Ik heb gezien hoe overweldigend het kan zijn — voor de persoon zelf, maar ook
                  voor de familie die machteloos toekijkt. Mijn missie: dat niemand dit alleen
                  hoeft te doen.
                </p>
                <p>
                  Met Home Resizing bied ik de begeleiding die ik destijds zelf had willen hebben:
                  professioneel, persoonlijk en volledig op uw tempo.
                </p>
              </div>

              {/* Kernwaarden */}
              <div className="space-y-4">
                {kernwaarden.map(({ titel, beschrijving }) => (
                  <div key={titel} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5 text-[#C8965A]"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-semibold text-[#1C2B3A]">{titel}: </span>
                      <span className="text-[#64748B]">{beschrijving}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicegebied */}
      <section className="section bg-[#FAF8F5]" aria-labelledby="servicegebied-heading">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <MapPin size={32} className="text-[#C8965A]" aria-hidden="true" />
          </div>
          <h2 id="servicegebied-heading" className="text-[#1B3A5C] mb-4">
            Werkgebied: heel Nederland
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Wij zijn actief in heel Nederland. Of u nu in Amsterdam, Eindhoven, Groningen of
            Zeeland woont — neem contact op en we bespreken de mogelijkheden. Reiskosten buiten
            de Randstad worden vooraf afgesproken en opgenomen in de offerte.
          </p>
        </div>
      </section>

      <CTABanner
        title="Maak kennis. Geheel vrijblijvend."
        subtitle="Een gesprek van 15–30 minuten — telefonisch of bij u thuis. Wij luisteren en denken mee."
        ctaLabel="Plan een kennismakingsgesprek"
      />
    </>
  );
}
