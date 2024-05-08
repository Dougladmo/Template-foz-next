import React from 'react'

const OffCanvas = () => {
  return (
        <div className='fixed left-0 z-30 bg-blue-800 w-2/3 h-screen'>
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
  )
}

export default OffCanvas