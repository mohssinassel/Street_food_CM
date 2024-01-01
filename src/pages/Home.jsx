import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../styles/Home.scss";
import HeroSection from "../components/HeroSection";
import ProfileVendor from "./ProfileVendor";
import "react-toastify/dist/ReactToastify.css";
import Stores from "../components/Stores";
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showLocationInfoToast) {
      toast.success("Data Saved!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
      });
      location.state = null;
    }
  }, []);
  return (
    <>
      <div className="containerr main">
        <HeroSection />
      </div>
      <ToastContainer />
      <Stores />
    </>
  );
}
export default Home;
