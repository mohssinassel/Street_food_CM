import React from "react";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from 'react-icons/pi';
import "../styles/progressBar.css"; 

const ProgressBar = ({ activeStep }) => {
    console.log(activeStep);
  return (
    <div className="barTarget">
      <div className="barTargetDiv">
        <PiNumberCircleOneFill className="iconNumber" />
        <p className="target validNumber">Personal info</p>
      </div>
      <div className="barTargetDiv">
        <PiNumberCircleTwoFill className="iconNumber " />
        <p className={`target ${activeStep === "store"|| activeStep === "location" ? 'validNumber' : ''}`}>Store Info</p>
      </div>
      <div className="barTargetDiv">
        <PiNumberCircleThreeFill className="iconNumber" />
        <p className={`target ${activeStep === 3 ? 'validNumber' : ''}`}>Location</p>
      </div>
    </div>
  );
};

export default ProgressBar;
