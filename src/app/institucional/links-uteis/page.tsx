import React from 'react'
import Link from 'next/link'

import CardLinks from '@/components/institucional/CardLinks'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import LinksUteisDropdown from '@/components/institucional/LinksUteisDropdown';

import { sitesInteresseGov, sitesInteresseLeisPublicas, sitesInteresseOutros } from '@/app/institucional/links-uteis/LinksUteis'

const page = () => {
  return (
    <div>
    <InstitucionalBanner title='Links úteis' />
    <div className='px-5 py-10 pb-24 text-justify text-gray-900 md:max-w-7xl md:mx-auto md:p-10'>
        <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; Links úteis </p>
        <div className='flex gap-8'>
            <CardLinks />
            <div className='relative flex flex-col w-2/3 gap-8'>
              <h2 className='text-4xl font-bold text-blue-800 uppercase text-start'>Sites de interesse</h2>
              <div className='flex flex-col gap-1'>
                <LinksUteisDropdown customClass='rounded-t-lg' items={sitesInteresseGov} title='gorverno' />
                <LinksUteisDropdown customClass='rounded-none' items={sitesInteresseLeisPublicas} title='consulta às leis de publicações jurídicas' />
                <LinksUteisDropdown customClass='rounded-b-lg' items={sitesInteresseOutros} title='outros' />
              </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default page