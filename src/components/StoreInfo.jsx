import React, { useState } from "react";
import "../styles/personalInfo.css";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";

const StoreInfo = () => {
    const [activeStep, setActiveStep] = useState("store");
    return (
        <div>
            <div >
            <ProgressBar activeStep={activeStep} />
            </div>
            <div className="persoInfoDiv">
                <h1>Store Info</h1>
                <h4>It's time to introduce your store! Share key details about your business that will Attract peaple</h4>
                <span className="horizontal-line"></span>
                <div className="personalInfo">
                    <div className="personalInfo_container">
                        <div className="personalInfo_info">
                            <h3>Store Name</h3>
                            <div className="FullNameContainer">
                            <input type="text" placeholder="Enter First Name" className="PersonalNormalInput"/>
                            
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Description</h3>
                            <div className="FullNameContainer">
                            <textarea type="email" placeholder="Enter Description of your Store" style={{width:"700px" , height:'70px',paddingTop:'10px'}} className="PersonalNormalInput"/>
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Operating Hours</h3>
                            <div className="FullNameContainer">
                            FROM
                            <input type="text" placeholder="" className="NumberInput"/>
                            TO
                            <input type="text" placeholder="" className="NumberInput"/>
                            </div>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Pass Fun</h3>
                            <select className="PersonalNormalInput">
                            <option value="yes">YES</option>
                            <option value="no">NO</option>
                            </select>
                        </div>
                        <div className="personalInfo_info">
                            <h3>Menu</h3>
                            <div className="FullNameContainer">
                            <input type="text" placeholder="Enter First Name" className="PersonalNormalInput"/>
                            
                            </div>
                        </div>

                        
                    </div>
                </div>
                <Link  to="/becomeVendor/store" className="continuBtn Btn2Personal" onClick={() => setActiveStep("store")}>Continue</Link>
            </div>
        </div>
    )
}
export default StoreInfo;