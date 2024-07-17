import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">FortressGuard</h3>
            <p className="text-gray-400">
              Protecting Your Digital Fortress with advanced security solutions.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal-400 transition-colors duration-300">Home</a></li>
              <li><a href="#features" className="hover:text-teal-400 transition-colors duration-300">Features</a></li>
              <li><a href="#signup" className="hover:text-teal-400 transition-colors duration-300">Join Waitlist</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="careers" className="hover:text-teal-400 transition-colors duration-300">Careers</a></li>
              <li><a href="/assets/terms.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">Terms and Conditions</a></li>
              <li><a href="/assets/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} FortressGuard. All rights reserved. <a href="/assets/terms.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
