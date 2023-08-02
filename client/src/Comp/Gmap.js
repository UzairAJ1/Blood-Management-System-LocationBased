
import React, { useEffect, useRef } from 'react';
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

import Az from './Az';

const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }

 
  // list of the marker object along with icon
  const markerList = [
    { id:1,title:'A',lat: 33.5651, lng: 72.7511 ,icon: iconList.icon1 },
    { id:2,title:'B',lat: 33.626057, lng: 73.071442, icon: iconList.icon2 },
    { id:3, title:'C',lat: 33.7715, lng: 72.7511, icon: iconList.icon3 },
    { id:4, title:'A',lat: 33.7660, lng: 72.3609, icon: iconList.icon4 },

  ]
  
  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
   
  }, []);


  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 33.7715, lng: 72.3609 },
      zoom: 8
    });
    {markerList.map(({ lat, lng, id, title }) => {
      return (
        <Az key={id} lat={lat} lng={lng} text={id} tooltip={title} />
      );
    })}
  }

  // create marker on google map
  const createMarker = (markerObj) => new window.google.maps.Marker({
    position: { lat: markerObj.lat, lng: markerObj.lng },
    map: googleMap,
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    },
    
    
  });
  
  return <div
    ref={googleMapRef}
    
    style={{ width: 600, height: 500 }}
  />
}

export default GMap;