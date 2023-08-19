import React from 'react'
import "./WebNavbarNew.css"
import logo from "../../assests/logo.svg"
import background from "../../assests/back.webp"
import facebook from "../../assests/facebook.svg"
import insta from "../../assests/instagram.svg"
import x from "../../assests/x.svg"
import youtube from "../../assests/youtube.svg"

const WebNavbarNew = () => {
  return (
    <>
    <img src={background} alt="background" style={{width:"100vw",height:"340px"}}/>
<div className='webNavbarMain'>
    <div className='webNavbarLeft'>
        <div className='webNavbarLeft1'>Contact us</div>
        <div className='webNavbarLeft2'>
            <div>Dhwaj Gupta</div>
            <div>7339748149</div>
        </div>
        <div className='webNavbarLeft3'>
        <div>Dhwaj Gupta</div>
            <div>7339748149</div>
        </div>
    </div>
    <div className='webNavbarMiddle'>
        <div className='webNavbarMiddle1'><img src={logo} alt="logo"/></div>
        <div className='webNavbarMiddle2'>
          <img src={facebook} alt="facebook" style={{cursor:"pointer"}}/>
          <img src={insta} alt="insta" style={{cursor:"pointer"}}/>
          <img src={x} alt="x" style={{cursor:"pointer"}}/>
          <img src={youtube} alt="youtube" style={{cursor:"pointer"}}/>
        </div>
    </div>
    <div className='webNavbarRight'>
        <div className='webNavbarRight1'>Get Directions</div>
        <div className='webNavbarRight2'>
            <div>Thomso Office</div>
            <div>Multi Activity Centre</div>
            <div>Indian Institute of Technology</div>
            <div>Roorkee, 247543</div>
        </div>
    </div>
</div>
    </>
  )
}

export default WebNavbarNew