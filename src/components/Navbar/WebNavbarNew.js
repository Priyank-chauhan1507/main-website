import React from "react";
import "./WebNavbarNew.css";
import logo from "../../assests/logo.svg";
import background from "../../assests/back.webp";
import facebook from "../../assests/facebook.svg";
import insta from "../../assests/instagram.svg";
import x from "../../assests/x.svg";
import youtube from "../../assests/youtube.svg";
import Footer from "../Footer/Mobfooter";

const WebNavbarNew = () => {
  return (
    <>
      {/* <img src={background} alt="background" style={{width:"100vw",height:"340px",zIndex:"100",overflowY:'hidden'}}/> */}
      <Footer className='mob-foot'/>
      <div className="webNavbarMain">
        <div className="webNavbarLeft">
          <div className="webNavbarLeft1">Contact us</div>
          <div className="webNavbarLeft2">
            <div>Pramod</div>
            <div>9694627622</div>
          </div>
          <div className="webNavbarLeft3">
            <div>Jolly</div>
            <div> 7081537653</div>
          </div>
        </div>
        <div className="webNavbarMiddle">
          <div className="webNavbarMiddle1">
            <img src={logo} alt="logo" />
          </div>
          <div className="webNavbarMiddle2">
            <a href="https://www.facebook.com/thomsoiitroorkee">
              <img
                src={facebook}
                alt="facebook"
                style={{ cursor: "pointer" }}
              />
            </a>
            <a href="https://www.instagram.com/thomso.iitr/">
              <img src={insta} alt="insta" style={{ cursor: "pointer" }} />
            </a>
            <a href="https://twitter.com/Thomso_IITR">
              <img src={x} alt="x" style={{ cursor: "pointer" }} />
            </a>
            <a href="https://www.youtube.com/@iitrthomso">
              <img src={youtube} alt="youtube" style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
        <div className="webNavbarRight">
          <div className="webNavbarRight1">Get Directions</div>
          <div className="webNavbarRight2">
            <div>Thomso Office</div>
            <div>Multi Activity Centre</div>
            <div>Indian Institute of Technology</div>
            <div>Roorkee, 247543</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebNavbarNew;
