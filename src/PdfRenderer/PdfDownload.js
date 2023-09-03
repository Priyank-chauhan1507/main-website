import React from 'react'
import { PDFDownloadLink,PDFViewer } from "@react-pdf/renderer";
import Renderer from "./Renderer"
export default function PdfDownload() {
  return (
    <div>
      <PDFViewer style={{width:"100vw", height:"100vh"}}>
    <Renderer />
  </PDFViewer>
      {/* <PDFDownloadLink document={<Renderer/>} fileName='FORM'>
 {({loading})=>
    loading? (
        <button>Loading document..</button>
    ): (<button>Download</button>)
 }

      </PDFDownloadLink> */}
    </div>
  )
}
