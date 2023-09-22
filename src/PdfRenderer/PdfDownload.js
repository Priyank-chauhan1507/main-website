import React from 'react'
import { PDFDownloadLink,PDFViewer } from "@react-pdf/renderer";
import Renderer from "./Renderer"
import "./Pdfcss.css"
export default function PdfDownload() {
  return (
    <>
    <div className = "laptop">
      <PDFViewer style={{width:"100vw", height:"100vh"}}>
    <Renderer />
  </PDFViewer>
  </div>
  <div className="mobile">
    <div>
      <PDFDownloadLink document={<Renderer/>} fileName='FORM'>
 {({loading})=>
    loading? (
        <button>Loading document..</button>
    ): (<button>Download</button>)
 }

      </PDFDownloadLink></div>
      </div>
      </>
  )
}
