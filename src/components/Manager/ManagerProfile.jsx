import axios from "axios";
import React, { useEffect, useState } from "react";
import priofileimg from "../../assets/managerprofile.jpg";

export const ManagerProfile = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:5400/profile/10013").then((res) => {
      console.log(res.data.data[0]);
      setData(res.data.data[0]);
    });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    return formattedDate;
  };
  return (
    <div
      className="w-[80%] py-12 flex items-center"
      style={{
        position: "fixed",
        top: 140,
        left: 300,
        right: 0,
        bottom: 0,
        maxWidth: "800px",
        margin: "0 auto",
        flexDirection: "column",
      }}
    >
      <img
        src={priofileimg}
        alt="Profile"
        className="w-[38%] h-[38%] mb-12 border-white border-2"
        style={{
          borderRadius: "50%",
        }}
      />
      <h2 className=" font-semibold text-5xl mb-3">
        {data?.first_name + " " + data?.last_name}
      </h2>
      <p className=" font-semibold text-3xl mb-24">Gym Manager</p>
      <div
        className="text-lg"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "50px",
          width: "150%",
        }}
      >
        <div
          style={{
            padding: "30px",
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
          }}
        >
          <h3 className="font-semibold">Contact</h3>
          <p>Email: {data?.email}</p>
          <p>Phone: {data?.phone_no}</p>
        </div>
        <div
          style={{
            padding: "30px",
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
          }}
        >
          <h3 className="font-semibold">Information</h3>
          <p>NIC: {data?.nic}</p>
          <p>DOB: {formatDate(data?.DOB || new Date())}</p>
        </div>
        <div
          style={{
            padding: "30px",
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
          }}
        >
          <h3 className="font-semibold">Location</h3>
          <p>City: {data?.address}</p>
          {/* <p>Colombo</p> */}
        </div>
      </div>
    </div>
  );
};
