import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31 XX XXX XX XX';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@homeresizing.nl';

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
