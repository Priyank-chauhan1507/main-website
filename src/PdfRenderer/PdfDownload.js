import React, { useEffect, useState } from 'react'
import { PDFDownloadLink,PDFViewer } from "@react-pdf/renderer";
import Renderer from "./Renderer"
import { connect } from "react-redux";
import { fetchUser, logout } from "../components/User/UserActions";
import { Store } from "../Config/Store";
import "./Pdfcss.css"
 const PdfDownload =({data,items})=> {
  // const { userDetails: user, loading } = props;

  // const func=()=>{
  //   const { dispatch } = Store;
  //   dispatch(fetchUser());
  // }
  return (
    <>
    <div className = "laptop">
      <PDFViewer style={{width:"100vw", height:"100vh"}}>
    <Renderer user={data} items={items}/>
  </PDFViewer>
  </div> 
  <div className="mobile">
    <div>
      <PDFDownloadLink document={<Renderer user={data} items={items}/>} fileName='Id Card'>
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
// const mapStateToProps = (state) => {
//   let userDetails = state.user.user;
//   let loading = state.user.loading;

//   return {
//     userDetails,
//     loading,
//   };
// };
export default PdfDownload;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: (params) => dispatch(fetchUser(params)),
//     logouts: (params) => dispatch(logout(params)),
//   };
// };

// export default connect(mapStateToProps)(PdfDownload);
