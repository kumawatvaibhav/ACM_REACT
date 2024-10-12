import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const getActiveClass = (path) =>
    location.pathname === path
      ? 'text-blue-500 md:text-blue-500'
      : 'text-white md:text-white-700';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('bg-transparent');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarBg} fixed w-full z-20 top-0 start-0 border-gray-200 transition-colors duration-300`}>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <div className='logo-container h-16'>
            <img src='/logo.webp' className='h-full' alt='Logo' />
          </div>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
            GSFCU ACM
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle='navbar-sticky'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-sticky'
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className='sr-only'>Toggle main menu</span>
          {isMenuOpen ? (
            <svg
              className='w-5 h-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          )}
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`} id='navbar-sticky'>
          <ul className='flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 md:border-0 rounded-lg  md:bg-transparent bg-gray-800 md:bg-transparent border-gray-700'>
            <li>
              <Link
                to='/'
                onClick={closeMenu}
                className={`block py-2 px-3 no-underline hover:underline bg-blue-700 rounded md:bg-transparent ${getActiveClass('/')}`}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li className='relative'>
              <button
                onClick={toggleDropdown}
                className='block py-2 px-3 text-white no-underline hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center'
              >
                Officers
                <svg
                  className='w-4 h-4 ml-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className='absolute left-0 mt-2 w-48 bg-gray-500 border border-gray-100 rounded-lg shadow-lg'>
                  <li>
                    <Link
                      to='/team'
                      onClick={closeMenu}
                      className='block py-2 px-4 text-gray-800 hover:bg-gray-200'
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/leaders'
                      onClick={closeMenu}
                      className='block py-2 px-4 text-gray-800 hover:bg-gray-200'
                    >
                      Leaders
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to='/about'
                onClick={closeMenu}
                className={`block py-2 px-3 no-underline hover:underline hover:bg-gray-100 md:hover:bg-transparent ${getActiveClass('/about')}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/event'
                onClick={closeMenu}
                className={`block py-2 px-3 no-underline hover:underline hover:bg-gray-100 md:hover:bg-transparent ${getActiveClass('/event')}`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to='/Gallery'
                onClick={closeMenu}
                className={`block py-2 px-3 no-underline hover:underline hover:bg-gray-100 md:hover:bg-transparent ${getActiveClass('/gallery')}`}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
