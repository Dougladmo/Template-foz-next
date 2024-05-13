// components/HeaderDropdown.tsx
import { useState } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

import '@/Styles/Dropdown.css'

type HeaderDropdownProps = {
    title: string;
    items: string[];
};

const HeaderDropdown = ({ title, items }: HeaderDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="relative" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="flex items-center gap-2"
            >
                {title}
                {isOpen ? <BsTriangleFill size={10} className='triangle-up' /> : <BsTriangleFill size={10} className='triangle-down rotate-180' /> }
            </button>
            {isOpen && (
                <div 
                    className="header-dropdown absolute -left-3 mt-2 py-2 w-64 bg-white rounded-lg" 
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:text-blue-800"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderDropdown;
