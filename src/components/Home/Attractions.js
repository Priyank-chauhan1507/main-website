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
    console.log(response.data);
    setData(response.data);
    setNewData(response.data);
  };
  useEffect(() => {
    GetData();
  }, []);
  console.log(Data);
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
                width={177}
                height={193}
              />
            );
          })}
        <a href="/events">
          <div className="exploreMore">Explore more...</div>
        </a>
      </div>
    </div>
  );
}
