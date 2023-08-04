import React from "react";
import { MdOutlineGirl } from "react-icons/md";
import { MdOutlineBoy } from "react-icons/md";
import {images} from '../../constants';

export const ManagerDashboard = () => {
  return (
    <div
      className=""
      style={{
        position: "relative",
        top: -25,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="grid grid-cols-4 gap-4 ml-16 mt-12">
        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left rounded-md"
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Members</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members</p>
        </div>

        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">New Memberships</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">
            Monthly membership acquired{" "}
          </p>
        </div>

        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">
            Membership Cancellations
          </h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">
            Members cancelled their membership
          </p>
        </div>

        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">
            Total Staff Members
          </h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">
            Gym Staff Members
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 ml-16 mt-16 mt-8">
        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Doctor</h1>
          <p className="text-5xl ml-8 mt-4 text-white">1</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Doctors</p>
        </div>

        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Trainers</h1>
          <p className="text-5xl ml-8 mt-4 text-white">25</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Trainers</p>
        </div>

        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">
            Total Receptionist
          </h1>
          <p className="text-5xl ml-8 mt-4 text-white">1</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Receptionist</p>
        </div>

        <div
          className="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Revenue</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Monthly</p>
        </div>
      </div>

      {/* 3 row */}
      <div className="grid grid-cols-2 gap-4 ml-32 mt-8">
        {/* 1 box */}
        <div
          className="bg-[#222222] font-bold rounded-sm text-left max-lg:hidden w-[85%]"
          style={{
            height: 460,
     
          }}
        >
          <div className="text-2xl text-white ml-8 py-3">
            <h1>Total Revenue(weekly)</h1>
            {/* <img src={images.managerbgImage} alt="" /> */}
          </div>
        </div>

        {/* 2 box */}
        <div
          className="bg-[#222222] font-bold rounded-sm text-left max-lg:hidden w-[80%] h-[100%]"
          style={{
            // height: 460,
            // width: 560,
          }}
        >
          <div className="text-2xl text-white ml-8 py-3">
            <h1>Gym Member Compisition</h1>
            <div className="text-5xl">
              <div className="ml-16 mt-80">
                <MdOutlineGirl />
              </div>
              <div className="ml-96"
               style={{
                marginTop:-40,
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
