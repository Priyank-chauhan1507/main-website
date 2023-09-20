import React, { useEffect, useState, useRef } from 'react'
import Homebg from "../../assests/main.webp"
import Homebgmob from "../../assests/mobback.webp"
import thomso from "../../assests/thomso.webp"
// import thomso from "../../assests/thomso.svg"
import Belowthomso from "../../assests/below-thomso.webp"
import singers from "../../assests/newsinger.webp"
import singersmob from "../../assests/newsingermob.webp"
import axios from "axios";
import "./Home.scss"
import Navbar from '../EventsNavbar/Eventsnavbar'
import Footer from '../Navbar/WebNavbarNew'
import Themename from '../../assests/themeName.svg'
import About from '../../assests/home2nd.webp'
import Abouttop from '../../assests/abouttop.webp'
import Slidetext from '../../assests/slidetext.svg'
import redback from '../../assests/redback.webp'
import line1 from '../../assests/line_1.svg'
import line2 from '../../assests/line_2.svg'
import line3 from '../../assests/line_3.svg'
import line4 from '../../assests/line_4.svg'

import simg1 from '../../assests/simg1.svg'
import simg2 from '../../assests/simg2.svg'
import simg3 from '../../assests/simg3.svg'
import simg4 from '../../assests/simg4.svg'
import simg5 from '../../assests/simg5.svg'

import pronite from '../../assests/pronite2.svg'
import { Link, useNavigate } from "react-router-dom"
import { customEvent } from '../../utils/analyticsHelper';
import Thomso from "../../assests/thomso-unscreen.gif"

import Attractions from './Attractions'

import mainvideo from '../../assests/thomso.mp4'

import t1 from '../../assests/t1.webp'
import t2 from '../../assests/t2.webp'
import t3 from '../../assests/t3.webp'
import t4 from '../../assests/t4.webp'
import t5 from '../../assests/t5.webp'
import t6 from '../../assests/t6.webp'

import laststrips from '../../assests/laststrips.svg'
import yellow from '../../assests/yellowBack.webp'
import yellowmob from '../../assests/yellowmob.webp'
import blue from '../../assests/blue.webp'

import videoBack from '../../assests/videoBack.webp'


