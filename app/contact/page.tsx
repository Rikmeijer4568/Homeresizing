import type { Metadata } from 'next';
import { Phone, Mail, Clock } from 'lucide-react';
import { IntakeForm } from '@/components/forms/IntakeForm';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+31655370936';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@homeresizing.com';

export const metadata: Metadata = {
  title: 'Contact & Intake aanvragen',
  description:
    'Vraag een gratis Downsizing Check aan of plan een kennismakingsgesprek. Geen verplichtingen. Reactie binnen 24 uur op werkdagen.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header boven de vouw */}
      <section className="bg-[#FAF8F5] pt-32 pb-12" aria-labelledby="contact-heading">
        <div className="container text-center">
          <p className="text-[#C8965A] font-semibold text-sm uppercase tracking-widest mb-3">
            Vrijblijvend · Geen verplichtingen
          </p>
          <h1 id="contact-heading" className="text-[#1B3A5C] mb-4">
            Laten we kennismaken.
          </h1>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto mb-8">
            Een gesprek van 15–30 minuten — bij u thuis of telefonisch. We luisteren naar uw
            situatie en geven eerlijk advies. Geheel vrijblijvend.
          </p>

          {/* Directe contactopties */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-3 bg-[#1B3A5C] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#122840] transition-colors no-underline min-h-[56px] text-lg"
            >
              <Phone size={22} aria-hidden="true" />
              Bel direct: {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-3 border-2 border-[#1B3A5C] text-[#1B3A5C] font-semibold px-8 py-4 rounded-xl hover:bg-[#1B3A5C] hover:text-white transition-colors no-underline min-h-[56px] text-lg"
            >
              <Mail size={22} aria-hidden="true" />
              Stuur een e-mail
            </a>
          </div>
          <p className="text-[#64748B] text-sm flex items-center justify-center gap-2">
            <Clock size={14} aria-hidden="true" />
            Reactie binnen 24 uur op werkdagen · Ma–vr 09:00–17:30
          </p>
        </div>
      </section>

      {/* Formulier */}
      <section className="section bg-white" aria-labelledby="formulier-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 id="formulier-heading" className="text-[#1B3A5C] mb-3">
                Of vul het intakeformulier in
              </h2>
              <p className="text-[#64748B]">
                5 korte stappen · Duurt ca. 3 minuten · U ontvangt binnen 24 uur een reactie
              </p>
            </div>
            <IntakeForm />
          </div>
        </div>
      </section>
    </>
  );
}
