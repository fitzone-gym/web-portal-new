import React from "react";
import { FaPlus } from "react-icons/fa";
import {images} from '../../constants';

export const ManagerReceptionist = () => {
  return (
    <div
      className=""
      style={{
        position: "relative",
        top: 50,
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-5xl text-left ml-20 mt-16 mb-10">
          Gym Receptionists
        </h1>
      </div>

      <div className="w-[105%]">
        <div className="grid grid-flow-col auto-cols-2 bg-neutral-700 ml-20 pt-6 pb-6 rounded-t-lg">
          <div className="text-white text-2xl ">Receptionists Details</div>
          <div
            className=""
            style={{
              marginLeft: 600,
            }}
          ></div>

          <div className="">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ml-24 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                height: 45,
                marginLeft: "80%",
              }}
            >
              <svg
                className="w-4 h-4 text-white dark:text-white mr-1"
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

          <div className="">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                height: 45,
                marginLeft:50,
              }}
            >
              <div className="mr-1">
                <FaPlus />
              </div>
              Add New
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Receptionist name
                </th>
                <th scope="col" className="px-6 py-3">
                  Joined Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone No
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Jayani Ranasinghe
                </th>
                <td className="px-6 py-4">3 Septemebr 2023</td>
                <td className="px-6 py-4">jayaniransinghe98@gmail.com</td>
                <td className="px-6 py-4">0734609741</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                  >
                    View
                  </a>

                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <tr className="border-b bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lasith Senadheera
                </th>
                <td className="px-6 py-4">30 September 2023</td>
                <td className="px-6 py-4">lasith@gmail.com</td>
                <td className="px-6 py-4">0714667864</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                  >
                    View
                  </a>

                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

        <div className="grid grid-cols-2 ml-20 mt-8">
          {/* 1 box */}
          <div
            className="font-bold rounded-md text-left"
            style={{
              height: 490,
              width: 700,
            }}
          >
            <div className="text-3xl ml-8 py-5">
              <h1>New Member Appointments</h1>
              <img className="w-[100%] h-88 mt-12 ml-12 " src={images.revenueImage} alt="" /> 
            </div>
          </div>

          {/* 2 box
          <div
            className="bg-[#222222] font-bold rounded-md text-left"
            style={{
              height: 490,
              width: 740,
            }}
          >
            <div className="text-2xl text-white  ml-8 py-3">
              <h1>Monthly health checkup appointments</h1>
            </div>
          </div>
       */}
      </div>
    </div>
  );
};
