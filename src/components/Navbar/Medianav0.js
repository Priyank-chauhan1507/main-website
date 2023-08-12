import React from 'react'
import "./MedianavStyle.css"
import logo from "../../assests/logo.svg";
import {Link} from 'react-router-dom'
export default function Medianav0() {
  return (
    <div>
          <div className="hamburg">
        <div className="hamburg-logo"><Link to='/'><img src={logo} alt="" /></Link> </div>
        <div className="hamburg-style">
            <div className="spanlist">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
      </div>
    </div>
  )
}
