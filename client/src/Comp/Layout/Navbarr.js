import React from 'react'
import MydonnersCrud from '../../MydonnersCrud';
import Dashboard from './Dashboard';
import Gapp from '../Gapp';
import Bloodrequest from '../Bloodrequest';
import Login from '../Login';
import Requestatus from '../Requestatus';
import Blog from '../Blog';
import Donationinfo from '../Donationinfo';
import Testimoneials from '../Testimoneials';
const Navbarr = () => {

  return (
    
    <div><nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{top: '48px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
    <a href="/Dashboard" className="navbar-brand ms-4 ms-lg-0">
      <h1 className="text-primary m-0">Blood Donnation</h1> 
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto p-4 p-lg-0">
        <a href="/" className="nav-item nav-link active">Home</a>
        <a href="/Bloodrequest" className="nav-item nav-link">Blood Request</a>
        <a href="/MydonnersCrud" className="nav-item nav-link">Donner Registration</a>
        
        
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
          <div className="dropdown-menu m-0">
            <a href="/Blog" className="dropdown-item">News</a>
            <a href="/Donationinfo" className="dropdown-item">Testimoneials</a>
            <a href="/Testimoneials" className="dropdown-item">Donationinfo</a>

           

         
          </div>
        </div> 
        <a href="/Gapp" className="nav-item nav-link">Contact</a>
      </div>
      <div className=" d-none d-lg-flex">
        <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
          <i className="fa fa-phone text-primary" />
        </div>
        <div className="ps-3">
          <small className="text-primary mb-0">Call Us</small>
          <p className="text-light fs-5 mb-0">+012 345 6789</p>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbarr;