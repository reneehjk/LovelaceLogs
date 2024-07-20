import React from "react";

const Card = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="bg-lightPink rounded-2xl overflow-hidden shadow-lg py-6 px-6 flex flex-col items-center w-1/2 h-1/3">
            <img className="h-1/2 rounded-full shadow-lg mb-4" src={imageSrc} alt="Card image" />
            <div className="text-center py-4 px-4">
                <div className="font-title font-bold text-3xl text-navy mb-2">{title}</div>
                <p className="font-body text-white text-base">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default Card;
