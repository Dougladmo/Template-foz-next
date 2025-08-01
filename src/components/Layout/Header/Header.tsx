'use client'
import React, { useState } from 'react';
import TopBar from './TopBar/TopBar';
import MidBar from './MidBar/MidBar';
import OffCanvas from './MidBar/OffCanvas';
import { Slide } from 'react-awesome-reveal';

const Header = () => {
  const [offCanvas, setOffCanvas] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvas(!offCanvas);
    // Adiciona ou remove a classe 'overflow-hidden' do elemento body
    document.body.classList.toggle('overflow-hidden', !offCanvas);
  };

  return (
    <header>
      {offCanvas && (
        <>
          <div onClick={toggleOffCanvas} className='absolute z-30 h-screen w-screen bg-[#00000066] lg:hidden'></div>
          <Slide direction='left' className='fixed left-0 z-30 w-full' >
            <OffCanvas />
          </Slide>
        </>
      )}
      <TopBar />
      <div className='relative z-10'>
        <MidBar handleOnClick={toggleOffCanvas} />
      </div>
    </header>
  );
};

export default Header;
