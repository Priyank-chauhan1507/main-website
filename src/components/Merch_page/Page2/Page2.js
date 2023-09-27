import React, { useEffect, useState } from "react";
import "./Page2.css";
import lock5 from "../../../assests/lock5.svg";
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
import { message } from "antd";
import increment from "../../../assests/increment.svg";
import decrement from "../../../assests/decrement.svg";
import { useNavigate, useParams } from "react-router-dom";
import Page3 from "../Page3/Page3";

function Page2(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [quantity, setquantity] = useState(1);
  const [imgCol, setImgCol] = useState(0);
  const [imgIndex, setimgIndex] = useState(true);
  const [selected, setselected] = useState(0);
  const [AddedToCart, setAddedToCart] = useState([]);
  const [renderId, setRenderId] = useState(0);

  const data = [
    {
      id: 1,
      price: 350,
      Name: "Feel The Thomso vibe",
      colors: [
        { colorId: 0, colorName: "white" },
        { colorId: 1, colorName: "lavender" },
      ],
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
      Name: "The Ellyx Tee",
      colors: [
        { colorId: 0, colorName: "white" },
        { colorId: 1, colorName: "black" },
        { colorId: 2, colorName: "purple" },
        { colorId: 3, colorName: "blue" },
        { colorId: 4, colorName: "beige" },
      ],
      img: [
        {
          id: 1,
          imgfront: tshirt5front1,
          imgback: tshirt5back1,
        },
        {
          id: 2,
          imgfront: tshirt5front2,
          imgback: tshirt4back2,
        },
        {
          id: 3,
          imgfront: tshirt5front3,
          imgback: tshirt4back2,
        },
        {
          id: 4,
          imgfront: tshirt5front4,
          imgback: tshirt4back2,
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
      colors: [
        { colorId: 0, colorName: "orange" },
        { colorId: 1, colorName: "teal" },
        { colorId: 2, colorName: "purple" },
      ],
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
      price: 450,
      Name: "The Thomso king",
      colors: [{ colorId: 0, colorName: "black" }],
      img: [
        {
          id: 1,
          imgfront: tshirt7front,
          imgback: tshirt7back,
        },
      ],
    },
  ];
  const item = data[id - 1]

  const [color, setColor] = useState(item.colors[0].colorName);
  const [imgSrc, setImgSrc] = useState();

  function CreateObject() {
    if (!size) {
      message.error("Please Select any size");
    } else {
      const allDetails = {
        id: id,
        name: item.Name,
        quantity: quantity,
        color: color,
        size: size,
        price: item.price,
        // src: imgSrc
      };
      setAddedToCart([...AddedToCart, allDetails]);
      localStorage.setItem(
        "AddedToCart",
        JSON.stringify([...AddedToCart, allDetails])
        );
        message.success("Item added to cart");
    }
    setRenderId(1);
  }

  useEffect(() => {
    console.log("updated array: ", AddedToCart);
  }, [AddedToCart, localStorage]);

  useEffect(() => {
    const storedArray = localStorage.getItem("AddedToCart");
    if (storedArray) {
      setAddedToCart(JSON.parse(storedArray));
    }
  }, []);

  const IncrementFunc = () => {
    let num = quantity;
    num += 1;
    setquantity(num);
  };
  const DecrementFunc = () => {
    if (quantity > 1) {
      let num = quantity;
      num -= 1;
      setquantity(num);
    } else {
      setquantity(1);
    }
  };

  return (
    <>
        <div className="page-2-merch">
          <Navbar />
                <div className="shirt-container" key={id}>
                  <div className="shirt-container1">
                    <div className="big-box1">
                      <img
                        src={imgIndex ? item.img[imgCol].imgfront : item.img[imgCol].imgback}
                        alt=""
                        className="box-img2"
                      />
                    </div>
                    <div className="big-box2">
                      <img
                        src={item.img[imgCol].imgfront}
                        alt=""
                        className="box-img1"
                        onClick={() => setimgIndex(true)}
                      />
                      <img
                        src={item.img[imgCol].imgback}
                        alt=""
                        className="box-img1"
                        onClick={() => setimgIndex(false)}
                      />
                    </div>
                  </div>
                  <div className="shirt-container2">
                    <div className="tshirt-head">{item.Name}</div>
                    <div className="tshirt-price">
                      <div className="price1">Rs.{item.price}</div>
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
                      {item.colors.map(({ colorId, colorName }) => {
                        return (
                          <div
                            className={imgCol == colorId ? "colorbox1A" : "colorbox1"}
                            style={{ backgroundColor: colorName }}
                            onClick={() => {
                              setColor(colorName);
                              setImgCol(colorId);
                            }}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="size">select size</div>
                    <div className="select-size">
                      <div
                        className={selected === 1 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("S");

                          setselected(1);
                        }}
                      >
                        S
                      </div>
                      <div
                        className={selected === 2 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("M");

                          setselected(2);
                        }}
                      >
                        M
                      </div>
                      <div
                        className={selected === 3 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("L");

                          setselected(3);
                        }}
                      >
                        L
                      </div>
                      <div
                        className={selected === 4 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("XL");
                          setselected(4);
                        }}
                      >
                        XL
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
                    <div
                      style={{
                        width:'40vw',
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.5rem",
                        flexWrap:'wrap'
                      }}
                    >
                      <button className="bag1">
                        <img src={lock5} className="lock5" alt="" />
                        <div className="con1" onClick={CreateObject}>
                          ADD TO BAG
                        </div>
                      </button>
                      <button className="bag1">
                        <img src={lock5} className="lock5" alt="" />
                        <div
                          className="con1"
                          onClick={() => {
                            navigate("/merch_page3")
                          }}
                        >
                          GO TO BAG
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
          <Footer />
        </div>
    </>
  );
}

export default Page2;
