'use client'
import React, { useState } from 'react'

import { FaEye } from "react-icons/fa6";

const CardValoresvisao
    = () => {
        const [isActive, setIsActive] = useState(false)

        return (
            <div
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            >
                {isActive ?
                    (
                        <div className='card-opened flex flex-col items-center justify-center bg-blue-800 text-white pb-40 rounded-lg p-10 gap-5'>
                            <p>
                                Aprimorar os serviços profissionais com comprometimento tecnológico e colaboradores qualificados, visando sempre o crescimento e o alto grau de satisfação dos nossos clientes.
                            </p>
                        </div>
                    )
                    :
                    (
                        <div style={{ background: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/valores-visao-foz-advogados.jpg) no-repeat center/cover' }}
                            className='card-closed flex flex-col items-center justify-center rounded-lg py-10 gap-5'>
                            <FaEye size={100} className='text-blue-800' />
                            <div className="flex items-center text-blue-800">
                                <div className="h-[1px] bg-blue-800 w-5 md:w-7 mr-3"></div>
                                <p className="font-sans text-xl font-medium uppercase">visão</p>
                                <div className="h-[1px] bg-blue-800 w-5 md:w-7 ml-3"></div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

export default CardValoresvisao
