import React, { useState, useEffect } from 'react';
import GMap from './Gmap';

import Topbar from './Layout/Topbar';
import Footer from './Layout/Footer';
import { Button,Modal, Row ,Container,Col, Navbar} from 'reactstrap';

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyC6v5-2uaq_wusHDktM9ILcqIrlPtnZgEk';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}
const Gapp = () => {
    const [loadMap, setLoadMap] = useState(false);
  
    useEffect(() => {
      loadGoogleMapScript(() => {
        setLoadMap(true)
      });
    }, []);
  
    return (
      <div>
        <Topbar/>
      <Container>
           
      <Row>

    <Col className="bg-white border"       xs="8">
     
        <a href="https://www.cluemediator.com">Doner location</a><br /><br />
        {!loadMap ? <div>Loading...</div> : <GMap 
        
        />}
        <br/><br/>
        <small><b>Note:</b> List of City</small>
       </Col>
       </Row>
       </Container>
       <Footer/>
      </div>
    );
  }
  
  export default Gapp;