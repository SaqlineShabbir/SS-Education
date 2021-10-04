import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           <nav className="navbar navbar-expand-lg  containerr px-5">
  <div className="container-fluid">
    <a className="navbar-brand text-dark fw-bolder" href="#"><span className="my-color fw-bolder">SS </span>Education</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fw-bold ">
        <li className="nav-item px-3">
          <Link className="nav-link active  text-dark" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link active text-dark" aria-current="page" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/contact">Contact Us</Link>
        </li>
       

      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;