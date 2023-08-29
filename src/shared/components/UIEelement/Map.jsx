import React, { useRef, useEffect } from "react";

import "./css/Map.css";

const Map = ({ className, style, center, zoom }) => {
  const mapRef = useRef();

  // const {center , zoom} = props;
  // useeffect
  // if without useeffect encounter errors or unexpected behavior because you would be trying to access mapRef.current before the component has fully rendered, 
  useEffect(() => {
  
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });
    new window.google.maps.Marker({ postion: center, map: map });
    console.log("mapRef?", mapRef);
  }, []);


  return <div ref={mapRef} className={`map ${className}`} style={style}></div>;
};
export default Map;
