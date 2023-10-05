import React from 'react'
import './NewSponsersmobile.css'
import Navbar from '../EventsNavbar/Eventsnavbar'

import SponsCont from '../../assests/sponscont.png'
import spons1 from '../../assests/spons1.png'
import spons2 from '../../assests/spons2.png'
import spons3 from '../../assests/spons3.png'
import line from '../../assests/Line 2.png'
import cloud from '../../assests/sponsbgcloud.png'
import SponsBox2 from '../../assests/sponsbox2.png'
import SponsBox3 from '../../assests/sponsbox3.png'
import SponsBox4 from '../../assests/sponsbox4.png'
import backg from '../../assests/sponsback.png'
import sponsbox from '../../assests/spons_box.png'


function NewSponsersmobile() {

  return (
    
    <div className='spons_home'>
        <div className='navbar'>
        <Navbar />
        </div>

        <img src={backg} alt=''/>

        <div className='spons_content'>
            {/* <img src={cloud} alt=''/> */}

         <div className='heading1'>
            <p>
            OUR SPONSERS
            </p>
            
         </div>

         <div className='spons_box'>


         <div className='spons_box1'>
            <img src={SponsCont} alt=''/>
            <div className='spons_cont'>
                <p>TITLE SPONSER</p>
                <div className='spons_img'>
                    <img className='brandtitle' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brandtitle' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brandtitle' src={spons3} alt=''/>
                </div>
            </div>
         </div>

            <div className='spons_box1'>
            <img src={SponsBox2} alt=''/>
            <div className='spons_cont2'>
                <p>TITLE SPONSER</p>
                <div className='spons_img'>
                    {/* <img className='brand' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/> */}
                </div>
            </div>
            </div>


            <div className='spons_box2'>
            <img src={SponsBox3} alt=''/>
            <div className='spons_cont2'>
                <p> BEVARAGE PARTNER</p>
                <div className='spons_img'>
                    {/* <img className='brand' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/> */}
                </div>
            </div>
            </div>

            <div className='spons_box3'>
            <img src={sponsbox} alt=''/>
            <div className='spons_cont3'>
            <div className='spons_heading'>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p className='last'>TITLE SPONSER</p>
                </div>
                <div className='spons_img2'>
                    <img className='brand' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img className='last' src={line} alt=''/>
                    <img className='brand last' src={spons3} alt=''/>
                </div>
            </div>
         </div>

         <div className='spons_box3'>
            <img src={sponsbox} alt=''/>
             <div className='spons_cont3'>
                <div className='spons_heading'>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p className='last'>TITLE SPONSER</p>
                </div>
                <div className='spons_img2'>
                    <img className='brand' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img className='last' src={line} alt=''/>
                    <img className='brand last'  src={spons3} alt=''/>
                </div>
            </div>
         </div>


         <div className='spons_box3'>
            <img src={sponsbox} alt=''/>
            <div className='spons_cont3'>
            <div className='spons_heading'>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p className='last'>TITLE SPONSER</p>
                </div>
                <div className='spons_img2'>
                    <img className='brand' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img className='last' src={line} alt=''/>
                    <img className='brand last' src={spons3} alt=''/>
                </div>
            </div>
         </div>

         <div className='spons_box lastbox'>
            <img src={sponsbox} alt=''/>
            <div className='spons_cont3'>
            <div className='spons_heading'>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p>TITLE SPONSER</p>
                <p className='last'>TITLE SPONSER</p>
                </div>
                <div className='spons_img2'>
                    <img className='brand' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/>
                    <img className='last' src={line} alt=''/>
                    <img className='brand last' src={spons3} alt=''/>
                </div>
            </div>
         </div>


            {/* <div className='spons_box3'>
            <img src={SponsBox4} alt=''/>
            <div className='spons_cont3'>
                <p>BANKING PARTNER</p>
                <div className='sponstitle'>EDUCATION PARTNER</div>
                <div className='spons_img'>
                    {/* <img className='brand' src={spons1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={spons3} alt=''/> */}
                {/* </div>
            </div>
            </div> */}





            

            
        


        

           
</div>        

 
        </div>
       


    </div>
  )
}

export default NewSponsersmobile