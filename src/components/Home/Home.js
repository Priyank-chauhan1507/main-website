import React, { useEffect, useState } from 'react'
import Homebg from "../../assests/Landing-page-1.webp"
import Homebgmob from "../../assests/mobback.webp"
import thomso from "../../assests/thomso.webp"
import singers from "../../assests/newsinger.webp"
import singersmob from "../../assests/newsingermob.webp"
import axios from "axios";
import "./Home.scss"
import Navbar from '../EventsNavbar/Eventsnavbar'
import Footer from '../Navbar/WebNavbarNew'
import { Link, useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  const [user, setuser] = useState({})
  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    try {
      axios
        .get(`/apiV1/current_user_participant`)
        .then((res) => {
          setuser(res.data);
          localStorage.setItem("user_id", res.data?.user_id);
          localStorage.setItem("id", res.data?.id);
          console.log("data", res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status == 401) {
            if (localStorage.getItem("token")) {
              localStorage.removeItem("token");
              localStorage.removeItem("user_id");
              window.location.pathname = "/";
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='home'>

      <img src={Homebg} id="homebg1" className='homebg' alt="" />
      <img src={Homebgmob} id="homebg2" className='homebg' alt="" />

      <Navbar color="transparent" data={user} />

      <img src={thomso} alt="" className='thomso' />
      
      {localStorage.getItem('token') ?
       (<div  style={{ margin: "0 auto",display:"flex",gap:"3vw" }}><Link to='/profile'>
        <button className='register'>PROFILE</button>
      </Link>
      <Link to='/eventslist'>
        <button className='Explore'>Explore Events</button>
      </Link></div>) 
      :
       (<div style={{ margin: "0 auto",display:"flex",gap:"3vw" }}>
        <Link to='/register'>
        <button className='register'>REGISTER NOW!</button>
      </Link>
        <Link to='/eventslist'>
        <button className='Explore'>Explore Events</button>
      </Link>
      </div>)}

      <img src={singers} alt="" className='singers' />
      <img src={singersmob} alt="" className='singersmob' />

      <Footer />
    </div>
  )
}

export default Home