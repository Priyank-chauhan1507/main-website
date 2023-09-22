import React from "react";
import "./mobfooter.css";
import {Link} from "react-router-dom";
import Logo from "../../assests/Logo.png";
import Email from "../../assests/Email.png";
import Phone from "../../assests/Phone.png";
import Facebook from "../../assests/Facebook.png";
import Instagram from "../../assests/Instagram.png";
import Twitter from "../../assests/Twitter.png";
import LinkedIn from "../../assests/LinkedIn.png";
import Youtube from "../../assests/Youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="div1">
        <img className="mob-footer-logo" src={Logo} alt="Thomso Logo" />

        <div className="direction">
        <h3 className="heading">
          <Link to="https://www.google.com/maps/place/Multi+Activity+Center+(MAC)/@29.8702051,77.8936357,17z/data=!4m14!1m7!3m6!1s0x390eb3648480a0c1:0x8f866617d941cb4b!2sMulti+Activity+Center+(MAC)!8m2!3d29.8702005!4d77.8962106!16s%2Fg%2F11bwq93s22!3m5!1s0x390eb3648480a0c1:0x8f866617d941cb4b!8m2!3d29.8702005!4d77.8962106!16s%2Fg%2F11bwq93s22?entry=ttu" target="_blank">
          Get Direction
          </Link>
          </h3>
          <p>
            Thomso Office Multi Activity Centre Indian Institue of Technology,
            Roorkee 247667
          </p>
        </div>

        <div className="contact">
          <h3 className="heading">Contact Us</h3>

          <div className="mail connect para1">
            <a href="mailto:tech@thomso.in">
              <img src={Email} alt="Mail" />
              <span>tech@thomso.in</span>
            </a>
          </div>

          <div className="mail connect para2">
            <a href="mailto:pranav.thomso@gmail.com">
              <img src={Email} alt="Mail" />
              <span>pramod.thomso@gmail.com</span>
            </a>
          </div>

          

          <div className="phone connect para4">
            <a href="tel:+917081537653">
              <img src={Phone} alt="Call" />
              <span>7081537653 (Jolly)</span>
            </a>
          </div>
          <div className="phone connect para3">
            <a href="tel:+919205915692">
              <img src={Phone} alt="Call" />
              <span>9205915692 (Kartikey)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="div2">
        <hr />
        <div className="social-links">
          <div className="link">
            <a href="https://www.facebook.com/thomsoiitroorkee" target="_blank">
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>
          <div className="link">
            <a href="https://www.instagram.com/thomso.iitr/" target="_blank"> 
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
          {/* <div className="link">
            <a href="https://twitter.com/Thomso_IITR" target="_blank">
              <img src={Twitter} alt="Twitter" />
            </a>
          </div> */}
          <div className="link">
            <a href="https://www.linkedin.com/company/thomso-official/mycompany/" target="_blank">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <div className="link">
            <a href="https://www.youtube.com/@iitrthomso" target="_blank">
              <img src={Youtube} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
