import { SectionHeader } from '@/components/ui/Card';

const problems = [
  {
    emoji: '📦',
    titel: '30+ jaar spullen en herinneringen',
    tekst:
      'Een leven lang verzameld in dozen, kasten en zolders. Elk voorwerp heeft een verhaal. Hoe begin je — en waar houdt het op?',
  },
  {
    emoji: '👨‍👩‍👧',
    titel: 'Familie druk of woont ver weg',
    tekst:
      'Kinderen hebben het druk of wonen ver weg. U wilt niemand belasten, maar het voelt te groot om alleen aan te pakken.',
  },
  {
    emoji: '🌀',
    titel: 'Verhuizen voelt als chaos',
    tekst:
      'Verhuizers, makelaars, opruimen, doneren, inrichten — wie coördineert dat allemaal? En wie houdt rekening met uw tempo?',
  },
];

export function ProblemSection() {
  return (
    <section className="section bg-white" aria-labelledby="problem-heading">
      <div className="container">
        <SectionHeader
          id="problem-heading"
          label="Herkent u dit?"
          title="Het voelt overweldigend. Dat is normaal."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map(({ emoji, titel, tekst }) => (
            <div
              key={titel}
              className="bg-[#FAF8F5] rounded-xl p-7 border border-[#E2DDD8]"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{emoji}</div>
              <h3 className="text-[#1B3A5C] mb-3">{titel}</h3>
              <p className="text-[#64748B] leading-relaxed">{tekst}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#1B3A5C] font-semibold text-xl italic">
          &ldquo;U hoeft dit niet alleen te doen.&rdquo;
        </p>
      </div>
    </section>
  );
}
