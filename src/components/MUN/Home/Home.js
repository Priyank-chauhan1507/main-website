import React from 'react'
import "./Home.css"
import MUNTop from "../../../assests/MUN-Top.webp";
import BG from "../../../assests/BGMUN.webp";
import BG_mob from "../../../assests/mun_mob.webp";
import Navbar from "../../../components/EventsNavbar/Eventsnavbar";
import Judges from '../Judges/Judges'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'
import Prizes from "../../../assests/PrizesWorth.png";

function Home() {
  return (
    <div className="MUN-bg">
      <img src={BG} className="MUN-Bg" alt="" />
      <img src={BG_mob} className="MUN-Bg mun_mob_bg" alt="" />
      <Navbar color="transparent"/>
        <div className="top-MUN-img">
          <img src={MUNTop} alt="" className='iitr_mun'/>
        </div>
        <div className="registerNowBtn">
          <button className="registerNowBtnClick">
            Registser Now
          </button>
        </div>
        <div className="prizesWorth">
          <div className="prizesWorthDiv">
          <img src={Prizes} alt="" className="prizesWorth1" />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed quisque auctor suspendisse tortor, risus. Natoque aliquet phasellus orci et a ut justo quis. Consequat arcu aliquam consectetur adipiscing cras ultricies ornare nec. Vulputate venenatis, blandit blandit
        </div>
        <Judges />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home