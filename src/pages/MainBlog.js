import React from "react";
import Card from '../components/Card';
import Image1 from '../assets/email.png'

const MainBlog = () => {
    return (
        <div>
            <Card 
                imageSrc={Image1} 
                title="Card Title" 
                subtitle="This is a subtitle for the card."
            />
        </div>
    );
};

export default MainBlog;
