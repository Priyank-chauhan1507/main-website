import React from 'react'
import Homebg from "../../assests/Landing-page-1.webp"
import thomso from "../../assests/thomso.webp"
import singers from "../../assests/singers.webp"
import singersmob from "../../assests/singersmob.webp"
import "./Home.scss"
import Navbar from '../EventsNavbar/Eventsnavbar'
import {Link, useNavigate} from "react-router-dom"

function Home() {
  const navigate=useNavigate();
  return (
    <div className='home'>
        <img src={Homebg}  className='homebg'
        alt="" />
        <Navbar color="transparent"/>
        <img src={thomso} alt="" className='thomso'/>
        {localStorage.getItem('token') ? ( <Link style={{margin:"0 auto"}} to='/profile'>
      <button className='register'>PROFILE</button>
      </Link>) : (<Link  style={{margin:"0 auto"}} to='/register'>
      <button className='register'>REGISTER NOW!</button>
      </Link>)}
        <img src={singers} alt="" className='singers'/>
        <img src={singersmob} alt="" className='singersmob'/>
    </div>
  )
}

export default Home