import React from 'react'
import "./ContactUs.css"
import Phone from "../../../assests/phoneMUN.png";
import Mail from "../../../assests/mailMUN.png";
import Logo from "../../../assests/LOGOMUN.svg";
import fb from "../../../assests/fbMUN.svg";
import ig from "../../../assests/igMUN.svg";
import X from "../../../assests/XMUN.svg";
import yt from "../../../assests/ytMUN.svg";
function ContactUs() {
  return (
    <div className="MUN-bottom">

      <div className="ContactUsMUN">
        <div className="heading-contact">
            CONTACT US
        </div>
        <div className="detailsContact">
            <div className="contact1MUN">
            <div className="NameContact">
                Avnish 
            </div>
            <div className="phoneContact">
                <img src={Phone} alt="" /> &nbsp; &nbsp; &nbsp;
                +91 9451584872
            </div>
            {/* <div className="phoneContact">
                <img src={Mail} alt="" /> &nbsp; &nbsp; &nbsp;
                alok_k@iitr.ac.in
            </div> */}
            </div>
            <div className="contact2MUN">
            <div className="NameContact">
                Kanwar Anmol
            </div>
            <div className="phoneContact">
                <img src={Phone} alt="" /> &nbsp; &nbsp; &nbsp;
                +91 7347346875
            </div>
            
            {/* <div className="phoneContact">
                <img src={Mail} alt="" /> &nbsp; &nbsp; &nbsp;
                alok_k@iitr.ac.in
            </div> */}
            </div>
            <div className="contact3MUN">
            <div className="NameContact">
                Soham Parolia
            </div>
            <div className="phoneContact">
                <img src={Phone} alt="" /> &nbsp; &nbsp; &nbsp;
                +91 9920150290
            </div>
            
            {/* <div className="phoneContact">
                <img src={Mail} alt="" /> &nbsp; &nbsp; &nbsp;
                alok_k@iitr.ac.in
            </div> */}
            </div>
            
        </div>
      </div>

        <img src={Logo} className="LogoMUN" alt="" />

        <div className="DirectionsMUN">
            <div className="directionsHeading">
                Get Directions 
            </div>
            <div className="directionElements">
                <div className="directionElement">Thomso Office</div>       
                <div className="directionElement">Multi Activity Centre</div>       
                <div className="directionElement">Indian Institute of Technology</div>       
                <div className="directionElement">Roorkee, 247543</div>       
            </div>
        </div>

        <div className="socialmediaMUN">
            <a href="https://www.facebook.com/thomsoiitroorkee"><img src={fb} alt="" /></a>
            <a href="https://www.instagram.com/thomso.iitr/"><img src={ig} alt="" /></a>
            <a href="https://twitter.com/Thomso_IITR"><img src={X} alt="" /></a>
            <a href="https://www.youtube.com/@iitrthomso"><img src={yt} alt="" /></a>
        </div>




    </div>
  )
}

export default ContactUs
