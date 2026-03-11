import { Shield, Lock, UserCheck, Award } from 'lucide-react';
import { SectionHeader } from '@/components/ui/Card';

const trustItems = [
  {
    icon: Lock,
    titel: 'Volledig discreet',
    tekst:
      'Uw situatie en bezittingen behandelen wij met de grootst mogelijke vertrouwelijkheid. Wij bespreken niets zonder uw toestemming.',
  },
  {
    icon: Shield,
    titel: 'Aansprakelijkheidsverzekering',
    tekst:
      'Wij en onze partners zijn volledig verzekerd. U bent beschermd bij eventuele schade tijdens het traject.',
  },
  {
    icon: UserCheck,
    titel: 'U houdt altijd de regie',
    tekst:
      'Niets wordt besloten of uitgevoerd zonder uw akkoord. Wij adviseren — u beslist. Uw tempo, uw keuzes.',
  },
  {
    icon: Award,
    titel: 'Ervaren partnernetwerk',
    tekst:
      'Wij werken met geselecteerde verhuizers, schoonmaakbedrijven en veilinghuizen die onze standaard van kwaliteit en respect delen.',
  },
];

export function TrustPrivacySection() {
  return (
    <section className="section bg-[#FAF8F5]" aria-labelledby="trust-heading">
      <div className="container">
        <SectionHeader
          label="Vertrouwen & privacy"
          title="Wij werken discreet, zorgvuldig en met respect."
          subtitle="Dat is geen marketingtaal — het is hoe wij elk traject aanpakken."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustItems.map(({ icon: Icon, titel, tekst }) => (
            <div
              key={titel}
              className="bg-white rounded-xl p-7 border border-[#E2DDD8] shadow-[0_2px_16px_rgba(27,58,92,0.06)] flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-[#1B3A5C]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[#1B3A5C] mb-2">{titel}</h3>
                <p className="text-[#64748B] leading-relaxed">{tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
