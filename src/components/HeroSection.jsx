import "../styles/HeroSection.scss";
import CustomImage from "./CustomImage";
import { useSpring, animated } from "react-spring";

export default function HeroSection() {
  // const images = [
  //   "/streetFoodImages/street_food_im11.png",
  //   "/streetFoodImages/street_food_im14.jpg",
  //   "/streetFoodImages/street_food_im13.png",
  //   "/streetFoodImages/street_food_im15.jpg",
  //   "/streetFoodImages/street_food_im12.png",
  //   "/streetFoodImages/street_food_im6.jpg",
  //   "/streetFoodImages/street_food_im7.jpg",
  //   "/streetFoodImages/street_food_im8.jpg",
  //   "/streetFoodImages/street_food_im9.jpg",
  // ];
  const images = [
    {
      src: "/streetFoodImages/street_food_im11.png",
      name: "Moroccan Couscous With 7 Vegetables",
      local: ["Local"],
      description:
        "Couscous is a traditional dish that originates from North Africa, including Morocco. It is made from semolina wheat, which is crushed and then formed into tiny, granular beads. It's steamed to cook, resulting in light, fluffy grains. ",
    },
    {
      src: "/streetFoodImages/street_food_im14.jpg",
      name: "Moroccan Carrot Salad : Zaalouk, Taktouka, and More",
      local: ["Local"],
      description: "Moroccan salads are vibrant, flavorful, and often showcase a mix of fresh ingredients, herbs, and spices. They serve as both side dishes and sometimes even as main courses. ",
    },
    {
      src: "/streetFoodImages/street_food_im13.png",
      name: "Tradionnal Moroccan Salade : Tomato, Cucumber, and Onion Salad",
      local: ["Local"],
      description: "Moroccan salads are vibrant, flavorful, and often showcase a mix of fresh ingredients, herbs, and spices. They serve as both side dishes and sometimes even as main courses. ",
    },
    {
      src: "/streetFoodImages/street_food_im15.jpg",
      name: "Chebbakia",
      local: ["Local"],
      description: "Chebbakia is a delightful Moroccan pastry that's particularly popular during special occasions like Ramadan or other festive celebrations. It's known for its intricate shape and sweet flavor profile. ",
    },
    {
      src: "/streetFoodImages/street_food_im12.png",
      name: "Merqa and Tagine: The most consumed by moroccan people",
      local: ["Local"],
      description: "Tajine (also spelled tagine) refers to both a cooking vessel and the dishes cooked within it. It's a traditional North African clay or ceramic pot with a conical lid. ",
    },
    {
      src: "/streetFoodImages/street_food_im6.jpg",
      name: "Tagine with grilled vegetables",
      local: ["Local"],
      description: "Tajine (also spelled tagine) refers to both a cooking vessel and the dishes cooked within it. It's a traditional North African clay or ceramic pot with a conical lid. ",
    },
    {
      src: "/streetFoodImages/street_food_im7.jpg",
      name: "Tagine with Vegetables and Meat",
      local: ["Local"],
      description: "A tagine with vegetables and meat is a flavorful and aromatic dish cooked slowly in a traditional tagine pot. A tagine with vegetables and meat is a comforting and aromatic dish, characterized by slow cooking that allows the flavors to meld together, resulting in a delicious and satisfying meal perfect for sharing with family and friends.",
    },
    {
      src: "/streetFoodImages/street_food_im8.jpg",
      name: "Salade with Chicken",
      local: ["Local"],
      description: "Moroccan salads are vibrant, flavorful, and often showcase a mix of fresh ingredients, herbs, and spices. They serve as both side dishes and sometimes even as main courses. ",
    },
    {
      src: "/streetFoodImages/street_food_im9.jpg",
      name: "Grilled Meat with Vegetables",
      local: ["Local"],
      description: "Moroccan salads are vibrant, flavorful, and often showcase a mix of fresh ingredients, herbs, and spices. They serve as both side dishes and sometimes even as main courses. ",
    },
  ];

  const titleProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0.9, transform: "translateY(60px)" },
    delay: 200, // Délai avant l'animation
    // config: { duration: 1000, delay: 500, ...config.slow },
  });

  const paragraphProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0.9, transform: "translateY(60px)" },
    delay: 100, // Délai avant l'animation
    // config: { duration: 1000, delay: 800, ...config.slow },
  });
  const buttonProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    // config: { duration: 800, ...config.wobbly }, // Ajustez la durée et la configuration selon vos préférences
    delay: 100, // Délai avant l'animation
  });

  return (
    <div className="section hero">
      <div className="col typography">
        <animated.h1 className="title" style={titleProps}>
          Feedit...Foot & Food.
        </animated.h1>
        <animated.p className="info" style={paragraphProps}>
          Try the moroccan street food, and get the best experience of your
          life. <br />
          We have a pass fun for you if your national team wins. <br />
        </animated.p>
        <animated.button style={buttonProps} className="btn">
          Explore Now
        </animated.button>
      </div>
      <div className="col gallery">
        {images.map((image, index) => (
          <CustomImage image={image} pt={"90%"} key={index} />
        ))}
      </div>
    </div>
  );
}
