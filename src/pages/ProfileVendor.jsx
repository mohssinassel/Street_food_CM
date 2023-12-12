import React,{useState} from 'react';
import '../styles/ProfileVendor.css';
import "swiper/css"; // Update the import path
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { vendor } from '../utils/vendor';
import ProfileImages from '../components/ProfileImages';
import MenuItem2 from '../components/menuItem2';

import "../styles/pagination.css";
import ProfileVendorInfo from '../components/ProfileVendorInfo';
import Discount from '../components/Discount';
import AddPlat from '../components/AddPlat';


function ProfileVendor() {
    
    
   
    

    const menuList = vendor[0].menu;
    
      console.log(menuList);
    

    return (
      <>
        <div className='profile_container'>
          <div className='profile_container_left'>
            
              <ProfileImages />
            
            <div className='profile_menu_container'>
                <h3 className='profile_title'>Menu</h3>
                <div className='title_menu'>
                  <h2 style={{flex: 2}}>Name</h2>
                  <h2 style={{flex: 1}}>Price</h2>
                  <h2 style={{flex: 1}}>Categorie</h2>
                </div>
                <div className="menuData">
                  
                  {menuList.map((menuItem, key) => (
                    <div  key={key}>
                       <MenuItem2
                          key={menuItem.id_plat}
                          id={menuItem.id_plat}
                          image={menuItem.image}
                          name={menuItem.name_plat}
                          price={menuItem.price}
                          cate = {menuItem.categorie}
                        />
                       
                    </div>
                  ))}
                </div>
            </div>
            <Discount/>
            
          </div>
          <div className='profile_container_right'>
              <ProfileVendorInfo/>
          </div>
        </div>
        
        
      </>
    )
  }
  
  export default ProfileVendor;