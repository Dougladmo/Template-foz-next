import Link from 'next/link'
import React from 'react'

import CardLinks from '@/components/institucional/CardLinks'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import CardValoresRazao from '@/components/institucional/CardValoresRazao'
import CardValoresvisao from '@/components/institucional/CardValoresVisao'
import CardValoresMissao from '@/components/institucional/CardValoresMissao'
import { FaLinkedinIn } from 'react-icons/fa'


const page = () => {
    return (
        <div>
            <InstitucionalBanner title='Valores' />
            <div className='md:max-w-7xl md:mx-auto px-5 py-10 md:p-10 text-gray-900 pb-24 text-justify'>
                <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; Valores </p>
                <div className='flex gap-8'>
                    <CardLinks />
                    <div className='w-full flex flex-col gap-8'>
                        <h2 className='text-start text-3xl font-bold text-blue-800'>"O CULTIVO DE NOSSAS IDEIAS"</h2>
                        <CardValoresMissao />
                        <CardValoresvisao />
                        <CardValoresRazao />
                        <p className='uppercase font-bold text-blue-800 text-xl'>ATENDIMENTO PROFISSIONAL E HUMANO</p>
                        <p>A experiência adquirida com a realidade nos leva ao rumo do sucesso.</p>
                        <p>A experiência acumulada nessas mais de quatro décadas de atuação, defendendo os interesses de mais de 125 mil clientes e atuando em mais de 5 mil processos ativos, permitiu-nos aprender muito, pois acompanhamos de perto o cenário da Administração Pública no que diz respeito ao direito dos servidores públicos. Sabemos quão doloroso é quando os nossos direitos são desrespeitados, principalmente quando falamos de pessoas que dedicaram anos de sua vida em prol da sociedade.</p>
                        <p>Trabalhamos para aumentar a performance nas etapas de estudo de teses e de todas as ações distribuídas por nosso escritório. Contamos com uma equipe qualificada e dedicada em acompanhar cada passo nos Fóruns e Tribunais, executando as medidas necessárias de maneira que se abrevie o tempo para resolução dos processos e se cumpram os prazos. Fazemos questão de comunicar com padrão e frequência os principais andamentos de cada processo que defendemos, sobre os detalhes, em nossa sede, ou por meio dos canais de Relacionamento com o Cliente.</p>
                        <p>Em nosso escritório, primamos pelo atendimento da melhor maneira possível as questões apresentadas pelo servidor público e estamos em busca de aperfeiçoamento constante.</p>
                        <p>Ao longo dos anos, com a tecnologia fazendo parte da nossa vida e pensando na comodidade de cada um, agilidade e transparência na informação, nós disponibilizamos o andamento processual em nosso site, atendendo a todos em qualquer lugar.</p>
                        <p className='uppercase font-bold text-blue-800 text-xl' >TECNOLOGIA E CONTROLE</p>
                        <p>Segurança das informações, consistência de dados também fazem parte da nossa seriedade.</p>
                        <p>A quantidade de informações acumuladas e processadas diariamente em nosso escritório é imensa. São milhares de correspondências, processos e documentos em geral pelos quais nos responsabilizamos mensalmente.</p>
                        <p>Além de uma equipe focada em formalizar e registrar o controle de entrada e distribuição desses materiais nos devidos históricos de atendimento ao cliente e processuais do acervo físico e digital da Foz Advogados, controlar com segurança a origem e o destino dessas informações é essencial.</p>
                        <p>Contamos com um sistema de gestão informatizado, desenvolvido e constantemente aperfeiçoado por nosso departamento de Tecnologia da Informação, o qual organiza e dispõe de todas as informações do processo de maneira precisa e imediata.</p>
                        <p>Nele estão guardados todo o histórico de relacionamento com clientes, bem como informações processuais, esteja o processo em andamento do já remetido para o arquivo inativo. Um banco de dados seguro em permanente atualização que nos garante, com efetividade, acessar e promover soluções mais eficazes, quando identificadas e diagnosticadas corretamente.</p>
                        <p>Assim, zelando pelo que nos foi confiado e assegurados pela tecnologia, mantemos a essência do nosso sigilo.</p>
                        <p className='uppercase font-bold text-blue-800 text-xl' >EQUIPE</p>
                        <p>Foz viva em nós.</p>
                        <p>Quando falamos para nossa equipe de colaboradores internos: – “Foz, viva em nós!”, queremos transmitir o desejo de perpetuar uma história, de reafirmar os nossos valores, de afirmar que a nossa evolução como empresa é necessária para garantir a nossa continuidade no tempo.</p>
                        <p>Como Sociedade, nós somos um organismo vivo, uma coletividade e sempre estamos refletindo na maneira como temos nos comunicado e interagido. Parte da equipe está conosco há décadas e outros profissionais têm agregado com novos conhecimentos e experiências para o legado. Um movimento contínuo, onde “A juventude é mais bela se está emoldurada no velho e o velho tem mais sentido se tem a essência do novo”. Nas famílias aqui representadas, os sonhos foram construídos com muito empenho e as realidades transformadas. É assim que a vida acontece em nós.</p>
                        <p>A estrutura do nosso escritório é composta por mais de 70 colaboradores, entre os quais estão os Advogados Sócios, os Advogados Associados, os Advogados Colaboradores, os Estagiários de Direito e os Colaboradores Administrativos.</p>
                        <p>Se você acredita em seu potencial de trabalho, considera-se uma pessoa com o espirito da Foz advogados e busca desafios profissionais, venha trabalhar conosco.</p>
                        <p>Confira nosso perfil no Linkedin.</p>
                        <div className='border-2 border-blue-800 p-2 w-12 rounded-lg text-blue-800 hover:text-white hover:bg-blue-800 transition duration-500 cursor-pointer'>
                            <FaLinkedinIn size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page