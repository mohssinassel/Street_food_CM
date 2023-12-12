import "../styles/HeroSection.scss";
import CustomImage from "./CustomImage";
export default function HeroSection() {
  const images = [
    "/streetFoodImages/street_food_im11.png",
    "/streetFoodImages/street_food_im14.jpg",
    "/streetFoodImages/street_food_im13.png",
    "/streetFoodImages/street_food_im15.jpg",
    "/streetFoodImages/street_food_im12.png",
    "/streetFoodImages/street_food_im6.jpg",
    "/streetFoodImages/street_food_im7.jpg",
    "/streetFoodImages/street_food_im8.jpg",
    "/streetFoodImages/street_food_im9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What are we about ?</h1>
        <p className="info">
          Try the moroccan street food, and get the best experience of your
          life. <br />
          We have a pass fun for you if your national team wins. <br />
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
      {images.map((src, index) => (
          <CustomImage imgsrc={src} pt={"90%"} key={index} />
        ))}
      </div>
    </div>
  );
}
