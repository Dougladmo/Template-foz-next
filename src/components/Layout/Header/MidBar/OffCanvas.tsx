import Link from 'next/link'
import React from 'react'
import OffCanvasDropdown from './Dropdowns/OffCanvasDropdown'

const OffCanvas = () => {
    return (
        <div className='fixed left-0 z-30 bg-blue-800 w-2/3 h-screen lg:hidden'>
            <ul className='text-white text-sm uppercase flex flex-col'>
                <li>
                    <OffCanvasDropdown title='institucional' items={['história', 'valores', 'perfis de clientes', 'depoimentos', 'links úteis', 'principais termos jurídicos']} />
                </li>
                <li>
                    <OffCanvasDropdown title='áreas de atuação' items={['direito administrativo', 'direito tributário', 'direito civil', 'habilitação de herdeiros']} />
                </li>
                <li>
                    <OffCanvasDropdown title='advogados' items={['wilson luis de souza foz', 'antonio josé de sousa foz', 'Marcela gonçalves foz']} />
                </li>
                <li className='flex flex-col justify-start border-b-[1px] border-gray-500 hover:bg-blue-900 duration-300 transition'>
                    <Link href="#" className='py-5 w-full pl-2 hover:translate-x-2 transition duration-500'>
                        artigos
                    </Link>
                </li>
                <li className='flex flex-col justify-start border-b-[1px] border-gray-500 hover:bg-blue-900 duration-300 transition'>
                    <Link href="#" className='py-5 w-full pl-2 hover:translate-x-2 transition duration-500'>
                        notícias
                    </Link>
                </li>
                <li className='flex flex-cole justify-start border-b-[1px] border-gray-500 hover:bg-blue-900 duration-300 transition'>
                    <Link href="#" className='py-5 w-full pl-2 hover:translate-x-2 transition duration-500'>
                        contato
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default OffCanvas