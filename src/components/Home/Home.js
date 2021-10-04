import React, { useEffect, useState } from 'react';
import './Home.css'
import fifth from '../images/Online.jpg'

import { Link } from 'react-router-dom';
import CourseInHome from './CourseInHome/CourseInHome';
const Home = () => {
    
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./service.JSON')
        .then(response => response.json())
        .then(data => setCourses(data))
    }, [])
     const myCourses = courses.slice(0,4)
    return (
        <div>
  
  <section className="banner" id="home" style={{backgroundImage: `url(${fifth})`}}>
       <div className="text-box ">
         <h2> Welcome To <br/><span>SS Education.</span> </h2>
         <h3>We will help you to get your dream job.</h3>
         <Link to="/about"  className="btn">About us</Link>

       </div>


   </section>
   <div className="text-center my-5">
       <h1><span className="my-color">Our</span> Courses</h1>
       <p className="px-5">We Offering you worlds best courses here and there are many focused teachers in our team. in 6 month we will try our best to teach you and help you to become someone from no one .Web development is the work involved in developing a Web site for the Internet or an intranet.  Web design encompasses many different skills and disciplines in the production and maintenance of websites we will teach you web devlopment here. The different areas of web design.Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives </p>
   </div>
   
   <div className="home-servise">

   {
        myCourses.map(course =><CourseInHome 
            key ={course.id}
            course={course}
            >

        </CourseInHome>)
      }
  </div>
  <div className="text-center view-container">
  <Link to="/services"  className="btn btn-view text-center my-5">View Details</Link>
  </div>
   </div>

               
    );
};

export default Home;