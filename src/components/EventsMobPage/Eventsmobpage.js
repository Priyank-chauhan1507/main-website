import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Eventsmobpage.css'
import back from '../../assests/bgmobile.webp'
import Navbar from '../EventsNavbar/MobEventnavbar';

const Eventsmobpage = () => {

    const events = [
        {
          par: "Music",
          child: [
            { event: "Sargam (Solo)", href: 4 },
            { event: "Sargam (Duet)", href: 5 },
            { event: "Sargam (Team)", href: 3 },
            { event: "Battle Of Bands", href: 6 },
            { event: "Gully War", href: 7 },
            { event: "War of DJ'S", href: 8 },
          ],
        },
        {
          par: "Dramatics",
          child: [
            { event: "Abhivyakti", href: 9 },
            { event: "Nukkad Natak", href: 79 },
          ],
        },
        {
          par: "Gaming",
          child: [
            { event: "Apocalypse", href: 46 },
            { event: "Queen's Gambit", href: 48 },
            { event: "Snooker's Elite", href: 51 },
          ],
        },
        {
          par: "Culinary",
          child: [{ event: "Food Fiesta", href: 35 }],
        },
        {
          par: "Choreo",
          child: [
            { event: "Footloose (Solo)", href: 76 },
            { event: "Footloose (Duet)", href: 77 },
            { event: "Footloose (Team)", href: 75 },
            { event: "Step up (Solo)", href: 42 },
            { event: "Step up (team)", href: 43 },
          ],
        },
        {
          par: "Fashion",
          child: [
            { event: "Campus Princess", href: 29 },
            { event: "Mr & Ms Thomso", href: 31 },
            { event: "Vogue", href: 78 },
            { event: "Coscon", href: 63 },
          ],
        },
        {
          par: "Entertainment",
          child: [
            { event: "Thomso's Got Talent(solo)", href: 17 },
            { event: "Thomso's Got Talent(team)", href: 18 },
            { event: "Open MIC", href: 20 },
            { event: "The Dank Knight", href: 62 },
          ],
        },
        {
          par: "Cinematic",
          child: [
            { event: "16 Frames", href: 14 },
            { event: "Box Office", href: 15 },
          ],
        },
        {
          par: "Da Vinci's Gala",
          child: [
            { event: "Art Talkies", href: 56 },
            { event: "Naqaab", href: 57 },
            { event: "Paint Fiesta", href: 58 },
            { event: "Costume Design", href: 59 },
            { event: "Relay Rangoli", href: 60 },
            { event: "Live Sketching", href: 61 },
          ],
        },
        {
          par: "Adventure",
          child: [
            { event: "Seiger", href: 52 },
            { event: "Treasure Hunt", href: 53 },
            { event: "Street Soccer", href: 54 },
            { event: "Scavenger Hunt", href: 55 },
          ],
        },
        {
          par: "LITFest",
          child: [
            { event: "Literati", href: 16 },
            { event: "Pictionary", href: 19 },
            { event: "Spin a Yarn", href: 21 },
            { event: "Big Ideas", href: 24 },
            { event: "Desi Twist", href: 27 },
            { event: "Nerdy-Bate", href: 28 },
            { event: "Slam Poetry", href: 30 },
          ],
        },
        {
          par: "Marketing and Finance",
          child: [
            { event: "Auction Frenzy", href: 22 },
            { event: "Corporata", href: 23 },
            { event: "Mark Sense", href: 25 },
            { event: "A(d)esign", href: 26 },
          ],
        },
        {
          par: "MUN",
          child: [{ event: "IITR-MUN", href: 32 }],
        },
        {
          par: "Carnival",
          child: [
            { event: "Sumo Wrestling", href: 40 },
            { event: "Air Rifle Shooting", href: 41 },
            { event: "Caricature", href: 44 },
            { event: "Body Zorbing", href: 45 },
            { event: "Human Foosball", href: 47 },
            { event: "Tattoo Artist", href: 50 },
          ],
        },
        {
          par: "Night Life",
          child: [
            { event: "Silent DJ", href: 1 },
            { event: "Nightlife Cafe", href: 82 },
            { event: "Karaoke", href: 83 },
          ],
        },
        {
          par: "New Events",
          child: [
            { event: "Sneaker Design*", href: 84 },
            { event: "Mimicry*", href: 85 },
            { event: "Monologue*", href: 86 },
            { event: "Thomsography*", href: 73 },
            { event: "Vlogging*", href: 87 },
          ],
        },
        {
          par: "Online",
          child: [
            { event: "Bgmi*", href: 80 },
            { event: "Quizardry*", href: 81 },
          ],
        },
      ];

      const navigate = useNavigate();
      const [event, setevent] = useState(false);
      const [show, setshow] = useState(false);
  const [show1, setshow1] = useState({ check: false, first: "" });
  localStorage.setItem("show", show);
  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
  };

  return (
    <>
    <div className='events-mob-page-list-main'>
    <Navbar className='events-mob-page-list-nav'/>
        <img className='events-mob-page-list-img' src={back} alt="" />
    <div className='events-mob-page-list'>
        <h1 className='events-mob-page-list-h1'>
            Choose your Events
          </h1>
          {
            events.map((el) => {
              const { par, child } = el;
              return (
                <>
                  <span
                  className='events-mob-page-list-span'
                    onClick={() => {
                      show1.check === false
                        ? setshow1({ check: true, first: child[0]?.event })
                        : setshow1({ check: false, first: "" });
                    }}
                  >
                    {par}
                  </span>
                  {show1?.check &&
                    show1?.first === child[0]?.event &&
                    child.map((post) => {
                      return (
                        <h3
                        className='events-mob-page-list-h3'
                          onClick={() => {
                            post?.href !== null && onHandleClick(post?.href);
                            setshow(false);
                          }}
                        >
                          {post?.event}
                        </h3>
                      );
                    })}
                </>
              );
            })}
    </div>
    </div>
    </>
  )
}

export default Eventsmobpage