import React from "react";

const Card = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="bg-lightPink rounded-2xl overflow-hidden shadow-lg py-4 flex flex-col items-center">
            <img className="w-1/3 h-1/3 rounded-full shadow-lg mb-5" src={imageSrc} alt="Card image" />
            <div className="px-6 py-4 items-center">
                <div className="font-title font-bold text-3xl text-navy mb-2 ">{title}</div>
                <p className="font-body text-white text-base">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default Card;