import React from 'react'

import { Fade } from 'react-awesome-reveal'

const BottomBar = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-1 gap-[1px] bg-white'>
            <Fade cascade className='w-full'>
                <div className="w-full h-[114px] md:h-[560px] relative overflow-hidden md:rounded-r-lg">
                    <div className="absolute inset-0 bg-blue-900"></div>
                    <img
                        src="/adm.jpeg"
                        alt="Imagem de fundo"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white">
                        <div className="flex items-center justify-center cursor-pointer">
                            <div className="h-[1px] bg-white w-9 md:w-7 mr-3"></div>
                            <p className="uppercase font-sans text-lg">Direito</p>
                            <div className="h-[1px] bg-white w-9 md:w-7 ml-3"></div>
                        </div>
                        <h2 className="uppercase font-bold text-2xl md:text-3xl text-center cursor-pointer">Administrativo</h2>
                    </div>
                </div>
                <div className="w-full h-[114px] md:h-[560px] relative overflow-hidden md:rounded-lg">
                    <div className="absolute inset-0 bg-blue-900"></div>
                    <img
                        src="/trib.jpeg"
                        alt="Imagem de fundo"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white">
                        <div className="flex items-center justify-center cursor-pointer">
                            <div className="h-[1px] bg-white w-9 md:w-7 mr-3"></div>
                            <p className="uppercase font-sans text-lg">Direito</p>
                            <div className="h-[1px] bg-white w-9 md:w-7 ml-3"></div>
                        </div>
                        <h2 className="uppercase font-bold text-2xl md:text-3xl text-center cursor-pointer">Tributário</h2>
                    </div>
                </div>
                {/* #133041 */}
                <div className="w-full h-[114px] md:h-[560px] relative overflow-hidden md:rounded-l-lg">
                    <div className="absolute inset-0 bg-blue-900"></div>
                    <img
                        src="/civil.jpeg"
                        alt="Imagem de fundo"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white">
                        <div className="flex items-center justify-center cursor-pointer">
                            <div className="h-[1px] bg-white w-9 md:w-7 mr-3"></div>
                            <p className="uppercase font-sans md:text-lg">Direito</p>
                            <div className="h-[1px] bg-white w-9 md:w-7 ml-3"></div>
                        </div>
                        <h2 className="uppercase font-bold text-2xl md:text-3xl text-center cursor-pointer">Civil</h2>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default BottomBar

