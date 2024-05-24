import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import CardLinksAreas from '@/components/AreasAtuacao/CardLinksAreas'

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <InstitucionalBanner title='HABILITAÇÃO DE HERDEIROS' />
      <div className='md:max-w-7xl mx-auto px-5 py-10 md:p-10 text-gray-900 pb-24 text-justify'>
        <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; HABILITAÇÃO DE HERDEIROS </p>
        <div className='flex gap-8'>
          <CardLinksAreas />
          <div className='flex flex-col gap-8'>
            <h2 className='text-start text-3xl font-bold text-blue-800'>MAIS DO QUE INGRESSAR COM UMA AÇÃO, A FOZ ADVOGADOS SE IMPORTA EM PERMANECER AO SEU LADO.</h2>
            <p>Quando o cliente, ávido por justiça, ingressa com um processo, fica impossível determinar em quanto tempo a sua causa será solucionada e efetivamente paga. Alguns anos podem transcorrer até a efetiva consolidação dos direitos concedidos, e para nós é muito importante mantermos um relacionamento sólido nesse período.</p>
            <p>Infelizmente, ao longo do tempo em que perdura o processo, alguns clientes vêm a óbito e pensando na confiança depositada em nosso trabalho, continuamos lutando pelos direitos desses falecidos, cujo resultado refletirá em suas famílias, para as quais repassamos o resultado do processo.</p>
            <p>Os anos de experiência nos tornaram especialistas no segmento e durante esse tempo, notamos a necessidade de abrir espaço em nosso escritório, também, para a prestação de serviços totalmente voltada aos cônjuges e herdeiros dos clientes falecidos. Por isso, há mais de 10 anos, criamos o <span className='font-bold'>Departamento de Habilitação de Herdeiros.</span></p>
            <p>Esse departamento dispõe de uma equipe capacitada a prestar atendimento a essas pessoas, orientando-as e solicitando os documentos necessários à habilitação para regularizar a representação processual do autor falecido, habilitando-os nos autos dos processos, conforme determina o Código de Processo Civil, oferecermos este serviço aos nossos clientes e demais interessados, contribuindo de maneira positiva, pois estamos preparados para atender aqueles que necessitem da nossa expertise na regularização da representação processual dos clientes (servidores) falecidos.</p>
            <p>A sua informação faz toda a diferença. Comunique aos seus familiares a existências de ações em seu nome.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page