import React from 'react'
import "./styles.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import Az from './Az';

const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      // return distance between the marker and mouse pointer
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };
  
  const points = [
    { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
    { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
  ];

const Azmap = () => {
  return (
    <div className="App">
    ;
    <GoogleMap
      bootstrapURLKeys={{
        // remove the key if you want to fork
        key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
        language: "en",
        region: "US"
      }}
      defaultCenter={{ lat: 51.506, lng: -0.169 }}
      defaultZoom={15}
      distanceToMouse={distanceToMouse}
    >
      {points.map(({ lat, lng, id, title }) => {
        return (
          <Az key={id} lat={lat} lng={lng} text={id} tooltip={title} />
        );
      })}
    </GoogleMap>
  </div>
);
}

export default Azmap