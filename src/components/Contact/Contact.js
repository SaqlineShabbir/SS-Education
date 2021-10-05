import React from 'react';
import './Contact.css'
import campus from '../images/campus1.jpeg'
const Contact = () => {
    return (
        <div>
           <div className="contact" id="contact">
        <div className="heading">
            <h2>Contact <span className="my-color">Us</span>  </h2>
            <p className="contact-text">Here you can contact us The usual response time is less than 45 minutes during regular work hours, Monday through Friday, 9:00am – 6:00pm (GMT+01:00).
Response time can be slower outside of these hours..
            </p>
        </div>
        <div className="content">
            <div className="contact-box">
                <h3>Contuct Info</h3>
                <div className="contuct-info-box">
                <div className="box">
                    <div className="icon">
                        <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Bashundhara R/A Dhaka</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i class="fas fa-phone"></i>
                        </div>
                    <div className="text">
                        <h3> Phone</h3>
                        <p>0197-955-0002</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i class="fas fa-envelope"></i>
                        </div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>Saqline5869@gmail.com</p>
                    </div>
                </div>
                </div>
            </div>

              <div className="form-box mx-5">
                  <form>
                      <h3>Message Us</h3>
                      <input className="input1 "  type="text" name=""placeholder="Full Name"/>
                      <input className="input1" type="email" name=""placeholder="Email"/>
                      <textarea className="input1 p-3" placeholder="Your Message"></textarea>
                      <input type="submit" value="Send " />
                  </form>
              </div>


        </div>
        <div className="hr">
        <hr className ="w-75"/>
        </div>
       <div className="d-flex mt-5 visit">
           <div className="visit-texts">
           <h5 className=""><span className="my-color">Come</span> Visit Us</h5>
           <p>We welcome all of you in our campus .if any time you want to know about us come visit us.  A campus is traditionally the land on which a college or university and related institutional buildings are situated. Usually a college campus includes libraries, lecture halls, residence halls, student centers or dining halls, and park-like settings. facilis voluptates nihil. Aspernatur similique commodi cumque saepe maxime esse doloribus ipsum eaque soluta obcaecati dolorum </p>
           </div>
           <div >
               <img className="contact-img" src={campus} alt="" />
           </div>
       </div>
    </div>
  
        </div>
    );
};

export default Contact;