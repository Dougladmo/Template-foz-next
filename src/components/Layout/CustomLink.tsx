'use client'
import { useState } from 'react';
import { BsSquareFill } from 'react-icons/bs';
import Link from 'next/link';

import '@/Styles/Categories.css'

type CustomLinkProps = {
    text: String,
    link: String,
}

const CustomLink = ({ text, link }: CustomLinkProps) => {
    const [animation, setAnimation] = useState('link-back-spin text-gray-900 text-[5px]');

    return (
        <Link href={`${link}`}
            className={`text-gray-900 hover:text-blue-800 transition duration-500 flex items-center gap-2`}
            onMouseEnter={() => setAnimation('link-spin text-blue-800 rotate-[-135deg] text-[10px]')}
            onMouseLeave={() => setAnimation('link-back-spin text-gray-900 text-[5px]')}
        >
            <BsSquareFill className={animation} /> {text}
        </Link>
    );
};

export default CustomLink
    ;
