import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import CustomerMap from "./CustomerMap";
import "../styles/stores.css";

const StorePopup = ({ store, onClose }) => {
  return (
    <div className="store-popup">
      <div className="OverlayPop"></div>
      <div className="contentPop">
        <div className="headerContentPop">
          <div className="headerContentPopInfo"> 
            <div><span>A</span> : Your Location</div>
            <div><span>B</span> : {store.nom_store} Location</div>
          </div>
          
          <div className="headerContentPopClose">
            <div onClick={onClose}><IoCloseCircle style={{width:'30px',height:'30px' , cursor:'pointer'}}/></div>
          </div>
        </div>
      <div className="map-popup">
        <CustomerMap
          initialLocation={{
            lat: parseFloat(store.localisation.split(',')[0]),
            lng: parseFloat(store.localisation.split(',')[1]),
          }}
        />
      </div>
     
      </div>
    </div>
  );
};

export default StorePopup;