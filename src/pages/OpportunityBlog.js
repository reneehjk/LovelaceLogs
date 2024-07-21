import React from "react";
import Card from '../components/Card';
import BlogNav from "../components/BlogNav";
import Job from '../assets/job.jpg';
import Scholarship from '../assets/scholarship.jpg';
import Program from '../assets/program.jpg';

const OpportunityBlog = () => {
    return (
        <div>
            <BlogNav />
            <div className="flex flex-wrap justify-center gap-20 my-20 px-4"> 
                <Card 
                    imageSrc={Job} 
                    title="Companies with Good Equality Track Records" 
                    subtitle="From Airbnb to Freddie Mac, check out these companies doing more to support women!"
                    link="https://ripplematch.com/career-advice/companies-doing-the-work-to-support-women-in-stem-f2c47cd1"
                />
                <Card 
                    imageSrc={Scholarship} 
                    title="Scholarships for Women in STEM" 
                    subtitle="Resources for women who are looking for financial support!"
                    link="https://www.bestcolleges.com/resources/women-in-stem-scholarships/"
                />
                <Card 
                    imageSrc={Program} 
                    title="Programs for Women in Tech!" 
                    subtitle="Check out all these opportunities to further your career as a woman in tech!"
                    link="https://www.geeksforgeeks.org/top-programs-for-women-in-tech/"
                />
            </div>
        </div>
    );
};

export default OpportunityBlog;
