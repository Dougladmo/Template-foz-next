import React from 'react';
import Image from 'next/image';
import { IoMenuOutline, IoSearch } from 'react-icons/io5';

import { Fade } from 'react-awesome-reveal'
import Link from 'next/link';

interface MidBarProps {
  handleOnClick: React.MouseEventHandler<SVGElement>;
}

const MidBar = ({ handleOnClick }: MidBarProps) => {
  return (
    <div className='bg-white-default w-full'>
      <div id="mid-header" className="md:max-w-6xl md:px-3 md:mx-auto px-3 py-5 flex items-center justify-between lg:justify-center">
        <Fade duration={1000}>
          <Image
            alt="Logo Foz advogados"
            src={'/Logo50anos.png'}
            width={300}
            height={300}
            className="md:w-2/3 lg:w-3/4 w-44 hover:opacity-60 transition duration-500 cursor-pointer"
          />
          <nav className="flex gap-5 items-center text-gray-500 pr-2">
            <ul className='text-gray-900 uppercase hidden lg:flex items-center gap-10 text-[13px] border-r-2 border-gray-500 pr-5 h-3'>
              <li>
                <Link href='#'>INSTITUCIONAL</Link>
              </li>
              <li>
                <Link href='#'>ÁREAS DE ATUAÇÃO</Link>
              </li>
              <li>
                <Link href='#'>ADVOGADOS</Link>
              </li>
              <li>
                <Link href='#'>ARTIGOS</Link>
              </li>
              <li>
                <Link href='#'>NOTÍCIAS</Link>
              </li>
              <li>
                <Link href='#'>CONTATO</Link>
              </li>
            </ul>
            <IoMenuOutline
              onClick={handleOnClick as React.MouseEventHandler<SVGElement>}
              size={50}
              className="hover:text-blue-950 transition duration-300 cursor-pointer lg:hidden"
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
