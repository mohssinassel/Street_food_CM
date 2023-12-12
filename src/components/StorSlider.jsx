import React, { useEffect, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";
import image_1 from "../images/streetFoodImages/street_food_im1.jpg";
import image_2 from "../images/streetFoodImages/street_food_im2.jpg";
import image_3 from "../images/streetFoodImages/street_food_im3.jpg";
import image_4 from "../images/streetFoodImages/street_food_im4.jpg";
import image_5 from "../images/streetFoodImages/street_food_im5.jpg";
import image_7 from "../images/streetFoodImages/street_food_im7.webp";


// App = BasicSlider
const Slider = () => {
  const images = [image_1, image_2, image_3, image_4, image_5, image_7];


  
  return (
    <HeroSlider
      className="container"
      SlidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        // width: "80%", // Ajustez la largeur du slider
        // height: "300px", // Ajustez la hauteur du slider
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        marginBottom: "35px",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "20vh",
      }}
    >
        {images.map((image, index) => (
        <Slide
          key={index}
          background={{
            backgroundImage: `url(${image})`, // Utilisation de l'image importée
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
      ))}
      
    </HeroSlider>
  );
};
export default Slider;
