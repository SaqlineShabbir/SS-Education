import React from 'react';
import img from '../images/pexels.jpeg'
import './About.css'
import profile1 from '../images/profile1.jpeg'
import profile2 from '../images/profile2.jpeg'
import profile3 from '../images/profile3.jpeg'
import profile4 from '../images/profile4.jpeg'
const About = () => {
    return (
        <>
        <div className="text-center about">
            
            <h1>About <span className="my-color">SS</span> Education </h1>
            <div className="d-flex">
                <div className="about-text">
            <p className="p-5">
                SS Education is a online teaching company we welcome you here. we will teach you ten different skills like web devlopment,web design,graphics design,photography etc
                Combining the arts with computer technology, online web design and development certificates can be a good fit for students who enjoy using both sides of their brains. These programs take less time than a degree, but still provide the skills needed to begin an entry-level career in the field. Students usually graduate in 6-9 months.</p>
                </div>
                <div className="about-img">
            <img className=" about-image"  src={img} alt="" />
            </div>
            </div>

        </div>
        <div className="text-center mt-5 mb-5 our-team">
        <h1>Our <span className="my-color">Team</span></h1>
        <p>In our Team we have so many focused and well educated teachers.They all are here to help you .they made our courses more effictive .</p>
        <div className="d-flex profile mt-5">
            <img src={profile1} alt="" />
            <img src={profile2} alt="" />
            <img src={profile3} alt="" />
            <img src={profile4} alt="" />
          
        </div>
        </div>
        </>
    );
};

export default About;