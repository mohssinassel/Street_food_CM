// Date: 07/12/2023

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import About from "./pages/Apropos";
import BecomeVendor from "./pages/BecomeVendor";
import ProfileVendor from "./pages/ProfileVendor";
import Store from "./pages/Store";
import FirstPage from "./pages/FirstPage";
import { useLocation } from "react-router-dom";
import Loading from "./components/loading";
import PersonalInfo from "./components/PersonalInfo";
import StoreInfo from "./components/StoreInfo";
import VendorMap from "./pages/VendorMap";
import LocationInfo from "./components/LocationInfo"; 
import StorePage from "./pages/StorePage";
import  stores  from "./utils/stores";
function App() {
  const location = useLocation();

  const isFirstPage = location.pathname === "/";

  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : (
        <> */}
          {isFirstPage ? null : <Topbar />}
          <div className="App">
            <Routes>
              {isFirstPage && <Route path="/" element={<FirstPage />} />}
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<ProfileVendor   />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/becomeVendor" element={<BecomeVendor />} />
              <Route path="/becomeVendor/personal" element={<PersonalInfo />} />
              <Route path="/becomeVendor/store" element={<StoreInfo />} />
              <Route path="/becomeVendor/location" element={<LocationInfo />} />

              {stores.map((item) => (
                <Route
                  key={item.id}
                  path={`/store/${item.id}`}
                  element={<StorePage store={item} />}
                />
              ))}
            </Routes>
          </div>

          {isFirstPage ? null : <Footer />}
        {/* </>
      )} */}
    </>
  );
}

export default App;
