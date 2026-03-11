import { Shield, Heart, Star, Users } from 'lucide-react';

const items = [
  {
    icon: Shield,
    label: 'Discreet',
    sub: 'Volledige vertrouwelijkheid',
  },
  {
    icon: Heart,
    label: 'Empathisch',
    sub: 'Aandacht voor uw tempo',
  },
  {
    icon: Star,
    label: 'Alles-in-één regie',
    sub: 'Eén aanspreekpunt',
  },
  {
    icon: Users,
    label: 'Ervaren partners',
    sub: 'Betrouwbaar netwerk',
  },
];

interface TrustBarProps {
  className?: string;
}

export function TrustBar({ className = '' }: TrustBarProps) {
  return (
    <section
      className={`bg-[#1B3A5C] py-6 ${className}`}
      aria-label="Onze kernwaarden"
    >
      <div className="container">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
          {items.map(({ icon: Icon, label, sub }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-white"
            >
              <Icon
                size={20}
                className="flex-shrink-0 text-[#C8965A]"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-white/60 text-xs">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
