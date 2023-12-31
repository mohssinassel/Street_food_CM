import React , {useState} from "react";
import "../styles/storePage.css";
import CustomerMapProfil from "../components/CustomerMapProfil";
import MenuItem2 from "../components/menuItem2";
import { vendor } from "../utils/vendor";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import StarRating from "../components/StarRating";
import CustomerMap from "../components/CustomerMap";
import { IoCloseCircle } from "react-icons/io5";
import "../styles/ProfileImages.css";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


const StorePopup = ({ store, onClose }) => {
  return (
    <div className="store-popup">
      <div className="OverlayPop"></div>
      <div className="contentPop">
        <div className="headerContentPop">
          <div className="headerContentPopInfo"> 
            <div><span>A</span> : Your Location</div>
            <div><span>B</span> : Store Location</div>
          </div>
          <div>
            <div onClick={onClose}><IoCloseCircle style={{width:'30px',height:'30px' , cursor:'pointer'}}/></div>
          </div>
        </div>
      <div className="map-popup">
        <CustomerMap
          initialLocation={{
            lat: parseFloat(store.localisation.split(',')[0]),
            lng: parseFloat(store.localisation.split(',')[1]),
          }}
        />
      </div>
     
      </div>
    </div>
  );
};
function StorePage({store}) {

  const menuList = vendor[0].menu;
  const [selectedStore, setSelectedStore] = useState(null);
    return (
      <div className="mainStorePage">
        <div className="headrStorePage">
          <div className="headrStorePage1">
            <h2>{store.nom_store}</h2>
            <p><StarRating rating={store.notation}/></p>
            
          </div>
          <div className="headrStorePage2" onClick={(e) => {e.preventDefault(); setSelectedStore( {store});}}>
            <CustomerMapProfil 
              initialLocation={{
                lat: parseFloat(store.localisation.split(',')[0]),
            lng: parseFloat(store.localisation.split(',')[1]),
              }}
            />
          </div>
        </div>
        <div className="imagesAndDescriptionStore">
            <h2>Description & Images</h2>
            <div className="imagesAndDescriptionStoreCont">
             
          
            <div className="imagesStorePage">
            <Swiper
                      
                      effect={'cards'}
                      grabCursor={true}
                      
                      modules={[EffectCards]}
                      className="mySwiper"
                  >
                  
                  <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor4.jpg" alt="" className='image_profil'/></SwiperSlide>
                  <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor2.jpg" alt="" className='image_profil'/></SwiperSlide>
                  <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor3.jpg" alt="" className='image_profil'/></SwiperSlide>
                  <SwiperSlide className='swiperSlide1'><img src="/images/pic_vendor1.jpg" alt="" className='image_profil'/></SwiperSlide>
      
              </Swiper>
            </div>
            <div className="descriptionStorePage">
              
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio corporis officia? Molestiae, quis optio. Vero, doloribus. Quam officiis eligendi saepe alias similique. Dolor dicta eum totam distinctio vel eius?
          
            </div>
          </div>
        </div>
        <div className="menuStorePage">
          <h2>Menu</h2>
          <div className="menuStorePageContainer">
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
        <div className="vendorStorePage">
          <h2>Vendor Information</h2>
            <div className="vendorStorePageDetail">
              <div className="vendorStorePageDetailCont">
                <IoPerson className="vendorStorePageDetailContIcon"/>
                <p>{store.proprietaire}</p>
              </div>
              <div className="vendorStorePageDetailCont">
                <MdEmail className="vendorStorePageDetailContIcon"/>
                <p>{store.email}</p>
              </div>
              <div className="vendorStorePageDetailCont">
                <FaPhone className="vendorStorePageDetailContIcon"/>
                <p>{store.phone}</p>
              </div>
            </div>
        </div>
        {selectedStore && (
          <StorePopup
            store={selectedStore}
            onClose={() => setSelectedStore(null)}
          />
        )}
      </div>
    );
}

export default StorePage;