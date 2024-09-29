import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";
import UserIcon from "../assets/User.svg";
import CartIcon from "../assets/cart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="bg-[#faeada] border-b border-[rgba(186,138,91,0.2)] py-4">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Brand */}
          <div className="text-lg font-bold font-sans">
            <Link to="/" className="pl-0">
              <img src={Logo} typeof="svg" alt="CarePlus"></img>
            </Link>
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
                  d={
                    !isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Centered Menu (hidden on small screens) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-4">
              <Link to={"/about"} className="text-black uppercase px-2 text-sm">
                About
              </Link>
              <Link
                to={"/categories"}
                className="text-black uppercase px-2 text-sm"
              >
                Categories
              </Link>
              <Link to={"/shop"} className="text-black uppercase px-2 text-sm">
                Shop
              </Link>
              <Link to={"/blogs"} className="text-black uppercase px-2 text-sm">
                Blog
              </Link>
              <Link
                to={"/reviews"}
                className="text-black uppercase px-2 text-sm"
              >
                Reviews
              </Link>
              <Link
                to={"/contact"}
                className="text-black uppercase px-2 text-sm"
              >
                Contact
              </Link>
            </ul>
          </div>

          {/* Right Side (Icons) */}
          <div className="flex items-center space-x-5">
            <Link>
              <button
                className="text-black focus:outline-none"
                aria-label="Search"
              >
                <img src={SearchIcon} alt="Search Icon" className="w-6 h-6" />
              </button>
            </Link>

            <Link to={"/signup"}  >
              <button
                className="text-black focus:outline-none"
                aria-label="User"
              >
                <img src={UserIcon} alt="User Icon" className="w-6 h-6" />
              </button>
            </Link>
            <Link>
              <button
                className="text-black focus:outline-none flex items-center"
                aria-label="Cart"
              >
                <img src={CartIcon} alt="Cart Icon" className="w-6 h-6" />
                <span className="ml-2 text-sm">(0)</span>
              </button>
            </Link>
          </div>

          {/* Responsive Menu (visible on small screens) */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-10">
              <ul className="flex flex-col items-center space-y-4 py-4">
                <li>
                  <Link to="/" className="text-black uppercase px-2 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-black uppercase px-2 text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-black uppercase px-2 text-sm"
                  >
                    Contact
                  </Link>
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
