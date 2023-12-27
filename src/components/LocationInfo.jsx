import React, { useState } from "react";
import "../styles/personalInfo.css";
import ProgressBar from "../components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import VendorMap from "../pages/VendorMap";
import "../styles/locationInfo.css";
import { FaLocationDot } from "react-icons/fa6";


const LocationInfo = () => {
    const [activeStep, setActiveStep] = useState("location");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    

    const handleContinueClick = () => {
        
          navigate("/home", { state: { showLocationInfoToast: true }}); 
        
      };
    return (
        <div>
            <div >
            <ProgressBar activeStep={activeStep} />
            </div>
            <div className="persoInfoDiv">
                    
                <h1>Location Info</h1>
                <h4>Show us Your Location</h4>
                <span className="horizontal-line"></span>
                <div className="locationInfoIcon">
                    <div><FaLocationDot size={30} color="red"/> : Your Actual Location</div>
                    <div><FaLocationDot size={30} color="green" /> : Yout Store Location</div>
                </div>
                <VendorMap/>
                <div className="containerBtn">
                <button className="continuBtn Btn2Personal" onClick={handleContinueClick}>Finish</button>
                </div>
            </div>
                        
        </div>
    )
}
export default LocationInfo;