import React from 'react'
import MydonnersCrud from '../../MydonnersCrud';
import Dashboard from './Dashboard';
import Gapp from '../Gapp';
import Bloodrequest from '../Bloodrequest';
import Login from '../Login';
import Requestatus from '../Requestatus';
import Blog from '../Blog';
import Donationinfo from '../Donationinfo';
const Navbarblog = () => {

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
          
        
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">City</a>
          <div className="dropdown-menu m-0">
            <a href="/Blog" className="dropdown-item">News</a>
            <a href="/Donationinfo" className="dropdown-item">Wah</a>
            <a href="/Donationinfo" className="dropdown-item">Taxila</a>

         
            
         
          </div>
        </div> 
      
      </div>
      <div className=" d-none d-lg-flex">
        <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
          <i className="fa fa-phone text-primary" />
        </div>
        <div className="ps-3">
        
          <p className="text-light fs-5 mb-0">+012 345 6789</p>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbarblog;
 