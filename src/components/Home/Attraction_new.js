import React, { useEffect } from "react";
import "./attractions.css";
import { useState } from "react";
import axios from "axios";
import Apocalypse from "../../assests/Apocalypse7.svg";
import Major_Attractions from "../../assests/MAJOR_ATTRACTIONS.svg"

export default function Attraction_new() {
  // const [Data, setData] = useState(Array.from({ length: 8 }));
  const [btn1,setbtn1]=useState(false);
  const [btn2,setbtn2]=useState(false);
  const [btn3,setbtn3]=useState(false);
  const [btn4,setbtn4]=useState(false);
  const [Data, setData] = useState([]);
  const [NewData, setNewData] = useState([]);

  const GetData = async () => {
    const response = await axios.get(`/apiV1/event?status=true&is_zonal=`);
    // console.log(response.data);
    setData(response.data);
    setNewData(response.data);
  };
  useEffect(() => {
    GetData();
  }, []);
  // console.log(Data);
  return (
    <div className="majorAttractionsContainer">
      <div className="textContainer">
        <h1 className="headingBox"><img src={Major_Attractions} id="major_attractions_text" alt="" /></h1>
        <div className="subtitleBox">
          <ul>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "EVENTS"
                );
                setNewData(filteredData);
                setbtn1(!btn1);
                setbtn2(false);
                setbtn3(false);
                setbtn4(false);
              }}
            >
              <button className={!btn1?"home-attraction-btn":"home-attraction-btn-active"}>EVENTS</button>
            </li>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "GAMING"
                );
                setNewData(filteredData);
                setbtn2(!btn2);
                setbtn1(false);
                setbtn3(false);
                setbtn4(false);
              }}
            >
              <button className={!btn2?"home-attraction-btn":"home-attraction-btn-active"}>GAMES</button>
            </li>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "WORKSHOPS"
                );
                setNewData(filteredData);
                setbtn3(!btn3);
                setbtn2(false);
                setbtn1(false);
                setbtn4(false);
              }}
            >
              <button className={!btn3?"home-attraction-btn":"home-attraction-btn-active"}>WORKSHOPS</button>
            </li>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "CARNIVAL"
                );
                setNewData(filteredData);
                setbtn4(!btn4);
                setbtn2(false);
                setbtn3(false);
                setbtn1(false);
              }}
            >
              <button className={!btn4?"home-attraction-btn":"home-attraction-btn-active"}>CARNIVAL</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="imagesBox">
        {NewData &&
          NewData.slice(0, 7).map(({ id, image }) => {
            return (
              <img
                key={id}
                src={image === "" ? Apocalypse : image}
                alt="hello"
                width={175}
                height={190}
                style={{gap:"3rem"}}
              />
            );
          })}
        <a href="/events">
          <div className="exploreMore"><span style={{
            width:'7.75rem',
             color: "#2a2a2a",
             textAlign: "center",
             fontFamily: "Comic Neue",
             fontSize: "1.5rem",
             fontStyle: "normal",
             fontWeight: "700",
             lineHeight: "normal",
             textWrap: "wrap",
          }}>Explore more...</span></div>
        </a>
      </div>
    </div>
  );
}
