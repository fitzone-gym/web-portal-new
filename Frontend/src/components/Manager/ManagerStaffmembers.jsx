import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { MdOutlineGirl } from "react-icons/md";
import { MdOutlineBoy } from "react-icons/md";

export const ManagerStaffmembers = () => {
  return (
    <div
      className="w-[80%]"
      style={{
        position: "relative",
        top: 50,
        left: 250,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-5xl text-left ml-32 mt-16 mb-10 text-red-600">
          Staff Members Dashboard
        </h1>
      </div>

      <div className="w-[100%] grid grid-cols-3 gap-4 ml-[10%] mt-12">
        <div
          className="bg-[#222222] font-bold text-2xl hover:bg-gray-900 border border-white/[.5] "
          style={{
            height: 220,
            width: 350,
          }}
        >
          <Link to="/Manager/Staffmembers/Trainer">
            <div className="mt-16 text-6xl flex justify-center items-center">
              <BsPeopleFill className="icon"
              style={{
                color:"white"
              }}/>
            </div>
            <h1 className=" text-white">Trainers</h1>
          </Link>
        </div>

        <div
          className="bg-[#222222]  font-bold text-2xl hover:bg-gray-900 border border-white/[.5] "
          style={{
            height: 220,
            width: 350,
          }}
        >
          <Link to="/Manager/Staffmembers/Doctor">
            <div
              className="mt-16 text-6xl flex justify-center items-center"
            >
              <BsFillPersonPlusFill className="icon ml-3"
              style={{
                color:"white"
              }}/>
            </div>
            <h1 className=" text-white">Doctor</h1>
          </Link>
        </div>

        <div
          className="bg-[#222222]  font-bold text-2xl hover:bg-gray-900 border border-white/[.5] "
          style={{
            height: 220,
            width: 350,
          }}
        >
          <Link to="/Manager/Staffmembers/Receptionist">
            <div className="mt-16 text-6xl flex justify-center items-center">
              <BsFillPersonFill className="icon"
              style={{
                color:"white"
              }}/>
            </div>
            <h1 className="text-center text-white">Receptionist</h1>
          </Link>
        </div>
      </div>

        {/* 3 row */}
        <div className="grid grid-cols-2 ml-28 mt-8">
        {/* 1 box */}
        <div
          className="font-bold text-2xl mt-16"
          style={{
            height: 490,
            width: 590,
          }}
        >
          <h1 className="text-white font-bold text-2xl text-center">
            Gym Staff Composition
          </h1>
          <img className="w-80 h-80 mt-10 ml-44" src={images.stfcompImage} alt="" />
        </div>

        {/* 2 box */}
        <div className="font-bold rounded-sm text-left max-lg:hidden w-[100%]">
          <div className="text-2xl text-white ml-28 mt-[7%] py-3">
            <h1>Gym Member Compisition</h1>
            <img
              className="w-[50%] h-88 mt-10 ml-12"
              src={images.memcompositionImage}
              alt=""
            />
            <div className="text-5xl">
              <div className=" mt-[-6%]">
                <MdOutlineGirl />
              </div>
              <div
                className="ml-96"
                style={{
                  marginTop: -40,
                }}
              >
                <MdOutlineBoy />
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};
