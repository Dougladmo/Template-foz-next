'use client'
import Image from "next/image";
import Link from 'next/link'

import { FaSquareFull } from "react-icons/fa";

import '@/Styles/Home.css'

import { Fade } from 'react-awesome-reveal'

export default function Home() {
  return (
    <main id="main" className="flex flex-col gap-14 md:gap-0">
      <div id="about" className="px-4 pt-5 flex flex-col md:flex-row items-center md:justify-end md:self-end md:w-1/2">
        <Fade cascade triggerOnce>
          <Image
            src='/LogoGrande.png'
            width={300}
            height={250}
            className="w-full mb-7 md:hidden"
            alt="Foz logo"
          />
          <div className="flex flex-col items-start md:px-10">
            <span className="text-xs md:text-sm uppercase text-gray-700">Sobre a empresa</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-blue-800">FOZ SOCIEDADE DE ADVOGADOS</h2>
            <p className="text-sm lg:text-base text-justify leading-7 text-gray-900">A FOZ Sociedade de Advogados completou quarenta e quatro anos de existência. Durante esse tempo, construímos uma conduta digna de confiança, realizações, conquistas, vitórias e a consciência de que o nosso maior compromisso é estabelecer o pleno Direito.</p>
          </div>
        </Fade>
      </div>
      <Fade cascade triggerOnce>
        <div id="client-area" className="px-4 py-10 md:p-10 lg:p-20 bg-blue-800 md:w-1/2 relative mb-96">
          <div className="flex flex-col items-start">
            <span className="text-xs md:text-sm uppercase text-gray-500">Área do cliente</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-white-default">ACESSO E INFORMAÇÃO A QUALQUER HORA</h2>
            <p className="text-sm lg:text-base text-justify leading-7 text-white-default mb-5">A comunicação está cada vez mais globalizada, razão pela qual disponibilizamos novos canais de atendimento. Atualmente contamos com uma equipe especializada no atendimento online (pronto atendimento), disposta a prestar esclarecimentos sobre andamentos processuais de nossos clientes.</p>
            <Link href="#" className="bg-white-default text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-800 hover:text-white-default transition duration-300 border-white-default border-[1px]">Saiba mais</Link>
          </div>
          <FaSquareFull size={40} className="absolute md:hidden -bottom-3 rotate-45 left-1/2 -translate-x-1/2 text-blue-800" />
          <FaSquareFull size={40} className="absolute hidden md:flex rotate-45 -right-3 text-blue-800 top-1/2 -translate-y-1/2" />
        </div>
      </Fade>
    </main>
  );
}
