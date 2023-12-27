import React from "react";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from 'react-icons/pi';
import "../styles/progressBar.css"; 

const ProgressBar = ({ activeStep }) => {
    console.log(activeStep);
    if(activeStep === "location"){
        var progress = 100;
    }else if(activeStep === "store"){
        var progress = 60;
    }else{
        var progress = 30;
    }
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
          <p className={`target ${activeStep === "location" ? 'validNumber' : ''}`}>Location</p>
        </div>
        <div className="progress-bar-container">
        <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div>{progress} %</div>
        </div>
    </div>
  );
};

export default ProgressBar;
