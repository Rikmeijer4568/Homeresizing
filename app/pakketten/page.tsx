import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { PackageCards } from '@/components/sections/PackageCards';
import { CTABanner } from '@/components/sections/CTABanner';
import { addOns } from '@/lib/content/packages';
import { SectionHeader } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Pakketten & prijzen',
  description:
    'Transparante prijzen voor downsizing en verhuisregie. Bronze, Silver of Gold — kies wat bij uw situatie past. Altijd een vaste offerte vooraf.',
};

export default function PakkettenPage() {
  return (
    <>
      <HeroSection
        title="U betaalt voor rust, overzicht en regie — niet voor uren chaos."
        subtitle="Transparante prijsranges. Een vaste offerte vooraf. Geen verrassingen achteraf."
        ctaPrimary={{ label: 'Vraag een indicatie aan', href: '/contact' }}
        ctaSecondary={{ label: 'Plan een kennismakingsgesprek', href: '/contact' }}
        compact
      />

      <PackageCards showHeader showPrijsfactoren />

      {/* Add-ons */}
      <section className="section bg-white" aria-labelledby="addons-heading">
        <div className="container">
          <SectionHeader
            id="addons-heading"
            label="Modulair uitbreiden"
            title="Losse add-ons"
            subtitle="Elk pakket is uit te breiden met losse modules — op uw wensen en behoefte."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                className="bg-[#FAF8F5] rounded-xl p-6 border border-[#E2DDD8] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C8965A]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8965A] font-bold text-sm">+</span>
                </div>
                <div>
                  <h3 className="text-[#1B3A5C] text-base mb-1">{addon.naam}</h3>
                  <p className="text-[#64748B] text-sm mb-1">{addon.beschrijving}</p>
                  <p className="text-[#C8965A] text-xs font-semibold">{addon.prijs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparantie garantie */}
      <section className="section-sm bg-[#FAF8F5]" aria-labelledby="transparantie-heading">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 id="transparantie-heading" className="text-[#1B3A5C] mb-4">
            Onze transparantiebelofte
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            U ontvangt altijd een <strong className="text-[#1C2B3A]">gedetailleerde offerte</strong> vóórdat u akkoord
            geeft. Geen vage uurtarieven, geen verborgen kosten. De prijsrange geeft de bandbreedte aan
            op basis van woninggrootte en diensten — uw offerte is altijd maatwerkprijs.
          </p>
        </div>
      </section>

      <CTABanner
        title="Wilt u weten wat uw situatie kost?"
        subtitle="Vul ons korte intakeformulier in en u ontvangt binnen 24 uur een indicatie."
        ctaLabel="Vraag een indicatie aan"
      />
    </>
  );
}
