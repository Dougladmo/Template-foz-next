import React from 'react'
import NewsComponent from './NewsComponent'
import Link from 'next/link'

export const news = [
  {
    title: "Embutida na PEC emergencial, ampliação de prazo para zerar pagamento de precatórios é NOVO CALOTE",
    date: "15 de março de 2021",
    link: "#",
    img: '/Calote.jpeg',
  },
  {
    title: "FOZ Advogados alerta sobre golpes do precatório na TV Record",
    date: "19 de outubro de 2020",
    link: "#",
    img: '/Alert.jpeg',
  },
  {
    title: "Fique atento às mudanças na Contribuição Previdenciária de apostados e pensionistas",
    date: "13 de outubro de 2020",
    link: "#",
    img: '/Megafone.jpeg',
  },
  {
    title: "Novo teto de RPV é inaplicável para execuções judiciais em curso contra a Fazenda Pública",
    date: "11 de junho de 2020",
    link: "#",
    img: '/Martelo.jpeg',
  },
]

const PortalSection = () => {
  return (
    <div className='flex flex-col md px-4 bg-white md:w-1/2 md:px-20 md:py-5'>
          <h3 className="text-xl font-bold mb-3 text-blue-800 uppercase">portal da foz</h3>
          {news.map((item, index) => {
            return  <div key={index} className='border-b-[1px] border-gray-300 pb-2 mt-2'>
                      <NewsComponent link={item.link} date={item.date} title={item.title} img={item.img} />
                    </div>
          })}
          <Link href="#" className="bg-blue-800 text-white text-center max-w-52 mt-3 px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300 border-blue-800 border-2">Ver todas as notícias</Link>
    </div>
  )
}

export default PortalSection