import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-500 text-white py-10 rounded-lg">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        
        {/* Left Section: ACM Logo and Text */}
        <div className="flex items-center space-x-4 lg:w-1/3">
          <img src={'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734863660/assets/lo2gnmd5kdhwkujipbos.webp'} alt="ACM Logo" className="h-16" />
          <div>
            <h3 className="text-lg font-semibold">Association for Computing Machinery</h3>
            <p className="text-sm">GSFCU Student Chapter</p>
          </div>
        </div>

        {/* Center Section: Contact Us */}
        <div className="lg:w-2/3 text-center mt-6 lg:mt-0">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.instagram.com/acm_gsfcu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/company/acm-gsfcu/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-gray-300" />
            </a>
            <a href="https://x.com/AcmGsfcu?t=sTbXhIaG1Bolwm7FsZQ2pw&s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-gray-300"/>
            </a>
          </div>
        </div>

        {/* Right Section: Developed By */}
        <div className="lg:w-1/3 text-center lg:text-right mt-6 lg:mt-0">
          <h4 className="text-lg font-semibold">Developed By</h4>
          <div className="flex items-center justify-center lg:justify-end mt-4 space-x-2">
            <img src={'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734863660/assets/lo2gnmd5kdhwkujipbos.webp'} alt="ACM Logo" className="h-12" />
            <div>
              <p className="text-sm font-semibold">Vaibhav Kumawat</p>
              <p className="text-sm">Tech Lead & Web-Master</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
