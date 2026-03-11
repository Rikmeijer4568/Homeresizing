import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/Card';

const oplossingen = [
  'Inventariseren van uw complete inboedel',
  'Sorteren en labelen op uw tempo',
  'Regelen van donaties aan goede doelen',
  'Coördineren van verkoop van waardevolle items',
  'Digitaliseren van foto\'s, dia\'s en documenten',
  'Volledige verhuisplanning en -coördinatie',
  'Professionele inpakservice',
  'Uitpakken en inrichten van uw nieuwe woning',
  'Bezemschone oplevering van bronwoning',
  'Nazorgbezoek en afronding',
];

export function SolutionSection() {
  return (
    <section className="section bg-[#FAF8F5]" aria-labelledby="solution-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(27,58,92,0.10)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format"
                alt="Nette woning na downsizing"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="Wat wij voor u regelen"
              title="Eén aanspreekpunt. Alles geregeld."
              subtitle="Wij nemen de organisatie volledig over, zodat u zich kunt richten op wat echt belangrijk is: de overgang naar uw nieuwe thuis."
            />

            <ul className="space-y-3 mb-8">
              {oplossingen.map((item) => (
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

            <Button href="/diensten" variant="outline" size="md">
              Bekijk alle diensten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
