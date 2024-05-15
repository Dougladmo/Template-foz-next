import Link from 'next/link';
import React, { useState } from 'react'

import '@/Styles/AnimationBottomHeader.css'

type CardProps = {
    title: string,
    img: string,
    rounded: string,
}

const DireitoCard = ({ title, img, rounded }: CardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={`w-full h-[114px] md:h-[560px] relative overflow-hidden ${rounded}`}
        >
            {isOpen ? <div className="absolute inset-0 bg-blue-900 transition duration-500 opacity-70"></div> : <div className="absolute inset-0 bg-blue-900 transition duration-500"></div>}
            <img
                src={img}
                alt="Imagem de fundo"
                className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className={`flex flex-col items-center justify-center gap-2 ${isOpen ? 'wrapper-opened md:-translate-y-8' : 'wrapper-closed -translate-y-0'} `}>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div className="h-[1px] bg-white w-5 md:w-7 mr-3"></div>
                        <p className="uppercase font-sans text-base font-medium">Direito</p>
                        <div className="h-[1px] bg-white w-5 md:w-7 ml-3"></div>
                    </div>
                    <h2 className="uppercase font-bold text-2xl md:text-3xl text-center cursor-pointer">{title}</h2>
                </div>
                {isOpen && <Link href='#' className={`${isOpen ? 'button-opened' : null} hidden md:flex bg-transparent text-white rounded-lg py-4 px-6 transition hover:bg-white hover:text-black duration-500 border-[1px] border-white`}>Saiba mais</Link>}
            </div>
        </div>
    )
}

export default DireitoCard