import React from "react";

const AboutUs = () => {
    return (
        <div className="flex-col mx-auto mt-10">
            <div className="flex font-title font-bold justify-center text-8xl text-navy">About Us</div>
            <div className="flex flex-row pb-5 p-10 gap-10">
                <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 gap-10">
                    <h1 className="flex justify-center bg-lightPink font-title text-white text-bold text-4xl rounded-2xl p-2 shadow-xl">Our Name</h1>
                </div>
                <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink  py-4 text-navy gap-12">
                    <h1 className="flex justify-center bg-gradient-to-r from-lightPink to-pink font-title text-white text-bold text-4xl rounded-2xl p-2 shadow-xl">Our Mission</h1>
                </div>
                <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 text-navy gap-12">
                    <h1 className="flex justify-center bg-pink font-title text-white text-bold text-4xl rounded-2xl p-2 shadow-xl">Our Vision</h1>
                </div>
                
            </div>
            <div className="flex flex-row pb-10 px-20 gap-9">
                <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 gap-10">
                    <p className="flex justify-center text-center font-body text-navy text-2xl">We are named after one of the most important women in STEM in history, Ada Lovelace. Ada Lovelace is celebrated as the world’s first computer programmer for creating the first algorithm intended for Charles Babbage's Analytical Engine. She envisioned computers performing tasks beyond calculations, laying the groundwork for modern computing concepts. Her pioneering work and insights have earned her a lasting legacy in STEM. </p>
                </div>
                <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 text-navy gap-12">
                    <p className="flex justify-center text-center font-body text-navy text-2xl">At Lovelace Logs, we are dedicated to fostering a world where women thrive in science, technology, engineering, and mathematics (STEM). Our mission is to create a vibrant community that celebrates and supports the incredible contributions of women in these fields.</p>
                </div>
                <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 text-navy gap-12">
                    <p className="flex justify-center text-center font-body text-navy text-2xl">Our vision is a world where women's contributions in STEM are fully recognized and valued, and where diversity is the driving force behind technological and scientific advancement. We envision a future where every woman has the opportunity to excel and lead in her field, inspired by the legacy of Ada Lovelace. By showcasing the remarkable achievements of women and supporting their professional development, we aim to build a more equitable and dynamic future where all voices are heard and every potential is realized.</p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutUs;

// <div className="flex flex-row p-20 gap-10">
//                 <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 gap-10">
//                     <h2 className="flex justify-center font-title text-navy text-bold text-4xl">Our Name</h2>
//                     <p className="flex justify-center text-center font-body text-navy text-2xl">We are named after one of the most important women in STEM in history, Ada Lovelace. Ada Lovelace is celebrated as the world’s first computer programmer for creating the first algorithm intended for Charles Babbage's Analytical Engine. She envisioned computers performing tasks beyond calculations, laying the groundwork for modern computing concepts. Her pioneering work and insights have earned her a lasting legacy in STEM. </p>
//                 </div>
//                 <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 text-navy gap-12">
//                     <h2 className="flex justify-center font-title text-navy text-bold text-4xl">Our Mission</h2>
//                     <p className="flex justify-center text-center font-body text-navy text-2xl">At Lovelace Logs, we are dedicated to fostering a world where women thrive in science, technology, engineering, and mathematics (STEM). Our mission is to create a vibrant community that celebrates and supports the incredible contributions of women in these fields.</p>
//                 </div>
//                 <div className="flex flex-col mx-auto w-1/2 h-1/2 bg-lightpink rounded-2xl py-4 text-navy gap-12">
//                     <h2 className="flex justify-center font-title text-navy text-bold text-4xl">Our Vision</h2>
//                     <p className="flex justify-center text-center font-body text-navy text-2xl">Our vision is a world where women's contributions in STEM are fully recognized and valued, and where diversity is the driving force behind technological and scientific advancement. We envision a future where every woman has the opportunity to excel and lead in her field, inspired by the legacy of Ada Lovelace. By showcasing the remarkable achievements of women and supporting their professional development, we aim to build a more equitable and dynamic future where all voices are heard and every potential is realized.</p>
//                 </div>
                
//             </div>