import React, {useState ,useEffect} from 'react'
import Carousel from 'react-spring-3d-carousel';
// import { v4 as uuidv4 } from "uuid";
// import { config } from "react-spring";
import Committee from "../../../assests/CommitteeMUN.png";
import UNGA from "../../../assests/UNGAmob.png";
import Arrow from "../../../assests/ArrowMUN.png";
// import UNGA from "../../../assests/UNGAmob.png";
// import UNGA from "../../../assests/UNGAmob.png";

import "./Committee.css"
// import "./App.css"

const App = () => {

 

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
        <button className="carouselcontentbtn">
            <p className="carouselcontentpara">More Info</p> 
            <img src={Arrow} className="" alt="" />
        </button>

        </div>

      </div> 
    },
    {
      key: 2,
      content: 
      <div className="carouselcontent">
        <img src={UNGA} className='carouselcontentimg' alt="" />
        <div className="MUNcarousel">

        <div className="carouselcontenttext">
            UNITED NATIONS <br />
            GENERAL ASSEMBLY <br />
            (UNGA)
        </div>
        <button className="carouselcontentbtn">
            <p className="carouselcontentpara">More Info</p> 
            <img src={Arrow} className="" alt="" />
        </button>

        </div>

      </div>
    },
    {
      key: 3,
      content: 
      <div className="carouselcontent">
        <img src={UNGA} className='carouselcontentimg' alt="" />
        <div className="MUNcarousel">

        <div className="carouselcontenttext">
            UNITED NATIONS <br />
            GENERAL ASSEMBLY <br />
            (UNGA)
        </div>
        <button className="carouselcontentbtn">
            <p className="carouselcontentpara">More Info</p> 
            <img src={Arrow} className="" alt="" />
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
        // showNavigation={showArrows}
        // animationConfig={config.gentle   }
      />
      </div>
    </div>
  )
}

export default App

