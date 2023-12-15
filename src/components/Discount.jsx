import React ,{useEffect}from 'react'
import '../styles/discount.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Discount = () => {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });

    
    return (
        <div>
                <h3 className='profile_title'>Discount Of The Day</h3>
                <div className="discount_container" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                    <img src="/images/menu/cheddarBaconRanchCorn.jpg" alt="" className='image_discount'/>
                    <div className="discount_info">
                        <h3>cheddar Bacon Ranch Corn</h3>
                        <div>
                            <p  style={{ textDecoration: 'line-through'}}>9.99 DH</p>
                            <p>5.99 DH</p>
                        </div>
                        
                    </div>
                    
                  </div>
            </div>
    )
}

export default Discount