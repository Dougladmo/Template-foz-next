import CardLinks from '@/components/institucional/CardLinks'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
    <InstitucionalBanner title='Links úteis' />
    <div className='md:max-w-7xl md:mx-auto px-5 py-10 md:p-10 text-gray-900 pb-24 text-justify'>
        <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; Links úteis </p>
        <div className='flex gap-8'>
            <CardLinks />
            <div className='flex flex-col gap-8 relative'>
            </div>
        </div>
    </div>
</div>
  )
}

export default page