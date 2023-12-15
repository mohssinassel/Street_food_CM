  // Date: 07/12/2023

  import React, { useState, useEffect } from "react";
  import "./App.css";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Topbar from "./components/Topbar"; 
  import Home from "./pages/Home";
  import Footer from "./components/Footer";
  import SignIn from "./pages/SignIn";
  import SignUp from "./pages/SignUp";
  import About from "./pages/Apropos";
  import BecomeVendor from "./pages/BecomeVendor";
  import ProfileVendor from "./pages/ProfileVendor";
  import Store from "./pages/Store";
  import FirstPage from "./pages/FirstPage";
  import { useLocation } from "react-router-dom"; 
  import Loading from "./components/loading";
  function App() {
    const location = useLocation();

    
    const isFirstPage = location.pathname === '/';

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
      const fetchData = async () => {
        try {
          
          await new Promise(resolve => setTimeout(resolve, 10000));
          
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          
          setLoading(false);
        }
      };

      
      fetchData();
    }, []);
    return (
      
        <>
        {loading ? (
          <Loading  />
        ) : (
          <>
          {isFirstPage ? null : <Topbar />}
          <div className="App">
            
            <Routes>
            {isFirstPage && <Route path="/" element={<FirstPage />} />}
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<ProfileVendor />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/becomeVendor" element={<BecomeVendor />} />
            </Routes>
            
            
          </div>
          
          {/* {isFirstPage ? null : <Footer />} */}
          </>
        )}
        </>
      
      
    );
  }

  export default App;
