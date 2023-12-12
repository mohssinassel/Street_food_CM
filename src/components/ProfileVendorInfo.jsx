import React from "react";
import '../styles/profileVendorInfo.css';
import { FaStar } from "react-icons/fa";

const ProfileVendorInfo = () =>{
   
  return (
    <>
    <div className='vendor_info'>
        <h2 >Store Information</h2>
        <div>
            <p>Email</p>
            <hr/>
            <p>mohssinassalh@gmail.com</p>
        </div>
        <div>
            <p>Phone</p>
            <hr/>
            <p>+212 622892722</p>
        </div>
        <div>
            <p>Gender</p>
            <hr/>
            <p>Male</p>
        </div>
        <div>
            <p>Rate</p>
            <hr/>
            <p><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/></p>
        </div>
        <div>
            <p>Operating Hours</p>
            <hr/>
            <p>16:00 - 01:00</p>
        </div>
        <div>
            <p>Pass Fun</p>
            <hr/>
            <div className="passFunBtnContainer">
                <button className="btnPassFun yes">YES</button>
                <button className="btnPassFun">NO</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default ProfileVendorInfo;
