'use client'
import React, { useState } from 'react'

import { BiSolidWebcam } from "react-icons/bi";

import '@/Styles/CardValoresAnimation.css'

const CardValoresMissao
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
                                    Atuar com ética e transparência na defesa do direito dos seus clientes e sucessores. Ser referência nas áreas em que atua, priorizando excelência no atendimento e na prestação de serviços.
                                </p>
                            </div>
                    )
                    :
                    (
                        <div style={{ background: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/valores-missao-foz-advogados.jpg) no-repeat center/cover' }}
                            className='card-closed flex flex-col items-center justify-center rounded-lg py-10 gap-5'>
                            <BiSolidWebcam size={100} className='text-blue-800' />
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

export default CardValoresMissao
