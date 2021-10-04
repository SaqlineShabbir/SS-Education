import React from 'react';
import './SingleService.css'
const SingleService = (props) => {
    console.log(props)
    const {name,img,pera,time,price} =props.service
    return (
        <div>
          
      <div style={{'height':'700px'}} className=" my-card card mx-3 my-3 mt-5 shadow-lg">
    <img src={img} className="card-img-top img-fluid h-50" alt="..."/>
    <div className="card-body">
      <h4 className="card-title">{name}</h4>

      <p>{pera}.</p>

      <p className="card-text fw-bold">Total {time} Month Course</p>
      <h5 className="card-text">Price - ${price} </h5>
      
     

      <button  className="buttons px-3 py-1 text-white"><i className="fas fa-calculator"></i>Purchase</button>
      
    </div>

        </div>
        </div>
    );
};

export default SingleService;