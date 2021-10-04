import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./service.JSON')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])
    return (
      <div >
        <div className="text-center mt-5 p-4 px-5">
        <h1>Welcome to our <span className="my-color">services</span></h1>
        <p>We Offering you worlds best courses here and there are many focused teachers in our team. in 6 month we will try our best to teach you and help you to become someone from no one .Web development is the work involved in developing a Web site for the Internet or an intranet. Web design encompasses many different skills and disciplines in the production and maintenance of websites we will teach you web devlopment here. The different areas of web design.Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives</p>
        </div>
        <div className="srvicese">
           
      {
        services.map(service =><SingleService 
            key ={service.id}
            service={service}
            >

        </SingleService>)
      }
        </div>
        </div>
    );
};

export default Services;