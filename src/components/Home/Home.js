import React, { useEffect, useState } from 'react'
import Homebg from "../../assests/Landing-page-1.webp"
import Homebgmob from "../../assests/mobback.webp"
import thomso from "../../assests/thomso.webp"
import Belowthomso from "../../assests/below-thomso.webp"
import singers from "../../assests/newsinger.webp"
import singersmob from "../../assests/newsingermob.webp"
import axios from "axios";
import "./Home.scss"
import Navbar from '../EventsNavbar/Eventsnavbar'
import Footer from '../Navbar/WebNavbarNew'
import { Link, useNavigate } from "react-router-dom"
import { customEvent } from '../../utils/analyticsHelper';
import Thomso from "../../assests/thomso-unscreen.gif"
import Attractions from './Attractions'

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
      {/* <img src={Thomso} alt="loading..." className='thomso'/> */}
      <img src={Belowthomso} alt="" className='b-thomso' />


      {localStorage.getItem('token') ?
       (<div  style={{ margin: "0 auto",display:"flex",gap:"3vw" }}><Link to='/profile'>
        <button className='register'>PROFILE</button>
      </Link>
      <Link to='/events'>
        <button className='Explore' onClick={() => customEvent("Explore Events Btn","user","From Home page to events", 1)}>Explore Events</button>
      </Link></div>)
      :
       (<div style={{ margin: "0 auto",display:"flex",gap:"3vw" }}>
        <Link to='/register'>
        <button className='register' onClick={() => customEvent("REGISTER NOW! Btn","user","From Home page to registeration", 1)}>REGISTER NOW!</button>
      </Link>
        <Link to='/events'>
        <button className='Explore'>Explore Events</button>
      </Link>
      </div>)}
      <div className='home-text-para'>
        <p>Welcome to <span className='blue-thomso'>Thomso’23</span> - the 40th edition of our grand cultural extravaganza and <span className='yellow-thomso'>the annual cultural festival of IIT Roorkee!</span></p>
        <p>Thomso is not merely a festival; it's an experience of unparalleled grandeur where talents converge, creativity flourishes, and joy knows no bounds.</p>
        <p>This year, we proudly present 'An Eclectic Elysia' as our theme - a concept that encapsulates perfect happiness derived from a broad and diverse range of sources. Thomso’23 is an embodiment of this very theme. It celebrates the rich tapestry of human expression and culture, aiming to mesmerize you with a blend of cosmic charm and vibrant human vitality.</p>
        <p>Thomso is a journey where the mundane is left behind, and each moment is a new adventure waiting to unfold.</p>
        <p>As we bring together music, dance, drama, art, and more, we invite you to escape the monotony of daily life and dive into a world filled with wonder and fascination. At Thomso’23, every corner is a stage, every participant is a star, and every spectator is an enthusiast.</p>
        </div>

      <img src={singers} alt="" className='singers' />
      <img src={singersmob} alt="" className='singersmob' />
      <Attractions />
      <Footer />
    </div>
  )
}

export default Home