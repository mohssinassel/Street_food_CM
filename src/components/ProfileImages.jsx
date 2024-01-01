import React, { useState } from 'react';
import "../styles/ProfileImages.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';

function ProfileImages() {

    const [picDisplayed, setPicDisplayed] = useState("/images/pic_vendor4.jpg");
    

    return (
        <>
        <div className='profil_information_container'>
        <div className='profil_information'>
                <h1>Hi, Mohssin Assel</h1>
                <p>Welcome to Your Awesome Profile Space</p>
                <h2 className='store_name'>Corn Haven</h2>
              
            </div>
            <span class="vertical-line"></span>
            <div className='profil_img_container' >
                    <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                     
                effect={'cards'}
                grabCursor={true}
                
                modules={[EffectCards , Autoplay]}
                className="mySwiper"
            >
            
            <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor4.jpg" alt="" className='image_profil'/></SwiperSlide>
            <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor2.jpg" alt="" className='image_profil'/></SwiperSlide>
            <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor3.jpg" alt="" className='image_profil'/></SwiperSlide>
            <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor1.jpg" alt="" className='image_profil'/></SwiperSlide>

        </Swiper>
      </div>
      </div>
    </>
    )
}
export default ProfileImages;