import React, { useEffect } from "react";
import "./attractions.css";
import { useState } from "react";
import axios from "axios";
import Apocalypse from "../../assests/Apocalypse7.svg";

export default function Attractions() {
  // const [Data, setData] = useState(Array.from({ length: 8 }));
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
        <h1 className="headingBox">MAJOR ATTRACTIONS</h1>
        <div className="subtitleBox">
          <ul>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "EVENTS"
                );
                setNewData(filteredData);
              }}
            >
              EVENTS
            </li>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "GAMING"
                );
                setNewData(filteredData);
              }}
            >
              GAMES
            </li>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "WORKSHOPS"
                );
                setNewData(filteredData);
              }}
            >
              WORKSHOPS
            </li>
            <li
              onClick={() => {
                const filteredData = Data.filter(
                  (items) => items.category.name === "CARNIVAL"
                );
                setNewData(filteredData);
              }}
            >
              CARNIVAL
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
