import React, { useState, useRef } from 'react';
import { FaSearch, FaFacebookF, FaTwitter, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '/logo.png';

function Header({ menuOpen, setMenuOpen, scrollToSection, fixtureRef, pointTableRef, highlightsRef, topPerformersRef, aboutRef }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const timeoutRef = useRef(null); // Ref to store the timeout ID

    const handleMouseEnter = () => {
        // Clear any existing timeout to keep the dropdown visible
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        // Set a timeout to hide the dropdown after 3 seconds
        timeoutRef.current = setTimeout(() => {
            setDropdownVisible(false);
        }, 3000);
    };

    const handleMouseEnterDropdown = () => {
        // Clear the timeout if mouse enters the dropdown area
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    return (
        <header className='text-white flex justify-between items-center py-4 px-5 md:px-10 relative z-50'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className='h-12 w-12 md:h-24 md:w-24' />
            </div>
            <div className='md:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <nav className={`flex flex-col md:flex md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-6 absolute md:static top-16 md:top-auto w-full md:w-auto left-0 md:left-auto py-6 md:py-0 font-medium bg-transparent md:bg-transparent ${menuOpen ? 'flex' : 'hidden'}`}>
                <ul className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'>
                    <a className='hover:border-b-2 md:border-none text-center md:text-left'>HOME</a>
                    <li className='relative'>
                        <a
                            className='hover:border-b-2 md:border-none text-center md:text-left transition duration-400'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            PAGES
                        </a>
                        {dropdownVisible && (
                            <div 
                                onMouseEnter={handleMouseEnterDropdown} 
                                onMouseLeave={handleMouseLeave}
                                className='absolute left-1/2 text-sm transform -translate-x-1/2 mt-10 w-40 bg-gray-100 text-gray-900 shadow-lg z-10'
                            >
                                <ul className='flex flex-col py-4'>
                                    <li onClick={() => scrollToSection(fixtureRef)} className='py-2 mx-4 hover:border-b-2 hover:border-black hover:ml-6 cursor-pointer transition duration-400 ease-in-out'>
                                        FIXTURE
                                    </li>
                                    <li onClick={() => scrollToSection(topPerformersRef)} className='py-2 mx-4 hover:border-b-2 hover:border-black hover:ml-6 cursor-pointer transition duration-400 ease-in-out'>
                                        TOP PERFORMERS
                                    </li>
                                    <li className='py-2 mx-4 hover:border-b-2 hover:border-black hover:ml-6 cursor-pointer transition duration-400 ease-in-out'>
                                        STORIES
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <a onClick={() => scrollToSection(pointTableRef)} className='hover:border-b-2 transition duration-400 text-center md:text-left'>POINT TABLE</a>
                    <a onClick={() => scrollToSection(highlightsRef)} className='hover:border-b-2 transition duration-400 text-center md:text-left'>HIGHLIGHTS</a>
                    <a onClick={() => scrollToSection(aboutRef)} className='hover:border-b-2 transition duration-400 text-center md:text-left'>ABOUT</a>
                </ul>
            </nav>

            <div className='hidden md:flex space-x-4 text-lg'>
                <FaSearch className='cursor-pointer' />
                <FaFacebookF className='cursor-pointer' />
                <FaTwitter className='cursor-pointer' />
                <FaWhatsapp className='cursor-pointer' />
            </div>
        </header>
    );
}

export default Header;
