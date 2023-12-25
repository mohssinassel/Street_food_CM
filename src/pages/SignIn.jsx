import backgroundImage from "/images/background1.png"; // Adjust the path based on your project structure
import "../styles/SignIn.css";
import { useState } from "react";
import {
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLock,
  FaMailBulk,
  FaPersonBooth,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { motion } from 'framer-motion';
export default function SignIn() {
  // const logregBox= document.querySelector(".logreg-box");
  // const loginLink = document.querySelector('.login-link');
  // const registerLink = document.querySelector('.register-link');

  // registerLink.addEventListener('click', ()=> {
  //     logregBox.classList.add('active');
  // })
  // loginLink.addEventListener('click', ()=> {
  //     logregBox.classList.remove('active');
  // })
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleSignInClick = () => {
    setIsRegisterActive(false);
  };
  return (
    <>
      <div className="background"></div>
      <div className="signInBody">
        <div className="content">
          <motion.div
          initial={{ opacity: 0, y: 50 }} // Animation de départ : invisible et légèrement décalé vers le bas
          animate={{ opacity: 1, y: 0 }} // Animation à l'affichage : devenir visible et revenir à sa position initiale
          transition={{ duration: 4, ease: 'easeInOut' }} // Durée et type de transition
          >
          <div className="text-sci" style={{ opacity: 0, animation: 'fadeIn 1s forwards' }}>
          
            <h2 style={{ color: "white" }}>Welcome !</h2>
            <p style={{ color: "white" }}>
              Your favorite morrocan street food is over here.
              <br />
              Sign In and get today's discount.
            </p>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
            
          </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 0 }} // Animation de départ : invisible et légèrement décalé vers le bas
          animate={{ opacity: 1, y: 0 }} // Animation à l'affichage : devenir visible et revenir à sa position initiale
          transition={{ duration: 4, ease: 'easeInOut' }} // Durée et type de transition
          >
        <div className={`logreg-box ${isRegisterActive ? "active" : ""}`}>
          <div className="form-box login">
            <form>
              <h2 style={{ color: "white" }}>Sign In</h2>
              <div className="input-box">
                <span className="icon">
                  <FaEnvelope />
                </span>
                <input type="email" name="email" id="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaLock />
                </span>
                <input type="password" name="password" id="password" required />
                <label>Password</label>
              </div>
              <div className="remenber-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password ?</a>
              </div>
              <button type="submit" className="btnn">
                Sign In
              </button>
              <div className="login-register">
                <p style={{ color: "white", fontSize: "14px" }}>
                  {isRegisterActive
                    ? "Already have an account "
                    : "Don't have an account "}
                  <a
                    href="#"
                    onClick={
                      isRegisterActive ? handleSignInClick : handleRegisterClick
                    }
                  >
                    {isRegisterActive ? "Sign In" : "Sign Up"}
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="form-box register">
            <form>
              <h2 style={{ color: "white" }}>Sign Up</h2>
              <div className="input-box">
                <span className="icon">
                  <FaUser />
                </span>
                <input type="text" name="text" id="text" required />
                <label>Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaEnvelope />
                </span>
                <input type="email" name="email" id="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaLock />
                </span>
                <input type="password" name="password" id="password" required />
                <label>Password</label>
              </div>
              <div className="remenber-forgot">
                <label>
                  <input type="checkbox" />I agree to the terms & conditions
                </label>
              </div>
              <button type="submit" className="btnn">
                Sign Up
              </button>
              <div className="login-register">
                <p style={{ color: "white", fontSize: "14px" }}>
                  Already have an account ?
                  <a
                    href="#"
                    className="register-link"
                    onClick={handleSignInClick}
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        </motion.div>
      </div>
    </>
  );
}
