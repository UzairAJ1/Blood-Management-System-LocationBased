import React from 'react'
import Bloodrequest from '../Bloodrequest'

const Carsel = () => {
  return (
    <div >
    {/* Carousel Start */}
    
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="./img/carousel-1.jpg" width="100%" height="200"alt=""   />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8">
                  <p className="text-primary text-uppercase fw-bold mb-2"> Nobel Aim</p>
                  <h1 className="display-1 text-light mb-4 animated slideInDown"> With Passion</h1>
                  <p className="text-light fs-5 mb-4 pb-3"> Save Life ! Join us.</p>
                  
                  <a href ="/Bloodrequest" className="btn btn-primary rounded-pill py-3 px-5">Find Blood</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
    {/* Carousel End */}
  </div>
  )
}

export default Carsel