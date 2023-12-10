import React,{useState} from 'react';
import '../styles/ProfileVendor.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slidesX } from '../utils/slidesX';
import "swiper/css"; // Update the import path
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { vendor } from '../utils/vendor';
import ProfileImages from '../components/ProfileImages';
import MenuItem from '../components/MenuItem';
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import ProfileVendorInfo from '../components/ProfileVendorInfo';


function ProfileVendor() {
    const itemsPerPage = 3;
    const [pageNumber, setPageNumber] = useState(0);
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const categories = ["All" , "Drinks" , "Corn"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const icons = [
      "/images/icons/all.png",
      "/images/icons/drink.png",
      "/images/icons/corn.png", 
    ];
    const filteredMenu = vendor[0].menu.filter((menuItem) => {
      if (selectedCategory === "All") {
        return true;
      } else {
        return menuItem.categorie === selectedCategory;
      }
    });

    const menuList = filteredMenu.slice(startIndex, endIndex);
    const pageCount = Math.ceil(filteredMenu.length / itemsPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
      console.log(menuList);
    

    return (
      <>
        <div className='profile_container'>
          <div className='profile_container_left'>
            
              <ProfileImages />
            
            <div className='profile_menu_container'>
                <h3 className='profile_title'>Menu</h3>
                <div className='categories_container'>
                <Swiper {...slidesX}>
                  {categories.map((category, index) => (
                    <SwiperSlide key={index} className={`custom-slide ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
                      <>
                      <div className="logo-categ">
                        <img src={icons[index]} alt={category} style={{ width: '40px', height: '40px', margin: '5px', fontWeight: '100' }} />
                      </div>
                      <div className="categ-name">
                        <p>{category}</p>
                      </div>
                      
                      </>
                    </SwiperSlide>
                  ))}
                </Swiper>
                </div>
                <div className="menuData">
                  
                  {menuList.map((menuItem, key) => (
                    <div  key={key}>
                       <MenuItem
                          key={menuItem.id_plat}
                          id={menuItem.id_plat}
                          image={menuItem.image}
                          name={menuItem.name_plat}
                          price={menuItem.price}
                        />
                       
                    </div>
                  ))}
                </div>
                <div className="pagination">
                    <ReactPaginate
                      pageCount={pageCount}
                      onPageChange={changePage}
                      previousLabel={"Précédent"}
                      nextLabel={"Suivant"}
                      containerClassName="paginationBttns"
                    />
                </div>
            </div>
          </div>
          <div className='profile_container_right'>
              <ProfileVendorInfo/>
          </div>
        </div>
        
      </>
    )
  }
  
  export default ProfileVendor;