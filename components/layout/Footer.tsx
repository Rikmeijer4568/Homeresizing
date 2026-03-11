import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31655370936';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@homeresizing.com';
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '31655370936';

const serviceLinks = [
  { label: 'Downsizing & ontspullen', href: '/diensten/downsizing-ontspullen' },
  { label: 'Verhuisregie A–Z', href: '/diensten/verhuisregie' },
  { label: 'Inpakken & inrichten', href: '/diensten/inpakken-uitpakken' },
  { label: 'Digitaliseren', href: '/diensten/digitaliseren' },
];

const infoLinks = [
  { label: 'Werkwijze', href: '/werkwijze' },
  { label: 'Pakketten & prijzen', href: '/pakketten' },
  { label: 'Voor senioren', href: '/voor-wie/senioren' },
  { label: 'Voor familie', href: '/voor-wie/familie' },
  { label: 'Reviews & verhalen', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Over ons', href: '/over-ons' },
];

const legalLinks = [
  { label: 'Privacy­verklaring', href: '/privacy' },
  { label: 'Cookie­beleid', href: '/cookies' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
];

export function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-white font-bold text-xl no-underline hover:text-[#C8965A] transition-colors mb-3"
            >
              Home Resizing
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Zorgeloos kleiner wonen. Wij begeleiden uw verhuizing van A tot Z — discreet,
              respectvol en volledig ontzorgd.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {['Discreet', 'Empathisch', 'A–Z regie', 'Ervaren'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs border border-white/30 text-white/80 px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Diensten</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Informatie</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors no-underline"
                >
                  <Phone size={15} aria-hidden="true" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hallo%2C%20ik%20wil%20graag%20meer%20informatie%20over%20Home%20Resizing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors no-underline"
                  aria-label="Stuur een WhatsApp bericht"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors no-underline"
                >
                  <Mail size={15} aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Werkgebied: heel Nederland</span>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-white/50 text-xs">
                Ma–vr: 09:00–17:30
                <br />
                Reactie binnen 24 uur op werkdagen
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Home Resizing · KvK: [XXXXXXXX] · BTW: [NL XXXXXXXXXX B01]
          </p>
          <nav aria-label="Juridisch menu">
            <ul className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-xs hover:text-white/80 transition-colors no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
