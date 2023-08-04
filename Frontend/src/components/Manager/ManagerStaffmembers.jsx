import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const ManagerStaffmembers = () => {
  return (
    <div
      class="w-[80%]"
      style={{
        position: "relative",
        top: -25,
        left: 4,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 class="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Staff members dashboard
        </h1>
      </div>

      <div class="w-[100%] grid grid-cols-3 gap-4 ml-[10%] mt-12">
        <div
          class="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl "
          style={{
            height: 210,
            width: 260,
          }}
        >
           <Link to="/Staffmembers/Trainer">
          <div class="ml-24 mt-16 text-6xl">
            <BsPeopleFill />
          </div>
          <h1 class="">Trainers</h1>
          </Link>
        </div>

        <div
          class="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl"
          style={{
            height: 210,
            width: 260,
          }}
        >
           <Link to="/Staffmembers/Doctor">
          <div class="mt-16 text-6xl"
           style={{
            marginLeft: 105,
          }}
          >
            <BsFillPersonPlusFill />
          </div>
          <h1 class="text-center">Doctor</h1>
          </Link>
        </div>

        <div
          class="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl"
          style={{
            height: 210,
            width: 260,
          }}
        >
            <Link to="/Staffmembers/Receptionist">
          <div class="ml-24 mt-16 text-6xl">
            <BsFillPersonFill />
          </div>
          <h1 class="text-center">Receptionist</h1>
          </Link>
        </div>

        <div
          class="bg-white font-bold text-2xl mt-10 rounded-xl"
          style={{
            height: 490,
            width: 590,
          }}
        >
          <h1 class="font-bold text-3xl text-center mt-10">
            Gym Staff Composition
          </h1>
        </div>
      </div>
    </div>
  );
};
