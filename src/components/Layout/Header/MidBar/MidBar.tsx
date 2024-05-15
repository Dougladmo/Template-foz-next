import React, { useState } from 'react';
import Image from 'next/image';
import { IoMenuOutline, IoSearch } from 'react-icons/io5';

import { Fade } from 'react-awesome-reveal'
import Link from 'next/link';

import '@/Styles/Header.css'
import { FaSquareFull } from 'react-icons/fa';
import HeaderDropdown from './Dropdowns/HeaderDropdown';

interface MidBarProps {
  handleOnClick: React.MouseEventHandler<SVGElement>;
}

const MidBar = ({ handleOnClick }: MidBarProps) => {
  const [searchBar, setSearchBar] = useState(false)

  return (
    <div className='bg-white w-full'>
      <div id="mid-header" className="md:max-w-7xl md:px-3 md:mx-auto px-3 py-5 flex items-center justify-between lg:justify-center">
        <Fade duration={1000}>
          <Image
            alt="Logo Foz advogados"
            src={'/Logo50anos.png'}
            width={300}
            height={300}
            className="md:w-2/3 lg:w-full w-44 hover:opacity-60 transition duration-500 cursor-pointer"
          />
          <nav className="flex gap-5 px-5 items-center text-gray-500 pr-2">
            <ul className='uppercase hidden lg:flex items-center gap-10 text-sm border-r-2 border-gray-500 pr-5 h-3'>
              <li className='text-gray-800 hover:text-blue-800 transition duration-300 '>
                <HeaderDropdown
                  title="INSTITUCIONAL"
                  items={['história', 'valores', 'perfis de clientes', 'depoimentos', 'links úteis', 'principais termos jurídicos']}
                />
              </li>
              <li className='text-gray-800 hover:text-blue-800 transition duration-300 '>
                <HeaderDropdown
                  title="ÁREAS DE ATUAÇÃO"
                  items={['direito administrativo', 'direito tributário', 'direito civil', 'habilitação de herdeiros']}
                />
              </li>
              <li className='text-gray-800 hover:text-blue-800 transition duration-300 '>
                <Link href='#'>ADVOGADOS</Link>
              </li>
              <li className='text-gray-800 hover:text-blue-800 transition duration-300 '>
                <Link href='#'>ARTIGOS</Link>
              </li>
              <li className='text-gray-800 hover:text-blue-800 transition duration-300 '>
                <Link href='#'>NOTÍCIAS</Link>
              </li>
              <li className='text-gray-800 hover:text-blue-800 transition duration-300 '>
                <Link href='#'>CONTATO</Link>
              </li>
            </ul>
            <IoMenuOutline
              onClick={handleOnClick as React.MouseEventHandler<SVGElement>}
              size={50}
              className="hover:text-blue-950 transition duration-300 cursor-pointer lg:hidden"
            />
            <span className='hovertext' data-hover="Buscar">
              <FaSquareFull size={10} className="square absolute hidden lg:flex left-[40%] top-[100%] rotate-45" />
              <IoSearch
                onClick={() => setSearchBar(!searchBar)}
                size={30}
                className="hover:text-blue-950 transition duration-300 cursor-pointer"
              />
            </span>
          </nav>
        </Fade>
      </div>
      <div>
        {searchBar &&
          (
            <form onSubmit={(e) => e.preventDefault()} className='flex items-center justify-center py-3 bg-gray-200'>
              <label htmlFor="search">
                <input type="text" name="search" id="search" placeholder='O que você procura?' className='h-10 w-80 md:w-[420px] px-3 outline-0 rounded-l-lg placeholder:text-gray-900' />
              </label>
              <button type='submit' className='flex items-center justify-center bg-white h-10 w-14 rounded-r-lg'><IoSearch
                size={20}
                className="hover:text-blue-950 transition duration-300 cursor-pointer"
              /></button>
            </form>
          )}
      </div>
    </div >
  );
};

export default MidBar;
