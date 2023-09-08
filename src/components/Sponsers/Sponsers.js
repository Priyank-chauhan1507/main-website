import React from 'react'
import Navbar from '../EventsNavbar/Eventsnavbar'
import "./Sponsers.css"
import Sponsers1 from "../../assests/Sponsersb.png"
import Unicred from "../../assests/unicred.svg"
import Uniacco from "../../assests/uniacco.svg"
import Unischo from "../../assests/unischo.svg"
import Baroda from "../../assests/baroda.svg"
import Pepsi from "../../assests/pepsi1.svg"
import Express from "../../assests/express.svg"
import Bonkers from "../../assests/bonkers.svg"
import Joy from "../../assests/joy.svg"


function Sponsers() {
  return (
    <div className='scontainer'>
        <Navbar color="#007D7A"/>
        <div className="scontainer1">
            <img src={Sponsers1}  className="simage" alt="" />
        </div>
        <div className="tsponsors">
            TITLE SPONSOR
        </div>
        <div className="sdabba">
            
                <img src={Unicred} alt="" className='simg-1'/>
                <img src={Uniacco} alt="" className='simg-1' />
                <img src={Unischo} alt="" className='simg-1'/>
            
           
        </div>
        <div className="tsponsors">
        ASSOCIATE PARTNER
        </div>
        <div className="sdabba">
            <img src={Baroda} alt="" className='simg-2' />
            <img src={Baroda} alt="" className='simg-2'/>

        </div>
        <div className="tsponsors">
        BEVERAGE PARTNER
        </div>
        <div className="sdabba">
        <img src={Pepsi} alt="" className='simg-3' />
        </div>
        <div className="tsponsors">
        SUPPLY CHAIN PARTNER
        </div>
        <div className="sdabba">
        <img src={Express} alt="" className='simg-3' />
        </div>
        <div className="tsponsors">
        MERCHANDISE PARTNER
        </div>
        <div className="sdabba">
        <img src={Bonkers} alt="" className='simg-4' />
        </div>
        <div className="tsponsors">
        AUTOMOBILE PARTNER
        </div>
        <div className="sdabba">
        <img src={Joy} alt="" className='simg-4' />
        </div>
        <div className="tsponsors">
        AUTOMOBILE PARTNER
        </div>
        <div className="sdabba">
        <img src={Joy} alt="" className='simg-4' />
        </div>
        <div className="tsponsors">
        AUTOMOBILE PARTNER
        </div>
        <div className="sdabba">
        <img src={Joy} alt="" className='simg-4' />
        </div>
        <div className="tsponsors">
        AUTOMOBILE PARTNER
        </div>
        <div className="sdabba">
        <img src={Joy} alt="" className='simg-4' />
        </div>
        <div className="tsponsors">
        AUTOMOBILE PARTNER
        </div>
        <div className="sdabba">
        <img src={Joy} alt="" className='simg-4' />
        </div>
        <div className="tsponsors">
        AUTOMOBILE PARTNER
        </div>
        <div className="sdabba">
        <img src={Joy} alt="" className='simg-4' />
        </div>

    </div>
  )
}

export default Sponsers