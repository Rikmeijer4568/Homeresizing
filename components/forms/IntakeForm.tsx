'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronRight, ChevronLeft, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormData {
  // Stap 1
  naam: string;
  telefoon: string;
  email: string;
  rol: 'senior' | 'familie' | 'anders';
  // Stap 2
  postcode: string;
  plaats: string;
  woningtype: 'eengezinswoning' | 'appartement' | 'villa' | 'anders';
  kamers: '1-2' | '3-4' | '5-6' | '7+';
  tijdlijn: 'maand' | 'drie-maanden' | 'zes-plus' | 'onbekend';
  // Stap 3
  diensten: string[];
  // Stap 4
  trappen: boolean;
  lift: boolean;
  parkeren: boolean;
  opmerking: string;
  // Stap 5
  contactvoorkeur: 'bellen' | 'whatsapp' | 'email';
  dagdeel: 'ochtend' | 'middag' | 'avond' | 'geen-voorkeur';
  privacyAkkoord: boolean;
}

const DIENSTEN_OPTIES = [
  { value: 'ontspullen', label: 'Ontspullen & sorteren' },
  { value: 'doneren-afvoeren', label: 'Doneren & afvoeren' },
  { value: 'verkoop', label: 'Verkoop waardevolle items' },
  { value: 'inpakken', label: 'Inpakken & uitpakken' },
  { value: 'verhuiscoordinatie', label: 'Verhuiscoördinatie' },
  { value: 'inrichting', label: 'Inrichting nieuwe woning' },
  { value: 'digitaliseren', label: "Digitaliseren foto's & documenten" },
];

const STAP_LABELS = [
  'Wie bent u?',
  'Uw situatie',
  'Wat heeft u nodig?',
  'Extra info',
  'Voorkeur contact',
];

