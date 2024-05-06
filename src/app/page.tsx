'use client'
import Image from "next/image";
import Link from 'next/link'

import {Fade} from 'react-awesome-reveal'

export default function Home() {
  return (
    <main id="main" className="flex flex-col gap-20">
      <Fade cascade>
        <div id="about" className="px-4 pt-5 flex flex-col items-center">
          <Image
            src='/asset 1.png'
            width={300}
            height={250}
            className="w-2/3 mb-7"
            alt="Foz logo"
          />
          <div className="flex flex-col items-start">
            <span className="text-xs uppercase text-gray-700">Sobre a empresa</span>
            <h2 className="text-xl font-bold mb-5 text-blue-800">FOZ SOCIEDADE DE ADVOGADOS</h2>
            <p className="text-sm text-justify leading-7 text-gray-900">A FOZ Sociedade de Advogados completou quarenta e quatro anos de existência. Durante esse tempo, construímos uma conduta digna de confiança, realizações, conquistas, vitórias e a consciência de que o nosso maior compromisso é estabelecer o pleno Direito.</p>
          </div>
        </div>
        <div id="client-area" className="px-4 py-5 bg-blue-800">
          <div className="flex flex-col items-start">
            <span className="text-xs uppercase text-gray-500">Área do cliente</span>
            <h2 className="text-xl font-bold mb-5 text-white-default">ACESSO E INFORMAÇÃO A QUALQUER HORA</h2>
            <p className="text-sm text-justify leading-7 text-white-default mb-5">A comunicação está cada vez mais globalizada, razão pela qual disponibilizamos novos canais de atendimento. Atualmente contamos com uma equipe especializada no atendimento online (pronto atendimento), disposta a prestar esclarecimentos sobre andamentos processuais de nossos clientes.</p>
            <Link href="#" className="bg-white-default text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-800 hover:text-white-default transition duration-300 border-white-default border-[1px]">Saiba mais</Link>
          </div>
        </div>
      </Fade>
    </main>
  );
}
