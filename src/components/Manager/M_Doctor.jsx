import React from "react";
import { FaPlus } from "react-icons/Fa"

export const M_Doctor = () => {
  return (
    <div
      className="bg-black opacity-90 "
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
           Gym Doctor
        </h1>
      </div>

      <div
        className="grid grid-flow-col auto-cols-2 bg-blue-900 ml-20 pt-6 rounded-t-lg"
        style={{
          width: 1759,
          height: 90,
        }}
      >
        <div className="text-white text-2xl ">Trainers Details</div>
        <div
          className="w-1/2 "
          style={{
            marginLeft: 600,
          }}
        >
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Name,Level..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  marginTop: -41,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ml-24 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              height: 45,
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
            }}
          >
            <div className="mr-1">
            <FaPlus />
            </div>
            Add New
          </button>
        </div>


      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg w-11/12 ml-20">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Trainer name
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
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kalani Ranasinghe
              </th>
              <td className="px-6 py-4">7th October 2022</td>
              <td className="px-6 py-4">kalanirana@gmail.com</td>
              <td className="px-6 py-4">0701237695</td>
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
                Damitha Senadheera
              </th>
              <td className="px-6 py-4">6th January 2020</td>
              <td className="px-6 py-4">damitha@gmail.com</td>
              <td className="px-6 py-4">0761234567</td>
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
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Walter Ranasinghe
              </th>
              <td className="px-6 py-4">12th September 2021</td>
              <td className="px-6 py-4">walter@gmail.com</td>
              <td className="px-6 py-4">0771234567</td>
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
  );
};
