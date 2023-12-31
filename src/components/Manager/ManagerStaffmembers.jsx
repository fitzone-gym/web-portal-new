import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { images } from "../../constants";

export const ManagerStaffmembers = () => {
  return (
    <div
      className=""
      style={{
        marginRight: "20px",
        marginLeft: "17%",
        marginTop: "130px",
        textAlign: "center",
      }}
    >
      <div className="w-[100%] grid grid-cols-3 gap-7 ml-[8%] mt-12">
        <div
          className="bg-white font-bold text-2xl hover:bg-yellow-50 border rounded-lg drop-shadow-md "
          style={{
            height: 150,
            width: 300,
            borderWidth: 2,
            borderColor: "#3A4D39",
          }}
        >
          <Link to="/Manager/Staffmembers/Trainer">
            <div
              className="mt-7 text-6xl flex justify-center items-center"
              style={{ color: "#3A4D39" }}
            >
              <BsPeopleFill className="icon" />
            </div>
            <h1 className=" " style={{ color: "#3A4D39" }}>
              Trainers
            </h1>
          </Link>
        </div>

        <div
          className="bg-white  font-bold text-2xl  border rounded-lg drop-shadow-md "
          style={{
            height: 150,
            width: 300,
            borderWidth: 2,
            borderColor: "#124e78",
          }}
        >
          <Link to="/Manager/Staffmembers/Doctor">
            <div
              className="mt-7 text-6xl flex justify-center items-center"
              style={{ color: "#124e78" }}
            >
              <BsFillPersonFill className="icon ml-3" />
            </div>
            <h1 className=" " style={{ color: "#124e78" }}>
              Doctor
            </h1>
          </Link>
        </div>

        <div
          className="bg-white  font-bold text-2xl  border rounded-lg drop-shadow-md "
          style={{
            height: 150,
            width: 300,
            borderWidth: 2,
            borderColor: "#9b9c64",
          }}
        >
          <Link to="/Manager/Staffmembers/Receptionist">
            <div
              className="mt-7 text-6xl flex justify-center items-center"
              style={{ color: "#d0d1ab" }}
            >
              <BsFillPersonPlusFill className="icon" />
            </div>
            <h1 className="text-center " style={{ color: "#d0d1ab" }}>
              Receptionist
            </h1>
          </Link>
        </div>
      </div>
      {/* 3 row */}
      <div className="grid grid-cols-3 ">
        {/* 1 box */}
        <div className=" mt-16">
          <img
            className="w-[58%] h-[95%]  ml-32"
            src={images.trainerImage}
            alt=""
          />
        </div>

        {/* 2 box */}
        <div className="">
          <img
            className="w-[58%] h-[83%] mt-16 ml-[26%]"
            src={images.managerdoctorImage}
            alt=""
          />
        </div>

        {/* 3 box */}
        <div className="">
          <img
            className="w-[58%] h-[83%] mt-16 ml-36"
            src={images.recepImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};