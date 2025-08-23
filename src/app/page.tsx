'use client';

import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
}
