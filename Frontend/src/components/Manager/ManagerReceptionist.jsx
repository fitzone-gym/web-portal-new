import React from "react";
import { FaPlus } from "react-icons/fa";

export const ManagerReceptionist = () => {
  return (
    <div
      class=""
      style={{
        position: "relative",
        top: -25,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 class="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Gym Receptionists
        </h1>
      </div>

      <div className="w-[100%]">
        <div class="grid grid-flow-col auto-cols-2 bg-blue-900 ml-20 pt-6 pb-6 rounded-t-lg">
          <div class="text-white text-2xl ">Receptionists Details</div>
          <div
            class=""
            style={{
              marginLeft: 600,
            }}
          ></div>

          <div class="">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ml-24 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                height: 45,
                marginLeft: "80%",
              }}
            >
              <svg
                class="w-4 h-4 text-white dark:text-white mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                />
              </svg>
              Export
            </button>
          </div>

          <div class="">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                height: 45,
                marginLeft:50,
              }}
            >
              <div class="mr-1">
                <FaPlus />
              </div>
              Add New
            </button>
          </div>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20">
          <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Receptionist name
                </th>
                <th scope="col" class="px-6 py-3">
                  Joined Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone No
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Jayani Ranasinghe
                </th>
                <td class="px-6 py-4">3 Septemebr 2023</td>
                <td class="px-6 py-4">jayaniransinghe98@gmail.com</td>
                <td class="px-6 py-4">0734609741</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                  >
                    View
                  </a>

                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <tr class="border-b bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lasith Senadheera
                </th>
                <td class="px-6 py-4">30 September 2023</td>
                <td class="px-6 py-4">lasith@gmail.com</td>
                <td class="px-6 py-4">0714667864</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                  >
                    View
                  </a>

                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

        <div class="grid grid-cols-2 ml-20 mt-8">
          {/* 1 box */}
          <div
            class="bg-[#222222] font-bold rounded-md text-left"
            style={{
              height: 490,
              width: 700,
            }}
          >
            <div className="text-2xl text-red-600 ml-8 py-3">
              <h1>New Member Appointments</h1>
            </div>
          </div>

          {/* 2 box */}
          <div
            class="bg-[#222222] font-bold rounded-md text-left"
            style={{
              height: 490,
              width: 740,
            }}
          >
            <div className="text-2xl text-red-600  ml-8 py-3">
              <h1>Monthly health checkup appointments</h1>
            </div>
          </div>
      
      </div>
    </div>
  );
};
