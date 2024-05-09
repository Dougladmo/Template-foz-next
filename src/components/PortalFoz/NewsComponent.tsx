import Link from 'next/link'
import React from 'react'

type NewsComponentProps = {
  date: string,
  title: string,
  link: string,
}

const NewsComponent = ({date, title, link}: NewsComponentProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <p className="text-xs md:text-sm uppercase text-gray-700">{date}</p>
        <Link href={link} className='text-base text-blue-800'>{title}</Link>
        <Link href='#' className="text-xs md:text-sm uppercase text-gray-700">Notícias Gerais</Link>
    </div>
  )
}

export default NewsComponent