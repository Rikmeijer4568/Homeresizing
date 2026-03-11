'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31 XX XXX XX XX';

export function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#E2DDD8] shadow-[0_-2px_16px_rgba(27,58,92,0.10)] px-4 py-3 flex gap-3"
      role="complementary"
      aria-label="Snelle acties"
    >
      <a
        href={`tel:${PHONE.replace(/\s/g, '')}`}
        className="flex-1 flex items-center justify-center gap-2 bg-[#1B3A5C] text-white font-semibold rounded-lg py-3 min-h-[48px] no-underline hover:bg-[#122840] transition-colors"
        aria-label={`Bel direct: ${PHONE}`}
      >
        <Phone size={20} aria-hidden="true" />
        <span>Bel direct</span>
      </a>
      <Button href="/contact" variant="primary" fullWidth className="flex-1">
        Gratis Check
      </Button>
    </div>
  );
}
