import Link from 'next/link'
import React from 'react'

type FooterNewsProps = {
    title: string,
}

const FooterNews = ({title}: FooterNewsProps) => {
    return (
        <div>
            <Link href='#'>
                <p className='text-sm md:text-xs leading-snug text-gray-500 hover:text-white transition duration-500'>
                    {title}
                    <span className='block text-xs text-white mt-1'>Ler mais</span>
                </p>
            </Link>
        </div>
    )
}

export default FooterNews