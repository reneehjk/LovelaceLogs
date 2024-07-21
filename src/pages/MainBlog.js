import React from "react";
import Card from '../components/Card';
import Image1 from '../assets/email.png';

const MainBlog = () => {
    return (
        <div className="flex flex-wrap justify-center gap-20 mt-20 px-4">
            <Card 
                imageSrc={Image1} 
                title="Card Title" 
                subtitle="This is a subtitle for the card."
                link="https://tailwindcss.com/docs/gradient-color-stops"
            />
            {/* Repeat for other cards with different links */}
            <Card 
                imageSrc={Image1} 
                title="Card Title" 
                subtitle="This is a subtitle for the card."
                link="https://tailwindcss.com"
            />
            {/* Add more cards as needed */}
        </div>
    );
};

export default MainBlog;
