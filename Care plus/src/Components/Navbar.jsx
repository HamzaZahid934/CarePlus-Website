import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    MyLogo
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-white hover:text-gray-200">Home</a>
                    <a href="#services" className="text-white hover:text-gray-200">Services</a>
                    <a href="#about" className="text-white hover:text-gray-200">About</a>
                    <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <a href="#home" className="block text-white px-4 py-2">Home</a>
                    <a href="#services" className="block text-white px-4 py-2">Services</a>
                    <a href="#about" className="block text-white px-4 py-2">About</a>
                    <a href="#contact" className="block text-white px-4 py-2">Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar