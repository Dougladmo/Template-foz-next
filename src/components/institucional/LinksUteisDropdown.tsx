'use client'
import React, { useState } from 'react'

import { ImPlus } from 'react-icons/im'
import LinkInteresse from './LinkInteresse';

import '@/Styles/LinksUteisAnimation.css'


type LinkItem = {
    title: string,
    link: string,
}

type LinksDropdownProps = {
    title: string;
    items: LinkItem[];
}

const LinksUteisDropdown = ({title, items}: LinksDropdownProps) => {
    const [ isActive, setIsActive ] = useState(false)

    return (
        <div>
            <div onClick={() => setIsActive(!isActive)} className={`flex items-center justify-between w-full px-6 py-3 text-white bg-blue-800 cursor-pointer ${isActive ? 'rounded-t-lg' : 'rounded-lg' } `}>

                <h3 className='text-xl font-bold uppercase'>{title}</h3>
                {isActive ? <hr className='w-3 h-1 bg-white' /> : <ImPlus size={15} className='text-white' />}
            </div>
            {isActive ?
                (
                    <ul className='dropdown-opened flex flex-col bg-[#003B53] text-white p-6 gap-3 rounded-b-lg'>
                        {items.map((item) => (
                            <li>
                                <LinkInteresse title={item.title} link={item.link}/>
                            </li>
                        ))}
                    </ul>
                )
                :
                (
                    <div className='dropdown-closed bg-[#003B53] h-[220px]'>
                        <li>
                            
                        </li>
                    </div>
                )
            }
        </div>
    )
}

export default LinksUteisDropdown