function Home() {



  const mainboxRef = useRef(null);
  const display1Ref = useRef(null);
  const display2Ref = useRef(null);
  const display3Ref = useRef(null);
  const display4Ref = useRef(null);
  const display5Ref = useRef(null);
  const display6Ref = useRef(null);
  const display7Ref = useRef(null);
  const display8Ref = useRef(null);
  const display9Ref = useRef(null);
  const display10Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);




  useEffect(() => {



    const handleScroll = () => {


      const rect = mainboxRef.current?.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementLeft1 = image1Ref.current?.getBoundingClientRect().left;
      const elementLeft2 = image2Ref.current?.getBoundingClientRect().left;
      const elementLeft3 = image3Ref.current?.getBoundingClientRect().left;
      const elementLeft4 = image4Ref.current?.getBoundingClientRect().left;
      const elementLeft5 = image5Ref.current?.getBoundingClientRect().left;
      const scrolly = window.scrollY;


      display1Ref.current.style.opacity = "0";
      display2Ref.current.style.opacity = "0";
      display3Ref.current.style.opacity = "0";
      display4Ref.current.style.opacity = "0";
      display5Ref.current.style.opacity = "0";
      display6Ref.current.style.opacity = "0";
      display7Ref.current.style.opacity = "0";
      display8Ref.current.style.opacity = "0";
      display9Ref.current.style.opacity = "0";
      display10Ref.current.style.opacity = "0";



      if (elementTop <= 0.6*window.innerHeight) {


        // image1Ref.current.style.position = "fixed";
        // image2Ref.current.style.position = "fixed";
        // image3Ref.current.style.position = "fixed";
        // image4Ref.current.style.position = "fixed";
        // image5Ref.current.style.position = "fixed";
        console.log("xx", elementTop)
        if (elementLeft1 < 0.11 * window.innerWidth) {
          image1Ref.current.style.left = `${1.2*window.scrollY - 2.1 * window.innerHeight}px`;
          console.log("x", elementLeft1)
        }
        if (elementLeft2 < 0.23 * window.innerWidth) {
          image2Ref.current.style.left = `${window.scrollY - 1.6 * window.innerHeight}px`;
          console.log("x", elementLeft2)
        }
        if (elementLeft3 > 0.37 * window.innerWidth) {
          image3Ref.current.style.left = `${(-window.scrollY + 2.8 * window.innerHeight)}px`;
          console.log("x", elementLeft3)
        }
        if (elementLeft4 > 0.55 * window.innerWidth) {
          image4Ref.current.style.left = `${(-1.1*window.scrollY + 3.4 * window.innerHeight)}px`;
          console.log("xxx", elementLeft4)
        }
        if (elementLeft5 > 0.75 * window.innerWidth) {
          image5Ref.current.style.left = `${(-window.scrollY + 3.4 * window.innerHeight)}px`;
          console.log("xxx", elementLeft5)
        }


        console.log('Element top touches screen top');
      }




      // if (elementTop > 0 && elementLeft1 > -0.20 * window.innerWidth) {
      //   image1Ref.current.style.left = image1Ref.current.style.left = `${1.35 * window.scrollY - 2.6 * window.innerHeight}px`;
      //   image1Ref.current.style.position = "absolute";
      //   console.log('Element top touches screen top 2');

      // }
      // if (elementTop > 0 && elementLeft2 > -0.20 * window.innerWidth) {
      //   image2Ref.current.style.left = image2Ref.current.style.left = `${1.478 * window.scrollY - 2.6 * window.innerHeight}px`;
      //   image2Ref.current.style.position = "absolute";
      //   console.log('Element top touches screen top 2');

      // }
      // if (elementTop > 0 && elementLeft3 < 1.2 * window.innerWidth) {
      //   image3Ref.current.style.left = `${-window.scrollY + 2.9 * window.innerHeight}px`;
      //   image3Ref.current.style.position = "absolute";
      //   console.log('Element top touches screen top 4');

      // }
      // if (elementTop > 0 && elementLeft4 < 1.2 * window.innerWidth) {
      //   image4Ref.current.style.left = `${-window.scrollY + 3.3 * window.innerHeight}px`;
      //   image4Ref.current.style.position = "absolute";
      //   console.log('Element top touches screen top 4');

      // }
      // if (elementTop > 0 && elementLeft5 < 1.2 * window.innerWidth) {
      //   image5Ref.current.style.left = `${-window.scrollY + 3.3 * window.innerHeight}px`;
      //   image5Ref.current.style.position = "absolute";
      //   console.log('Element top touches screen top 5');

      // }

      if (elementLeft3 < 0.39 * window.innerWidth) {
        display1Ref.current.style.opacity = "1";
        // display1Ref.current.style.position = "fixed";
        display2Ref.current.style.opacity = "1";
        // display2Ref.current.style.position = "fixed";
        display3Ref.current.style.opacity = "1";
        // display3Ref.current.style.position = "fixed";
        display4Ref.current.style.opacity = "1";
        // display4Ref.current.style.position = "fixed";
        display5Ref.current.style.opacity = "1";
        // display5Ref.current.style.position = "fixed";
        display6Ref.current.style.opacity = "1";
        // display6Ref.current.style.position = "fixed";
        display7Ref.current.style.opacity = "1";
        // display7Ref.current.style.position = "fixed";
        display8Ref.current.style.opacity = "1";
        // display8Ref.current.style.position = "fixed";
        display9Ref.current.style.opacity = "1";
        // display9Ref.current.style.position = "fixed";
        display10Ref.current.style.opacity = "1";
        // display10Ref.current.style.position = "fixed";
      }

      if (elementBottom < window.innerHeight) {
        console.log("hello")
        display1Ref.current.style.opacity = "1";
        display1Ref.current.style.position = "absolute";
        display2Ref.current.style.opacity = "1";
        display2Ref.current.style.position = "absolute";
        display3Ref.current.style.opacity = "1";
        display3Ref.current.style.position = "absolute";
        display4Ref.current.style.opacity = "1";
        display4Ref.current.style.position = "absolute";
        display5Ref.current.style.opacity = "1";
        display5Ref.current.style.position = "absolute";
        display6Ref.current.style.opacity = "1";
        display6Ref.current.style.position = "absolute";
        display7Ref.current.style.opacity = "1";
        display7Ref.current.style.position = "absolute";
        display8Ref.current.style.opacity = "1";
        display8Ref.current.style.position = "absolute";
        display9Ref.current.style.opacity = "1";
        display9Ref.current.style.position = "absolute";
        display10Ref.current.style.opacity = "1";
        display10Ref.current.style.position = "absolute";

        image1Ref.current.style.position = "absolute";
        image2Ref.current.style.position = "absolute";
        image3Ref.current.style.position = "absolute";
        image4Ref.current.style.position = "absolute";
        image5Ref.current.style.position = "absolute";

        // display10Ref.current.classList.add("proNites_alt");
        display1Ref.current.classList.add("line_1_alt");
        display2Ref.current.classList.add("line_2_alt");
        display3Ref.current.classList.add("line_3_alt");
        display4Ref.current.classList.add("line_4_alt");
        display5Ref.current.classList.add("sText1_alt");
        display6Ref.current.classList.add("sText2_alt");
        display7Ref.current.classList.add("sText3_alt");
        display8Ref.current.classList.add("sText4_alt");
        display9Ref.current.classList.add("sText5_alt");

        // image1Ref.current.classList.add("simg1_alt");
        // image2Ref.current.classList.add("simg2_alt");
        // image3Ref.current.classList.add("simg3_alt");
        // image4Ref.current.classList.add("simg4_alt");
        // image5Ref.current.classList.add("simg5_alt");

      }

      if (elementBottom > window.innerHeight && elementTop > 0) {
        console.log("great");
        // display10Ref.current.classList.remove("proNites_alt");
        display1Ref.current.classList.remove("line_1_alt");
        display2Ref.current.classList.remove("line_2_alt");
        display3Ref.current.classList.remove("line_3_alt");
        display4Ref.current.classList.remove("line_4_alt");
        display5Ref.current.classList.remove("sText1_alt");
        display6Ref.current.classList.remove("sText2_alt");
        display7Ref.current.classList.remove("sText3_alt");
        display8Ref.current.classList.remove("sText4_alt");
        display9Ref.current.classList.remove("sText5_alt");

        // image1Ref.current.classList.remove("simg1_alt");
        // image2Ref.current.classList.remove("simg2_alt");
        // image3Ref.current.classList.remove("simg3_alt");
        // image4Ref.current.classList.remove("simg4_alt");
        // image5Ref.current.classList.remove("simg5_alt");

      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



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


  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(error => {
          console.error('Failed to play video:', error);
        });
        video.classList.add("vid_alt");
      } else {
        video.pause();
        video.classList.remove("vid_alt");
      }
    }
  };


  return (
    <div className='home'>

      <img src={Homebg} id="homebg1" className='homebg' alt="" />
      <img src={Homebg} id="homebg2" className='homebg' alt="" />

      <Navbar color="transparent" data={user} />

      <img src={thomso} alt="" className='thomso' />

      {/* <img src={Thomso} alt="loading..." className='thomso'/> */}
      <img src={Belowthomso} alt="" className='b-thomso' />



      {localStorage.getItem('token') ?




        (<div className='butHolder' style={{ margin: "0 auto", display: "flex", gap: "3vw" }}><Link to='/profile'>
          <button className='register'>PROFILE</button>
        </Link>
          <Link to='/events'>
            <button className='Explore' onClick={() => customEvent("Explore Events Btn", "user", "From Home page to events", 1)}>Explore Events</button>
          </Link></div>)
        :
        (<div className='butHolder' style={{ margin: "0 auto", display: "flex", gap: "3vw" }}>
          <Link to='/register'>
            <button className='register' onClick={() => customEvent("REGISTER NOW! Btn", "user", "From Home page to registeration", 1)}>REGISTER NOW!</button>
          </Link>
          <Link to='/events'>
            <button className='Explore'>Explore Events</button>
          </Link>
        </div>)}


      <div className='home2nd'>
        <img className='home2ndBack' src={About} alt="about_us" />
        <img className='aboutTop' src={Abouttop} alt="about_us_top" />
        <div className='slider'>
          <img className='aboutTopText1' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText2' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText3' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText4' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText5' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText6' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText7' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText8' src={Slidetext} alt="about_us_top" />
          <img className='aboutTopText9' src={Slidetext} alt="about_us_top" />

        </div>
        <div className='aboutUs'>ABOUT US</div>
        <div className=' aboutUsText'>
          <p>Welcome to <span className='blue-thomso'>Thomso’23</span> - the 40th edition of our grand cultural extravaganza and <span className='yellow-thomso'>the annual cultural festival of IIT Roorkee!</span></p>
          <p>Thomso is not merely a festival; it's an experience of unparalleled grandeur where talents converge, creativity flourishes, and joy knows no bounds.</p>
          <p>This year, we proudly present 'An Eclectic Elysia' as our theme - a concept that encapsulates perfect happiness derived from a broad and diverse range of sources. Thomso’23 is an embodiment of this very theme. It celebrates the rich tapestry of human expression and culture, aiming to mesmerize you with a blend of cosmic charm and vibrant human vitality.</p>
          <p>Thomso is a journey where the mundane is left behind, and each moment is a new adventure waiting to unfold.</p>
          <p>As we bring together music, dance, drama, art, and more, we invite you to escape the monotony of daily life and dive into a world filled with wonder and fascination. At Thomso’23, every corner is a stage, every participant is a star, and every spectator is an enthusiast.</p>
        </div>
      </div>




      <div className={`home3rd`} ref={mainboxRef} >
        {/* <img className='redBack' src={redback} alt="loading"/> */}
        <img style={{width:"100vw"}} className='yellowy' src={yellow} alt="yellow_back"/>

        <div className='proNites' ref={display10Ref} >PRONITES</div>


        <img className='line_1' src={line1} alt="line_1" ref={display1Ref} />
        <img className='line_2' src={line2} alt="line_2" ref={display2Ref} />
        <img className='line_3' src={line3} alt="line_3" ref={display3Ref} />
        <img className='line_4' src={line4} alt="line_4" ref={display4Ref} />

        <img className='simg1' src={simg1} alt="simg1" ref={image1Ref} />
        <img className='simg2' src={simg2} alt="simg2" ref={image2Ref} />
        <img className='simg3' src={simg3} alt="simg3" ref={image3Ref} />
        <img className='simg4' src={simg4} alt="simg4" ref={image4Ref} />
        <img className='simg5' src={simg5} alt="simg5" ref={image5Ref} />

        <div className='sText1' ref={display5Ref}>SONU NIGAM | 2022</div>
        <div className='sText2' ref={display6Ref}>SANAM | 2022</div>
        <div className='sText3' ref={display7Ref}>VOGUE | 2022</div>
        <div className='sText4' ref={display8Ref}>DARSHAN RAWAL | 2022</div>
        <div className='sText5' ref={display9Ref}>JUBIN NAUTIYAL | 2019</div>
      </div>


      <div className='home3rdmob'>
        <img className='yellowmob' src={yellowmob} alt="yellowwwy"/>
        <img className='pronite' src={pronite} alt="pronite" />
      </div>


      <div>
        <Attractions/>
      </div>

   <div className='singersName' style={{position:"relative"}}>
    <img src={blue} alt="load..." className='singBack'/>
    <div className='Asso' >ASSOCIATED CELEBRITIES</div>

      <img src={singers} alt="" className='singers' />
      <img src={singersmob} alt="" className='singersmob' />


   </div>
      


      <div className='vidmain'>
        <img src={videoBack} className='videoBack' alt="lodd..."/>
        <video className='vid' loop onClick={handleVideoClick} ref={videoRef}>
          <source src={mainvideo} type="video/mp4"></source>
        </video>
      </div>

     


      <div className='imggBox'>
        <img src={t1} alt="t__new" className='imgg1' />
        <img src={t2} alt="t__new" className='imgg2' />
        <img src={t3} alt="t__new" className='imgg3' />
        <img src={t4} alt="t__new" className='imgg4' />
        <img src={t5} alt="t__new" className='imgg5' />
        <img src={t6} alt="t__new" className='imgg6' />
      </div>


      <div className='lastDiv'>
        <img src={laststrips} className='lastDivSub' alt="loading..." />
      </div>

      <Footer />
    </div>
  )
}

export default Home