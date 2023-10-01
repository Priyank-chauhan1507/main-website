import React, { useEffect, useState } from "react";
import "./Page2.css";
import lock5 from "../../../assests/lock5.svg";
import Navbar from "../../Merch_page/Navbar_merch/Navbar_merch";
// import Navbar from "../../EventsNavbar/Eventsnavbar";
// import Footer from "../../Navbar/WebNavbarNew";
import Footer from "../Merch_Footer/Merch_Footer";
// import tshirt3front from "../../../assests/tshirt3front.webp";
// import tshirt3back from "../../../assests/tshirt3back.webp";
// import tshirt3front2 from "../../../assests/tshirt3front2.webp";
// import tshirt3back2 from "../../../assests/tshirt3back2.webp";
import tshirt4front1 from "../../../assests/feelthevibewhitwfront.webp";
import tshirt4back1 from "../../../assests/feelthevibewhiteback.webp";
import tshirt4front2 from "../../../assests/feelthevibelavenderfront.webp";
import tshirt4back2 from "../../../assests/feelthevibelavenderback.webp";
import tshirt5front1 from "../../../assests/white23front.webp";
import tshirt5back1 from "../../../assests/white23back.webp";
import tshirt5front2 from "../../../assests/black23front.webp";
import tshirt5back2 from "../../../assests/black23backnew.webp";
import tshirt5front3 from "../../../assests/lavender23front.webp";
import tshirt5back3 from "../../../assests/lavender23back.webp";
import tshirt5front4 from "../../../assests/blue23front.webp";
import tshirt5back4 from "../../../assests/blue23back.webp";
import tshirt5front5 from "../../../assests/beige23front.webp";
import tshirt5back5 from "../../../assests/beige23back.webp";
import tshirt6front1 from "../../../assests/orng.webp";
import tshirt6front2 from "../../../assests/sky b.webp";
import tshirt6front3 from "../../../assests/purp.webp";
import tshirt6back from "../../../assests/feelthevibewhiteback.webp";
import tshirt7front from "../../../assests/thomsokingfront.webp";
import tshirt7back from "../../../assests/thomsokingback.webp";
import { message } from "antd";
import increment from "../../../assests/increment.svg";
import decrement from "../../../assests/decrement.svg";
import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../../Loader/Loader"

