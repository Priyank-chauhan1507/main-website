import React from 'react';
import "./Registration.scss";
import Navbar from '../../EventsNavbar/MobEventnavbar';
import BGimg from '../../../assests/MUNmobilebg.png';

export default function MUNmobileregistration() {
    return (
        <div>
            <img src={BGimg} className='MobileBG' alt=''/>
            <Navbar />
            
            {/* <h3>IRMUN / <span>PORTFOLIO</span></h3> */}

            <div className='btn-div'>
                <button className='submitbtn' type='submit' value='Submit'>SUBMIT</button>
            </div>
            
        </div>
    )
}
