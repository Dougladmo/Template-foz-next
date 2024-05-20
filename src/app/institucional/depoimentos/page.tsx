import CardLinks from '@/components/institucional/CardLinks'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import Link from 'next/link'
import React from 'react'

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const page = () => {
    return (
        <div>
            <InstitucionalBanner title='depoimentos' />
            <div className='md:max-w-7xl md:mx-auto px-5 py-10 md:p-10 text-gray-900 pb-24 text-justify'>
                <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; Depoimentos </p>
                <div className='flex gap-8'>
                    <CardLinks />
                    <div className='flex flex-col gap-8 relative'>
                        <p className='font-bold flex gap-2'><FaQuoteLeft size={10} className='items-start' /> A cidadania é inerente à dignidade do ser humano.</p>
                        <p>Exercê-la é atributo da vida em harmonia na sociedade.</p>
                        <p>O Estado, ao cumprir o mandamento constitucional de assegurar a liberdade, igualdade, segurança, propriedade, saúde, educação, justiça, moradia, o lazer, previdência social, proteção à maternidade e à infância, assistência aos desamparados tem como agente, nesta honrosa missão e labor, o Servidor Público.</p>
                        <p>Servir ao semelhante é tornar-se especial, é saber que com o seu trabalho é possível proporcionar vida melhor à população.</p>
                        <p>Orgulhe-se de ser Servidor Público, mesmo que os governantes de plantão não lhe ofereçam boas condições de trabalho, cursos de aperfeiçoamento e salário digno.</p>
                        <p>Conscientize-os que não reconhecem o importante mister que realiza e explique que o governador ou prefeito só inaugura o hospital, mas não oferece os medicamentos, aparelhos, e você não é o culpado pelo mau funcionamento da mesma forma na educação, com as escolas, na segurança, com a falta de aparelhagem profissional, com a lenta distribuição de justiça, na previdência, enfim… em todas as obrigações do Estado.</p>
                        <p>Lembre-os que você se dedica independentemente do que lhe oferecem com brio profissional.</p>
                        <p>Da sua dignidade é que nasce um Serviço Público de qualidade.</p>
                        <p className='flex gap-2'>Parabéns! A gratidão está na consciência de que você serve como agente da cidadania. <FaQuoteRight size={10} /> </p>
                        <p className='font-bold'>por Julio Bonafonte</p>
                        <hr className='w-12 h-1 bg-gray-900' />
                        <p className='flex gap-2 relative'><FaQuoteLeft size={30} className='items-start relative bottom-3' />Cumprimento a todos os colegas servidores, conclamando-os para que mantenham a fé, a esperança em dias melhores e a fidelidade aos princípios de bem servir a sociedade, que é tão sofrida com a violência dos homens desajustados em decorrência da desigualdade social e do sistema governamental atualmente aplicado.</p>
                        <p>Temos a incumbência de transmitir amor e presteza ao próximo e acreditar que Cristo nos deixou essa lição de vida, pois sinto que estamos desacreditados pela sociedade, o que lamento muito.</p>
                        <p>Vamos levantar a bandeira dos princípios da legalidade, impessoalidade, moralidade e eficiência para garantir à sociedade a paz, a segurança.</p>
                        <p className='flex gap-2'>Um abraço para todos! “Muita paz, saúde e muito amor sempre. <FaQuoteRight size={10} /> </p>
                        <p className='font-bold'>por Marinalva Maria da Silva, servidora pública há 21 anos.</p>
                        <hr className='w-12 h-1 bg-gray-900' />
                        <p className='font-bold flex gap-2'> <FaQuoteLeft size={10} /> Estar a serviço da população dentro do que manda o Estatuto.</p>
                        <p>Sou servidora Municipal da área da saúde desde 1988 e acredito que todos nós devamos estar cientes dos nossos direitos e deveres, como também ser assíduo e cordial com todas as pessoas. Zelar pelo patrimônio público, acolher, orientar e estar sempre atento às mudanças, aos apelos e às necessidades do público ao qual prestamos serviços. Procurar dentro do possível , com os recursos que dispomos, fazer o melhor, com muita criatividade, dedicação, amor e desprendimento.</p>
                        <p className='flex gap-2'>É isso que faz a diferença no serviço público e em todas as áreas, principalmente na área da saúde.  <FaQuoteRight size={10} /> </p>
                        <p className='font-bold'>por Silvina Teixeira, servidora pública há 22 anos.</p>
                        <hr className='w-12 h-1 bg-gray-900' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page