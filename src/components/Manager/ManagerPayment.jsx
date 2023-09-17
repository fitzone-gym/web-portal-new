import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import {images} from '../../constants';

export const ManagerPayment = () => {
  return (
    <div
      className="w-[80%]"
      style={{
        position: "fixed",
        top: 140,
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="grid grid-cols-4 gap-4 ml-40 mt-16 ">
        <div
          className="bg-white drop-shadow-md font-bold text-2xl hover:bg-gray-500 hover:underline  border border-white/[.5]"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Manager/Payment/TrainerPay">
            <div className="mt-16 text-6xl flex justify-center items-center flex justify-center items-center">
              <BsPeopleFill className="icon"/>
            </div>
            <h1 className=" text-center">Trainers</h1>
          </Link>
        </div>

        <div
          className="bg-white drop-shadow-md font-bold text-2xl hover:bg-gray-500 hover:underline border border-white/[.5]"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Manager/Payment/DoctorPay">
            <div
              className="mt-16 text-6xl"
              style={{
                marginLeft: 105,
              }}
            >
              <BsFillPersonPlusFill className="icon"/>
            </div>
            <h1 className="text-center ">Doctor</h1>
          </Link>
        </div>

        <div
          className="bg-white drop-shadow-md font-bold text-2xl hover:bg-gray-500 hover:underline border border-white/[.5]"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Manager/Payment/ReceptionistPay">
            <div className=" mt-16 text-6xl flex justify-center items-center">
              <BsFillPersonFill className="icon"/>
            </div>
            <h1 className="text-center ">Receptionist</h1>
          </Link>
        </div>

        <div
          className="bg-white drop-shadow-md font-bold text-2xl hover:bg-gray-500 hover:underline border border-white/[.5] "
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Manager/Payment/MemberPay">
            <div className=" mt-16 text-6xl flex justify-center items-center">
              <IoIosPeople className="icon"/>
            </div>
            <h1 className=" text-center">Members</h1>
          </Link>
        </div>

        <div
          className=" font-bold text-2xl mt-4 "
          style={{
            height: 490,
            width: 1090,
          }}
        >
          <h1 className="font-bold text-3xl text-left ml-10 mt-8">
            Monthly Revenue
          </h1>
          <img className=" h-96 mt-10 ml-8" src={images.revenueImage} alt="" /> 
        </div>
      </div>
    </div>
  );
};
