import React from 'react'
import Homebg from "../../assests/Landing-page.webp"
import thomso from "../../assests/thomso.webp"
import singers from "../../assests/singers.webp"
import singersmob from "../../assests/singersmob.webp"
import "./Home.scss"
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
import {useNavigate} from "react-router-dom"
function Home() {
  const navigate=useNavigate();
  return (
    <div className='home'>
        <img src={Homebg}  className='homebg'
        alt="" />
        <Navbar/>
        <img src={thomso} alt="" className='thomso'/>
        <button className='register' onClick={() => navigate("registration")}>Register Now!</button>
        <button className='register' onClick={()=>navigate("/registration")}>Register Now!</button>
        <img src={singers} alt="" className='singers'/>
        <img src={singersmob} alt="" className='singersmob'/>
    </div>
  )
}

export default Home