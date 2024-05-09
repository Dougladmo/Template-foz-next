import Link from 'next/link'
import React from 'react'

const OffCanvas = () => {
  return (
        <div className='fixed left-0 z-30 bg-blue-800 w-2/3 h-screen lg:hidden'>
            <div className='text-white text-xs uppercase flex flex-col'>
                    <Link href="#" className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150 duration-300 transition'>
                        Institucional
                    </Link>
                    <Link href="#" className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150 duration-300 transition'>
                        áreas de atuação
                    </Link>
                    <Link href="#" className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150 duration-300 transition'>
                        advogados
                    </Link>
                    <Link href="#" className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150 duration-300 transition'>
                        artigos
                    </Link>
                    <Link href="#" className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150 duration-300 transition'>
                        notícias
                    </Link>
                    <Link href="#" className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150 duration-300 transition'>
                        contato
                    </Link>
            </div>
        </div>
  )
}

export default OffCanvas