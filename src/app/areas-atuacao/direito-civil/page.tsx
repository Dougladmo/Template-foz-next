import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import CardLinksAreas from '@/components/AreasAtuacao/CardLinksAreas'

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <InstitucionalBanner title='DIREITO CIVIL' />
      <div className='md:max-w-7xl mx-auto px-5 py-10 md:p-10 text-gray-900 pb-24 text-justify'>
        <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; DIREITO CIVIL </p>
        <div className='flex gap-8'>
          <CardLinksAreas />
          <div className='flex flex-col gap-8'>
            <h2 className='text-start text-3xl font-bold text-blue-800'>ATUAÇÃO CORPORATIVA E PESSOAS FÍSICAS</h2>
            <span className='font-bold'>Para atender de maneira qualificada, é preciso evoluir sempre.</span>
            <p>Assim como as Empresas precisam de assessoria jurídica, as pessoas físicas, como contribuintes que são, precisam de agilidade na hora de acionar a Justiça.</p>
            <p>O nosso trabalho consiste em conduzir ações tributárias específicas que abrangem tanto recálculo de tributos, restituições e suspensões, quanto defesas administrativas, entre outros.</p>
            <p>Atentos às necessidades específicas do segmento corporativo, a Foz Sociedade de Advogados também vem representando há muitos anos empresas e entidades de variados portes e mercados, com solidez e eficiência.</p>
            <p>Cientes dos potenciais e diferenciais atualmente exigidos por pessoas físicas ou jurídicas na prestação de serviços para obtenção de resultados, fazendo da justiça o principal instrumento de trabalho, o nosso escritório desenvolveu um núcleo especializado para este fim.</p>
            <p>A amplitude dessa área faz com que os profissionais se dividam em segmentos. O nosso é direcionado a empresas e pessoas físicas, mediante prévia consulta.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page