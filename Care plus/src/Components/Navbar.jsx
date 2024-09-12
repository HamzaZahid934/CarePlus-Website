import React, { useState } from 'react';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="bg-[#faeada] border-b border-[rgba(186,138,91,0.2)] py-4">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
                    {/* Brand */}
                    <div className="text-lg font-bold font-sans">
                        <a href="/" className="pl-0">
                            <img src={Logo} typeof='svg' alt='CarePlus'></img>
                        </a>
                    </div>

                    {/* Hamburger Menu (visible on small screens) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-black focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Centered Menu (hidden on small screens) */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/src/Pages/About.jsx" className="text-black uppercase px-2 text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/src/Pages/Categories.jsx" className="text-black uppercase px-2 text-sm">
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="/src/Pages/Shop.jsx" className="text-black uppercase px-2 text-sm">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="/src/Pages/Blogs.jsx" className="text-black uppercase px-2 text-sm">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/src/Pages/Reviews.jsx" className="text-black uppercase px-2 text-sm">
                                    Reviews
                                </a>
                            </li>
                            <li>
                                <a href="/src/Pages/Contact.jsx" className="text-black uppercase px-2 text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side (Icons) */}
                    <div className="flex items-center space-x-5">
                        <button className="text-black focus:outline-none" aria-label="Search">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-4.35-4.35m1.85-6.15a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0z"
                                ></path>
                            </svg>
                        </button>

                        <button className="text-black focus:outline-none" aria-label="User">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5.121 17.804A9 9 0 1 1 18 21a9.003 9.003 0 0 1-12.879-3.196zM15 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"
                                ></path>
                            </svg>
                        </button>

                        <button className="text-black focus:outline-none flex items-center" aria-label="Cart">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m5.6 8v2a3 3 0 1 1-6 0v-2m13 0v2a3 3 0 1 1-6 0v-2M5 21h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"
                                ></path>
                            </svg>
                            <span className="ml-2 text-sm">(0)</span>
                        </button>
                    </div>

                    {/* Responsive Menu (visible on small screens) */}
                    {isOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-10">
                            <ul className="flex flex-col items-center space-y-4 py-4">
                                <li>
                                    <a href="/" className="text-black uppercase px-2 text-sm">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-black uppercase px-2 text-sm">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-black uppercase px-2 text-sm">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;