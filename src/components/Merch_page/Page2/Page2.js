import React, { useState } from "react";
import "./Page2.css";
import lock5 from "../../../assests/lock5.svg";
import Rect1 from "../../../assests/Rect1.webp";
import Rect2 from "../../../assests/Rect2.webp";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Footer from "../../Navbar/WebNavbarNew";
import tshirt3front from "../../../assests/tshirt3front.webp";
import tshirt3back from "../../../assests/tshirt3back.webp";
import tshirt3front2 from "../../../assests/tshirt3front2.webp";
import tshirt3back2 from "../../../assests/tshirt3back2.webp";
import tshirt4front1 from "../../../assests/vibe.webp";
import tshirt4back1 from "../../../assests/white-t-shirts-with-copy-space-gray-background 2.webp";
import tshirt4front2 from "../../../assests/f3.webp";
import tshirt4back2 from "../../../assests/f4.webp";
import tshirt5front1 from "../../../assests/5.webp";
import tshirt5back1 from "../../../assests/5'.webp";
import tshirt5front2 from "../../../assests/black.webp";
import tshirt5front3 from "../../../assests/lavender.webp";
import tshirt5front4 from "../../../assests/Boink Aqua blue or teal whatever.webp";
import tshirt5front5 from "../../../assests/4.webp";
import tshirt5back5 from "../../../assests/4'.webp";
import tshirt6front1 from "../../../assests/orng.webp";
import tshirt6front2 from "../../../assests/sky b.webp";
import tshirt6front3 from "../../../assests/purp.webp";
import tshirt6back from "../../../assests/orng bck .webp";
import tshirt7front from "../../../assests/Lee tee fin frnt.webp";
import tshirt7back from "../../../assests/Lee tee fin bck.webp";

import increment from "../../../assests/increment.svg";
import decrement from "../../../assests/decrement.svg";
import { useParams } from "react-router-dom";

