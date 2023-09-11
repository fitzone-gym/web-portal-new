import React, { useRef, useState, useEffect } from "react";


import Header from "../../components/Receptionist/header";
import Sidenav from "../../components/Receptionist/sidenav";
import "../../styles/Receptionist/contactUsSubmitions.css";




function D_MemberList() {
 

  // const handleSubmit = (e, requestId) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);

  //   const data = {};
  //   formData.forEach((value, key) => {
  //     data[key] = value;
  //   });

  //   data.replySubmitionID = requestId;

  //   console.log("the dataset", data);
  //   axios
  //     .post(
  //       "http://localhost:5400/contactUsSubmition/contactUsFormReplySubmition",
  //       data
  //     )

  //     .then((response) => {
  //       console.log("Data submitted successfully to backend", response.data);
  //       // Update reply_or_not_state after successful submission
  //       updateReplyStatus(requestId);

  //       sendEmail(data, requestId);

  //       setExpandedRequests((prevExpanded) => ({
  //         ...prevExpanded,
  //         [requestId]: false,
  //       }));
  //     })
  //     .catch((error) => {
  //       console.log("Error submitting data", error);
  //     });
  // };

 

  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />
        
          
      </div>
    </>
  );
}

export default D_MemberList;
