'use client';

import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
