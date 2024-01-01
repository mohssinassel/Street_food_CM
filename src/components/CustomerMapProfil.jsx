import React, { useState, useEffect } from "react";
import { GoogleMap, OverlayView, useJsApiLoader,  DirectionsRenderer       } from '@react-google-maps/api';
import { FaLocationDot } from "react-icons/fa6";
import '../styles/vendorMap.css';


const MarkerWithIcon = ({ position }) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_LAYER}
      getPixelPositionOffset={(width, height) => ({
        x: -width / 2,
        y: -height,
      })}
    >
      <div style={{ position: 'absolute', width: '30px', height: '30px' }}>
        <FaLocationDot size={30} color="red" />
      </div>
    </OverlayView>
  );
};
const MarkerWithIcon2 = ({ position }) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_LAYER}
      getPixelPositionOffset={(width, height) => ({
        x: -width / 2,
        y: -height,
      })}
    >
      <div style={{ position: 'absolute', width: '30px', height: '30px' }}>
        <FaLocationDot size={30} color="green" />
      </div>
    </OverlayView>
  );
};
const libraries = ['places'];
export default function CustomerMapProfil( {initialLocation}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBuhXO7PAEE1sgSknKB-E4CIXgcF_Lw40w",
    libraries: libraries,
  });

  return (
    <div style={{ height: '35vh', width: '98%', margin: ' 10px auto' }} className="MapContainer">
      {isLoaded && (
        <GoogleMap
          center={initialLocation}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          
        >
          
          {  initialLocation && (
            <MarkerWithIcon2 position={initialLocation} />
          )}
        </GoogleMap>
      )}
    </div>
  );
}
