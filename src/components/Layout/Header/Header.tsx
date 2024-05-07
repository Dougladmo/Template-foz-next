'use client'
import React, { useState } from 'react'

import TopBar from './TopBar';
import MidBar from './MidBar';
import BottomBar from './BottomBar';
import OffCanvas from './OffCanvas';


const Header = () => {
  const [offCanvas, setOffCanvas] = useState(false)
  
  const toggleOffCanvas = () => {
    offCanvas ? setOffCanvas(false) : setOffCanvas(true)
  }

  return (
    <>
      { offCanvas ? 
        (
          <>
            <div onClick={toggleOffCanvas} className='absolute z-10 h-screen w-screen bg-[#00000066]'></div>
              <OffCanvas /> 
          </>
        ) 
      : 
      (null)
      }
      <TopBar />
      <MidBar handleOnClick={toggleOffCanvas} />
      <BottomBar />
    </>
  )
}

export default Header