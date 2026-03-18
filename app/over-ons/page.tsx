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
        subtitle="Home Resizing is opgericht vanuit de overtuiging dat iedereen op een moment in zijn leven de wens krijgt om anders te willen wonen. Kleiner, overzichtelijker, centraler — maar wel met een groot gevoel van comfort. Hoe groot of klein deze verandering ook is, het brengt altijd veel met zich mee. Voor veel mensen is de gedachte aan alles wat bij een verhuizing komt kijken een reden om af te haken en met een gevoel van spijt achter te blijven in de oude situatie. Wij staan klaar om u hiermee te helpen en uw wensen te verwezenlijken."
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
                  src="/images/Catharina.jpg"
                  alt="Catharina, oprichter van Home Resizing"
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
                  Zelf woon ik in een appartement met een zeer bescheiden afmeting. Ik heb hier de
                  spullen om me heen die ik graag wil hebben, zoals foto's van de kinderen, boeken
                  waar ik aan gehecht ben, sieraden, kookspullen en enkele andere zaken. Dit geeft
                  een heerlijk gevoel van vrijheid zonder iets te missen.
                </p>
                <p>
                  Wat naast het gevoel van vrijheid het extra prettig maakt, is dat ik leef in de
                  wetenschap dat mijn kinderen later niet opgezadeld zullen worden met een erfenis
                  van een jarenlange verzameling aan spullen.
                </p>
                <p>
                  Als voorbeeld denk ik aan mijn moeder. Ze heeft nooit de stap gemaakt om op te
                  ruimen en is haar hele leven blijven verzamelen en vasthouden aan het oude. Toen
                  ze van een groot vrijstaand huis naar een kleiner appartement ging verhuizen,
                  heeft ze bijna niets weggedaan. Hierdoor was haar nieuwe appartement te vol met
                  te grote meubels. De spullen waar echt geen ruimte voor was, heeft ze opgeslagen
                  in een garage. Bij haar overlijden moesten wij, mijn broer, zus en ik alsnog
                  haar verzameling opruimen. Spullen die jarenlang gekoesterd werden moesten
                  opeens weg. We moesten in een te korte tijd te veel beslissingen nemen.
                </p>
                <p>
                  Op zo'n moment is het prettig om hulp te hebben. Iemand die hierin onafhankelijk
                  en professioneel betrokken is. Een hulp bij het maken van beslissingen en die
                  eventueel het contact heeft met de diverse partijen. Na de verhuizing het gevoel
                  het goed gedaan te hebben en geen overhaaste beslissingen te hebben genomen.
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
