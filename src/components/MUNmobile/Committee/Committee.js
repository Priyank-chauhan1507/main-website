import React, {useState ,useEffect} from 'react'
import Carousel from 'react-spring-3d-carousel';
import Icon from 'react-icons';
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
// import mun1 from "../../../assests/MUNImg1.png";
import mun2 from "../../../assests/parmob.png";
import mun3 from "../../../assests/flagmob.png";
// import { v4 as uuidv4 } from "uuid";
// import { config } from "react-spring";
import Committee from "../../../assests/CommitteeMUN.png";
import UNGA from "../../../assests/UNGAmob.png";
import Arrow from "../../../assests/ArrowMUN.png";
// import UNGA from "../../../assests/UNGAmob.png";
// import UNGA from "../../../assests/UNGAmob.png";

import "./Committee.css"
import {useNavigate} from "react-router-dom"
// import "./App.css"

const App = () => {

  
  const navigate = useNavigate();

 

  const slides = [
    {
      key: 1,
      content: 
      <div className="carouselcontent">
        <img src={UNGA} className='carouselcontentimg' alt="" />
        
        <div className="MUNcarousel">

        <div className="carouselcontenttext">
            UNITED NATIONS <br />
            GENERAL ASSEMBLY <br />
            (UNGA)
        </div>
        <button className="carouselcontentbtn" onClick={()=>navigate("/muninfo_page1")}>
            <p className="carouselcontentpara">More Info</p> 
            <img src={Arrow} className="infoarrow" alt="" />
        </button>

        </div>

      </div> 
    },
    {
      key: 2,
      content: 
      <div className="carouselcontent">
        <img src={mun2} className='carouselcontentimg' alt="" />
        <div className="MUNcarousel">

        <div className="carouselcontenttext">
             ALL INDIA POLITICAL<br />
            PARTY MEET <br />
            (AIPPM)
        </div>
        <button className="carouselcontentbtn" onClick={()=>navigate("/muninfo_page2")}>
            <p className="carouselcontentpara">More Info</p> 
            <img src={Arrow} className="infoarrow" alt="" />
        </button>
      

        </div>

      </div>
    },
    {
      key: 3,
      content: 
      <div className="carouselcontent">
        <img src={mun3} className='carouselcontentimg' alt="" />
        <div className="MUNcarousel">

        <div className="carouselcontenttext">
            INDIAN WAR CABINET <br />
            (HISTORIC COMMITTEE) 
        </div>
        <button className="carouselcontentbtn" onClick={()=>navigate("/muninfo_page3")}>
            <p className="carouselcontentpara">More Info</p> 
            <img src={Arrow} className="infoarrow" alt="" />
        </button>


        </div>

      </div>
    }
  ]; 

  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  // const [time, setTime] = useState(1);
  const [cards] = useState(table);

  var id = 0;

  useEffect(() => {
    setOffsetRadius(2);
    setShowArrows(false);
  }, [2, false]);

  
//  setInterval(() => {
//     setTime(time+1);
//  }, 3000);

//  useEffect(() => {
//   setGoToSlide(time)
//   if(time === 10){
//     setTime(1)
//   }
// }, [time]);
 


// console.log(time);

  return (
    <div>
      <div className="CarouselCommittee" 
    //   style={{height: "50vh", width: "30vw"}}
      >
        
      <Carousel
      style={{height: "60vh"}}

        slides={cards}
        goToSlide={goToSlide}
        goToSlideDelay={20000000000}
        offsetRadius={offsetRadius}
        showNavigation={true}
        plugins={[
          {
            options: {
              arrowLeft: <button><BsFillArrowLeftCircleFill/></button>,
              arrowLeftDisabled:<button><BsFillArrowLeftCircleFill/></button>,
              arrowRight: <button><BsFillArrowRightCircleFill/></button>,
              arrowRightDisabled: <button><BsFillArrowRightCircleFill/></button>,
              addArrowClickHandler: true,
            }
          }
        ]}
        // animationConfig={config.gentle   }
      />


{/* <BsFillArrowLeftCircleFill className='left-arrow-mun-car'/> */}
      </div>
    </div>
  )
}


export default App

