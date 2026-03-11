import type { Metadata } from 'next';
import { CheckCircle, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31655370936';
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/homeresizing';

export const metadata: Metadata = {
  title: 'Bedankt voor uw aanvraag',
  description: 'Uw intake is ontvangen. We nemen binnen 24 uur contact met u op.',
  robots: { index: false },
};

const vervolgStappen = [
  'Uw aanvraag is ontvangen — bedankt!',
  'Wij nemen binnen 24 uur telefonisch of per e-mail contact met u op',
  'We plannen een vrijblijvend kennismakingsgesprek (15–30 min)',
  'U ontvangt na het gesprek een Downsizing Plan en indicatie',
];

export default function BedanktPage() {
  return (
    <section className="min-h-screen bg-[#FAF8F5] flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Succes icoon */}
        <div className="w-20 h-20 rounded-full bg-[#C8965A]/15 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-[#C8965A]" aria-hidden="true" />
        </div>

        <h1 className="text-[#1B3A5C] mb-4">Bedankt! Uw aanvraag is ontvangen.</h1>
        <p className="text-[#64748B] text-lg leading-relaxed mb-10">
          We nemen binnen <strong className="text-[#1C2B3A]">24 uur op werkdagen</strong> contact
          met u op — per telefoon of e-mail, afhankelijk van uw voorkeur.
        </p>

        {/* Vervolgstappen */}
        <div className="bg-white rounded-2xl border border-[#E2DDD8] shadow-[0_4px_24px_rgba(27,58,92,0.08)] p-8 mb-8 text-left">
          <h2 className="text-[#1B3A5C] mb-5 text-center">Wat zijn de volgende stappen?</h2>
          <ol className="space-y-4">
            {vervolgStappen.map((stap, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#C8965A] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[#1C2B3A] leading-relaxed">{stap}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Calendly embed placeholder */}
        <div className="bg-white rounded-2xl border border-[#E2DDD8] p-8 mb-8">
          <h2 className="text-[#1B3A5C] mb-3">Zet alvast een gesprek in de agenda</h2>
          <p className="text-[#64748B] text-sm mb-5">
            U kunt ook direct een moment kiezen dat u schikt.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1B3A5C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#122840] transition-colors no-underline min-h-[48px]"
          >
            Kies een moment via Calendly
          </a>
          <p className="text-[#64748B] text-xs mt-3">Opent in een nieuw tabblad</p>
        </div>

        {/* Download checklist */}
        <div className="bg-[#1B3A5C]/5 border border-[#1B3A5C]/15 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 justify-center mb-3">
            <Download size={20} className="text-[#C8965A]" aria-hidden="true" />
            <h3 className="text-[#1B3A5C] text-base">Gratis: Downsizing Checklist</h3>
          </div>
          <p className="text-[#64748B] text-sm mb-4">
            Download onze checklist om alvast na te denken over uw spullen en situatie.
          </p>
          <a
            href="/downloads/downsizing-checklist.pdf"
            className="inline-flex items-center gap-2 text-[#C8965A] font-semibold text-sm hover:underline"
          >
            <Download size={14} aria-hidden="true" />
            Download checklist (PDF) — binnenkort beschikbaar
          </a>
        </div>

        {/* Bel direct */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-[#1B3A5C] text-[#1B3A5C] font-semibold px-6 py-3 rounded-lg hover:bg-[#1B3A5C] hover:text-white transition-colors no-underline min-h-[48px]"
          >
            <Phone size={18} aria-hidden="true" />
            Bel ons direct: {PHONE}
          </a>
          <Button href="/" variant="ghost">
            Terug naar homepagina
          </Button>
        </div>
      </div>
    </section>
  );
}
