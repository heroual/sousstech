'use client';

import Layout from '@/components/layout/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import FTTRSection from '@/components/services/FTTRSection';
import SmartHomeSection from '@/components/services/SmartHomeSection';
import SecuritySection from '@/components/services/SecuritySection';
import NetworkSection from '@/components/services/NetworkSection';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <Layout>
      <ServiceHero />
      <FTTRSection />
      <SmartHomeSection />
      <SecuritySection />
      <NetworkSection />
      <ServicesCTA />
    </Layout>
  );
}