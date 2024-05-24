import CardLinksAreas from '@/components/AreasAtuacao/CardLinksAreas'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <InstitucionalBanner title='Direito-Administrativo' />
      <div className='md:max-w-7xl mx-auto px-5 py-10 md:p-10 text-gray-900 pb-24 text-justify'>
        <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; Direito-Administrativo </p>
        <div className='flex gap-8'>
          <CardLinksAreas />
          <div className='flex flex-col gap-8'>
            <h2 className='text-start text-3xl font-bold text-blue-800'>FUNCIONALISMO E ADMINISTRAÇÃO PÚBLICA</h2>
            <span className='font-bold'> O serviço público não pode ser mecânico e irracional.</span>
            <p>Os servidores públicos não têm os seus salários reajustados como deveriam e durante anos isso tem sido uma luta penosa, pois eles precisam acionar a Justiça para que os seus direitos sejam respeitados.</p>
            <p>O descaso da Administração Pública atinge todos os seus servidores, estejam eles ativos ou aposentados, ou até mesmo pensionistas de servidores falecidos. Eles são prejudicados pelos atuais governantes que, constantemente, ferem os princípios constitucionais como, por exemplo, a paridade de vencimentos e proventos prevista na Constituição Federal, onde qualquer benefício ou vantagem concedida aos servidores em atividade deve ser estendida igualmente aos aposentados e pensionistas.</p>
            <p>A concessão dos benefícios que aparecem no holerite com a denominação de gratificações, prêmios, abonos, adicionais instituídos por Leis vêm sendo a forma encontrada pela Administração Pública para anunciar “supostos reajustes”, evitando o aumento na despesa de pessoal, uma vez que não se incorporam aos vencimentos ou salários-base e não são considerados para efeito de cálculo de aposentadoria ou pensão.</p>
            <p>Aos que ainda estão ativos na carreira pública, resta lutar por seus direitos ao se aposentarem. Já os aposentados e pensionistas de servidores falecidos, depois de anos de dedicação em prol do serviço público, buscam o apoio da Justiça como meio mais apropriado de garantir a incorporação em seus proventos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page