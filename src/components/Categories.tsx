import Link from 'next/link'
import React from 'react'
import { BsSquareFill } from 'react-icons/bs'
import CustomLink from './Layout/CustomLink'

const Categories = () => {
    return (
        <div className='w-full bg-white pb-12 pl-4 md:pl-10 lg:pl-20'>
            <div className='bg-gray-300 p-5 py-7 rounded-lg w-64 flex flex-col gap-3'>
                <h4 className='text-blue-800 uppercase text-lg font-bold'>Categorias</h4>
                <CustomLink text='Notícias Gerais' />
                <CustomLink text='Precatório' />
            </div>
        </div>
    )
}

export default Categories