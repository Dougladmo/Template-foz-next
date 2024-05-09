import React from 'react'
import Link from 'next/link'
import { FaUser, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const TopBar = () => {
  return (
    <div className='bg-gray-200 border-b-[1px] border-gray-400 px-5'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            <ul className='flex items-center gap-2'>
                <li className=''>
                    <Link href="#">
                        <FaFacebook size={18} className='text-gray-700 hover:text-blue-950 transition duration-300 cursor-pointer' />
                    </Link>
                </li>
                <li className='border-x-[1px] px-2 border-gray-400 py-2'>
                    <Link href="#">
                        <SiGmail size={18} className='text-gray-700 hover:text-blue-950 transition duration-300 cursor-pointer' />
                    </Link>
                </li>
                <li className=''>
                    <Link href="#">
                        <FaLinkedin size={18} className='text-gray-700 hover:text-blue-950 transition duration-300 cursor-pointer' />
                    </Link>
                </li>
            </ul>
            <div className='md:flex md:gap-28 md:items-center'>
                <p className='text-xs text-gray-700 hidden md:flex'>
                    <span className='pr-3 border-r-2 border-gray-400'>(11) 3113-0100</span>
                    <span className='pl-3'> fozadvogados@fozadvogados.com.br </span>
                </p>
                <Link href="https://www.fozadvogados.com.br/AreaRestrita/publico/Login.jsp" className='text-blue-950 flex font-bold text-sm transition duration-300 hover:text-blue-900 cursor-pointer'>
                   <span className='flex items-baseline gap-1 border-b-[1px] border-blue-800 px-2'> <FaUser /> Área do cliente </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TopBar