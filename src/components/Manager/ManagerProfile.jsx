import React from "react";
import priofileimg from "../../assets/managerprofile.jpg";

export const ManagerProfile = () => {
  return (
    <div
      className="w-[80%] py-12 flex items-center"
      style={{
        position: "relative",
        top: 10,
        left: 0,
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
        className="w-[43%] h-[36%] mb-4 border-white border-2"
        style={{
          borderRadius: "50%",
        }}
      />
      <h2 className="text-white font-semibold text-5xl mb-3">Jayani Ivanthika Ranasinghe</h2>
      <p className="text-white font-semibold text-3xl mb-24" >
        Gym Manager
      </p>
      <div  className="text-lg"
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
          <p>Email: jayanirana@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div
          style={{
            padding: "30px",
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
          }}
        >
          <h3 className="font-semibold">Information</h3>
          <p>NIC: 2000093093</p>
          <p>DOB: 30 th Sep 2000</p>
        </div>
        <div
          style={{
            padding: "30px",
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
          }}
        >
          <h3 className="font-semibold">Location</h3>
          <p>City: Flower road,Hidellana</p>
          <p>Colombo</p>
        </div>
      </div>
    </div>
  );
};
