import React from 'react'
import CustomLink from '../Layout/CustomLink'

const CardLinks = () => {
    return (
        <div className='bg-white max-h-[340px] pb-12 hidden lg:flex'>
            <div className='bg-gray-300 p-5 py-7 rounded-lg w-64 flex flex-col gap-3'>
                <h4 className='text-blue-800 uppercase text-xl font-bold'>institucional</h4>
                <CustomLink text='História' />
                <CustomLink text='Valores' />
                <CustomLink text='Perfis de clientes' />
                <CustomLink text='Depoimentos' />
                <CustomLink text='Links úteis' />
                <CustomLink text='Principais termos jurídicos' />
            </div>
        </div>
    )
}

export default CardLinks