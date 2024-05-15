// components/OffCanvasDropdown.tsx
import { useState } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

import '@/Styles/Dropdown.css'
import Link from 'next/link';

type OffCanvasDropdownProps = {
    title: string;
    items: string[];
};

const OffCanvasDropdown = ({ title, items }: OffCanvasDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={`border-b-[1px] bg-blue-800 hover:brightness-150 ${isOpen && 'brightness-150'}`}>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`text-sm uppercase flex items-center gap-3 py-5 w-full pl-2 hover:translate-x-2 transition duration-500 ${isOpen && 'translate-x-2'}`}
                >
                    {title}
                    {isOpen ? <BsTriangleFill size={10} className='triangleOffcanvas-opened rotate-180' /> : <BsTriangleFill size={10} className='triangleOffcanvas-closed rotate-90' />}
                </button>
            </div>
            {isOpen && (
                <ul className='text-white text-xs uppercase flex flex-col'>
                    {items.map((item, index) => (
                        <li key={index} className='flex flex-col justify-start border-b-[1px] border-gray-500 duration-300 transition bg-blue-800 hover:brightness-150'>
                            <Link href="#" className='py-5 w-full pl-2 hover:translate-x-2 transition duration-500'>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OffCanvasDropdown;
