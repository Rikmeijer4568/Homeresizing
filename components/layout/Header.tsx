'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navItems = [
  { label: 'Werkwijze', href: '/werkwijze' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Pakketten', href: '/pakketten' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Over ons', href: '/over-ons' },
];

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31 XX XXX XX XX';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_2px_16px_rgba(27,58,92,0.10)] py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col no-underline group"
          aria-label="Home Resizing — naar de homepage"
        >
          <span className="text-[#1B3A5C] font-bold text-xl leading-none group-hover:text-[#C8965A] transition-colors">
            Home Resizing
          </span>
          <span className="text-[#64748B] text-xs leading-tight hidden sm:block">
            Zorgeloos kleiner wonen. Wij regelen alles.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Hoofdmenu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-[#1C2B3A] text-sm font-medium hover:text-[#1B3A5C] hover:bg-[#FAF8F5] rounded-lg transition-colors no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-[#1B3A5C] font-semibold text-sm hover:text-[#C8965A] transition-colors no-underline min-h-[44px] px-3"
            aria-label={`Bel direct: ${PHONE}`}
          >
            <Phone size={16} aria-hidden="true" />
            <span>{PHONE}</span>
          </a>
          <Button href="/contact" variant="primary" size="sm">
            Gratis Downsizing Check
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-[#1B3A5C] hover:bg-[#FAF8F5] min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-[#E2DDD8] shadow-lg"
        >
          <nav className="container py-4 flex flex-col gap-1" aria-label="Mobiel menu">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-[#1C2B3A] font-medium hover:bg-[#FAF8F5] hover:text-[#1B3A5C] rounded-lg transition-colors no-underline min-h-[44px] flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-[#E2DDD8] pt-4">
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-4 py-3 text-[#1B3A5C] font-semibold hover:bg-[#FAF8F5] rounded-lg no-underline min-h-[44px]"
              >
                <Phone size={20} aria-hidden="true" />
                {PHONE}
              </a>
              <Button
                href="/contact"
                variant="primary"
                fullWidth
                onClick={() => setMenuOpen(false)}
              >
                Gratis Downsizing Check
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
