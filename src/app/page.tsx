import React from 'react'

import ClientAreaSection from "@/components/ClientAreaSection";
import AboutSection from "@/components/AboutSection";
import PortalSection from '@/components/PortalFoz/PortalSection';

export default function Home() {
  return (
    <main id="main" className="flex flex-col gap-14 md:gap-0">
      <AboutSection/>
      <ClientAreaSection />
      <PortalSection />
    </main>
  );
}
