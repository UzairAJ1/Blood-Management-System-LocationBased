import React from 'react'
import Dashboard from './Dashboard'
import Gapp from '../Gapp'
import Azmap from '../Azmap'
import DonnerLocation from '../DonnerLocation'

const Topbar = () => {
  return (
    
       <div className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="row gx-0 align-items-center d-none d-lg-flex">
      <div className="col-lg-6 px-5 text-start">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a className="small text-light" href="/">Home</a></li>
          <li className="breadcrumb-item"><a className="small text-light" href="#">Terms</a></li>
          <li className="breadcrumb-item"><a className="small text-light" href="/Azmap">Find</a></li>
          
          <li className="breadcrumb-item"><a className="small text-light" href=" https://localhost:7154/Donnerloc/MapView
">Find Donner</a></li>

        </ol>
      </div>
      <div className="col-lg-6 px-5 text-end">
        <small>Follow us:</small>
        <div className="h-100 d-inline-flex align-items-center">
          <a className="btn-lg-square text-primary border-end rounded-0" href><i className="fab fa-facebook-f" /></a>
          <a className="btn-lg-square text-primary border-end rounded-0" href><i className="fab fa-linkedin-in" /></a>
          <a className="btn-lg-square text-primary pe-0" href><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </div>
  </div> 
  
  )
}

export default Topbar