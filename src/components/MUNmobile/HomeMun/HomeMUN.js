import React from 'react'
import BG from "../../../assests/MUNmobileBG.webp";
import MUNTop from "../../../assests/IITRMUN.png";
import Navbar from "../../../components/EventsNavbar/MobEventnavbar";
import Contact from "../../../components/MUNmobile/ContactUs/ContactUs";
import Committee from "../../../components/MUNmobile/Committee/Committee";
import Prizes from "../../../assests/PrizesWorth.png";
import "./HomeMUN.css"
import FAQ from '../../MUN/FAQ/FAQ';

function HomeMUN() {
  return (
    <div className="HomeMUN-body">
      <img src={BG} className="HomeMUN-bg" alt="" />
      <Navbar/>
      <div className="top-HomeMUN">
        <img src={MUNTop} className="top-HomeMUN-img" alt="" />
      </div>
      <div className="registerMUNNowBtn">
          <button className="registerMUNNowBtnClick">
            Registser Now
          </button>
      </div>  
      <div className="prizesMUNWorth">
          <div className="prizesMUNWorthDiv">
          <img src={Prizes} alt="" className="prizesMUNWorth1" />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed quisque auctor suspendisse tortor, risus. Natoque aliquet phasellus orci et a ut justo quis. Consequat arcu aliquam consectetur adipiscing cras ultricies ornare nec. Vulputate venenatis, blandit blandit
        </div>
        <FAQ/>
        <Contact/>


<Committee/>

    </div>
  )
}

export default HomeMUN
