import React from 'react'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import CardLinks from '@/components/institucional/CardLinks'
import Link from 'next/link'
import Home from '../../page'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <InstitucionalBanner title='perfis de clientes' />
            <div className='md:max-w-7xl md:mx-auto p-10 text-gray-900 pb-24'>
                <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; Perfis de clientes</p>
                <div className='flex gap-8'>
                    <CardLinks />
                    <div className='text-justify text-base flex flex-col gap-5'>
                        <h2 className='text-3xl font-bold text-blue-800'>CLIENTES</h2>
                        <Image
                            src='/naoexiste.png'
                            width={100}
                            height={50}
                            alt='perfil de cliente servidores públicos e parceiros - foz sociedade de advogados - direito administrativo, tributário e civil'
                            className='text-2xl font-bold text-blue-800 w-full h-20'
                        />
                        <p className='font-bold'>Existem pessoas dignas, honradas e dispostas servindo a sociedade.
                        </p>
                        <p>
                            Acreditamos na Justiça e reconhecemos a importância dos servidores públicos em nossa sociedade, valorizando-os com a prestação dos nossos serviços.
                        </p>
                        <p>
                            O nosso anseio é que os governantes respeitem a dignidade desses cidadãos e uma de nossas atuações é defender e resgatar os direitos que lhes são reconhecidos pela Constituição Federal e Constituições Estaduais, mas que não cumpridos pela Administração Pública.
                        </p>
                        <p>
                            A luta por seus direitos é o que nos move em busca de uma sociedade mais justa.
                        </p>
                        <h3 className='text-3xl font-bold text-blue-800'>PARCERIAS</h3>
                        <p className='font-bold'>O nosso trabalho conta, também, com parcerias junto a entidades de classe.
                        </p>
                        <p>
                            Dar apoio a milhares de pessoas torna-se algo muitas vezes complexo quando tratamos de questões coletivas. A assessoria jurídica pode ser fundamental para a tomada de decisões das entidades que as representam.
                        </p>
                        <p>
                            Ao longo dos anos, conquistamos a confiança de algumas dessas entidades de classe, com as quais firmamos parcerias consagradas – como na área da segurança e educação – proporcionando aos associados mais agilidade com atendimento personalizado.
                        </p>
                        <p>

                            Sempre com muito profissionalismo, juntamos forças no desafio constante de acompanhar os movimentos sociais organizados por essas entidades, no que tange ao reconhecimento devido de seus méritos e funções. Temos profundo respeito e honra em participar de tão nobre trabalho em defesa dos direitos dos respectivos associados nas ações propostas contra o Governo do Estado e Prefeitura de São Paulo.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page