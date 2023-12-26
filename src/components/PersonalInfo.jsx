import React, { useState } from "react";
import "../styles/personalInfo.css";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
    const [activeStep, setActiveStep] = useState("personal");
    return (
        <div>
            <div >
            <ProgressBar activeStep={activeStep} />
            </div>
            <div className="persoInfoDiv">
                <h1>Personal Info</h1>
                <h4>It's time to tell us about yourself</h4>
                <span className="horizontal-line"></span>
                <div className="personalInfo">
                    <div className="personalInfo_container">
                        <div className="personalInfo_info">
                            <h3>Full Name</h3>
                            <div className="FullNameContainer">
                            <input type="text" placeholder="Enter First Name" className="PersonalNormalInput"/>
                            <input type="text" placeholder="Enter Last Name"className="PersonalNormalInput" />
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Email</h3>
                            <div className="FullNameContainer">
                            <input type="email" placeholder="Enter Your Email" className="PersonalNormalInput"/>
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Phone</h3>
                            <div className="FullNameContainer">
                            <input type="text" placeholder="Enter Your Phone Number" className="PersonalNormalInput"/>
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Gender</h3>
                            <select className="PersonalNormalInput">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                <div className="containerBtn">
                    <Link  to="/becomeVendor/store" className="continuBtn Btn2Personal" onClick={() => setActiveStep("store")}>Continue</Link>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo;