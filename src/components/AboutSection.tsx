'use client'
import Image from 'next/image'
import React from 'react'

import { Fade } from 'react-awesome-reveal'

import '@/Styles/AboutSection.css'

const AboutSection = () => {
    return (
        <div id="about" className="px-4 pt-5 flex flex-col md:flex-row items-center md:justify-end md:self-end md:w-1/2">
            <Fade>
                <Image
                    src='/LogoGrande.png'
                    width={300}
                    height={250}
                    className="w-full mb-7 md:hidden"
                    alt="Foz logo"
                    />
                <div className="flex flex-col items-start md:px-10">
                    <p className="text-xs md:text-sm uppercase text-gray-700">Sobre a empresa</p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-blue-800">FOZ SOCIEDADE DE ADVOGADOS</h2>
                    <p className="text-sm lg:text-base text-justify leading-7 text-gray-900">A FOZ Sociedade de Advogados completou quarenta e quatro anos de existência. Durante esse tempo, construímos uma conduta digna de confiança, realizações, conquistas, vitórias e a consciência de que o nosso maior compromisso é estabelecer o pleno Direito.</p>
                </div>
            </Fade>
        </div>
    )
}

export default AboutSection