import React from "react";
import Card from '../components/Card';
import BlogNav from "../components/BlogNav";
import Image1 from '../assets/email.png';

const OpportunityBlog = () => {
    return (
        <div>
            <BlogNav />
            <div className="flex flex-wrap justify-center gap-20 my-20 px-4"> 
                <Card 
                    imageSrc={Image1} 
                    title="Card Title" 
                    subtitle="This is a subtitle for the card."
                    link="https://tailwindcss.com/docs/gradient-color-stops"
                />
                <Card 
                    imageSrc={Image1} 
                    title="Card Title" 
                    subtitle="This is a subtitle for the card."
                    link="https://tailwindcss.com/docs/gradient-color-stops"
                />
                <Card 
                    imageSrc={Image1} 
                    title="Card Title" 
                    subtitle="This is a subtitle for the card."
                    link="https://tailwindcss.com"
                />
            </div>
        </div>
    );
};

export default OpportunityBlog;
