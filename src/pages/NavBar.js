import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logo.jpg';

const NavBar = () => {
  return (
    <header className='bg-gradient-to-r from-lightPink to-pink w-full border-t-0'>
        <nav className='flex justify-between p-4 w-full shadow-xl '>
          <Link to='/' className='flex items-center space-x-2 ml-10'>
            <img src={img} alt='Logo' className='h-10 w-auto rounded-full' />
            <span className='font-title text-navy lg:text-2xl md:text-lg sm:text-large font-semibold'>Lovelace Logs</span>
          </Link>
          <div className='flex space-x-4 font-body lg:text-2xl md:text-lg sm:text-large text-white lg:gap-20 md:gap-10 sm:gap-5 mr-10'>
            <Link to='/' className='hover:font-bold'>
              Home
            </Link>
            <Link to='/blog' className='hover:font-bold '>
              Blogs
            </Link>
            <Link to='/about' className='hover:font-bold '>
              About Us
            </Link>
          </div>
        </nav>
    </header>
  );
}

export default NavBar;
