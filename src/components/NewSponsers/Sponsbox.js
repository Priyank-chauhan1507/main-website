import React from 'react'
import './sponsbox.css'
import spons1 from '../../assests/spons1.png'
import spons2 from '../../assests/spons2.png'
import spons3 from '../../assests/spons3.png'
import line from '../../assests/Line 2.png'
import sponsbox from '../../assests/spons_box.png'

function Sponsbox(id,img1,img2,img3,img4,img5,t1,t2,t3,t4,t5) {
  return (
    <div>
        <div className='spons_box3'>
            <img src={sponsbox} alt=''/>
            <div className='spons_cont3'>
            <div className='spons_heading'>
                <p>{t1}</p>
                <p>{t2}</p>
                <p>{t3}</p>
                <p>{t4}</p>
                <p className='last'>{t5}</p>
                </div>
                <div className='spons_img2'>
                    <img className='brand' src={img1} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={img2} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={img3} alt=''/>
                    <img src={line} alt=''/>
                    <img className='brand' src={img4} alt=''/>
                    <img className='last' src={line} alt=''/>
                    <img className='brand last' src={img5} alt=''/>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Sponsbox