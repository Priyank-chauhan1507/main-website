import React from 'react'
import MoreInfo from '../../../../assests/munbg.webp';
import InfoPage1Img from '../../../../assests/muninfopage3img.webp';
import './Moreinfopage3.css';
import Navbar from "../../../../components/EventsNavbar/Eventsnavbar";
import MobMoreInfo from "../../../../assests/munmobileinfobg.webp";

export default function Moreinfopage1() {
  return (
    <>
    <div className="muninfo_main">
        <div className="mun_nav">
            <Navbar color="transparent"/>
        </div>       
        <div className="infoBg">
            <img src={MoreInfo} className="Bg-image" alt="Bg-image"/> 
            <img src={MobMoreInfo} className="Mob-Bg-image" alt="Mob-Bg-image"/> 
            <div className="irmun">
                <h3> IRMUN / </h3>
                <h3 className='historic'> HISTORIC COMMITTEE</h3>
            </div>
        <div className="info_box3">
            <div className="info_content">
            <div className="info_text">
                <h2 className="info_heading">INDIAN WAR CABINET (HISTORIC COMMITTEE)</h2>
                <p className="muninfo-text">The Indian War Cabinet is a committee within the context of Model United Nations (MUN) simulations. It replicates the decision-making process of India's highest leadership during times of crisis and conflict. Delegates assume the roles of top government officials, including the Prime Minister and Defence Minister, and work together to strategise, plan, and respond to simulated national security and defence challenges. This committee tests delegates' crisis management skills, diplomacy, and their ability to protect their nation's interests in a dynamic and fast-paced environment.
                <br />
                AGENDA: “Bangladesh liberation War 1971”</p>
                <p className="mobilemuninfo-text">The Indian War Cabinet is a committee within the context of Model United Nations (MUN) simulations. It replicates the decision-making process of India's highest leadership during times of crisis and conflict. Delegates assume the roles of top government officials, including the Prime Minister and Defence Minister, and work together to strategise, plan, and respond to simulated national security and defence challenges. This committee tests delegates' crisis management skills, diplomacy, and their ability to protect their nation's interests in a dynamic and fast-paced environment.
                <br />
                AGENDA: “Bangladesh liberation War 1971”</p>
                <div className="portfolio_button">
                <button className='info_button'>PORTFOLIO MATRIX</button>
                </div>
            </div>
            </div>
            <div className="info_img3">
                <div className="mun-infoPageimg3">
                <img  src={InfoPage1Img} className="infoPage3img" alt="infoPage3img"/>
                </div>
                <h3>INDIAN WAR CABINET (HISTORIC COMMITTEE)</h3>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
