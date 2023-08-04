import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";


export const ManagerPayment = () => {
  return (
    <div
      className="w-[80%]"
      style={{
        position: "relative",
        top: -25,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Payment dashboard
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 ml-40 mt-16 ">
        <div
          className="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl "
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Payment/TrainerPay">
            <div className="ml-24 mt-16 text-6xl">
              <BsPeopleFill />
            </div>
            <h1 className="">Trainers</h1>
          </Link>
        </div>

        <div
          className="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Payment/DoctorPay">
            <div
              className="mt-16 text-6xl"
              style={{
                marginLeft: 105,
              }}
            >
              <BsFillPersonPlusFill />
            </div>
            <h1 className="text-center">Doctor</h1>
          </Link>
        </div>

        <div
          className="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Payment/ReceptionistPay">
            <div className="ml-24 mt-16 text-6xl">
              <BsFillPersonFill />
            </div>
            <h1 className="text-center">Receptionist</h1>
          </Link>
        </div>

        <div
          className="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl "
          style={{
            height: 210,
            width: 260,
          }}
        >
          <Link to="/Payment/MemberPay">
            <div className="ml-24 mt-16 text-6xl">
              <IoIosPeople />
            </div>
            <h1 className="">Members</h1>
          </Link>
        </div>

        <div
          className="bg-white font-bold text-2xl mt-4 rounded-xl"
          style={{
            height: 490,
            width: 1090,
          }}
        >
          <h1 className="font-bold text-2xl text-left ml-10 mt-8">
            Monthly Revenue
          </h1>
        </div>
      </div>
    </div>
  );
};
