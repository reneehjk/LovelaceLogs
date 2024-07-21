import React from "react";
import Card from '../components/Card';
import BlogNav from "../components/BlogNav";

// women images:
import Miranda from '../assets/Miranda.jpg';
import Marissa from '../assets/Marissa.jpg';
import Radia from '../assets/Radia.jpg';
import Elizabeth from '../assets/Elizabeth.jpg';
import Sanjana from '../assets/sanjana.jpeg';
import Ada from '../assets/ada.png';
import Manika from '../assets/manika.jpeg';
import Shagun from '../assets/shagun.jpeg';
import Akhila from '../assets/akhila.jpeg';
import Aditi from '../assets/aditi.jpeg';
import Vidya from '../assets/vidya.jpeg';

// tips images:
import Common from '../assets/Common.jpg';
import WIS from '../assets/wis.jpg';
import Stem from '../assets/STEM.webp'

// opportunities images:
import Job from '../assets/job.jpg';
import Scholarship from '../assets/scholarship.jpg';
import Program from '../assets/program.jpg';

// experience images:
import Olivia from '../assets/1_P8lWlI9Vb7pZFHgaLv8p1Q.jpg';
import AlannaImg from "../assets/Alan.png";
import Aliki from '../assets/aliki.jpeg';
import Workplace from '../assets/workplace.jpg';

const cardData = [
    {
        imageSrc: Miranda,
        title: 'Miranda Teboh-Ewungkem',
        subtitle: 'After suffering a serious case of malaria, made it a goal to use her research mathematical biology to awareness about the use of mathematical biology to control the disease.',
        link: 'https://news.lafayette.edu/2010/12/17/miranda-teboh-ewungkem-malaria/'
    },
    {
        imageSrc: Common,
        title: '6 Traits of Successful Women in STEM',
        subtitle: 'Telegraph confidence, claiming credit for your ideas, investing in peer networks, and more!',
        link: 'https://hbr.org/2018/04/6-things-successful-women-in-stem-have-in-common'
    },
    {
        imageSrc: WIS,
        title: 'Interview with Dr. Diana Bilimoira',
        subtitle: 'How Dr. Bilimoira recommends increasing the participation of women in STEM!',
        link: 'https://blog.coursera.org/how-to-increase-female-participation-in-stem-gender-gap/'
    },
    {
        imageSrc: Stem,
        title: 'Keeping Women in STEM',
        subtitle: 'Celebrating International Women’s Day: How to Get (And Keep) More Women in STEM!',
        link: 'https://transmitter.ieee.org/women-in-stem/'
    },
    {
        imageSrc: Marissa,
        title: 'Marissa Mayer',
        subtitle: 'Made important contributions to Google Earth, Gmail and Google Maps. Now she’s working with artificial intelligence with her new company',
        link: 'https://www.technologyreview.com/2019/10/03/65240/marissa-mayer-on-the-rise-of-women-technology-leaders/'
    },
    {
        imageSrc: Radia,
        title: 'Radia Perlman',
        subtitle: 'The Mother of the Internet- developed algorithm behind Spinning Tree Protocol (STP) and later improved on it by designing Transparent Interconnection of Lots of Links (TRILL).',
        link: 'https://www.internethalloffame.org/inductee/radia-perlman/'
    },
    {
        imageSrc: Elizabeth,
        title: 'Elizabeth Blackwell',
        subtitle: 'First woman in America to receive a medical degree and founder of the National Health Society.',
        link: 'https://www.womenshistory.org/education-resources/biographies/elizabeth-blackwell'
    },
    {
        imageSrc: Sanjana,
        title: 'Sanjana Kandi',
        subtitle: 'Senior System Software Engineer.',
        link: 'https://www.linkedin.com/in/sanjanakandi/'
    },
    {
        imageSrc: Manika,
        title: 'Manika Kapoor',
        subtitle: 'Senior Perception Software Engineer.',
        link: 'https://www.linkedin.com/in/manikakapoor/'
    },
    {
        imageSrc: Shagun,
        title: 'Shagun Khare',
        subtitle: 'Computer Science @ UIUC | SWE Intern @ William Blair.',
        link: 'https://www.linkedin.com/in/shagunkhare917/'
    },
    {
        imageSrc: Akhila,
        title: 'Akhila Yellapragada',
        subtitle: 'Summer Analyst @ Morgan Stanley | CS + FinTech at University of Georgia',
        link: 'https://www.linkedin.com/in/akhilayellapragada/'
    },
    {
        imageSrc: Aditi,
        title: 'Aditi Godbole',
        subtitle: 'Senior Data Analyst @ SAP.',
        link: 'https://www.linkedin.com/in/aditigodbole/'
    },
    {
        imageSrc: Vidya,
        title: 'Vidya Bhardwaj',
        subtitle: 'CS @ UIUC | Board @ GirlCon | Director of Education @ Encode Justice.',
        link: 'https://www.linkedin.com/in/vidyab03/'
    },
    {
        imageSrc: Job,
        title: 'Companies with Good Equality Track Records',
        subtitle: 'From Airbnb to Freddie Mac, check out these companies doing more to support women!',
        link: 'https://ripplematch.com/career-advice/companies-doing-the-work-to-support-women-in-stem-f2c47cd1'
    },
    {
        imageSrc: Scholarship,
        title: 'Scholarships for Women in STEM',
        subtitle: 'Resources for women who are looking for financial support!',
        link: 'https://www.bestcolleges.com/resources/women-in-stem-scholarships/'
    },
    {
        imageSrc: Program,
        title: 'Programs for Women in Tech!',
        subtitle: 'Check out all these opportunities to further your career as a woman in tech!',
        link: 'https://www.geeksforgeeks.org/top-programs-for-women-in-tech/'
    },
    {
        imageSrc: Aliki,
        title: 'Aliki Papoutsi as women in STEM in college',
        subtitle: 'Faculty of engineering seeing the ratio from men to women interviewing fellow classmates',
        link: 'https://blogs.bath.ac.uk/students/2022/06/09/women-in-stem-their-experience-and-their-advice/'
    },
    {
        imageSrc: Olivia,
        title: 'Olivia as an Intern',
        subtitle: 'Olivia speaks about her experience as an Intern at Uber and how to make the most of it!',
        link: 'https://medium.com/@oliviachenxu/how-to-make-the-most-out-of-your-tech-internship-98cd7b1e8bbd'
    },
    {
        imageSrc: Workplace,
        title: 'Experiences in the workplace',
        subtitle: 'Paula, Ana and Angelina speak on their experiences being a woman in STEM in the workplace!',
        link: 'https://www.sowiso.com/blog/woman-in-stem/'
    },
    {
        imageSrc: AlannaImg,
        title: 'Alanna\'s Day in the Life',
        subtitle: 'Alanna talks about a day in her life as an electrical engineering major at the University of Southern California!',
        link: '/alannasdayinthelife'
    }
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffleArray(cardData);

const MainBlog = () => {
    return (
        <div>
            <BlogNav />
            <div className="flex flex-wrap justify-center gap-20 my-20 px-4"> 
                <Card 
                    imageSrc={Ada} 
                    title="Ada Lovelace" 
                    subtitle="The first computer programmer."
                    link="https://www.historyextra.com/period/modern/ada-lovelace-stem-women-computing-science-facts-life/ "
                />
                {cardData.map((card, index) => (
                    <Card 
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        subtitle={card.subtitle}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainBlog;
