import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
           <div className="contact" id="contact">
        <div className="heading">
            <h2>Contact <span className="my-color">Us</span>  </h2>
            <p>Here You Can send us your FeedBack.
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
                    <div className="icon"></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>0197-955-0002</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"></div>
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
    </div>
        </div>
    );
};

export default Contact;