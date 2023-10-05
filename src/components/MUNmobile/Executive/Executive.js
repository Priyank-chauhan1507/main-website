  import React, {useState ,useEffect} from 'react'
import Carousel from 'react-spring-3d-carousel';
// import { v4 as uuidv4 } from "uuid";
// import { config } from "react-spring";
import judge1 from "../../../assests/Judge_historic.JPG";
import judge2 from '../../../assests/Aishnit-yadav-Unga-judge.webp'
import judge3 from '../../../assests/AIPPMjudgeresize.webp'

import "./Executive.css"
// import "./App.css"

const App = () => {

 

  const slides = [
    {
      key: 1,
      content: <div className="judge1div">
        <img src={judge1} className="judge1-img j1"alt="1" />
        <div className='judge1-discription1'>LAKSHIT TANDON</div> 
        <div className='judge1-discription'>CHAIR OF HISTORIC COMMITEE</div>

      </div> 
    },
    {
      key: 2,
      content: <div className="judge2div">
        <img src={judge2} className="judge2-img j2" alt="2" />
        <div className='judge1-discription2'>AISHNIT YADAV</div> 
        <div className='judge1-discription'>PRESIDENT OF UNGA</div>
      </div>
    },
    {
      key: 3,
      content: <div className="judge3div">
        <img src={judge3} className="judge3-img j3"alt="3" />
        <div className='judge1-discription3'>RAUNAK UPMANYU</div> 
        <div className='judge1-discription'>CHAIR OF AIPPM</div>
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
        // animationConfig={config.gentle   }
      />
      </div>
    </div>
  )
}

export default App

