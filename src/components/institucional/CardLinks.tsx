import React from 'react'
import CustomLink from '../Layout/CustomLink'

const CardLinks = () => {
    return (
        <div className='bg-white max-h-[340px] pb-12 hidden lg:flex'>
            <div className='bg-gray-300 p-5 py-7 rounded-lg w-64 flex flex-col gap-3'>
                <h4 className='text-blue-800 uppercase text-xl font-bold'>institucional</h4>
                <CustomLink link='/institucional/historia/' text='História' />
                <CustomLink link='#' text='Valores' />
                <CustomLink link='/institucional/perfis-de-clientes/' text='Perfis de clientes' />
                <CustomLink link='/institucional/depoimentos/' text='Depoimentos' />
                <CustomLink link='#' text='Links úteis' />
                <CustomLink link='/institucional/principais-termos-juridicos/' text='Principais termos jurídicos' />
            </div>
        </div>
    )
}

export default CardLinks