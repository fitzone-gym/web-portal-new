import React from "react";

export const ManagerViewLeave = () => {
  return (
    <div
    className="w-[80%]"
      style={{
        position: "relative",
        top: -25,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <div>
        <h1 className="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Leave Requests
        </h1>
      </div>

      <div className="grid grid-rows-2 gap-4 ml-[-4%]">
      {/* First Row */}
      <div className="overflow-x-auto ml-16">
        <table
          className="w-full text-sm text-left text-white dark:text-gray-400 table-auto "
          style={{
            height: 160,
            width: "70%",
            marginLeft: "13%",
            marginTop: "1%",
            marginRight: "-22%",
          }}
        >
          <thead className="dark:text-gray-400">
            <tr className="text-white bg-[#222222] dark:bg-gray-800 divide-x divide-white">
              <th
                scope="row"
                className="px-20 py-4 font-semibold text-base whitespace-nowrap dark:text-white"
              >
                Request ID
              </th>
              <th className="px-20 py-4 font-semibold text-base ">010</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-white bg-[#222222] dark:bg-gray-800 border-y divide-x divide-white">
              <th
                scope="row"
                className="px-20 py-4 font-semibold text-base whitespace-nowrap dark:text-white"
              >
                Application Name
              </th>
              <td className="px-20 py-4 font-semibold text-base">
                Lasith Senadheera
              </td>
            </tr>
            <tr className="text-white bg-[#222222] dark:bg-gray-800 border-y divide-x divide-white">
              <th
                scope="row"
                className="px-20 py-4 font-semibold text-base whitespace-nowrap dark:text-white"
              >
                Request Date
              </th>
              <td className="px-20 py-4 font-semibold text-base">08/07/2023</td>
            </tr>
            <tr className="text-white bg-[#222222] dark:bg-gray-800 divide-x divide-white">
              <th
                scope="row"
                className="px-20 py-4 font-semibold text-base whitespace-nowrap dark:text-white"
              >
                Leave Type
              </th>
              <td className="px-20 py-4 font-semibold text-base">Sick Leave</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Second Row */}
      <div className="bg-[#333333] text-white rounded-md ml-64 mt-12 ">
        <p
          className="text-left text-lg py-6 px-6"
          style={{
            marginLeft: "2.5%",
            width: "95%",
          }}
        >
          Dear Trainers, Exciting news! We're introducing new training programs
          and workshops to enhance our members' fitness journey. Your dedication
          has been crucial to our success, and we encourage your active
          participation and ideas. Special training sessions for your growth are
          on the way. Let's work together to create an unmatched fitness
          experience. Thank you for your commitment.
        </p>

        <p className="text-left text-lg py-4 px-6 ml-7" style={{ marginTop: "-2%" }}>
          Jayani
        </p>
        <p className="text-left text-lg py-4 px-6" style={{ marginTop: "-2.5%", marginLeft: "2%" }}>
          Gym Manager
        </p>
      </div>

        <div className="mt-24">
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            style={{
              height: 35,
              width: "9%",
              marginRight: "3%",
              marginTop: "0%",
            }}
          >
            <div
              className=""
              style={{
                marginLeft: "18%",
                fontSize: "99%",
              }}
            >
              Approve
            </div>
          </button>

          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            style={{
              height: 35,
              width: "9%",
              marginRight: "-42%",
              marginTop: "-3%",
            }}
          >
            <div
              style={{
                marginLeft: "25%",
              }}
            >
              Decline
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
