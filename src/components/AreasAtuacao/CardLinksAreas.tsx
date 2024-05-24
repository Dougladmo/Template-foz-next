import React from 'react'
import CustomLink from '../Layout/CustomLink'

const CardLinks = () => {
  return (
    <div className='bg-white max-h-[340px] pb-12 hidden lg:flex'>
      <div className='bg-gray-300 p-5 py-7 rounded-lg w-64 flex flex-col gap-3'>
        <h4 className='text-blue-800 uppercase text-xl font-bold'>institucional</h4>
        <CustomLink link='/areas-atuacao/direito-administrativo/' text='Direito Administrativo' />
        <CustomLink link='/areas-atuacao/direito-tributario/' text='Direito Tributário' />
        <CustomLink link='/areas-atuacao/direito-civil/' text='Direito Civil' />
        <CustomLink link='/areas-atuacao/habilitacao-herdeiros/' text='Habilitação de Herdeiros' />
      </div>
    </div>
  )
}

export default CardLinks