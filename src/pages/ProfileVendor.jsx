import React from 'react';
import '../styles/ProfileVendor.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slidesX } from '../utils/slidesX';
import "swiper/css"; // Update the import path
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { vendor } from '../utils/vendor';

function ProfileVendor() {
    const categories = ["BreakFast", "Sandwich", "Drinks", "Salade", "Tajine", "Supplements"];
  
    
      const menuList = vendor[0].menu;
      console.log(menuList);
    

    return (
      <>
        <div className='profile_container'>
          <div className='profile_container_left'>
            <div className='profil_information'>
              <div className='profil_img_container' >
                <img src="/images/car_food.jpg" alt="" className='image_profil' />
              </div>
              <div className='profil_inforamtion_container'>
                <h1>Hi, Mohssin Assel</h1>
                <p>Here you can see your profile</p>
                <p>Store Name : chi haja</p>
              </div>
            </div>
            <div>
                <h3>Menu</h3>
                <div className='categories_container'>
                <Swiper {...slidesX}>
                  {categories.map((category, index) => (
                    <SwiperSlide key={index} className='custom-slide' >
                      <>
                        <button className='btn-categ'>{category}</button>
                      </>
                    </SwiperSlide>
                  ))}
                </Swiper>
                </div>
                <div className="menuData">
                  
                  {menuList.map((menuItem, key) => (
                    <div  key={key}>
                       {menuItem.name_plat}
                       
                    </div>
                  ))}
                </div>

                <div className="pagination">
                    {/* <ReactPaginate
                      pageCount={pageCount}
                      // pageRangeDisplayed={5}
                      onPageChange={changePage}
                      previousLabel={"Précédent"}
                      nextLabel={"Suivant"}
                      containerClassName="paginationBttns"
                    /> */}
                </div>
            </div>
          </div>
          <div className='profile_container_right'>
                    <h2>fdskjh</h2>
          </div>
        </div>
        
      </>
    )
  }
  
  export default ProfileVendor;