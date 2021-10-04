import React from 'react';

const CourseInHome = (props) => {
    console.log(props)
    const {img,name,pera,price,time}= props.course
    return (
        <div>
           <div style={{'height':'700px'}} className=" my-card card mx-3 my-3 mt-5 shadow-lg">
    <img src={img} className="card-img-top img-fluid h-50" alt="..."/>
    <div className="card-body">
      <h4 className="card-title">{name}</h4>

      <p>{pera}.</p>

      <p className="card-text fw-bold">Total {time} Month Course</p>
      <h5 className="card-text">Price - ${price} </h5>
      
     
      
    </div>

        </div>
        </div>
    );
};

export default CourseInHome;