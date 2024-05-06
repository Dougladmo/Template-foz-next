import React from 'react'

import { Slide } from 'react-awesome-reveal'

const OffCanvas = () => {
  return (
    <Slide className='fixed left-0 z-30 bg-blue-800 w-2/3 h-screen'>
        <div>
            <ul className='text-white-default text-xs uppercase'>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <a href="#">
                        Institucional
                    </a>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <a href="#">
                        áreas de atuação
                    </a>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <a href="#">
                        advogados
                    </a>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <a href="#">
                        artigos
                    </a>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <a href="#">
                        notícias
                    </a>
                </li>
                <li className='border-b-[1px] border-gray-500 pl-2 py-5 bg-blue-800 hover:brightness-150'>
                    <a href="#">
                        contato
                    </a>
                </li>
            </ul>
        </div>
    </Slide>
  )
}

export default OffCanvas