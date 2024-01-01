import React, { useEffect, useState } from "react";
import '../styles/heroSection3.css';
import { motion } from 'framer-motion';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import yummy from "../images/yummy.jpg";
import circleImage from "../images/8506.jpg";
import circleImage2 from "../images/41932.jpg";



export default function HeroSection3() {
  const [displaySoccer, setDisplaySoccer] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplaySoccer(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []); 



  

  return (
    <div className="mainHero">
        <span class="bg__blur first_blur"></span> 
        <span class="bg__blur second_blur"></span> 
        <div className="infoContainerHero">
          <div className="Title_Hero">
              <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              >
              <span><span className="green">F</span>ee<span className="green">dit</span></span> <br />
                Foot & Food.
                
              </motion.h1>
          </div>
          <div className="descriptionHero">
            <span>Try the moroccan street food, and get the best experience of your life.</span>
            <span> We have a pass fun for you if your national team wins.</span>
          </div>

        </div>

        <div className="imgContainerHero">
          {displaySoccer && (
        <motion.div
            className="circleHome"
            style={{
              marginTop:'30px',
              borderRadius: "50%",
              backgroundImage: `url(${circleImage2})`, // Set the background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
            animate={{
              y: [0, 100, 0], 
              x: [0, 100, 0], 
            }}
            transition={{
              duration: 3, 
              repeat: Infinity, 
              ease: "linear", 
            }}
          /> )}
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={yummy} alt="houses" className="imageHeroMain"/>
          </motion.div>
        </div>
    </div>
    
  );
};
