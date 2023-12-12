import "../styles/partials/_footer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Footer(){
  return (
      <div className="footer containerr">
          <div className="footer-section">
              <p className="title">Feedit</p>
              <p>Try the moroccan street food, and get the best experience of your life.
                We have a pass fun for you if your national team wins.</p>
              <p>&copy; 2023 | All Rights Reserved</p>
          </div>
          <div className="footer-section">
              <p className="title">Contact Us</p>
              <p>feedit@gmail.com</p>
              <p>+2126 899 766 88</p>
              <p>Morroco</p>
          </div>
          <div className="footer-section">
              <p className="title">Socials</p>
              <p>Facebook</p>
              <p>Instagram</p>
          </div>
      </div>
  )
}