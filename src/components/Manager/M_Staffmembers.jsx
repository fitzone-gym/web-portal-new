import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

export const M_Staffmembers = () => {
  return (
    <div
      class="bg-black opacity-90"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 class="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Staff members dashboard
        </h1>
      </div>

      <div class="grid grid-cols-3 gap-4 ml-72 mt-16 ">
        <div
          class="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <div class="ml-24 mt-16 text-6xl">
            <BsPeopleFill />
          </div>
          <h1 class="">Trainers</h1>
        </div>

        <div
          class="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <div class="mt-16 text-6xl"
           style={{
            marginLeft: 105,
          }}
          >
            <BsFillPersonPlusFill />
          </div>
          <h1 class="text-center">Doctor</h1>
        </div>

        <div
          class="bg-white font-bold text-2xl hover:bg-gray-400 hover:underline rounded-xl"
          style={{
            height: 210,
            width: 260,
          }}
        >
          <div class="ml-24 mt-16 text-6xl">
            <BsFillPersonFill />
          </div>
          <h1 class="text-center">Receptionist</h1>
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
