import React from 'react'
import logo from "../../assests/logo.svg";
import "./Eventsnavbar.css";

function Navbar() {
  return (
    
                <div className="nav-comp">
                    <img className='event-nav-left' src={logo} alt="" />
                    <div className="event-nav-right">
                        <a className='event-nav-right-compo' href="/">Events</a> 
                        <a className='event-nav-right-compo'  href="/">CA Portal</a>   
                        <a className='event-nav-right-compo'  href="/">Zonals</a> 
                        <button className="event-regi-btn">REGISTER</button>
                    </div>
                </div>
            
  )
}

export default Navbar