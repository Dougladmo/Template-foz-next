import CardLinksAreas from '@/components/AreasAtuacao/CardLinksAreas'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <InstitucionalBanner title='DIREITO TRIBUTÁRIO' />
      <div className='md:max-w-7xl mx-auto px-5 py-10 md:p-10 text-gray-900 pb-24 text-justify'>
        <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; DIREITO TRIBUTÁRIO </p>
        <div className='flex gap-8'>
          <CardLinksAreas />
          <div className='flex flex-col gap-8'>
            <h2 className='text-start text-3xl font-bold text-blue-800'> ATUAÇÃO CORPORATIVA E PESSOAS FÍSICAS</h2>
            <span className='font-bold'> Para atender de maneira qualificada, é preciso evoluir sempre.</span>
            <p>Atentos às necessidades específicas do segmento corporativo, a Foz Sociedade de Advogados também vem representando há muitos anos empresas e entidades de variados portes e mercados, com solidez e eficiência.</p>
            <p>Cientes dos potenciais e diferenciais atualmente exigidos por pessoas físicas ou jurídicas na prestação de serviços para obtenção de resultados, fazendo da justiça o principal instrumento de trabalho, o nosso escritório desenvolveu um núcleo especializado para este fim.</p>
            <p>O diferencial é a tratativa de direitos dos servidores públicos, municipais, empresas e prefeituras nas esferas do Direito Administrativo, Tributário e Civil.  Fazemos isso com critério, pois essa é a maneira de prestar um atendimento mais qualificado.</p>
            <p>O nosso trabalho corporativo consiste em conduzir ações tributárias específicas, cuidando de processos complexos, que abrangem recálculos de impostos, restituições e suspensões de pagamentos indevidos, entre outros, permitindo que a justiça se estabeleça no campo financeiro, tanto para Empresas e Prefeituras, quanto para Pessoas Físicas.</p>
            <Link href='/areas-atuacao/direito-administrativo' className='text-blue-800 underline'> Clique aqui para entender melhor sobre a atuação de nosso escritório » </Link>
            <div className='flex justify-between items-center text-2xl uppercase font-bold'>
              <Link href='#' className='p-5 rounded-lg hover:border-gray-900  border-2 hover:text-white hover:bg-gray-900 transition duration-500'>
                Empresas
              </Link>
              <Link href='#' className='p-5 hover:border-gray-900 rounded-xl border-2 hover:text-white hover:bg-gray-900 transition duration-500'>
                Prefeituras
              </Link>
              <Link href='#' className='p-5 hover:border-gray-900 rounded-xl border-2 hover:text-white hover:bg-gray-900 transition duration-500'>
                Pessoas físicas
              </Link>
            </div>
            <p>As rápidas e constantes mudanças no cenário nacional e internacional, ocasionadas pela globalização da economia e abertura de mercados contribuem para que as empresas percebam a necessidade de conhecer e adaptar-se às Leis Tributárias.</p>
            <p>A tributação em cascata e o excesso de impostos, contribuições e taxas, permanentes ou temporárias, muitas vezes cobrados injusta e incorretamente, são um dos fatores que contribuem para o alto custo que incide sobre produtos e serviços, prejudicando direta ou indiretamente o desenvolvimento da nossa economia.</p>
            <p>Neste sentido, as empresas podem contar com os nossos servidores para reaverem valores que lhes foram indevidamente cobrados, extra ou judicialmente, restaurando a legalidade e a justiça social, auxiliando para a redução do chamado “Custo Brasil”, ao menos no que se refere à questão tributária.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page