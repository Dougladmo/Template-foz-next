import Link from 'next/link'
import React from 'react'

const OffCanvas = () => {
  return (
        <div className='fixed left-0 z-30 bg-blue-800 w-2/3 h-screen'>
            <ul className='text-white-default text-xs uppercase'>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <Link href="#">
                        Institucional
                    </Link>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <Link href="#">
                        áreas de atuação
                    </Link>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <Link href="#">
                        advogados
                    </Link>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <Link href="#">
                        artigos
                    </Link>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <Link href="#">
                        notícias
                    </Link>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <Link href="#">
                        contato
                    </Link>
                </li>
            </ul>
        </div>
  )
}

export default OffCanvas