function Page2(props) {

  const { id } = useParams();
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [quantity, setquantity] = useState(1);
  const [imgCol, setImgCol] = useState(0);
  const [imgIndex, setimgIndex] = useState(true);
  const [selected, setselected] = useState(0);
  const [AddedToCart, setAddedToCart] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [bagChange, setbagChange] = useState("bag1");
  const [cartchange,setcartchange]=useState("bage1change");

  const data = [
    {
      id: 1,
      price: 350,
      Name: "Feel The Thomso vibe",
      colors: [
        { colorId: 0, colorName: "lavender" },
        { colorId: 1, colorName: "white" },
      ],
      img: [
        {
          id: 1,
          imgfront: tshirt4front2,
          imgback: tshirt4back2,
        },
        {
          id: 2,
          imgfront: tshirt4front1,
          imgback: tshirt4back1,
        },
      ],
    },

    {
      id: 2,
      price: 350,
      Name: "The Ellyx Tee",
      colors: [
        { colorId: 0, colorName: "lavender" },
        { colorId: 1, colorName: "black" },
        { colorId: 2, colorName: "white" },
        { colorId: 3, colorName: "aquablue" },
        { colorId: 4, colorName: "beige" },
      ],
      img: [
        {
          id: 1,
          imgfront: tshirt5front3,
          imgback: tshirt5back3,
        },
        {
          id: 2,
          imgfront: tshirt5front2,
          imgback: tshirt5back2,
        },
        {
          id: 3,
          imgfront: tshirt5front1,
          imgback: tshirt5back1,
        },
        {
          id: 4,
          imgfront: tshirt5front4,
          imgback: tshirt5back4,
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
      Name: "The Roar of Thomso",
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


  function CreateObject() {
    if (!size) {
      message.error("Please Select any size");
    } else {
      const allDetails = {
        id: Math.floor(Math.random() *1000) + 1,
        name: item.Name,
        quantity: quantity,
        color: color,
        size: size,
        price: item.price,
        image: item.img[imgCol].imgfront,
      };
      setAddedToCart([...AddedToCart, allDetails]);
      localStorage.setItem(
        "AddedToCart",
        JSON.stringify([...AddedToCart, allDetails])
        );
        message.success("Item added to cart");
        let newText="bage1change";
        setbagChange(newText);
        let newtext1="bag1";
        setcartchange(newtext1);
    }
  }



  useEffect(() => {
    const storedArray = localStorage.getItem("AddedToCart");
    if (storedArray) {
      setAddedToCart(JSON.parse(storedArray));
    }
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   if (!localStorage.getItem("token") || !localStorage.getItem("user_id")) {
  //     navigate(`/login`);
  //   }else{
  //     setLoading(false);
  //   }
  // });

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
                      {
id == 4 ?
                      <img
                        src={imgIndex ? item.img[imgCol].imgback : item.img[imgCol].imgfront}
                        alt=""
                        className="box-img2"
                      />
                      :
                      <img
                        src={imgIndex ? item.img[imgCol].imgfront : item.img[imgCol].imgback}
                        alt=""
                        className="box-img2"
                      />
                      }
                    </div>
                    <div className="big-box2">
                      {
id == 4 ?
                     (
                      <> <img
                        src={item.img[imgCol].imgback}
                        alt=""
                        className={imgIndex ? 'active box-img1' : 'box-img1'}
                        onClick={() => setimgIndex(true)}
                      />
                      <img
                        src={item.img[imgCol].imgfront}
                        alt=""
                        className={imgIndex ? 'box-img1' : 'active box-img1'}
                        onClick={() => setimgIndex(false)}
                      />
                      </>)                      :
                      (
                      <>
                      <img
                        src={item.img[imgCol].imgfront}
                        alt=""
                        className={imgIndex ? 'active box-img1' : 'box-img1'}
                        onClick={() => setimgIndex(true)}
                      />
                      <img
                        src={item.img[imgCol].imgback}
                        alt=""
                        className={imgIndex ? 'box-img1' : 'active box-img1'}
                        onClick={() => setimgIndex(false)}
                      />
                      </>)
                       }


                    </div>
                  </div>
                  <div className="shirt-container2">
                    <div className="tshirt-head">{item.Name}</div>
                    <p className="description_text">Round neck style 100% cotton, biowash Tshirt of 210 GSM cloth.
Experience ultimate comfort and effortless style
with our T-shirt crafted from soft cotton.</p>
                    <div className="tshirt-price">
                      <div className="price1">Rs.{item.price}</div>
                      <div className="price3">Rs.{2*item.price}</div>
                      <div className="price1-offer">( 50% Off )</div>
                    </div>
                    <div className="inclu">Inclusive of all taxes</div>
                    <hr className="hr1" />
                    <div className="color12">
                      <div className="color121">color :</div>
                      <div className="color122">{color}</div>
                    </div>
                    <div className="colorbox">
                      {item.colors.map(({ colorId, colorName }, i) => {
                        return (
                          <div key={i}>
                         {colorName == "lavender" ? <div
                            className={imgCol == colorId ? "colorbox1A" : "colorbox1"}
                            style={{backgroundColor:"#c0ade6"}}
                            onClick={() => {
                              setColor(colorName);
                              setImgCol(colorId);
                            }}
                          ></div>
                         : <div
                            className={imgCol == colorId ? "colorbox1A" : "colorbox1"}
                            style={colorId == 3 ?{backgroundColor:"#2ec2e6"}: { backgroundColor: colorName }}
                            onClick={() => {
                              setColor(colorName);
                              setImgCol(colorId);
                            }}
                            ></div>
                          }
                      </div>
                        );
                      })}
                    </div>
                    <div className="size">select size</div>
                    <div className="select-size">
                      <div
                        className={selected === 1 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("XS");

                          setselected(1);
                        }}
                      >
                        XS
                      </div>
                      <div
                        className={selected === 2 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("S");

                          setselected(2);
                        }}
                      >
                        S
                      </div>
                      <div
                        className={selected === 3 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("M");

                          setselected(3);
                        }}
                      >
                        M
                      </div>
                      <div
                        className={selected === 4 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("L");

                          setselected(4);
                        }}
                      >
                        L
                      </div>
                      <div
                        className={selected === 5 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("XL");
                          setselected(5);
                        }}
                      >
                        XL
                      </div>
                      <div
                        className={selected === 6 ? "size2" : "size1"}
                        onClick={() => {
                          setSize("XXL");
                          setselected(6);
                        }}
                      >
                        XXL
                      </div>
                    </div>
                    <div className="Quantity">
                      <div className="quantityFont">Quantity :</div>
                      <div className="border-box">
                      <button className="arithmatic" onClick={DecrementFunc}>
                        <img src={decrement} alt="increment operator" />
                      </button>

                      <div className="arithmatic">{quantity}</div>

                      <button className="arithmatic" onClick={IncrementFunc}>
                        {" "}
                        <img src={increment} alt="increment operator" />
                      </button>

                      </div>
                    </div>
                    <div className="bag-cart-btn"
                      // style={{
                      //   width:'40vw',
                      //   display: "flex",
                      //   flexDirection: "row",
                      //   gap: "0.5rem",
                      //   flexWrap:'wrap'
                      // }}

                    >
                      <div onClick={CreateObject}>
                      <button className={bagChange}>
                        <img src={lock5} className="lock5" alt="" />
                        <div className="con1 btn-text" >
                          ADD TO BAG
                        </div>
                      </button>
                      </div>
                      <div onClick={() => {navigate("/merch_cart");}}>
                      <button className={cartchange}>
                        <img src={lock5} className="lock5" alt="" />
                        <div className="con1 btn-text" >
                          GO TO BAG
                        </div>
                      </button>
                      </div>
                      <div   className="con1"
                          onClick={()=>{navigate("/merch_home")}}>
                      <button className="bag1 buy_now">
                        {/* <img src={lock5} className="lock5" alt="" /> */}
                        <div
                        className="btn-text"
                        >
                          CONTINUE SHOPPING
                        </div>

                      </button>
                      </div>
                    </div>
                  </div>
                </div>
          <Footer />
        </div>
    </>
  );
}

export default Page2;
