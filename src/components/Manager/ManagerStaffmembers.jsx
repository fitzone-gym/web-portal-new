import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { images } from "../../constants";

export const ManagerStaffmembers = () => {
  return (
    <div
      className="w-[80%]"
      style={{
        position: "fixed",
        top: 100,
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
     <div className="w-[100%] grid grid-cols-3 gap-7 ml-[8%] mt-12">
        <div
          className="bg-white font-bold text-2xl hover:bg-gray-500 border rounded-lg drop-shadow-md "
          style={{
            height: 220,
            width: 300,
          }}
        >
          <Link to="/Manager/Staffmembers/Trainer">
            <div className="mt-16 text-6xl flex justify-center items-center">
              <BsPeopleFill className="icon"/>
            </div>
            <h1 className=" ">Trainers</h1>
          </Link>
        </div>

        <div
          className="bg-white  font-bold text-2xl hover:bg-gray-500 border rounded-lg drop-shadow-md "
          style={{
            height: 220,
            width: 300,
          }}
        >
          <Link to="/Manager/Staffmembers/Doctor">
            <div
              className="mt-16 text-6xl flex justify-center items-center"
            >
              <BsFillPersonPlusFill className="icon ml-3" />
             
            </div>
            <h1 className=" ">Doctor</h1>
          </Link>
        </div>

        <div
          className="bg-white  font-bold text-2xl hover:bg-gray-500 border rounded-lg drop-shadow-md "
          style={{
            height: 220,
            width: 300,
          }}
        >
          <Link to="/Manager/Staffmembers/Receptionist">
            <div className="mt-16 text-6xl flex justify-center items-center">
              <BsFillPersonFill className="icon"/>
            </div>
            <h1 className="text-center ">Receptionist</h1>
          </Link>
        </div>
      </div>

        {/* 3 row */}
        <div className="grid grid-cols-3 ">
        {/* 1 box */}
        <div className=" mt-16">
          <img className="w-[58%] h-[95%]  ml-32" src={images.trainerImage} alt="" />
        </div>

        {/* 2 box */}
        <div className="">
            <img
              className="w-[58%] h-[83%] mt-16 ml-[26%]" src={images.managerdoctorImage} alt=""/>
        </div>

         {/* 3 box */}
         <div className="">
            <img
              className="w-[58%] h-[83%] mt-16 ml-36" src={images.recepImage} alt=""/>
        </div>
      </div>
   </div>
  );
};