import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex justify-items-center flex-col space-y-20 m-5">
            <div className="flex justify-center flex-col mt-12 p-20 rounded-2xl bg-lightPink shadow-xl max-w-4xl mx-auto">
                <div className="flex justify-center font-title text-8xl text-navy my-10">Lovelace Logs</div>
                <Link to='/about' className='hover:font-bold mx-auto '>
                    <button className="bg-navy p-4 px-10 text-white mt-10 shadow-xl mx-auto font-body text-4xl rounded-2xl">
                        About Us
                    </button>
                </Link>
                
            </div>
            <div className="font-body text-navy font-bold text-5xl max-w-3xl mx-auto text-center">
                A resource to empower women in STEM named after the first ever computer scientist, Ada Lovelace!
            </div>
            <div className="flex justify-center flex-col mt-10 p-20 rounded-2xl bg-lightPink shadow-xl max-w-3xl mx-auto mb-20">
                <div className="flex text-center justify-center font-title text-3xl text-navy my-5">Explore our blog posts about influential women in STEM, experiences as women in STEM, tips and tricks, and opportunities!</div>
                <Link to='/blog' className='hover:font-bold mx-auto'>
                    <button className="bg-navy p-4 px-10 text-white mt-10 shadow-xl font-body text-4xl rounded-2xl">
                        Blogs
                    </button>
                </Link> 
            </div>
        </div>
    );
};

export default LandingPage;
