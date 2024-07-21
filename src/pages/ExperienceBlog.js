import React from "react";
import Card from '../components/Card';
import BlogNav from "../components/BlogNav";
import Image1 from '../assets/email.png';
import Olivia from '../assets/1_P8lWlI9Vb7pZFHgaLv8p1Q.jpg';
import AlannaImg from "../assets/Alan.png";

const ExperienceBlog = () => {
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
                    imageSrc={Olivia} 
                    title="Olivia as an Intern" 
                    subtitle="Olivia's speaks about her experience as an Intern at Uber and how to make the most of it!"
                    link="https://medium.com/@oliviachenxu/how-to-make-the-most-out-of-your-tech-internship-98cd7b1e8bbd"
                />
                <Card 
                    imageSrc={Image1} 
                    title="Card Title" 
                    subtitle="This is a subtitle for the card."
                    link="https://tailwindcss.com"
                />
                <Card 
                    imageSrc={AlannaImg} 
                    title="Alanna's Day in the Life" 
                    subtitle="Alanna talks about a day in her life as an electrical engineering major at the University of Southern California"
                    link={"/alannasdayinthelife"}
                />
            </div>
        </div>
    );
};

export default ExperienceBlog;
