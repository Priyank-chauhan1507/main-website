import React from 'react'
import Homebg from "../../assests/Landing-page.webp"
import thomso from "../../assests/thomso.webp"
import singers from "../../assests/singers.webp"
import singersmob from "../../assests/singersmob.webp"
import "./Home.scss"
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
    <div className='home'>
        <img src={Homebg}  className='homebg'
        alt="" />
        <Navbar/>
        <img src={thomso} alt="" className='thomso'/>
        <button className='register'>Register Now!</button>
        <img src={singers} alt="" className='singers'/>
        <img src={singersmob} alt="" className='singersmob'/>
    </div>
  )
}

export default Home