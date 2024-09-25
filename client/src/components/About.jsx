import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaEnvelope, FaMobile } from 'react-icons/fa'; // Added FaEnvelope for email icon
import logo from '/logo.png';

function About() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-start p-6 md:p-10'>
            {/* Left Section */}
            <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                <img src={logo} width={96} alt="Logo" />
                <div className='mt-6 md:mt-8'>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-4'>NEWSLETTER SIGNUP</h3>
                    <div className='flex items-center bg-gray-100 border-b-2 border-black w-full p-2 mb-4'>
                        <FaEnvelope className='text-gray-500 mr-2' />
                        <input type="email" name="email" id="email" className='bg-transparent w-full focus:outline-none' placeholder='Enter Email' />
                    </div>
                    <button className='border border-black px-4 md:px-6 py-2 md:py-3 bg-green-500 rounded text-sm md:text-base hover:bg-black hover:text-white'>Subscribe</button>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-full md:w-1/2 md:pl-16'>
                <h1 className='text-2xl md:text-4xl font-medium mb-6 text-center md:text-left'>
                    We unite cricket fans from <br className='hidden md:block' /> all over the globe
                </h1>
                <div className="flex flex-col md:flex-row">
                    {/* Socials */}
                    <div className='flex flex-col mb-6 md:mb-0'>
                        <span className='font-medium mb-3'>Socials</span>
                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <FaFacebookF className='text-blue-600' />
                                <span>Facebook</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaWhatsapp className='text-green-500' />
                                <span>WhatsApp</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaTwitter className='text-blue-400' />
                                <span>Twitter</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaInstagram className='text-pink-500' />
                                <span>Instagram</span>
                            </div>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className='flex flex-col mt-6 md:mt-0 md:ml-16'>
                        <span className='font-medium mb-3'>Contact Info</span>
                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <FaEnvelope className='text-blue-600' />
                                <span>Email: info@gmail.com</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaMobile className='text-green-500' />
                                <span>Mobile: 9999999999</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
