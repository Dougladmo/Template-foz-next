import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import CardLinks from '@/components/institucional/CardLinks'
import InstitucionalBanner from '@/components/institucional/InstitucionalBanner'


const page = () => {
    return (
        <div>
            <InstitucionalBanner title='Principais termos jurídicos' />
            <div className='md:max-w-7xl md:mx-auto p-10 text-gray-900 pb-24 text-justify'>
                <p className='mb-10 text-sm text-gray-700'><Link href='/'>Home</Link> &gt; Principais termos jurídicos
                </p>
                <div className='flex gap-8 md:px-20'>
                    <CardLinks />
                    <div className='text-justify text-base flex flex-col gap-5'>
                        <h2 className='text-start text-3xl font-bold text-blue-800'>CONHEÇA A SEGUIR O SIGNIFICADO DOS PRINCIPAIS TERMOS JURÍDICOS UTILIZADOS</h2>
                        <p className='font-bold'>Acórdão</p>
                        <p>É a decisão proferida pelos tribunais (órgãos colegiados: Câmara, Turma, Seção, Órgão Especial, plenário etc.).</p>
                        <p>Definição: “O acórdão nada mais é do que um simples extrato do julgamento, sendo a representação resumida da conclusão à qual se chegou, não abrangendo toda a extensão e discussão em que se pautou o julgado, mas tão somente os principais pontos da discussão.”</p>
                        <p className='font-bold'>Apelação</p>
                        <p>É o recurso interposto junto ao próprio Juiz da causa, visando uma nova decisão. Após analisar os requisitos de validade do recurso interposto, o Juiz determina a remessa dos autos ao Tribunal competente para o reexame do pedido.</p>
                        <p className='font-bold'>Agravo de Instrumento</p>
                        <p>É o recurso com o qual a parte afetada com alguma decisão contrária a sua vontade pode opor, forçando a remessa do processo para a Instância Superior.</p>
                        <p>Só cabe agravo de instrumento “quando se tratar de decisão suscetível de causar à parte lesão grave e de difícil reparação, bem como nos casos de inadmissão da apelação e nos relativos aos efeitos em que a apelação é recebida”.</p>
                        <p className='font-bold'>Citação da ré</p>
                        <p>É o momento em que o Juiz determina a citação do(a) Réu (Ré) para que ela tenha conhecimento da ação proposta e possa se manifestar, apresentando a sua contestação.</p>
                        <p className='font-bold'>Coisa julgada</p>
                        <p>É quando uma decisão se torna definitiva, não cabendo mais recurso ordinário, especial ou extraordinário. É a condição da sentença proferida que a torna imutável em face da preclusão (decurso do prazo para interpor recurso ou o seu não cabimento).</p>
                        <p className='font-bold'>Contestação da Ré</p>
                        <p>É a resposta do (a) Réu (Ré) ao pedido formulado pelo autor na petição inicial, sendo o meio de defesa com razões bem fundamentadas com que o(a) Réu (Ré) se socorre para negar a pretensão dos autores e rebater a ação proposta.</p>
                        <p className='font-bold'>Contrarrazões</p>
                        <p>É a resposta ao recurso (apelação, recurso especial ou extraordinário) interposto.</p>
                        <p className='font-bold'>Distribuição da ação/petição inicial protocolizada = início do processo</p>
                        <p>É o momento em que a petição inicial é protocolada digitalmente, via internet. Posteriormente, há a distribuição desse processo para uma das 14 Varas da Fazenda Pública.</p>
                        <p className='font-bold'>Embargos à Execução</p>
                        <p>A definição para este termo jurídico é que se trata de uma ação e não uma defesa ou recurso. É uma ação de conhecimento <span className='font-bold underline'>incidente no processo de execução,</span> em que o executado tem a oportunidade de apresentar ao juiz as defesas que tiver contra a execução.</p>
                        <p>É importante esclarecer que o recebimento dos embargos implica na suspensão da execução, a qual é legal. Ela decorre de lei, não cabendo ao juiz versar de sua conveniência. Ele se restringe apenas a decidir se a suspensão da execução ocorrerá de forma parcial ou total, mas não sobre a sua ocorrência. A partir do recebimento dos embargos, o juiz determina a citação da parte contrária para impugná-los no prazo de dez dias.</p>
                        <p>A decisão dos embargos à execução é proferida pelo juiz de 1ª instância e ela é passível de apelação para o Tribunal de Justiça (2ª instância), cuja decisão também é passível de recurso para o Superior Tribunal de Justiça ou o Supremo Tribunal Federal.</p>
                        <p className='font-bold'>Embargos de Declaração</p>
                        <p>É o pedido de esclarecimento de um determinado ponto da decisão que tenha ficado contraditório, duvidoso, omisso ou obscuro.</p>
                        <p className='font-bold'>Embargos de Divergência</p>
                        <p>São apresentados contra a decisão de uma Turma do Supremo Tribunal Federal – STF ou Superior Tribunal de Justiça – STJ, quando há divergência de decisão de outra Turma ou do Plenário.</p>
                        <p className='font-bold'>Embargos Infringentes</p>
                        <p>É o recurso interposto em 2ª instância quando há divergência de entendimento de pelo menos um dos julgadores, em relação aos demais, em julgamento de apelação e de ação rescisória. Para esse recurso ser aceito, é necessário que o acórdão de 2º Grau modifique a decisão de 1º Grau. Por outro lado, se a ação for julgada improcedente e o Tribunal de Justiça confirmar a improcedência, mesmo que haja voto divergente, não cabe interposição de embargos infringentes. O mesmo se aplica para decisão procedente: se confirmada em 2º, mesmo havendo divergência de entendimento entre os Desembargadores, não cabem embargos infringentes.</p>
                        <p className='font-bold'>Emende a inicial</p>
                        <p>É quando o juiz considera que os advogados dos autores devem complementar as informações juntadas na inicial, ou até mesmo juntar o comprovante da guia de recolhimento da diligência do Oficial de Justiça para citação da Ré etc.</p>
                        <p className='font-bold'>Emenda de inicial</p>
                        <p>É o atendimento, por meio de petição, atendendo a solicitação do juiz no que diz respeito à emenda de inicial.</p>
                        <p className='font-bold'>Execução de Sentença</p>
                        <p>É o andamento processual onde há o cumprimento da decisão final do processo, aplicando-se o direito concedido na ação.</p>
                        <p>Nas ações movidas contra a Administração Pública Estadual ou do Município de São Paulo, ou suas respectivas autarquias, essa fase processual é dividida em:</p>
                        <ul>
                            <li className='font-bold list-disc'>
                                Obrigação de fazer
                                <p className='font-normal my-6'>Nos termos do artigo 632 do Código de Processo Civil, o(a) Réu(Ré) é citado(a) na pessoa de seu Procurador para cumprir o apostilamento dos autores. Esse apostilamento consiste na anotação, do direito alcançado pela ação judicial, em prontuário de cada autor. Dependendo da ação, após a publicação em Diário Oficial desse apostilamento, o autor começa a receber a diferença em holerite;</p>
                                <p className='font-normal mb-8'>Há casos em que, mesmo que o objeto da ação não culmine em pagamento da diferença em holerite, apenas período retroativo, o apostilamento ocorre para que o direito alcançado pela decisão judicial fique registrado em prontuário.</p>
                            </li>
                            <li className='list-disc font-bold'>
                                Obrigação de pagar
                                <p className='font-normal my-8'>Após o apostilamento, requeremos que a parte contrária junte no processo as informações necessárias para efetuação do cálculo das diferenças atrasadas, as quais correspondem ao período anterior ao apostilamento.</p>
                                <p className='font-normal my-8'>Nos casos em que o objetivo da ação visa apenas o pagamento de diferenças atrasadas, respeitada a prescrição quinquenal, observa-se o período abrangido na ação, desde a distribuição do processo na Justiça.</p>
                                <p className='font-normal my-8'>Ao apresentarmos o cálculo de cada autor, fazemos a requisição da verba por meio de Ofício Requisitório, dirigido ao Presidente do Tribunal de Justiça (chamado de Precatório Judicial), que processará o ofício e requisitará a verba junto à autoridade administrativa.</p>
                                <p className='font-normal my-8'>Se o valor da indenização para o <span className='font-bold underline'>servidor estadual</span> for até o limite de R$ 26.736,04 (vinte e seis mil, setecentos e trinta e seis reais e quatro centavos)* esse pagamento ocorrerá pelo sistema de <span className='font-bold'>Requisição de Ofício de Pequeno Valor</span>, conhecido também como “ofício de 90 dias”, o qual vem sendo cumprido dentro do prazo (90 dias), a partir do último dia útil do mês em que ocorrer do protocolo do ofício requisitório para pagamento. Acima desse limite, o pagamento ocorrerá pelo sistema de Precatório Alimentar, que é pago por número de Ordem Cronológica.</p>
                                <p className='font-normal my-8'>A explicação acima se aplica também ao <span className='font-bold underline'>servidor municipal</span>, contudo, o valor para requisição do “ofício de 90 dias” é de R$ 19.216,09 (dezenove mil, duzentos e dezesseis reais e nove centavos)*.</p>
                                <p className='font-normal my-8'>*Valor vigente para o exercício de 2016.</p>
                            </li>
                        </ul>
                        <p className='font-bold'>Extinção do processo</p>
                        <p>É o ato pelo qual se extingue um processo com ou sem julgamento do mérito.</p>
                        <ul className='list-disc flex flex-col gap-3'>
                            <li>
                                <p>
                                    A extinção, <span className='font-bold'> com julgamento do mérito</span>, ocorre quando o pedido inicial é apreciado, e cumprido o que foi decidido pelo Juiz. Nas questões que envolvem pagamento de numerário, a extinção do processo ocorre com a quitação integral, em nome de todos os autores.
                                </p>
                            </li>
                            <li>
                                <p>
                                    A extinção, <span className='font-bold'> sem julgamento do mérito</span>, ocorre quando o pedido inicial não é apreciado em razão de formalidades não cumpridas, sendo possível redistribuir a mesma ação utilizando os documentos anteriormente, e haverá novo número de processo e Vara de Origem.
                                </p>
                            </li>
                        </ul>
                        <p className='font-bold'>
                            Intervenção Federal
                        </p>
                        <p>É uma medida excepcional e temporária que afasta a autonomia dos Estados, Distrito Federal e Municípios nos casos estabelecidos pelo artigo 34 da Constituição Federal, destacando-se no campo do Direito o não cumprimento das decisões judiciais e oposição a cumprir a própria Constituição Federal como, por exemplo, não honrar o pagamento de precatório no prazo estabelecido.</p>
                        <p className='font-bold'>
                            Julgo improcedente
                        </p>
                        <p>O pedido da ação judicial foi negado em 1ª Instância, ou seja, a ação foi perdida em 1º grau.</p>
                        <p className='font-bold'>
                            Julgo procedente
                        </p>
                        <p>O pedido da ação judicial foi concedido em 1ª Instância, ou seja, a ação foi ganha em 1º grau.</p>
                        <p className='font-bold'>
                            Litispendência
                        </p>
                        <p>
                            Ocorre quando o interessado ingressa com a mesma ação judicial duas vezes. A partir do momento em que é notada, anula-se uma das ações, e o Juiz penaliza o autor no pagamento dos honorários de sucumbência do Procurador da parte contrária.
                        </p>
                        <p className='font-bold'>
                            Passagem de autos
                        </p>
                        <p>
                            É o processamento interno no Tribunal de Justiça que consiste na identificação, registro do processo em 2ª Instância.
                        </p>
                        <p className='font-bold'>
                            Petição inicial
                        </p>
                        <p>É a primeira peça do processo, na qual o advogado fundamenta o pedido dos autores.

                        </p>
                        <p className='font-bold'>
                            Prescrição
                        </p>
                        <p>
                            É a perda do direito de ingressar com ação judicial pelo decurso do prazo. Ocorre quando um direito não é colocado em prática no prazo determinado por lei.
                        </p>
                        <p>
                            As ações movidas contra a Administração Pública prescrevem em cinco anos, a contar do ato ou fato que deu origem ao direito (prescrição de fundo de direito), ou as parcelas que ultrapassam o quinquênio (prescrição quinquenal).
                        </p>
                        <p className='font-bold'>
                            Recurso
                        </p>
                        <p>
                            É o poder de vontade, juridicamente regulado, conferido à parte vencida para solicitar nova decisão, normalmente, ao órgão de hierarquia superior (Instância Superior).
                        </p>
                        <p className='font-bold'>
                            Recurso Especial
                        </p>
                        <p>
                            É apresentado ao Superior Tribunal de Justiça (STJ) contra decisões de outros tribunais, ou em última instância, quando houver ofensa às leis federais.
                        </p>
                        <p className='font-bold'>
                            Recurso Extraordinário
                        </p>
                        <p>
                            É apresentado ao Supremo Tribunal Federal (STF) contra decisões de outros tribunais, em última instância, quando houver ofensa à Constituição Federal.
                        </p>
                        <p className='font-bold'>
                            Réplica
                        </p>
                        <p>É a resposta à contestação da parte contrária.</p>
                        <p>Sentença</p>
                        <p>
                            É o ato pelo qual o juiz competente finaliza um processo, decidindo ou não o mérito da causa (processo de conhecimento) em  1ª Instância.
                        </p>
                        <p>Sucumbência</p>
                        <p>
                            É o princípio pelo qual a parte vencida em uma ação judicial (parte que perdeu) é penalizada a pagar os honorários do advogado da parte contrária, bem como as despesas processuais antecipadas.
                        </p>
                        <p>
                            No funcionalismo público, quando um servidor ganha uma ação judicial, o(a) Réu(Ré) é obrigado(a) a pagar as despesas antecipadas e os honorários advocatícios, os quais são fixados pelo Juiz. Esses honorários, conhecidos por <span className='italic'>“honorários da sucumbência”</span>, são automaticamente destinados ao advogado do servidor, independente dos honorários previamente contratados. No entanto, <span className='underline'>quando o servidor perde</span> uma ação judicial, ele é penalizado a pagar os honorários do Procurador do(a) Réu(Ré) e o desconto, cuja parcela não pode ultrapassar 10% (dez por cento) de seus vencimentos, é efetuado diretamente em seu holerite. Neste caso, o advogado que o defendeu nada recebe. É o que chamamos de “contrato de risco”.
                        </p>
                        <h3 className='text-blue-800 text-2xl font-bold'>INFORMAÇÕES IMPORTANTES SOBRE PROCURAÇÃO</h3>
                        <p className='font-bold'>Procuração</p>
                        <p>
                            É o documento essencial para propositura de uma ação judicial, e o juiz não o aceita se a sua emissão contar mais de dois anos. Neste caso, é solicitada nova procuração com data recente. No entanto, há uma exceção quando se trata de mala direta: para não perdermos o prazo de ajuizamento da ação (distribuição junto ao Fórum), juntamos no processo a procuração que está prestes a vencer ou vencida. Depois da distribuição da ação, o nosso Departamento de Comunicação solicita outra, com data atualizada.
                        </p>
                        <p className='font-bold'>Procuração Pública</p>
                        <p>
                            É um documento dirigido a menor de idade (não emancipado), ou pessoa incapacitada de exercer os seus direitos, ou pessoa interditada, ou analfabeta. No caso de menor de idade, esse documento prevalecerá até completar a maior idade ou adquirir sua emancipação.
                        </p>
                        <p className='font-bold'>Curatela</p>
                        <p>
                            É um documento emitido pelo juiz do processo de curatela, informando que o interessado (cliente autor) não tem condições de responder por si só. Nesta situação, o magistrado nomeia um curador para poder representar a pessoa incapacitada perante órgãos públicos, mover ações em seu nome etc.
                        </p>
                        <p>
                            Para que o curador possa constituir advogados em nome da pessoa interdita, é imprescindível a menção de <span className='font-bold'>autorização para propositura de ações judiciais</span>, conforme exigência do Ministério Público. Essa pessoa (curador) pode ser o pai, a mãe, um irmão, o esposo, a esposa, que responderá por essa pessoa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page