import React from 'react'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'
import CardLinks from '@/components/institucional/CardLinks'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <InstitucionalBanner title='história' />
            <div className='md:max-w-7xl md:mx-auto  px-5 py-10 md:p-10 text-gray-900 pb-24'>
                <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; História
                </p>
                <div className='flex gap-8'>
                    <CardLinks />
                    <div className='text-justify text-base flex flex-col gap-5'>
                        <h2 className='text-start text-3xl font-bold text-blue-800'>FOZ 46 ANOS – PROFISSIONALISMO, ÉTICA, IDONEIDADE E RESPEITO FAZEM PARTE DA NOSSA TRAJETÓRIA!</h2>
                        <p>

                            <span className='italic'>“A maior herança que o meu pai me deixou foi o nome.”
                            </span>
                            –Wilson Foz

                        </p>
                        <p>
                            A Foz Sociedade de Advogados completou quarenta e quatro anos de existência. Durante esse tempo, construímos uma conduta digna de confiança, realizações, conquistas, vitórias e a consciência de que o nosso maior compromisso é estabelecer o pleno Direito.
                        </p>
                        <p>
                            <Image
                                width={300}
                                height={300}
                                src='/historia-foz-advogados.jpg'
                                alt='historia foz'
                                className='mx-5 float-right rounded-lg'
                            />
                            <span className='block mb-5 text-justify'>
                                A nossa história começou em janeiro de 1972, de forma tímida, reunindo experiências de dois advogados que, com sabedoria, transformaram o escritório em um dos mais conceituados no segmento das áreas do Direito Administrativo, Cível e Tributário.
                            </span>
                            <span className='block mb-5 text-justify'>
                                Iniciava-se assim, uma jornada de trabalhos coletivos com muito profissionalismo, companheirismo, amizade e novas parcerias. Dias, noites e finais de semana dedicados à vontade de vencer grandes desafios.
                            </span>
                            <span className='block mb-5 text-justify'>
                                Nós acreditamos na Justiça e reconhecemos a importância do nosso papel na sociedade. Buscamos no direito a principal inspiração para os resultados finais dos nossos processos.
                            </span>
                        </p>
                        <p>
                            Com a expansão das áreas de atuação e o crescimento contínuo, houve a ampliação do espaço físico e da equipe que hoje é composta por 17 advogados (entre sócios e associados), estagiários e colaboradores experientes e qualificados, com o anseio de garantir a ampla satisfação do nosso público.
                        </p>
                        <p>
                            Para garantir atendimento de excelência, aprimoramos e investimos no conhecimento dos nossos colaboradores com aulas e treinamentos internos, ministrados por professores e advogados, criando cada vez mais uma comunicação clara e consistente.
                        </p>
                        <p>
                            Contamos ainda com uma área de Tecnologia da Informação que busca sempre os melhores programas de softwares de modo a organizar com segurança todos os dados processuais digitalizados, facilitando e controlando o acesso às informações em nossos canais diretos de comunicação: Central de Relacionamento com o Cliente, site próprio com área restrita de acompanhamento processual e atendimento de apoio online, correspondências e informativos personalizados.
                        </p>
                        <p>
                            Um relacionamento pessoal e constante que nos impulsiona a compartilhar da luta dos nossos clientes.
                        </p>
                        <p>

                            Tudo o que foi construído e a cada novo passo só terá sentido se permanecer vivo dentro de cada colaborador a semente Foz e, principalmente, nos clientes atendidos. Pois são, com toda certeza, o alicerce da nossa história. E almejamos continuar vivos nesta missão, buscando construir um futuro melhor, lutando com a mesma força que nos impulsiona desde o início: JUSTIÇA!

                        </p>
                        <p>
                            Orgulhamo-nos do nosso legado e, principalmente, o que conseguimos imprimir dentro de cada funcionário e cliente atendido. Eles são, com toda a certeza, a base e o alicerce da nossa história.
                        </p>
                        <h3 className='text-xl text-blue-800 font-bold'>EVOLUINDO SEMPRE</h3>
                        <p className='font-bold text-gray-900'>
                            A sua história sempre nos encorajou a continuar lutando por seus direitos e a evoluir sempre ao seu lado.
                        </p>
                        <p>
                            Os nossos valores são tão importantes quanto a nossa imagem, reflexo do compromisso com os nossos clientes. Andar ao lado deles significa aperfeiçoamento constante. Essa é a Foz Sociedade de Advogados: construindo uma relação de confiança no tempo, preocupada sempre em compartilhar e esclarecer o conhecimento jurídico para transformar a sociedade.
                        </p>
                        <p>
                            Acreditamos na evolução. Acreditamos que as histórias devem ser valorizadas e que as necessidades são reais.
                        </p>
                        <p>
                            Trabalhamos para fazer cumprir o pleno usufruto do Direito. Para fazer valer a Constituição e para trazer Luz à verdade. Defendemos o resgate da dignidade.
                        </p>
                        <p>
                            Reconhecemos que conhecimento é essencial e deve ser compartilhado. Sozinhos, nada podemos fazer.
                        </p>
                        <p>
                            E assim nos adaptaremos sempre às novas realidades do mundo para melhor ajudar às pessoas, pois são elas que nos encorajam a existir e continuar a nossa história.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page