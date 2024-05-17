import React from 'react'

import ClientAreaSection from "@/components/ClientAreaSection";
import AboutSection from "@/components/AboutSection";
import PortalSection from '@/components/PortalFoz/PortalSection';
import Categories from '@/components/Categories';
import BottomBar from '@/components/Layout/Header/BottomBar/BottomBar';

export default function Home() {
  return (
    <main id="main" className="flex flex-col gap-14 md:gap-0">
      <BottomBar />
      <AboutSection/>
      <div className='flex flex-col gap-10 md:flex-row md:gap-0 bg-white pb-12'>
        <ClientAreaSection />
        <PortalSection />
      </div>
        <Categories />
    </main>
  );
}
