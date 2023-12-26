import React from "react";
import "../styles/Home.scss";
import HeroSection from "../components/HeroSection";
import ProfileVendor from "./ProfileVendor";
function Home() {
  return (
    <>
      {/* <div className="background"></div> */}
      <div className="containerr main">
        <HeroSection />
      </div>
    </>
  );
}
export default Home;
