import React from 'react'
import {
    Document,
    Font,
    Page,
    Image,
    Text,
    View,
    StyleSheet,
  } from "@react-pdf/renderer";
  import QRCode from "react-qr-code";

  const styles = StyleSheet.create({
    id_page: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
});

const Qrcode = () => {
  return (
    <div>  <QRCode
    size={20}
    style={{ height: "auto", maxWidth: "10vw", width: "10vw" }}
    value="Th-2300006"
    viewBox={`0 0 256 256`}
    />
    </div>
  )
}

export default Qrcode
