'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

type NewsComponentProps = {
  date: string,
  title: string,
  link: string,
  img: string,
}

const NewsComponent = ({ date, title, link, img }: NewsComponentProps) => {
  return (
    <div className='flex md:gap-5'>
      <Fade>
        <Link href='#'>
          <Image
            src={img}
            alt='imagem da noticia'
            width={100}
            height={100}
            className='hidden transition duration-300 rounded-lg hover:opacity-70 md:flex'
          />
        </Link>
        <div className='flex flex-col gap-1'>
          <p className="text-xs text-gray-700 uppercase">{date}</p>
          <Link href={link} className='text-base text-blue-800 transition duration-300 md:text-sm hover:opacity-60'>{title}</Link>
          <Link href='#' className="text-xs text-gray-700 uppercase">Notícias Gerais</Link>
        </div>
      </Fade>
    </div>
  )
}

export default NewsComponent