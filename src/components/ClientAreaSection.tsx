'use client'
import React from 'react'
import Link from 'next/link'
import { FaSquareFull } from 'react-icons/fa'

import { Fade } from 'react-awesome-reveal'

const ClientAreaSection = () => {
    return (
        <div id="client-area" className="px-4 py-10 md:p-10 lg:p-20 bg-blue-800 md:w-1/2 relative">
            <Fade>
                <div className="flex flex-col items-start">
                    <p className="text-xs md:text-sm uppercase text-gray-500">Área do cliente</p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-white">ACESSO E INFORMAÇÃO A QUALQUER HORA</h2>
                    <p className="text-sm lg:text-base text-justify leading-7 text-white mb-5">A comunicação está cada vez mais globalizada, razão pela qual disponibilizamos novos canais de atendimento. Atualmente contamos com uma equipe especializada no atendimento online (pronto atendimento), disposta a prestar esclarecimentos sobre andamentos processuais de nossos clientes.</p>
                    <Link href="#" className="bg-white text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition duration-300 border-white border-[1px]">Saiba mais</Link>
                </div>
                <FaSquareFull size={40} className="absolute md:hidden -bottom-3 rotate-45 left-1/2 -translate-x-1/2 text-blue-800" />
                <FaSquareFull size={40} className="absolute hidden md:flex rotate-45 -right-3 text-blue-800 top-1/2 -translate-y-1/2" />
            </Fade>
        </div>
    )
}

export default ClientAreaSection