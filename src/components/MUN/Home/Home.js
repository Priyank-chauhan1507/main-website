import React from 'react'
import "./Home.css"
import MUNTop from "../../../assests/MUN-Top.webp";
import BG from "../../../assests/BGMUN.webp";
import Navbar from "../../../components/EventsNavbar/Eventsnavbar";
import Judges from '../Judges/Judges'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div className="MUN-bg">
      <img src={BG} className="MUN-Bg" alt="" />
      <Navbar/>
        <div className="top-MUN-img">
          <img src={MUNTop} alt="" />
        </div>
        <div className="registerNowBtn">
          <button className="registerNowBtnClick">
            Registser Now
          </button>
        </div>
        <Judges />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home