import React from 'react'
import './Page2.css'
import lock5 from "../../../assests/lock5.svg"
import Rect1 from "../../../assests/Rect1.webp"
import Rect2 from "../../../assests/Rect2.webp"
import Navbar from "../../EventsNavbar/Eventsnavbar"
import Footer from "../../Navbar/WebNavbarNew"

function Page2() {
  return (
    <div className="page-2-merch">
    <Navbar />
    <div className='shirt-container'>
        <div className="shirt-container1">
            <div className="big-box1">
                  <img src={Rect1} alt="" className='box-img2'/>  
            </div>
            <div className="big-box2">
                <img src={Rect2} alt="" className='box-img1'/>
                <img src={Rect2} alt="" className='box-img1'/>
                <img src={Rect2} alt="" className='box-img1'/>
            </div>
        </div>
        <div className="shirt-container2">
            <div className="tshirt-head">
            THOMSO UNISEX TSHIRT
            </div>
            <div className="tshirt-price">
                <div className="price1">
                    Rs. 350
                </div>
                <div className="price3">
                    Rs. 700
                </div>
                <div className="price1-offer">
                    ( 50% Off )
                </div>
            </div>
            <div className="inclu">
            Inclusive of all taxes
            </div>
            <hr className='hr1'/>
            <div className="color12">
                <div className="color121">color :</div>
                <div className="color122">white</div>
            </div>
            <div className="colorbox">
                <div className="colorbox1"></div>
                <div className="colorbox2"></div>
                <div className="colorbox3"></div>
            </div>
            <div className="size">select size</div>
            <div className="select-size">
                <div className="size1">s</div>
                <div className="size2">m</div>
                <div className="size3">l</div>
                <div className="size4">xl</div>
            </div>
            <div className="bag1">
                <img src={lock5} className="lock5" alt="" />
                <div className="con1">ADD TO BAG</div>
                </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Page2
