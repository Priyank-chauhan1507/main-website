import React from 'react'
import MoreInfo from '../../../../assests/munbg.webp';
import InfoPage1Img from '../../../../assests/muninfopage1.webp';
import './Moreinfopage1.css';
import Navbar from "../../../../components/EventsNavbar/Eventsnavbar";
import MobMoreInfo from "../../../../assests/munmobileinfobg.webp";
import {useNavigate} from "react-router-dom"


export default function Moreinfopage1() {

    const navigate = useNavigate();
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
                <h3 className='unga'> UNGA</h3>
            </div>
        <div className="info_box1">
            <div className="info_content">
            <div className="info_text">
                <h2 className="info_heading">UNITED NATIONS GENERAL ASSEMBLY (UNGA)</h2>
                <p className="muninfo-text"> UNGA is one of the six principal organs of the United Nations, consisting of all 193 member states. It serves as a forum for international diplomacy, where countries come together to discuss and collaborate on global issues. UNGA sessions are held annually in New York, allowing nations to address a wide range of topics, from climate change to human rights, with the aim of fostering cooperation and finding solutions to global challenges.
                <br />
                AGENDA: “Deliberation over unlawful occupation of territory and forced governance with special emphasis on Israel Palestine conflict.”</p>
                <p className="mobilemuninfo-text"> UNGA is one of the six principal organs of the United Nations, consisting of all 193 member states. It serves as a forum for international diplomacy, where countries come together to discuss and collaborate on global issues. UNGA sessions are held annually in New York, allowing nations to address a wide range of topics, from climate change to human rights, with the aim of fostering cooperation and finding solutions to global challenges.
                <br />
                AGENDA: “Deliberation over unlawful occupation of territory and forced governance with special emphasis on Israel Palestine conflict.”</p>
                <div className="portfolio_button">
                <button className='info_button' onClick={()=>window.open("https://docs.google.com/spreadsheets/d/1f_1kJOrr7MSdctuNRdjqVQKhARYkzlbpZeokivqnreA/edit?pli=1#gid=0","_blank")}>PORTFOLIO MATRIX</button>
                </div>
            </div>
            </div>
            <div className="info_img1">
                <div className="mun-infoPage1img1">
                <img  src={InfoPage1Img} className="infoPage1img" alt="infoPage1img"/>
                </div>
                <h3>UNITED NATIONS GENERAL ASSEMBLY (UNGA)</h3>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
