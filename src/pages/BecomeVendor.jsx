
import { Link } from "react-router-dom";
import React from "react";
import "../styles/becomeVendor.css";
function BecomeVendor() {
    return (
        <div className="becomeVendorContainer">
            <div className="becomeVendorFirst">
                <h1>Ready To become a vendor on FeedIt ?</h1>
                <div>
                <div>
                    <span class="horizontal-line"></span>
                    <p>FeedIt is a platform that allows you to show your location and menu.</p>
                </div>
                
                <div>
                <span class="horizontal-line"></span>
                    <p>It's easy to use and you can start Now.</p>
                </div>
                <div> 
                <span class="horizontal-line"></span>
                    <p>Just follow the steps below and you'll be ready to go.</p>
                </div>
                </div>
            <Link to="/becomeVendor/personal" className="continuBtn">Continue</Link>
            </div>
            <div className="becomeVendorSecond">
                <img src="/images/CDM.jpg" alt="" className="becomeVendorImg"/>
            </div>


        </div>
    );
}
export default BecomeVendor;