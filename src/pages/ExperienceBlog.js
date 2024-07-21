import React from "react";
import Card from '../components/Card';
import BlogNav from "../components/BlogNav";
import Olivia from '../assets/1_P8lWlI9Vb7pZFHgaLv8p1Q.jpg';
import AlannaImg from "../assets/Alan.png";
import Aliki from '../assets/aliki.jpeg';
import Workplace from '../assets/workplace.jpg';

const ExperienceBlog = () => {
    return (
        <div>
            <BlogNav />
            <div className="flex flex-wrap justify-center gap-20 my-20 px-4"> 
                <Card 
                    imageSrc={Aliki} 
                    title="Aliki Papoutsi as women in STEM in college" 
                    subtitle="Faculty of engineering seeing the ratio from men to women interviewing fellow classmates"
                    link="https://blogs.bath.ac.uk/students/2022/06/09/women-in-stem-their-experience-and-their-advice/"
                />
                <Card 
                    imageSrc={Olivia} 
                    title="Olivia as an Intern" 
                    subtitle="Olivia's speaks about her experience as an Intern at Uber and how to make the most of it!"
                    link="https://medium.com/@oliviachenxu/how-to-make-the-most-out-of-your-tech-internship-98cd7b1e8bbd"
                />
                <Card 
                    imageSrc={Workplace} 
                    title="Experiences in the workplace" 
                    subtitle="Paula, Ana and Angelina speak on their experiences being a woman in STEM in the workplace!"
                    link="https://www.sowiso.com/blog/woman-in-stem/"
                />
                <Card 
                    imageSrc={AlannaImg} 
                    title="Alanna's Day in the Life" 
                    subtitle="Alanna talks about a day in her life as an electrical engineering major at the University of Southern California!"
                    link={"/alannasdayinthelife"}
                />
            </div>
        </div>
    );
};

export default ExperienceBlog;
