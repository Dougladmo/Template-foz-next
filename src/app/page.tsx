import React from 'react'

import ClientAreaSection from "@/components/ClientAreaSection";
import AboutSection from "@/components/AboutSection";
import PortalSection from '@/components/PortalFoz/PortalSection';

export default function Home() {
  return (
    <main id="main" className="flex flex-col gap-14 md:gap-0">
      <AboutSection/>
      <div className='flex flex-col gap-10 md:flex-row md:gap-0 bg-white pb-32'>
        <ClientAreaSection />
        <PortalSection />
      </div>
    </main>
  );
}
