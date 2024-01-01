import React, { useState, useEffect } from "react";
import "../styles/Matches.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";


const Matches = () => {
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

    if (matchInfo.timeRemaining === 70) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreA: 1,
      }));
    } else if (matchInfo.timeRemaining === 50) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreB: 1,
      }));
    } else if (matchInfo.timeRemaining === 30) {
      setMatchInfo((prevMatchInfo) => ({
        ...prevMatchInfo,
        scoreA: 2,
      }));
    }

    if (matchInfo.timeRemaining === 0) {
      clearInterval(timer);
      setShowPopup(true);
    }

    return () => clearInterval(timer);
  }, [matchInfo.timeRemaining]);
  const currentTime = new Date();
  const currentHour = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="notification-bar">
      <div className="stadium">
        <p>
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
            }}
          >
            Qualifié
          </p>
        )}
        <img
          src="https://flagcdn.com/40x30/ma.png"
          srcset="https://flagcdn.com/80x60/ma.png 2x,
              https://flagcdn.com/120x90/ma.png 3x"
          width="40"
          height="30"
          alt="Maroc"
          style={{ marginRight: "5px" }}
        />
        {matchInfo.timeRemaining === 0 ? (
          <span
            style={{ fontSize: "20px", color: "#008000", fontWeight: "bold" }}
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
                {matchInfo.timeRemaining} min
              </p>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Matches;
