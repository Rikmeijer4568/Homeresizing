import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { PackageCards } from '@/components/sections/PackageCards';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TrustPrivacySection } from '@/components/sections/TrustPrivacySection';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Home Resizing — Zorgeloos kleiner wonen',
  description:
    'Professionele verhuisregie en downsizing voor senioren. Van sorteren tot inrichten: wij regelen alles. Gratis intake. Heel Nederland.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <ProcessSteps />
      <PackageCards />
      <TestimonialsSection />
      <TrustPrivacySection />
      <CTABanner />
    </>
  );
}
