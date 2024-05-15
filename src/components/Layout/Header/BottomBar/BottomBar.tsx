import React from 'react'

import { Fade } from 'react-awesome-reveal'
import DireitoCard from './DireitoCard'

const BottomBar = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-1 gap-[1px] bg-white'>
            <Fade cascade className='w-full'>
                <DireitoCard title='administrativo' img='/adm.jpeg' rounded='md:rounded-r-lg'/>
                <DireitoCard title='tributário' img='/trib.jpeg' rounded='md:rounded-lg' />
                <DireitoCard title='civil' img='/civil.jpeg' rounded='md:rounded-l-lg' />
            </Fade>
        </div>
    )
}

export default BottomBar

