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
        position: "relative",
        top: 50,
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-red-600 text-5xl text-left ml-32 mt-16 mb-10">
          Payment Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 ml-40 mt-16 ">
        <div
          className="bg-[#222222] font-bold text-2xl hover:bg-gray-900 hover:underline  border border-white/[.5]"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Manager/Payment/TrainerPay">
            <div className="mt-16 text-6xl flex justify-center items-center flex justify-center items-center">
              <BsPeopleFill className="icon"
              style={{
                color:"white"
              }}/>
            </div>
            <h1 className="text-white text-center">Trainers</h1>
          </Link>
        </div>

        <div
          className="bg-[#222222] font-bold text-2xl hover:bg-gray-900 hover:underline border border-white/[.5]"
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
              <BsFillPersonPlusFill className="icon"
              style={{
                color:"white"
              }}/>
            </div>
            <h1 className="text-center text-white">Doctor</h1>
          </Link>
        </div>

        <div
          className="bg-[#222222] font-bold text-2xl hover:bg-gray-900 hover:underline border border-white/[.5]"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Manager/Payment/ReceptionistPay">
            <div className=" mt-16 text-6xl flex justify-center items-center">
              <BsFillPersonFill className="icon"
              style={{
                color:"white"
              }}/>
            </div>
            <h1 className="text-center text-white">Receptionist</h1>
          </Link>
        </div>

        <div
          className="bg-[#222222] font-bold text-2xl hover:bg-gray-900 hover:underline border border-white/[.5] "
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Manager/Payment/MemberPay">
            <div className=" mt-16 text-6xl flex justify-center items-center">
              <IoIosPeople className="icon"
              style={{
                color:"white"
              }}/>
            </div>
            <h1 className="text-white text-center">Members</h1>
          </Link>
        </div>

        <div
          className=" font-bold text-2xl mt-4 "
          style={{
            height: 490,
            width: 1090,
          }}
        >
          <h1 className="text-white font-bold text-2xl text-left ml-10 mt-8">
            Monthly Revenue
          </h1>
          <img className=" h-96 mt-10 ml-8" src={images.revenueImage} alt="" /> 
        </div>
      </div>
    </div>
  );
};
