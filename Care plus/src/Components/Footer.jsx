import React from 'react';
import footerlogo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="bg-[#faeada] p-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <ul>
                            <li><a href="/about-us" className="text-black hover:underline">About us</a></li>
                            <li><a href="/category" className="text-black hover:underline">Categories</a></li>
                            <li><a href="/products" className="text-black hover:underline">Shop</a></li>
                            <li><a href="/blogs" className="text-black hover:underline">Blogs</a></li>
                        </ul>
                        <ul>
                            <li><a href="/reviews" className="text-black hover:underline">Reviews</a></li>
                            <li><a href="/faq" className="text-black hover:underline">FAQ</a></li>
                            <li><a href="/contact-us" className="text-black hover:underline">Contact us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Center Section */}
                <div className="text-center">
                    <div className="flex justify-center">
                        <a href="/" className="pl-0">
                            <img src={footerlogo} typeof='svg' alt='CarePlus'></img>
                        </a>
                    </div>
                    <p className="mb-4">Tailored solutions for every furry friend.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-red-600"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-red-600"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-red-600"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                {/* Subscribe Newsletter */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Subscribe Newsletter</h2>
                    <form className="flex mb-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="p-2 border border-black rounded-lg w-full bg-white"
                        />
                        <button className="bg-orange-500 text-white p-2 rounded-r">
                            Subscribe
                        </button>
                    </form>
                    <div>
                        <p><strong>Email:</strong> <a href="mailto:info@example.com" className="text-red-600 hover:underline">info@example.com</a></p>
                        <p><strong>Contact:</strong> <a href="tel:(229)555-0109" className="text-red-600 hover:underline">(229) 555-0109</a></p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm border-t-2 border-gray-600 pt-4">
                <p>© 2024 CarePlus. Designed by <a href="https://nixar.io/" target="_blank" rel="noreferrer" className="text-red-600 hover:underline">Nixar</a>. Powered by <a href="https://webflow.com/" target="_blank" rel="noreferrer" className="text-red-600 hover:underline">Webflow</a>.</p>
            </div>
        </footer>
    );
};

export default Footer;
