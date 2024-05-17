import React from 'react'

const InstitucionalBanner = () => {
    return (
        <div className='w-full h-[161px] relative overflow-hidden rounded}' >
            <div className="absolute inset-0 bg-blue-900 transition duration-500"></div>
            <img
                src='/historiabg.jpg'
                alt="Imagem de fundo"
                className="object-cover w-full h-full bg-top"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div className="h-[1px] bg-white w-7 md:w-7 mr-3"></div>
                        <p className="uppercase font-sans text-base font-medium">institucional</p>
                        <div className="h-[1px] bg-white w-7 md:w-7 ml-3"></div>
                    </div>
                    <h1 className="uppercase font-bold text-2xl md:text-4xl text-center cursor-pointer">história</h1>
                </div>
            </div>
        </div>
    )
}

export default InstitucionalBanner