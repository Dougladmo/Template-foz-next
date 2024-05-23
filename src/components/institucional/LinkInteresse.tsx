import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

type LinkInteresseProps = {
    title: string;
    link: string;
}

const LinkInteresse = ({ title, link }: LinkInteresseProps) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <Link
            href={link}
            target='blank'
            className='flex items-center gap-1 transition duration-500 hover:opacity-60'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {title}
            {isHover ?
                <MdOutlineKeyboardDoubleArrowRight className='transition duration-500 translate-x-2' />
                :
                <MdOutlineKeyboardDoubleArrowRight className='transition duration-500 translate-x-0' />}
        </Link>
    )
}

export default LinkInteresse