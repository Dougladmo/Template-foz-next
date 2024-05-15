import React from 'react'

import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
    return (
        <div id='contact' className='flex flex-col gap-3 md:max-w-[200px] lg:max-w-[300px]'>
            <h4 className='text-lg uppercase'>Contato</h4>
            <div className='flex items-center gap-3'>
                <IoLocationSharp size={12} />
                <p className='flex flex-col text-xs text-gray-500'>
                    <span>Rua Senador Paulo Egídio, 72</span>
                    <span>6º andar - Conj. 601</span>
                    <span>Centro, São Paulo - SP - 01006-904</span>
                </p>
            </div>
            <p className='flex items-center text-xs gap-3'> <FaPhone size={12} /> <span>Fone: (11) 3113-0100</span></p>
            <p className='flex items-center  text-xs gap-3'> <IoMail size={12} /> <span>fozadvogados@fozadvogados.com.br</span></p>
        </div>
    )
}

export default Contact