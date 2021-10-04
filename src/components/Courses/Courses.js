import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'
const Courses = () => {
    const [courses, setServices] = useState([]);
    useEffect(()=>{
        fetch('./service.JSON')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])
    return (
      <div >
        <div className="text-center mt-5 p-4 px-5">
        <h1>Welcome to our <span className="my-color">Courses</span></h1>
        <p>We Offering you worlds best courses here and there are many focused teachers in our team. in 6 month we will try our best to teach you and help you to become someone from no one .Web development is the work involved in developing a Web site for the Internet or an intranet. Web design encompasses many different skills and disciplines in the production and maintenance of websites we will teach you web devlopment here. The different areas of web design.Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives</p>
        </div>
        <div className="srvicese">
           
      {
        courses.map(course =><SingleCourse 
            key ={course.id}
            course={course}
            >

        </SingleCourse>)
      }
        </div>
        </div>
    );
};

export default Courses;