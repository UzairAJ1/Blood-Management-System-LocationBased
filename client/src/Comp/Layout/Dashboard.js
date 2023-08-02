import React from 'react'

import Topbar from './Topbar'
import Navbarr from './Navbarr'
import Carsel from './Carsel'
import Footer from './Footer'

const Dashboard = () => {
  return (
    
    <>
    
    <Topbar/>
    <Navbarr/>
     <Carsel/>
      <Footer/>
  {/* Copyright Start */}
  
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
 </>
 )
}

export default Dashboard