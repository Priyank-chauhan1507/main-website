import React from 'react'
import "./Footer.css"
import img1 from "../../../assests/phonecall.svg"
import img2 from "../../../assests/mailimg.svg"


function Footer() {
  return (
    <div className='container'>
      <h1 className='cont'>CONTACT US</h1>
      <div className="containerbox">
        <div className="container1">
           <div className='content1'>Avnish</div> 
           <div className='content2'><img src={img1} className="img1" alt="" />+91 9451584872</div> 
           {/* <div className='content2'><img src={img2} className="img1" alt="" />alok_k@iitr.ac.in</div>  */}
            
        </div>
        <div className="container1">
          <div className='content1'>Kanwar Anmol</div> 
           <div className='content2'><img src={img1} className="img1" alt="" />+91 7347346875</div> 
           {/* <div className='content2'><img src={img2} className="img1" alt="" />alok_k@iitr.ac.in</div>  */}
        </div>
        <div className="container1">
            <div className='content1'>Soham Parolia</div> 
           <div className='content2'>
            <img src={img1} className="img1" alt="" />
            +91 9920150290
            </div> 
           {/* <div className='content2'><img src={img2} className="img1" alt="" />alok_k@iitr.ac.in</div>  */}
        </div>
      </div>
    </div>
  )
}

export default Footer