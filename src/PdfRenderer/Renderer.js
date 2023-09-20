import React, { useState, useEffect } from "react";
import {
  Document,
  Font,
  Page,
  Image,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import id_logo from "./ID_Logo.png";
import qr from "./qr.png";
import CS_normal from "./COMIC.TTF";
import CS_bold from "./design.graffiti.comicsansmsgras.ttf";
import axios from "axios";

Font.register({
  family: "Comic Sans MS",
  fonts: [
    {
      src: CS_normal,
    },
    {
      src: CS_bold,
      fontWeight: "bold",
    },
  ],
});
// Font.register({
//   family: "Comic Sans MS",
//   src: CS_normal,
// });

const styles = StyleSheet.create({
  id_page: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  id_container: {
    height: "400px",
    width: "272px",
    backgroundColor: "#6BDFF8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    fontFamily: "Comic Sans MS",
  },
  id_logo: {
    marginTop: "17px",
    height: "50px",
    width: "103px",
  },
  id_border1: {
    marginVertical: "17px",
    height: "232px",
    width: "264px",
    borderRadius: "3px",
    padding: "3px",
    backgroundColor: "white",
  },
  id_border2: {
    height: "100%",
    width: "100%",
    border: "1px dashed black",
    padding: "5px",
  },
  id_box: {
    height: "100%",
    width: "100%",
    border: "1px solid black",
    padding: "6px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  id_box_left: {
    height: "100%",
    width: "35%",
    display: "flex",
    justifyContent: "space-between",
  },

  id_box_right: {
    height: "100%",
    width: "60%",
    display: "flex",
  },

  id_box_image: {
    height: "50%",
    width: "100%",
    border: "1px solid black",
    padding: "1px",
  },

  id_box_qr: {
    height: "40%",
    width: "100%",
    
    padding: "2px",
  },

  id_box_id: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "2px",
    // fontFamily: "",
  },

  id_box_text1: {
    fontSize: "8px",
    marginTop: "1vh",
  },

  id_box_text2: {
    fontSize: "9px",
    fontWeight: "bold",
    marginTop: "2px",
  },

  id_box_textB: {
    fontSize: "9px",
    fontWeight: "bold",
    marginTop: "1vh",
  },

  id_box_text_split: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  id_bottom: {
    height: "41px",
    width: "100%",
    bottom: "0px",
    backgroundColor: "#F7B401",
  },
});

const Renderer = () => {
  const [user, setuser] = useState({});
  const [items, setItems] = useState();


  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('dataKey'));
    if (items) {
      setItems(items);
     }
  }, [items]);

  const loadUserData = async () => {
    try {
      axios.get(`/apiV1/current_user_participant`).then((res) => {
        setuser(res.data);
        // console.log("data", res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user, "ddddd");
  return (
    <Document>
      <Page size="A4" style={styles.id_page}>
        <View style={styles.id_container}>
          <Image src={id_logo} style={styles.id_logo} />

          <View style={styles.id_border1}>
            <View style={styles.id_border2}>
              <View style={styles.id_box}>
                <View style={styles.id_box_left}>
                 {user.avtar && <Image
                    src={
                      user?.avtar
                    }
                    style={styles.id_box_image}
                  />}
                  <Image src={items} style={styles.id_box_qr} />
                </View>

                <View style={styles.id_box_right}>
                  <Text style={styles.id_box_id}>{user?.thomso_id}</Text>

                  <Text style={styles.id_box_text1}>Name</Text>
                  <Text style={styles.id_box_text2}>{user?.name}</Text>

                  <View style={styles.id_box_text_split}>
                    <View>
                      <Text style={styles.id_box_text1}>Contact</Text>
                      <Text style={styles.id_box_text2}>{user?.contact}</Text>
                    </View>
                    {user?.is_ca &&
                      <View>
                      <Text style={styles.id_box_text1}>CA ID</Text>
                      <Text style={styles.id_box_text2}>ThCA-2300138</Text>
                    </View>
                    }

                  </View>

                  <Text style={styles.id_box_text1}>College</Text>
                  <Text style={styles.id_box_text2}>
                    Indian Institute of Technology, Roorkee
                  </Text>

                  <Text style={styles.id_box_text1}>CA Referral & Name</Text>
                  {user?.referred_by_id ? (
                  <Text style={styles.id_box_text2}>
                  {user?.ca_thomso_id} ({user?.ca_name})
                  </Text>
                ) : (<Text style={styles.id_box_text2}>None</Text>)}

                  <Text style={styles.id_box_textB}>Accommodation - {user?.accommodation ? "Yes" : "No"}</Text>
                  {/* <Text style={styles.id_box_text2}>None</Text> */}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.id_bottom}></View>
        </View>
      </Page>
    </Document>
  );
};

export default Renderer;
