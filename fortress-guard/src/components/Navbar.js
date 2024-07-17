import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src={"https://media.licdn.com/dms/image/D560BAQFpt3WOsZJyVg/company-logo_200_200/0/1702151778817?e=1727308800&v=beta&t=B87FseSX2sXYo3VGpY7xFUmKFQ99jeZCVXAAbTWmd1o"}
              alt="FortressGuard Logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-lg font-semibold">FortressGuard</span>
          </div>
          <div className="md:hidden">
            <button className="focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-end items-center space-x-4">
            <a href="http://localhost:3000/#home" className="text-white hover:text-teal-400 transition-colors duration-300">Home</a>
            <a href="http://localhost:3000/#features" className="text-white hover:text-teal-400 transition-colors duration-300">Features</a>
            <a href="#signup"
               className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">Join
              Waitlist</a>
            <a href="http://localhost:3000/#contact-us"
               className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">Contact
              Us</a>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="mt-2">
            <a href="http://localhost:3000/#home"
               className="block w-full text-center py-2 rounded hover:bg-teal-700 transition duration-200">Home</a>
            <a href="http://localhost:3000/#features"
               className="block w-full text-center py-2 rounded hover:bg-teal-700 transition duration-200">Features</a>
            <a href="http://localhost:3000/#signup"
               className="block w-full text-center py-2 rounded bg-teal-500 text-white hover:bg-teal-600 transition duration-200">Join
              Waitlist</a>
            <a href="http://localhost:3000/#contact-us"
               className="block w-full text-center py-2 rounded bg-teal-500 text-white hover:bg-teal-600 transition duration-200">Contact
              Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
