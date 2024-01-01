import "../styles/Topbar.scss";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Matches from "./Matches";
import {
  faHome,
  faList,
  faUser,
  faSignInAlt,
  faSignOutAlt,
  faCog,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
// import "../styles/Matches.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import StorePopup from "./StorePopup";

export default function Topbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    { name: "Accueil", path: "/home", icon: faHome },
    // { name: "Profile Vendeur", path: "/about", icon: faList },
    { name: "Devenir Vendeur", path: "/becomeVendor", icon: faUser },
    { name: "Notifications", path: "/", icon: faBell },
    { name: "Profile", path: "/profilVendor", icon: faUser },
    { name: "Parametres", path: "/profil", icon: faCog },
    { name: "SignIn", path: "/signin", icon: faSignInAlt },
    { name: "SignOut", path: "/", icon: faSignOutAlt},
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }
  const [showNotification, setShowNotification] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showMap, setShowMap] = useState("");
  function setNotification() {
    setShowNotification(!showNotification);
  }
  function setAccount() {
    setShowAccount(!showAccount);
  }
  // matches 
  const [matchInfo, setMatchInfo] = useState({
    teamA: "Maroc",
    teamB: "Belgique",
    scoreA: 0,
    scoreB: 0,
    stadium: "Grand Stade de Casablanca",
    timeRemaining: 90,
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        timeRemaining: prevMatchInfo.timeRemaining - 1,
      }));
    }, 1000);

    if (matchInfo.timeRemaining === 80) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreA: 1,
      }));
    } else if (matchInfo.timeRemaining === 70) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreA: 2,
      }));
    } else if (matchInfo.timeRemaining === 60) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreB: 1,
      }));
    } else if (matchInfo.timeRemaining === 50) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreA: 3,
      }));
    } else if (matchInfo.timeRemaining === 40) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreA: 4,
      }));
    } else if (matchInfo.timeRemaining === 30) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreA: 5,
      }));
    }

    if (matchInfo.timeRemaining === 0) {
      clearInterval(timer);
      setShowPopup(true);
      setMatcheTermine(true);
    }

    return () => clearInterval(timer);
  }, [matchInfo.timeRemaining]);
  const currentTime = new Date();
  const currentHour = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [matcheTermine, setMatcheTermine] = useState(false);

  const renderNotifications = () => {
    if (matcheTermine) {
      return (
        showNotification && (
          <div className="dropDownNotification">
      <div className="content">
        <div className="content-flag">
        <img
          src="https://flagcdn.com/80x60/ma.png"
          srcset="https://flagcdn.com/160x120/ma.png 2x,
            https://flagcdn.com/240x180/ma.png 3x"
          width="80"
          height="60"
          alt="Maroc"/>
        </div>
        <div className="content-text">
        <ul className="list">
        <li>Now</li>
      </ul>
          <p>
          <span className="info-title">
            Congratulations, your national team won !
          </span>{" "}
          <br />
          You have a pass fun from all street food vendors.
        </p></div>
        
      </div>
    </div>
        )
      );
    } else {
      return (
        showNotification && (
          <div className="dropDownNotification">
            <div className="content">
              <span style={{fontWeight: 'bold', color: "grey"}}>Pas de notifications</span>
            </div>
          </div>
        )
      );
    }
  };
  return (
    <>
      <div className="navbar containerr">
        <Link to="/home" className="logo">
          F<span>ee</span>dit
        </Link>
        <div className="nav-links">
          <Link to={"/home"}>Accueil</Link>
          
          <Link to={"/becomeVendor"}>Creer mon Business</Link>
          <Link to={"/signin"}>SignIn</Link>
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="profilAndNotifs">
          
          <button type="button" className="icon-button" onClick={setNotification}>
            <i style={{ fontSize: "25px", color: "black"}} className="fas fa-bell"></i>
            {matcheTermine && (
            <span className="icon-button__badge">1</span>
            )}
          </button>
          <button type="button" className="icon-button" onClick={setAccount}>
            <i style={{ fontSize: "25px", color: "black"}} className="fas fa-user"></i>
          </button>
        </div>
        {renderNotifications()}
        
        {showAccount && (
          <div className="dropDownNotification profile">
            <ul className="list menu">
              <li ><Link to={"/profilVendor"} style={{color:'black'}}>Profile</Link></li>
              <li><Link to={"/profil"} style={{color:'black'}}>Settings</Link></li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
      {/* <Matches/> */}
      <div className="notification-bar">
      <div className="stadium">
        <p onClick={(e) => {
                      e.preventDefault();
                      setShowMap({
                        nom_store: "stade mohammed V",
                        localisation: "33.58193226110629,-7.647313467311904",
                        });
                    }}
            style={{cursor:'pointer'}}>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ marginRight: "5px", color: "red" }}
          />
          {matchInfo.stadium}
        </p>
      </div>
      <div className="countries">
        {matchInfo.timeRemaining === 0 && (
          <p
            style={{
              marginRight: "10px",
              fontWeight: "bold",
              color: "#008000",
              animation: 'victory-animation 3s ease-in-out infinite'
            }}
          >
            Qualifié
          </p>
        )}
        {/* <img
          src="https://flagcdn.com/40x30/ma.png"
          srcset="https://flagcdn.com/80x60/ma.png 2x,
              https://flagcdn.com/120x90/ma.png 3x"
          width="40"
          height="30"
          alt="Maroc"
          style={{ marginRight: "5px" }}
        /> */}
        <img
          src="https://flagcdn.com/40x30/ma.png"
          srcset="https://flagcdn.com/80x60/ma.png 2x, https://flagcdn.com/120x90/ma.png 3x"
          width="40"
          height="30"
          alt="Maroc"
          style={{
            marginRight: "5px",
            animation: matchInfo.timeRemaining === 0 && matchInfo.scoreA > matchInfo.scoreB ? 'victory-animation 3s ease-in-out infinite' : 'none'
          }}
        />
        {matchInfo.timeRemaining === 0 ? (
          <span
            style={{ fontSize: "20px", color: "#008000", fontWeight: "bold" , animation: 'victory-animation 3s ease-in-out infinite'}}
          >
            {matchInfo.scoreA}
          </span>
        ) : (
          <span style={{ fontSize: "20px" }}>{matchInfo.scoreA}</span>
        )}

        <span style={{ fontWeight: "bold", margin: "5px", fontSize: "18px" }}>
          {" "}
          -{" "}
        </span>
        <span style={{ fontSize: "20px" }}>{matchInfo.scoreB}</span>
        <img
          src="https://flagcdn.com/40x30/be.png"
          srcset="https://flagcdn.com/80x60/be.png 2x,
              https://flagcdn.com/120x90/be.png 3x"
          width="40"
          height="30"
          alt="Belgique"
          style={{ marginLeft: "5px" }}
        />
      </div>

      <div className="timing">
        <p style={{ color: "gray" }}>
          {matchInfo.timeRemaining === 0 ? (
            `Match terminé à ${currentHour}`
          ) : (
            <>
              <p style={{color: "black"}}>
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ marginRight: "5px" }}
                />
                {matchInfo.timeRemaining} sec
              </p>
            </>
          )}
        </p>
      </div>
    </div>
      {showSidebar && <Sidebar links={links} />}
      {showMap && (
          <StorePopup
            store={showMap}
            onClose={() => setShowMap(null)}
          />
        )}
    </>
  );
}
