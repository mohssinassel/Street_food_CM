import React, { useState } from 'react';
import "../styles/ProfileImages.css";

function ProfileImages() {

    const [picDisplayed, setPicDisplayed] = useState("/images/pic_vendor4.jpg");
    

    return (
        <>
        <div className='profile_img_left'>
            <img src={picDisplayed} alt="pic_vendor" className='image_profil_main' />
        </div>
        <div className='profile_img_right'>
            <div onClick={() => setPicDisplayed("/images/pic_vendor1.jpg")} className={` ${picDisplayed === "/images/pic_vendor1.jpg" ? 'selected' : ''}`}>
                <img src="/images/pic_vendor1.jpg" alt="pic_vendor" className='image_profil' />
            </div>
            <div onClick={() => setPicDisplayed("/images/pic_vendor2.jpg")} className={` ${picDisplayed === "/images/pic_vendor2.jpg" ? 'selected' : ''}`}>
                <img src="/images/pic_vendor2.jpg" alt="pic_vendor" className='image_profil' />
            </div>
            <div onClick={() => setPicDisplayed("/images/pic_vendor3.jpg")} className={` ${picDisplayed === "/images/pic_vendor3.jpg" ? 'selected' : ''}`}>
                <img src="/images/pic_vendor3.jpg" alt="pic_vendor" className='image_profil' />
            </div>
            <div onClick={() => setPicDisplayed("/images/pic_vendor4.jpg")} className={` ${picDisplayed === "/images/pic_vendor4.jpg" ? 'selected' : ''}`}>
                <img src="/images/pic_vendor4.jpg" alt="pic_vendor" className='image_profil' />
            </div>
        </div>
        </>
    )
}
export default ProfileImages;