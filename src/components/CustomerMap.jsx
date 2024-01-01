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
export default function customerMap( {initialLocation}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBuhXO7PAEE1sgSknKB-E4CIXgcF_Lw40w",
    libraries: libraries,
  });

  const [currentLocation, setCurrentLocation] = useState(null);

  const [directions, setDirections] = useState(null);



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);


  const calculateDirections = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    console.log("origin",origin);
    console.log("destination",destination);
    directionsService.route(
      {
        origin: new window.google.maps.LatLng(origin.lat, origin.lng),
        destination: new window.google.maps.LatLng(destination.lat, destination.lng),
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error('Error calculating directions:', status);
        }
      }
    );
  };
  const  renderDirectionsInfo  = () => {
    if (directions && directions.routes && directions.routes.length > 0) {
      const route = directions.routes[0];
      if (route.legs && route.legs.length > 0) {
        const leg = route.legs[0];
        return (
          <div className="directionInfo">
            <p>Time : {leg.duration.text}</p>
            <p>Distance : {leg.distance.text}</p>
          </div>
        );
      }
    }
    return null;
  };
  useEffect(() => {
  if (initialLocation && currentLocation) {
    calculateDirections(currentLocation, initialLocation);
    console.log("initialLocation",initialLocation);
    
  }
}, [initialLocation, currentLocation]);
  return (
    <div style={{ height: '80vh', width: '98%', margin: ' 10px auto' }} className="MapContainer">
      {isLoaded && (
        <GoogleMap
          center={currentLocation}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          
        >
          { !directions && currentLocation && (
            <MarkerWithIcon position={currentLocation} />
          )}
          {!directions && initialLocation && (
            <MarkerWithIcon2 position={initialLocation} />
          )}
         
          {directions && (
            <>
                <DirectionsRenderer directions={directions} />
                {renderDirectionsInfo()}
            </>
          )}
        </GoogleMap>
      )}
    </div>
  );
}
