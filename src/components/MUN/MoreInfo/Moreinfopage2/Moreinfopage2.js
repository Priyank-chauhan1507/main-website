import React from 'react'
import MoreInfo from '../../../../assests/munbg.webp';
import InfoPage1Img from '../../../../assests/muninfopage2img.webp';
import './Moreinfopage2.css';
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
                <h3 className='aippm'>  AIPPM</h3>
            </div>
        <div className="info_box2">
            <div className="info_content">
            <div className="info_text">
                <h2 className="info_heading">ALL INDIA POLITICAL PARTY MEET ( AIPPM)</h2>
                <p className="muninfo-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed quisque auctor suspendisse tortor, risus. Natoque aliquet phasellus orci et a ut justo quis. Consequat arcu aliquam consectetur adipiscing cras ultricies ornare nec. Vulputate venenatis, blandit blandit<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed quisque auctor suspendisse tortor, risus. Natoque aliquet phasellus orci et a ut justo quis. Consequat arcu aliquam consectetur adipiscing cras ultricies ornare nec. Vulputate venenatis, blandit blandit</p>
                <p className="mobilemuninfo-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed quisque auctor suspendisse tortor, risus. Natoque aliquet phasellus orci et a ut justo quis. Consequat arcu aliquam consectetur adipiscing cras ultricies ornare nec.</p>
                <div className="portfolio_button">
                <button className='info_button'>PORTFOLIO MATRIX</button>
                </div>
            </div>
            </div>
            <div className="info_img2">
                <div className="mun-infoPage1img1">
                <img  src={InfoPage1Img} className="infoPage1img" alt="infoPage1img"/>
                </div>
                <h3>ALL INDIA POLITICAL PARTY MEET ( AIPPM)</h3>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
