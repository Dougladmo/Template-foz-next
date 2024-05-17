// components/HeaderDropdown.tsx
import { useState, useRef } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

import '@/Styles/Dropdown.css'

type HeaderDropdownProps = {
    title: string;
    items: string[];
};

const HeaderDropdown = ({ title, items }: HeaderDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    let closeTimer: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
        if (closeTimer) clearTimeout(closeTimer);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimer = setTimeout(() => {
            setIsOpen(false);
        }, 200); // tempo de atraso ao tirar o mouse do dropdown
    };

    const handleDropdownMouseEnter = () => {
        if (closeTimer) clearTimeout(closeTimer);
        setIsOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        closeTimer = setTimeout(() => {
            setIsOpen(false);
        }, 200); // tempo de atraso ao tirar o mouse do dropdown
    };

    return (
        <div 
            className="relative" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                ref={buttonRef}
                className="flex items-center gap-2"
            >
                {title}
                {isOpen ? <BsTriangleFill size={10} className='triangle-up-opened' /> : <BsTriangleFill size={10} className='triangle-down-closed rotate-180' /> }
            </button>
            {isOpen && (
                <div 
                    ref={dropdownRef}
                    className="header-dropdown absolute -left-3 mt-2 py-2 w-64 bg-white rounded-lg" 
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
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
