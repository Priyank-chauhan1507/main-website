import React from 'react'
import './Judges.css'
import hero1 from "../../../assests/hero1.webp"

function Judges() {
  return (
    <div className='judges-container'>
        <h1 className='head-judge'>EXECUTIVE JUDGES</h1>
        <div className="judge-box-cont">
            <div className="judges-cont-1">
                <img src={hero1} className="hero1" alt="" />
                <div className="jelement1">SHANKAR TRIPATHI</div>
                <div className="jelement2">CHAIR OF AIPPM</div>
            </div>
            <div className="judges-cont-2">
                <img src={hero1} className="hero1" alt="" />
                <div className="jelement1">SHANKAR TRIPATHI</div>
                <div className="jelement2">CHAIR OF AIPPM</div>
            </div>
            <div className="judges-cont-3">
                <img src={hero1} className="hero1" alt="" />
                <div className="jelement1">SHANKAR TRIPATHI</div>
                <div className="jelement2">CHAIR OF AIPPM</div>
            </div>
        </div>
    </div>
  )
}

export default Judges