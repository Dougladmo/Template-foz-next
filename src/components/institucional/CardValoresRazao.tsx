'use client'
import React, { useState } from 'react'

import { MdGavel } from "react-icons/md";

const CardValoresRazao
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
                                A Foz Advogados valoriza a sua trajetória, o seu nome, os seus clientes. O compromisso dos sócios e profissionais que a integram com a ética e a transparência nas informações, e reflexo da sua imagem é a fidelização de seus clientes.
                            </p>
                        </div>
                    ) : (

                        <div style={{ background: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/valores-razao-foz-advogados.jpg) no-repeat center/cover' }}
                            className='card-closed flex flex-col items-center justify-center rounded-lg py-10 gap-5'>
                            <MdGavel size={100} className='text-blue-800' />
                            <div className="flex items-center text-blue-800">
                                <div className="h-[1px] bg-blue-800 w-5 md:w-7 mr-3"></div>
                                <p className="font-sans text-xl font-medium uppercase">razão</p>
                                <div className="h-[1px] bg-blue-800 w-5 md:w-7 ml-3"></div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

export default CardValoresRazao