function Page2(props) {
  const { id } = useParams();
  const [Name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setquantity] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [imgIndex, setimgIndex] = useState(1);
  const [selected, setselected] = useState(0);
  const [purchased, setPurchased] = useState([])

  const data = [
    // {
    //   id: 1,
    //   price: 350,
    //   Name: "THOMSO UNISEX TSHIRT",
    //   img: [
    //     {
    //       id: 1,
    //       imgfront: tshirt3front,
    //       imgback: tshirt3back,
    //     },
    //     {
    //       id: 2,
    //       imgfront: tshirt3front2,
    //       imgback: tshirt3back2,
    //     },
    //   ],
    // },
    {
      id: 1,
      price: 350,
      Name: "Feel The Thomso vibe ",
      img: [
        {
          id: 1,
          imgfront: tshirt4front1,
          imgback: tshirt4back1,
        },
        {
          id: 2,
          imgfront: tshirt4front2,
          imgback: tshirt4back2,
        },
      ],
    },
    {
      id: 2,
      price: 350,
      Name: "The Ellyx Tee  ",
      img: [
        {
          id: 1,
          imgfront: tshirt5front1,
          imgback: tshirt5back1,
        },
        {
          id: 2,
          imgfront: tshirt5front2,
          // imgback: tshirt4back2,
        },
        {
          id: 3,
          imgfront: tshirt5front3,
          imgback: tshirt4back2,
        },
        {
          id: 4,
          imgfront: tshirt5front4,
          // imgback: tshirt4back2,
        },
        {
          id: 5,
          imgfront: tshirt5front5,
          imgback: tshirt5back5,
        },
      ],
    },
    {
      id: 3,
      price: 350,
      Name: "The Thomso Tee",
      img: [
        {
          id: 1,
          imgfront: tshirt6front1,
          imgback: tshirt6back,
        },
        {
          id: 2,
          imgfront: tshirt6front2,
          imgback: tshirt6back,
        },
        {
          id: 3,
          imgfront: tshirt6front3,
          imgback: tshirt6back,
        },
      ],
    },
    {
      id: 4,
      price: 350,
      Name: "The Thomso king",
      img: [
        {
          id: 1,
          imgfront: tshirt7front,
          imgback: tshirt7back,
        },
      ],
    },


  ];

  const IncrementFunc = () => {
    let num = quantity;
    num += 1;
    setquantity(num);
  };
  const DecrementFunc = () => {
    if (quantity > 0) {
      let num = quantity;
      num -= 1;
      setquantity(num);
    } else {
      setquantity(0);
    }
  };

  const CreateObject = () => {
    if (quantity === 0 || !color || !size) {
      return console.log("please select every requirement");
    }
    const allDetails = {
      name: Name,
      quantity: quantity,
      color: color,
      size: size,
    };
    console.log(allDetails);
    return allDetails;
  };

  return (
    <div className="page-2-merch">
      <Navbar />
      {data
        .filter((item) => item.id === parseInt(id))
        .map(({ id, Name, price, img }) => {
          return (
            <div className="shirt-container" key={id}>
              <div className="shirt-container1">
                <div className="big-box1">
                  <img
                    src={imgUrl == "" ? img[imgIndex].imgfront : imgUrl}
                    alt=""
                    className="box-img2"
                  />
                </div>
                <div className="big-box2">
                  <img
                    src={img[imgIndex].imgfront}
                    alt=""
                    className="box-img1"
                    onClick={() => setImgUrl(img[imgIndex].imgfront)}
                  />
                  <img
                    src={img[imgIndex].imgback}
                    alt=""
                    className="box-img1"
                    onClick={() => setImgUrl(img[imgIndex].imgback)}
                  />
                  <img src={Rect2} alt="" className="box-img1" />
                </div>
              </div>
              <div className="shirt-container2">
                <div className="tshirt-head">{Name}</div>
                <div className="tshirt-price">
                  <div className="price1">Rs.{price}</div>
                  <div className="price3">Rs. 700</div>
                  <div className="price1-offer">( 50% Off )</div>
                </div>
                <div className="inclu">Inclusive of all taxes</div>
                <hr className="hr1" />
                <div className="color12">
                  <div className="color121">color :</div>
                  <div className="color122">{color}</div>
                </div>
                <div className="colorbox">
                  <div
                    className="colorbox1"
                    onClick={() => {
                      setColor("white");
                      setimgIndex(1);
                    }}
                  ></div>
                  <div
                    className="colorbox2"
                    onClick={() => {
                      setColor("black");
                      setimgIndex(1);
                    }}
                  ></div>
                  <div
                    className="colorbox3"
                    onClick={() => {
                      setColor("blue");
                      setimgIndex(0);
                    }}
                  ></div>
                </div>
                <div className="size">select size</div>
                <div className="select-size">
                  <div
                    className={selected === 1 ? "size2" : "size1"}
                    onClick={() => {
                      setSize("s");
                      setName(Name);
                      setselected(1);
                    }}
                  >
                    s
                  </div>
                  <div
                    className={selected === 2 ? "size2" : "size1"}
                    onClick={() => {
                      setSize("m");
                      setName(Name);
                      setselected(2);
                    }}
                  >
                    m
                  </div>
                  <div
                    className={selected === 3 ? "size2" : "size1"}
                    onClick={() => {
                      setSize("l");
                      setName(Name);
                      setselected(3);
                    }}
                  >
                    l
                  </div>
                  <div
                    className={selected === 4 ? "size2" : "size1"}
                    onClick={() => {
                      setSize("xl");
                      setName(Name);
                      setselected(4);
                    }}
                  >
                    xl
                  </div>
                </div>
                <div className="Quantity">
                  <div className="quantityFont">Quantity :</div>
                  <button className="arithmatic" onClick={IncrementFunc}>
                    {" "}
                    <img src={increment} alt="increment operator" />
                  </button>
                  <div className="arithmatic">{quantity}</div>
                  <button className="arithmatic" onClick={DecrementFunc}>
                    <img src={decrement} alt="increment operator" />
                  </button>
                </div>
                <button className="bag1">
                  <img src={lock5} className="lock5" alt="" />
                  <div className="con1" onClick={CreateObject}>
                    ADD TO BAG
                  </div>
                </button>
              </div>
            </div>
          );
        })}

      <Footer />
    </div>
  );
}

export default Page2;
