import React from "react";

const Card = ({ imageSrc, title, subtitle, link }) => {
    const handleCardClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div 
            className="relative bg-lightPink rounded-2xl overflow-hidden shadow-lg flex flex-col items-center w-80 h-90 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-lightPink to-pink transition-transform duration-300 ease-in-out cursor-pointer p-6"
            onClick={handleCardClick}
        >
            <img className="h-1/2 rounded-full shadow-lg mb-4 transition-shadow duration-300 ease-in-out hover:shadow-xl" src={imageSrc} alt="Card image" />
            <div className="text-center">
                <div className="font-title font-bold text-3xl text-navy mb-2">
                    {title}
                </div>
                <p className="font-body text-white text-base">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default Card;
