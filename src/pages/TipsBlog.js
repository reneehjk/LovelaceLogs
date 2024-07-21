import React from "react";
import Card from '../components/Card';
import BlogNav from "../components/BlogNav";
import Common from '../assets/Common.jpg';
import WIS from '../assets/wis.jpg';
import Stem from '../assets/STEM.webp';
import pic1 from '../assets/stem2.jpg';
import pic3 from '../assets/images (2).jpg';
import pic4 from '../assets/women-in-tech.png';


const TipsBlog = () => {
    return (
        <div>
            <BlogNav />
            <div className="flex flex-wrap justify-center gap-20 my-20 px-4"> 
                <Card 
                    imageSrc={Common} 
                    title="6 Traits of Successful Women in STEM" 
                    subtitle="Telegraph confidence, claiming credit for your ideas, investing in peer networks, and more!"
                    link="https://hbr.org/2018/04/6-things-successful-women-in-stem-have-in-common"
                />
                <Card 
                    imageSrc={WIS} 
                    title="Interview with Dr. Diana Bilimoira" 
                    subtitle="How Dr. Bilimoira recommends increasing the participation of women in STEM!"
                    link="https://blog.coursera.org/how-to-increase-female-participation-in-stem-gender-gap/"
                />
                <Card 
                    imageSrc={Stem} 
                    title="Keeping Women in STEM" 
                    subtitle="Celebrating International Women’s Day: How to Get (And Keep) More Women in STEM!"
                    link="https://transmitter.ieee.org/women-in-stem/"
                />
                <Card 
                    imageSrc={pic1} 
                    title="Steminists" 
                    subtitle="How the STEMinist Project Increases the Visibility of Women in the Field"
                    link="https://steminists.weebly.com/"
                />
                <Card 
                    imageSrc={pic3} 
                    title="Girls in STEM" 
                    subtitle="10 Resources to Help Empower Girls in STEM"
                    link="https://edventures.com/blogs/stempower/10-resources-to-help-you-empower-girls-in-stem"
                />
                <Card 
                    imageSrc={pic4} 
                    title="Advice from Women in STEM" 
                    subtitle="CHOP Women in Stem Advice Aspiring Scientists"
                    link="https://research.chop.edu/cornerstone-blog/chop-women-in-stem-share-advice-for-aspiring-scientists"
                />
            </div>
        </div>
    );
};

export default TipsBlog;
