      import React, { useState, useEffect } from "react";
      import { GoogleMap, OverlayView, useJsApiLoader, DirectionsService, DirectionsRenderer , Autocomplete      } from '@react-google-maps/api';
      import { FaLocationDot } from "react-icons/fa6";
      import '../styles/vendorMap.css';
      import { IoIosTime } from "react-icons/io";

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
      export default function VendorMap() {
        const { isLoaded } = useJsApiLoader({
          googleMapsApiKey: "AIzaSyBuhXO7PAEE1sgSknKB-E4CIXgcF_Lw40w",
          libraries: libraries,
        });

        const [currentLocation, setCurrentLocation] = useState(null);
        const [clickedLocation, setClickedLocation] = useState(null);
        const [directions, setDirections] = useState(null);
        const [autocomplete, setAutocomplete] = useState(null);

        const handleMapClick = ({ latLng }) => {
          const lat = latLng.lat();
          const lng = latLng.lng();
          console.log('Map clicked:', lat, lng);
          setClickedLocation({ lat, lng });
          
        };

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
        const handlePlaceSelect = () => {
          if (autocomplete.getPlace()) {
            const place = autocomplete.getPlace();
            setClickedLocation({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            });
          }
        };

        // const calculateDirections = (origin, destination) => {
        //   const directionsService = new window.google.maps.DirectionsService();

        //   directionsService.route(
        //     {
        //       origin: new window.google.maps.LatLng(origin.lat, origin.lng),
        //       destination: new window.google.maps.LatLng(destination.lat, destination.lng),
        //       travelMode: window.google.maps.TravelMode.DRIVING,
        //     },
        //     (result, status) => {
        //       if (status === window.google.maps.DirectionsStatus.OK) {
        //         setDirections(result);
        //       } else {
        //         console.error('Error calculating directions:', status);
        //       }
        //     }
        //   );
        // };
        // const  renderDirectionsInfo  = () => {
        //   if (directions && directions.routes && directions.routes.length > 0) {
        //     const route = directions.routes[0];
        //     if (route.legs && route.legs.length > 0) {
        //       const leg = route.legs[0];
        //       return (
        //         <div className="directionInfo">
        //           <p>Time : {leg.duration.text}</p>
        //           <p>Distance : {leg.distance.text}</p>
        //         </div>
        //       );
        //     }
        //   }
        //   return null;
        // };
      //   useEffect(() => {
      //   if (clickedLocation && currentLocation) {
      //     calculateDirections(currentLocation, clickedLocation);
          
      //   }
      // }, [clickedLocation, currentLocation]);
        return (
          <div style={{ height: '90vh', width: '90%', margin: ' 10px auto' }} className="MapContainer">
            {isLoaded && (
              <GoogleMap
                center={clickedLocation ? clickedLocation :currentLocation}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onClick={handleMapClick}
              >
                { !directions && currentLocation && (
                  <MarkerWithIcon position={currentLocation} />
                )}
                {!directions &&clickedLocation && (
                  <MarkerWithIcon2 position={clickedLocation} />
                )}
                <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceSelect}>
                      <input
                        type="text"
                        placeholder="Search for a location"
                        className="searchInputMap"
                      />
                    </Autocomplete>
                {/* {directions && (
                  <>
                  <DirectionsRenderer directions={directions} />
                  {renderDirectionsInfo()}
                  </>
                )} */}
              </GoogleMap>
            )}
          </div>
        );
      }
