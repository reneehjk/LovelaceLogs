import React from 'react';
import { Link } from 'react-router-dom';

const BlogNav = () => {
    return (
        <div className='w-full pt-10'>
            <nav className='flex items-center justify-center p-4 max-w-screen-xl mx-auto'>
                <div className='flex space-x-4 font-body text-base text-grey lg:gap-10 md:gap-8 sm:gap-2 text-center'>
                    <Link to='/blog' className='hover:text-navy'>
                        General Browsing
                    </Link>
                    <Link to='/women' className='hover:text-navy'>
                        Notable Women in STEM
                    </Link>
                    <Link to='/experience' className='hover:text-navy'>
                        Women’s Experiences in STEM
                    </Link>
                    <Link to='/tips' className='hover:text-navy'>
                        Tips and Tricks as a Woman in STEM
                    </Link>
                    <Link to='/opportunity' className='hover:text-navy'>
                        Opportunities for Women in STEM
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default BlogNav;
