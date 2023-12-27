import React from "react";
import "../styles/Home.scss";
import HeroSection from "../components/HeroSection";
// import ProfileVendor from "./ProfileVendor";
import Stores from "../components/Stores";
function Home() {
  return (
    <>
    <div className="home">
      <div className="containerr main">
        <HeroSection />
      </div>
    </div>
      
      <Stores/>
    </>
  );
}
export default Home;
