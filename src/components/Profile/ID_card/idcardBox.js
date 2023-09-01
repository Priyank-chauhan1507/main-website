import React from 'react'
import IdCard from './Idcard.js'
import "./idcardBox.css"
const idcardBox = () => {
    return (
        <div className='idFull'>
            <div className='idBox'>
                <div style={{position:"absolute",zIndex:"999999"}}>
                    <IdCard />

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default idcardBox