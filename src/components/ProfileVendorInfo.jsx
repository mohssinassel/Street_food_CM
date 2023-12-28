import React from "react";
import '../styles/profileVendorInfo.css';
import { FaStar } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import AddPlat from "./AddPlat";

const ProfileVendorInfo = () =>{
   
  return (
    <>
    <div className="vendor_info_Add_Plat">
    <div className='vendor_info'>
        <h3 >Store Information</h3>
        <div className="vendor_info_div">
            <div>
                <p>Email</p>
                <LuPencilLine className="icon_modif"/>
            </div>
            <hr/>
            <p>mohssinassalh@gmail.com</p>
        </div>
        <div className="vendor_info_div">
            <div>
                <p>Phone</p>
                <LuPencilLine className="icon_modif"/>
            </div>
            <hr/>
            <p>+212 622892722</p>
        </div>
        <div className="vendor_info_div">
            <div>
                <p>Gender</p>
                <LuPencilLine className="icon_modif"/>
            </div>
            <hr/>
            <p>Male</p>
        </div>
        <div className="vendor_info_div">
            <p className="titleVendor">Rate</p>
            <hr/>
            <p><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/></p>
        </div>
        <div className="vendor_info_div">
            <div>
                <p>Operating Hours</p>
                <LuPencilLine className="icon_modif"/>
            </div>
            <hr/>
            <p>16:00 - 01:00</p>
        </div>
        <div className="vendor_info_div">
            <p className="titleVendor">Pass Fun</p>
            <hr/>
            <div className="passFunBtnContainer">
                <button className="btnPassFun yes">YES</button>
                <button className="btnPassFun">NO</button>
            </div>
        </div>
    </div>
    <div className="Add_plat_container_main">
    
    <AddPlat/>
    </div>
    </div>
    </>
  );
}

export default ProfileVendorInfo;
