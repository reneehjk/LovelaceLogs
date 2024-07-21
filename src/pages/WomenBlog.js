import React from "react";
import Card from '../components/Card';
import BlogNav from "../components/BlogNav";
import Image1 from '../assets/email.png';
import Miranda from '../assets/Miranda.jpg';
import Marissa from '../assets/Marissa.jpg';
import Radia from '../assets/Radia.jpg';
import Elizabeth from '../assets/Elizabeth.jpg';

const WomenBlog = () => {
    return (
        <div>
            <BlogNav />
            <div className="flex flex-wrap justify-center gap-20 my-20 px-4"> 
                <Card 
                    imageSrc={Miranda} 
                    title="Miranda Teboh-Ewungkem" 
                    subtitle="After suffering a serious case of malaria, made it a goal to use her research mathematical biology to awareness about the use of mathematical biology to control the disease."
                    link="https://news.lafayette.edu/2010/12/17/miranda-teboh-ewungkem-malaria/"
                />
                <Card 
                    imageSrc={Marissa} 
                    title="Marissa Mayer" 
                    subtitle="Made important contributions to Google Earth, Gmail and Google Maps. Now she’s working with artifical intelligence with her new company"
                    link="https://www.technologyreview.com/2019/10/03/65240/marissa-mayer-on-the-rise-of-women-technology-leaders/ "
                />
                <Card 
                    imageSrc={Radia} 
                    title="Radia Perlman" 
                    subtitle="The Mother of the Internet- developed algorithm behind Spinning Tree Protocol (STP) and later improved on it by designing Transparent Interconnection of Lots of Links (TRILL)."
                    link="https://www.internethalloffame.org/inductee/radia-perlman/ "
                />
                <Card 
                    imageSrc={Elizabeth} 
                    title="Elizabeth Blackwell" 
                    subtitle="First woman in America to receive a medical degree and founder of the National Health Society."
                    link="https://www.womenshistory.org/education-resources/biographies/elizabeth-blackwell"
                />
                <Card 
                    imageSrc={Image1} 
                    title="Ada Lovelace" 
                    subtitle="The first computer programmmer."
                    link="https://www.historyextra.com/period/modern/ada-lovelace-stem-women-computing-science-facts-life/ "
                />
                <Card 
                    imageSrc={Image1} 
                    title="Sanjana Kandi" 
                    subtitle="Senior System Software Engineer."
                    link="https://www.linkedin.com/in/sanjanakandi/"
                />
                <Card 
                    imageSrc={Image1} 
                    title="Manika Kapoor" 
                    subtitle="Senior Perception Software Engineer."
                    link="https://www.linkedin.com/in/manikakapoor/"
                />
                <Card 
                    imageSrc={Image1} 
                    title="Shagun Khare" 
                    subtitle="Computer Science @ UIUC | SWE Intern @ William Blair."
                    link="https://www.linkedin.com/in/shagunkhare917/ "
                />
                <Card 
                    imageSrc={Image1} 
                    title="Akhila Yellapragada" 
                    subtitle="Summer Analyst @ Morgan Stanley | CS + FinTech at University of Georgia"
                    link="https://www.linkedin.com/in/akhilayellapragada/ "
                />
                <Card 
                    imageSrc={Image1} 
                    title="Aditi Godbole" 
                    subtitle="Senior Data Analyst @ SAP."
                    link="https://www.linkedin.com/in/aditigodbole/"
                />
                <Card 
                    imageSrc={Image1} 
                    title="Vidya Bhardwaj" 
                    subtitle="CS @ UIUC | Board @ GirlCon | Director of Education @ Encode Justice."
                    link="https://www.linkedin.com/in/vidyab03/ "
                />     
            </div>
        </div>
    );
};

export default WomenBlog;
