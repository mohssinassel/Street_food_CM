import React from "react";
import "../styles/Topbar.scss";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import {
  faHome,
  faList,
  faUser,
  faSignInAlt,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
export default function Topbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    { name: "Home", path: "/home", icon: faHome },
    { name: "About", path: "/about", icon: faList },
    { name: "Become Vendor", path: "/becomeVendor", icon: faUser },
    { name: "SignIn", path: "/signin", icon: faSignInAlt },
    // { name: "SignUp", path: "/signup", icon: faCashRegister },
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="navbar containerr">
        <Link to="/home" className="logo">
          F<span>ee</span>dit
        </Link>
        <div className="nav-links">
          {links.map((link, index) => (
            <Link to={link.path} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar links={links} />}
    </>
  );
}
