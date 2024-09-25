import React, { useState } from 'react';
import { motion } from 'framer-motion';
import gsfcLogo from '../assets/gsfc-logo.png';
import acmLogo from '/logo.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-blue-900 border-t-4 border-gray-500 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4">
            <Link to='https://www.gsfcuniversity.ac.in/'>
            <img src={gsfcLogo} alt="GSFC University Logo" className="h-12" />
            </Link>
            <img src={acmLogo} alt="ACM Logo" className="h-12" />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold">GSFC University ACM Student Chapter</h3>
            <p className="mt-2">Fostering the growth of technology and innovation.</p>
          </div>
          <div className="lg:hidden">
            <button
              className="bg-gray-700 text-white py-2 px-4 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
            </button>
          </div>
          <div className={`flex-col space-y-2 lg:space-y-0 lg:space-x-4 lg:flex ${isOpen ? 'flex' : 'hidden'} lg:flex-row items-center`}>
            <a href="/about" className="text-white-600 hover:text-black">About Us</a>
            <a href="/event" className="text-white-600 hover:text-black">Events</a>
            <a href="/#get-involved" className="text-white-600 hover:text-black">Get Involved</a>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} GSFC University ACM Student Chapter. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
