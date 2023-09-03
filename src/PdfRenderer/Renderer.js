import React, { useState, useEffect } from "react";
import { Document,Font, Page,Image, Text, View, StyleSheet } from '@react-pdf/renderer';

import { useLocation, Link } from "react-router-dom";
// import pic from "../../../assests/propic.svg";
// import icon1 from "../../../assests/profile.svg";
// import icon2 from "../../../assests/events.svg";
// import icon3 from "../../../assests/payment.svg";
import id_card_bg from "../assests/events.png";
// import id_card_bg_white from "../../../assests/id_card_white_bg.webp";
// import profileimg from "../../../assests/profile1.webp";
import qrcode from "../assests/qr.webp";
import axios from "axios";

import { connect } from "react-redux";


// Font.register({
//   family: "Comic Neue",
//   src: "url(https://fonts.gstatic.com/s/comicneue/v8/4UaHrEJDsxBrF37olUeD96rp5w.woff2) format('woff2')",
// });

const styles = StyleSheet.create({
    page: {
    
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    pageBackground: {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      display: 'block',
      height: '100%',
      width: '100%',
    },
    id_card_main_div:{
      height:'90vh',
    },
    id_card_div:{
      height:'80vh',
      width:'54.5vh',
    },
    id_card_bg1:{
      height:'80vh',
      width:'auto',
      position: 'absolute',
      zIndex: -2,
    },
    thomso_card_id:{
      // fontFamily: 'Comic Neue',
    fontSize: '20px',
fontStyle: 'normal',
fontWeight: 700,
lineHeight: 'normal',
color: '#000',
    },

    contain1_id:{
      display: 'flex',
      zIndex:-1,
      backgroundImage: 'url(../assests/dashedbg.webp)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginTop: '17vh',
      marginLeft: '2vh',
        height: '46vh',
      width:'50.5vh',
      padding:'3vh',
      position: 'absolute',
    },
    left_id:{
      /* margin-left:0.5vh; */
      marginRight:'2vh'
  },

  right_id:{
    display: 'flex',
    flexDirection: 'column',
    /* width:20vh; */
    fontSize: '1.6vh',
    gap:'1.3vh',
    color: '#1E1E1E',

},

id_accomodation:{
  display: 'flex',
  alignItems: 'center',
  gap:'3px'
},

dataSize:{
  fontSize: '1.8vh'
},
profile_pic_image:{
  width: '14vh',
  height: '18vh'
},

qr_image:{
  width: '14vh',
  height: '14vh',  
  marginTop:'5.7vh',
},

contain2_id:{
  display:'flex',
  gap:'4vh',
},


  });

  const Renderer = () =>  {
   
  // const locator = useLocation();
  // console.log(userDetails);
  const [user, setuser] = useState({});
  //   const [userDetails, setuserDetails] = useState({});

  //   useEffect(() => {
  //     setuserDetails(user);
  //   }, [user]);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      axios.get(`/apiV1/current_user_participant`).then((res) => {
        setuser(res.data);
        localStorage.setItem("user_id", res.data?.user_id);
        localStorage.setItem("id", res.data?.id);
        console.log("data", res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userDetails);
  return (
    <Document>
    <Page size="A4" style={styles.page}>
    <Image  src={id_card_bg} style={styles.pageBackground} />

        
    
     
    </Page>
  </Document>

  )
};

export default Renderer;