export function IntakeForm() {
  const [huidigStap, setHuidigStap] = useState(0);
  const [ingediend, setIngediend] = useState(false);
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    defaultValues: {
      diensten: [],
    },
  });

  const geselecteerdeDiensten = watch('diensten') as string[];

  const vorigeStap = () => setHuidigStap((s) => Math.max(0, s - 1));

  const volgendeStap = async () => {
    let fields: (keyof FormData)[] = [];
    if (huidigStap === 0) fields = ['naam', 'telefoon', 'email', 'rol'];
    if (huidigStap === 1) fields = ['postcode', 'plaats', 'woningtype', 'kamers', 'tijdlijn'];
    if (huidigStap === 4) fields = ['contactvoorkeur', 'dagdeel', 'privacyAkkoord'];

    const geldig = await trigger(fields);
    if (geldig) setHuidigStap((s) => Math.min(STAP_LABELS.length - 1, s + 1));
  };

  const onSubmit = async (data: FormData) => {
    setBezig(true);
    setFout(null);
    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : '/api/contact';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIngediend(true);
        window.location.href = '/bedankt';
      } else {
        setFout('Er is iets misgegaan. Probeer het opnieuw of bel ons direct.');
      }
    } catch {
      setFout('Er is iets misgegaan. Probeer het opnieuw of bel ons direct.');
    } finally {
      setBezig(false);
    }
  };

  if (ingediend) {
    return (
      <div className="text-center py-10">
        <CheckCircle size={48} className="text-[#C8965A] mx-auto mb-4" />
        <p className="text-[#1B3A5C] font-bold text-xl">Bedankt! We nemen snel contact op.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2DDD8] shadow-[0_4px_32px_rgba(27,58,92,0.10)] overflow-hidden">
      {/* Voortgang */}
      <div className="bg-[#1B3A5C] p-6">
        <div className="flex justify-between items-center mb-3">
          {STAP_LABELS.map((label, i) => (
            <div
              key={label}
              className={`flex items-center gap-1.5 text-xs ${
                i <= huidigStap ? 'text-white' : 'text-white/40'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  i < huidigStap
                    ? 'bg-[#C8965A] text-white'
                    : i === huidigStap
                    ? 'bg-white text-[#1B3A5C]'
                    : 'bg-white/20 text-white/40'
                }`}
              >
                {i < huidigStap ? '✓' : i + 1}
              </span>
              <span className="hidden sm:block">{label}</span>
            </div>
          ))}
        </div>
        <div className="w-full bg-white/20 rounded-full h-1.5">
          <div
            className="bg-[#C8965A] h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((huidigStap + 1) / STAP_LABELS.length) * 100}%` }}
            role="progressbar"
            aria-valuenow={huidigStap + 1}
            aria-valuemin={1}
            aria-valuemax={STAP_LABELS.length}
            aria-label={`Stap ${huidigStap + 1} van ${STAP_LABELS.length}: ${STAP_LABELS[huidigStap]}`}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="p-8">
          {/* STAP 1: Wie bent u? */}
          {huidigStap === 0 && (
            <fieldset>
              <legend className="text-[#1B3A5C] font-bold text-xl mb-6">Wie bent u?</legend>
              <div className="space-y-5">
                <div>
                  <label htmlFor="naam" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                    Naam <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="naam"
                    type="text"
                    autoComplete="name"
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] focus:border-transparent min-h-[48px]"
                    aria-describedby={errors.naam ? 'naam-error' : undefined}
                    aria-required="true"
                    {...register('naam', { required: 'Vul uw naam in' })}
                  />
                  {errors.naam && (
                    <p id="naam-error" role="alert" className="text-red-600 text-sm mt-1">
                      {errors.naam.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefoon" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                    Telefoonnummer <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="telefoon"
                    type="tel"
                    autoComplete="tel"
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] focus:border-transparent min-h-[48px]"
                    aria-describedby={errors.telefoon ? 'telefoon-error' : undefined}
                    aria-required="true"
                    {...register('telefoon', { required: 'Vul uw telefoonnummer in' })}
                  />
                  {errors.telefoon && (
                    <p id="telefoon-error" role="alert" className="text-red-600 text-sm mt-1">
                      {errors.telefoon.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] focus:border-transparent min-h-[48px]"
                    {...register('email')}
                  />
                </div>

                <fieldset>
                  <legend className="block text-[#1C2B3A] font-semibold text-sm mb-2">
                    Ik ben: <span className="text-red-600" aria-hidden="true">*</span>
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: 'senior', label: 'De senior zelf' },
                      { value: 'familie', label: 'Kind / familie' },
                      { value: 'anders', label: 'Anders' },
                    ].map(({ value, label }) => (
                      <label
                        key={value}
                        className="flex items-center gap-2 cursor-pointer px-4 py-2.5 border border-[#E2DDD8] rounded-lg hover:border-[#C8965A] transition-colors min-h-[44px]"
                      >
                        <input
                          type="radio"
                          value={value}
                          className="accent-[#C8965A]"
                          {...register('rol', { required: true })}
                        />
                        <span className="text-[#1C2B3A] text-sm">{label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </fieldset>
          )}

          {/* STAP 2: Situatie */}
          {huidigStap === 1 && (
            <fieldset>
              <legend className="text-[#1B3A5C] font-bold text-xl mb-6">Uw situatie</legend>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="postcode" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                      Postcode <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="postcode"
                      type="text"
                      autoComplete="postal-code"
                      className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] min-h-[48px]"
                      aria-required="true"
                      {...register('postcode', { required: 'Vul uw postcode in' })}
                    />
                    {errors.postcode && (
                      <p role="alert" className="text-red-600 text-sm mt-1">{errors.postcode.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="plaats" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                      Plaats <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="plaats"
                      type="text"
                      autoComplete="address-level2"
                      className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] min-h-[48px]"
                      aria-required="true"
                      {...register('plaats', { required: 'Vul uw plaats in' })}
                    />
                    {errors.plaats && (
                      <p role="alert" className="text-red-600 text-sm mt-1">{errors.plaats.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="woningtype" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                    Type woning
                  </label>
                  <select
                    id="woningtype"
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] min-h-[48px] bg-white"
                    {...register('woningtype')}
                  >
                    <option value="eengezinswoning">Eengezinswoning / rijtjeshuis</option>
                    <option value="appartement">Appartement</option>
                    <option value="villa">Villa / vrijstaand</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="kamers" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                    Aantal kamers (slaapkamers + woonkamer)
                  </label>
                  <select
                    id="kamers"
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] min-h-[48px] bg-white"
                    {...register('kamers')}
                  >
                    <option value="1-2">1–2 kamers</option>
                    <option value="3-4">3–4 kamers</option>
                    <option value="5-6">5–6 kamers</option>
                    <option value="7+">7 of meer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tijdlijn" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                    Gewenste tijdlijn
                  </label>
                  <select
                    id="tijdlijn"
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] min-h-[48px] bg-white"
                    {...register('tijdlijn')}
                  >
                    <option value="maand">Binnen 1 maand</option>
                    <option value="drie-maanden">Binnen 3 maanden</option>
                    <option value="zes-plus">6 maanden of later</option>
                    <option value="onbekend">Nog onbekend</option>
                  </select>
                </div>
              </div>
            </fieldset>
          )}

          {/* STAP 3: Diensten */}
          {huidigStap === 2 && (
            <fieldset>
              <legend className="text-[#1B3A5C] font-bold text-xl mb-2">
                Wat heeft u nodig?
              </legend>
              <p className="text-[#64748B] text-sm mb-6">Selecteer alles wat van toepassing is.</p>
              <div className="space-y-3">
                {DIENSTEN_OPTIES.map(({ value, label }) => (
                  <label
                    key={value}
                    className={`flex items-center gap-3 cursor-pointer px-5 py-4 border-2 rounded-xl transition-colors min-h-[56px] ${
                      geselecteerdeDiensten.includes(value)
                        ? 'border-[#C8965A] bg-[#C8965A]/5'
                        : 'border-[#E2DDD8] hover:border-[#C8965A]/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={value}
                      className="accent-[#C8965A] w-5 h-5"
                      {...register('diensten')}
                    />
                    <span className="text-[#1C2B3A] font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {/* STAP 4: Extra context */}
          {huidigStap === 3 && (
            <fieldset>
              <legend className="text-[#1B3A5C] font-bold text-xl mb-2">
                Extra informatie (optioneel)
              </legend>
              <p className="text-[#64748B] text-sm mb-6">
                Helpt ons om u beter voor te bereiden op het kennismakingsgesprek.
              </p>
              <div className="space-y-5">
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'trappen' as const, label: 'Er zijn trappen aanwezig' },
                    { name: 'lift' as const, label: 'Er is een lift beschikbaar' },
                    { name: 'parkeren' as const, label: 'Parkeren is mogelijk voor de deur' },
                  ].map(({ name, label }) => (
                    <label
                      key={name}
                      className="flex items-center gap-2 cursor-pointer min-h-[44px]"
                    >
                      <input
                        type="checkbox"
                        className="accent-[#C8965A] w-5 h-5"
                        {...register(name)}
                      />
                      <span className="text-[#1C2B3A] text-sm">{label}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label htmlFor="opmerking" className="block text-[#1C2B3A] font-semibold text-sm mb-1.5">
                    Aanvullende informatie of bijzonderheden
                  </label>
                  <textarea
                    id="opmerking"
                    rows={4}
                    maxLength={500}
                    placeholder="Bijv. de woning heeft een zolder met veel dozen, er is een groot antiek kabinet, mijn moeder heeft dementie en heeft begeleiding nodig..."
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] resize-none"
                    {...register('opmerking')}
                  />
                  <p className="text-[#64748B] text-xs mt-1">Max. 500 tekens</p>
                </div>
              </div>
            </fieldset>
          )}

          {/* STAP 5: Contactvoorkeur */}
          {huidigStap === 4 && (
            <fieldset>
              <legend className="text-[#1B3A5C] font-bold text-xl mb-6">
                Hoe mogen wij contact opnemen?
              </legend>
              <div className="space-y-6">
                <div>
                  <p className="text-[#1C2B3A] font-semibold text-sm mb-3">
                    Voorkeur contact <span className="text-red-600" aria-hidden="true">*</span>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: 'bellen', label: 'Bellen' },
                      { value: 'whatsapp', label: 'WhatsApp' },
                      { value: 'email', label: 'E-mail' },
                    ].map(({ value, label }) => (
                      <label
                        key={value}
                        className="flex items-center gap-2 cursor-pointer px-4 py-2.5 border border-[#E2DDD8] rounded-lg hover:border-[#C8965A] transition-colors min-h-[44px]"
                      >
                        <input
                          type="radio"
                          value={value}
                          className="accent-[#C8965A]"
                          {...register('contactvoorkeur', { required: true })}
                        />
                        <span className="text-[#1C2B3A] text-sm">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="dagdeel" className="block text-[#1C2B3A] font-semibold text-sm mb-2">
                    Voorkeur dagdeel
                  </label>
                  <select
                    id="dagdeel"
                    className="w-full border border-[#E2DDD8] rounded-lg px-4 py-3 text-[#1C2B3A] focus:outline-none focus:ring-2 focus:ring-[#C8965A] min-h-[48px] bg-white"
                    {...register('dagdeel')}
                  >
                    <option value="geen-voorkeur">Geen voorkeur</option>
                    <option value="ochtend">Ochtend (09:00–12:00)</option>
                    <option value="middag">Middag (12:00–17:00)</option>
                    <option value="avond">Avond (17:00–19:00)</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
                    <input
                      type="checkbox"
                      className="accent-[#C8965A] w-5 h-5 flex-shrink-0 mt-0.5"
                      aria-required="true"
                      {...register('privacyAkkoord', { required: 'U dient akkoord te gaan met de privacyverklaring' })}
                    />
                    <span className="text-[#1C2B3A] text-sm leading-relaxed">
                      Ik ga akkoord met de{' '}
                      <a href="/privacy" className="text-[#C8965A] font-semibold hover:underline" target="_blank">
                        privacyverklaring
                      </a>
                      . Uw gegevens worden alleen gebruikt om contact met u op te nemen.{' '}
                      <span className="text-red-600" aria-hidden="true">*</span>
                    </span>
                  </label>
                  {errors.privacyAkkoord && (
                    <p role="alert" className="text-red-600 text-sm mt-1">
                      {errors.privacyAkkoord.message}
                    </p>
                  )}
                </div>
              </div>
            </fieldset>
          )}

          {fout && (
            <div role="alert" className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {fout}
            </div>
          )}
        </div>

        {/* Navigatie buttons */}
        <div className="px-8 pb-8 flex justify-between items-center gap-4">
          {huidigStap > 0 ? (
            <button
              type="button"
              onClick={vorigeStap}
              className="inline-flex items-center gap-2 text-[#1B3A5C] font-semibold text-sm hover:text-[#C8965A] transition-colors min-h-[44px]"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              Vorige stap
            </button>
          ) : (
            <div />
          )}

          {huidigStap < STAP_LABELS.length - 1 ? (
            <button
              type="button"
              onClick={volgendeStap}
              className="inline-flex items-center gap-2 bg-[#C8965A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#a87840] transition-colors min-h-[48px]"
            >
              Volgende stap
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={bezig}
              className="inline-flex items-center gap-2 bg-[#C8965A] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a87840] transition-colors min-h-[48px] disabled:opacity-70"
            >
              {bezig ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  Versturen...
                </>
              ) : (
                <>
                  <CheckCircle size={16} aria-hidden="true" />
                  Intake versturen
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
