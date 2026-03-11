import { CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader, Badge } from '@/components/ui/Card';
import { packages } from '@/lib/content/packages';

interface PackageCardsProps {
  showHeader?: boolean;
  showPrijsfactoren?: boolean;
}

const borderColors = {
  bronze: 'border-[#CD7F32]',
  silver: 'border-[#9E9E9E]',
  gold: 'border-[#C8965A]',
};

const accentColors = {
  bronze: 'text-[#CD7F32]',
  silver: 'text-[#9E9E9E]',
  gold: 'text-[#C8965A]',
};

const bgColors = {
  bronze: 'bg-[#CD7F32]/10',
  silver: 'bg-[#9E9E9E]/10',
  gold: 'bg-[#C8965A]/10',
};

export function PackageCards({ showHeader = true, showPrijsfactoren = false }: PackageCardsProps) {
  return (
    <section className="section bg-[#FAF8F5]" aria-labelledby="packages-heading">
      <div className="container">
        {showHeader && (
          <SectionHeader
            label="Pakketten"
            title="Kies wat bij uw situatie past"
            subtitle="Transparante prijzen. Geen verrassingen. U betaalt voor rust, overzicht en volledige regie — niet voor losse uren chaos."
            centered
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-xl border-2 ${borderColors[pkg.kleur]} shadow-[0_2px_16px_rgba(27,58,92,0.08)] flex flex-col relative overflow-hidden`}
            >
              {/* Popular badge */}
              {pkg.populair && (
                <div className="absolute top-4 right-4">
                  <Badge variant="accent">Meest gekozen</Badge>
                </div>
              )}

              {/* Header */}
              <div className={`${bgColors[pkg.kleur]} px-6 pt-6 pb-5`}>
                <p className={`font-bold text-lg ${accentColors[pkg.kleur]} uppercase tracking-wide`}>
                  {pkg.naam}
                </p>
                <p className="text-[#1B3A5C] font-bold text-2xl mt-1">{pkg.prijsRange}</p>
                <p className="text-[#64748B] text-sm mt-1">{pkg.doelgroep}</p>
              </div>

              {/* Body */}
              <div className="px-6 py-6 flex-1">
                <p className="text-[#64748B] text-sm mb-5 leading-relaxed">{pkg.beschrijving}</p>
                <ul className="space-y-2.5">
                  {pkg.inbegrepen.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${accentColors[pkg.kleur]}`}
                        aria-hidden="true"
                      />
                      <span className="text-[#1C2B3A] text-sm">{item}</span>
                    </li>
                  ))}
                  {pkg.nietInbegrepen?.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 opacity-40">
                      <X size={16} className="flex-shrink-0 mt-0.5 text-[#64748B]" aria-hidden="true" />
                      <span className="text-[#64748B] text-sm line-through">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="px-6 pb-6">
                <Button
                  href={`/contact?pakket=${pkg.id}`}
                  variant={pkg.populair ? 'primary' : 'outline'}
                  fullWidth
                >
                  Past dit bij mij?
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#64748B] text-sm">
          Alle pakketten starten met een{' '}
          <strong className="text-[#1B3A5C]">gratis intake</strong> en een{' '}
          <strong className="text-[#1B3A5C]">vaste offerte</strong> vooraf.
          Geen verplichtingen tot u akkoord gaat.
        </p>

        {showPrijsfactoren && (
          <div className="mt-14 bg-white rounded-xl p-8 border border-[#E2DDD8] shadow-[0_2px_16px_rgba(27,58,92,0.06)]">
            <h3 className="text-[#1B3A5C] mb-6">Wat beïnvloedt de prijs?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { factor: 'Woninggrootte', uitleg: 'Aantal kamers en verdiepingen' },
                { factor: 'Hoeveelheid spullen', uitleg: 'Omvang van de inboedel' },
                { factor: 'Afstand', uitleg: 'Afstand tussen huidig en nieuw adres' },
                { factor: 'Tijdlijn', uitleg: 'Ruime planning of spoedsituatie' },
                { factor: 'Extra diensten', uitleg: 'Digitalisering, verkoop, schoonmaak' },
                { factor: 'Toegankelijkheid', uitleg: 'Trappen, lift, parkeren' },
              ].map(({ factor, uitleg }) => (
                <div key={factor} className="flex items-start gap-3">
                  <span className="text-[#C8965A] font-bold text-lg" aria-hidden="true">·</span>
                  <div>
                    <p className="font-semibold text-[#1C2B3A] text-sm">{factor}</p>
                    <p className="text-[#64748B] text-xs">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
