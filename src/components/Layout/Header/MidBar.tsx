import React from 'react';
import Image from 'next/image';
import { IoMenuOutline, IoSearch } from 'react-icons/io5';

import { Fade } from 'react-awesome-reveal'

interface MidBarProps {
  handleOnClick: React.MouseEventHandler<HTMLElement | SVGElement>;
}

const MidBar = ({ handleOnClick }: MidBarProps) => {
  return (
    <div className='bg-white-default w-full'>
      <div id="mid-header" className="md:max-w-5xl md:px-0 md:mx-auto px-3 py-5 flex items-center justify-between">
        <Fade duration={1000}>
          <Image
            alt="Logo Foz advogados"
            src={'/asset 0.png'}
            width={360}
            height={80}
            className="w-3/4 hover:opacity-60 transition duration-500 cursor-pointer"
          />
          <nav className="flex gap-3 items-center text-gray-500 pr-2">
            <IoMenuOutline
              onClick={handleOnClick as React.MouseEventHandler<SVGElement>}
              size={50}
              className="hover:text-blue-950 transition duration-300 cursor-pointer"
            />
            <IoSearch
              size={30}
              className="hover:text-blue-950 transition duration-300 cursor-pointer"
            />
          </nav>
        </Fade>
      </div>
    </div>
  );
};

export default MidBar;
