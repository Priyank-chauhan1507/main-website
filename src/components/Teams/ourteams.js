import React from 'react'
import { useNavigate } from 'react-router-dom';
import ourteaming1 from "../../assests/ourteamimg1.webp";
import ourteamimg2 from "../../assests/ourteamimg2.webp";
import convenorimg from "../../assests/convenor.webp";
import "./ourteams.css";
import Navbar from "../../components/EventsNavbar/Eventsnavbar";
import meet from "../../assests/MEET OUR TEAM.webp";
import coconvenor from '../../assests/cO-CONVENERS.webp';
import phoneicon from "../../assests/phoneicon.svg";
import blackfb from "../../assests/blackfb.svg";
import blackinsta from "../../assests/blackinsta.svg";
import blackthread from "../../assests/blackthread.svg";
import verticalhead from "../../assests/VERTICLE-HEAD.webp";

export default function ourteams() {
    const coconvenorlist=[
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        },
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        },
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        },
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        }
    ];
    const verticalheadlist=[
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        },
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        },
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        },
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        },
        {
            id:1,
            membername:"AKHIL",
            phone:1234567890,
            facebook:"href",
            insta:"href",
            thread:"href",
            img:convenorimg,
        }
    ]
    // const navigate=useNavigate();
  return (
    <>
    <div className="ourteampage1">
        <Navbar/>
        <div className="ourteamdiv1">
            <div className="ourteam_heading">
                <img src={meet} className='meet' alt="meet"/>
            </div>
            <div className="ourteamimgdiv1">
                <div className="ourteam_imgdiv1">
                    <img src={ourteamimg2} className='ourteamimg1' alt='ourteamimg1'/>
                    <img src={convenorimg} className='convenordiv' alt='convenordiv'/>
                </div>
                <div className="ourteam_imgdiv2">
                    <img src={ourteaming1} className='ourteamimg2' alt='ourteamimg2'/>
                    <div className="conv_text">
                    <h3>
                        AADARSH RAJ
                    </h3>
                    <h4>
                        CONVENOR
                    </h4>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatibus atque magnam inventore doloribus. Consectetur accusamus, alias officia cupiditate sit quos doloremque quasi eum laboriosam pariatur quaerat debitis assumenda quas dolorem culpa, incidunt voluptatibus labore repellat harum hic tempore eaque. Fugiat praesentium odit provident, porro dolor unde non iste est ratione laborum sequi facilis cumque magnam atque repellendus! Dolores, temporibus?
                    </h5>
                    </div>
                </div>
            </div>
            <div className="coconvenor">
                <div className="co-con-heading">
                <img src={coconvenor} className='co-con' alt='co-con'/>
                </div>
                <div className="coconvenor-list">
                    {coconvenorlist.map(({id, membername,phone,facebook,insta,thread,img},index)=>{
                        return(
                            <div className="member1" key={index}>
                            <div className="memberimg">
                                <img className='member-identity' src={img} alt="..."/>
                            </div>
                            <div className="membname">
                                <p className="memb-name">{membername}</p>
                            </div>
                            <div className="membphone">
                                <img className='phone-img' src={phoneicon} alt="..."/>
                                <p className='memb-phone'>{phone}</p>
                            </div>
                            <div className="memb-media">
                                <img className="media-icon"src={blackfb} onClick={()=>window.open({facebook},"_blank")}/>
                                <img className="media-icon"src={blackinsta} onClick={()=>window.open({insta},"_blank")}/>
                                <img className="media-icon"src={blackthread} onClick={()=>window.open({thread},"_blank")}/>
                            </div>
                            </div>


                        )
                    })}

                </div>

            </div>
            <div className="vertical-head">
                <div className="co-con-heading">
                <img src={verticalhead} className='co-con' alt='co-con'/>
                </div>
                <div className="verticalhead-list">
                    {verticalheadlist.map(({id, membername,phone,facebook,insta,thread,img},index)=>{
                        return(
                            <div className="member1" key={index}>
                            <div className="memberimg">
                                <img className='member-identity' src={img} alt="..."/>
                            </div>
                            <div className="membname">
                                <p className="memb-name">{membername}</p>
                            </div>
                            <div className="membphone">
                                <img className='phone-img' src={phoneicon} alt="..."/>
                                <p className='memb-phone'>{phone}</p>
                            </div>
                            <div className="memb-media">
                                <img className="media-icon"src={blackfb} onClick={()=>window.open({facebook},"_blank")}/>
                                <img className="media-icon"src={blackinsta} onClick={()=>window.open({insta},"_blank")}/>
                                <img className="media-icon"src={blackthread} onClick={()=>window.open({thread},"_blank")}/>
                            </div>
                            </div>


                        )
                    })}

                </div>

            </div>
        </div>
    </div>
    </>
  )
}
