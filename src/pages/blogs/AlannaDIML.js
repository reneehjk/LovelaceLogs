import React from "react";
import img from "../../assets/Alan.png"

const Alanna = () => {
    return (
        <div className="flex-col justify-center align-center items-center mx-auto">
            <div className="h-1/4 w-1/4 justify-center mx-auto p-6">
                <img src={img} className="rounded-full" />
            </div>
            <h1 className="font-title mx-auto text-3xl align-center text-navy p-4">Day in the Life of an ECE Major at USC</h1>
            <h1 className="font-body text-navy px-4">by Alanna Nowlen</h1>
            <div className="font-body text-navy p-4">
                <p>My typical day begins with an early rise, usually about half an hour before my first class. I kick off the morning by hopping on my longboard and cruising to class, which fortunately isn't too far from my dorm. Depending on the day, I might start with an elective dance class, though more often than not, I dive straight into one of my core electrical engineering courses, such as Calculus III or Physics 1. <br /><br />

One of the highlights of my schedule is my embedded systems class, where we delve into the intricacies of CPU design and digital logic circuits. It's a thrilling experience for me because CPU design feels like solving a complex logic puzzle where I get to blend both logic and creativity.<br />

After a productive morning of classes, I take a break for lunch with friends at one of the dining halls. Following that, I head to a first-year seminar that's mandatory for all freshmen as part of our general education requirements. Last semester, I found myself immersed in an Ancient Greek Democracy class, which provided a fascinating perspective on history.<br /><br />

The afternoon usually brings me to my Physics lab, where we conduct experiments covering topics like momentum, waves, and moment of inertia. These experiments never fail to intrigue me with their practical applications and theoretical insights.<br />

Once my classes and labs conclude, I dedicate my time to one of my extracurricular passions: a robotics club. Last semester, I was part of a project team focused on designing a robotic bartender. Within the team, I contributed to the hardware side, utilizing servo motors to manage drink dispensing and ice distribution—a hands-on application of my engineering skills.<br /><br />

As I wind down for the day, I enjoy dinner and use the remaining hours to complete any assignments or review my notes. Being a woman in STEM, I'm keenly aware of the gender dynamics in my field, particularly the noticeable disparity in higher-level academic and professional roles. Despite these challenges, I've found immense support within the community of fellow female students. I've been fortunate to have several female mentors who have guided me through academic challenges, advised me on club involvements, helped with applications, and provided invaluable life advice.<br /><br />

Overall, while navigating the academic rigor of STEM disciplines, I've found a nurturing community that encourages and uplifts women in technology and engineering—an experience that enriches both my personal growth and academic journey.</p>
            </div>
        </div>
    )
}

export default Alanna;