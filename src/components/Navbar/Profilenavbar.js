import React from 'react'
import "./ProfilenavbarStyle.css"
import logo from "../../assests/logo.svg";
import lastimg from "../../assests/lastimg.png";
import Medianav0 from './Medianav0';
import {Link} from 'react-router-dom'
export default function Profilenavbar() {
  return (
    <div>
      <div className="navbar-container-0">
        <div className="navbar-img-0">
          <Link to='/'>
          <img src={logo} alt="" />
          </Link>
          </div>
        <div className="navbar-container-02">
          <div className="navbar-list-0">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Why visit Thomso?</a></li>
              <li><a href="/">Zonals</a></li>
              <li><a href="/">MUN</a></li>
              <li><a href="/">Sponsors</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul></div>
          <div className="navbar-end-img-0"><img src={lastimg} alt="" /></div>
        </div>
      </div>
      <Medianav0 />
      
    </div>
  )
}
