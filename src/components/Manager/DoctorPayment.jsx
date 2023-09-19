import React from "react";

export const DoctorPayment = () => {
  return (
    <div
      className="w-[80%] "
      style={{
        position: "fixed",
        top: 50,
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-5xl text-left ml-20 mt-16 mb-10">
          Doctor Payment Records
        </h1>
      </div>

      <div className="w-[100%]">
      <div
        className="grid grid-flow-col auto-cols-2 bg-neutral-700 ml-20 pt-6 pb-6 rounded-t-lg"
       
      >
        <div className="text-white text-2xl ml-[-52%]">Doctor Payment Details</div>
        <div className="mr-[-32%]">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ml-[23%] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Doctor name
              </th>
              <th scope="col" className="px-6 py-3">
                Paid Date
              </th>
              <th scope="col" className="px-6 py-3">
                Fixed Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Other Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Paid
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
              <td className="px-6 py-4">200 000</td>
              <td className="px-6 py-4">100 000</td>
              <td className="px-6 py-4">300 000</td>
              <td className="px-6 py-4">paid</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
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
              <td className="px-6 py-4">200 000</td>
              <td className="px-6 py-4">100 000</td>
              <td className="px-6 py-4">300 000</td>
              <td className="px-6 py-4">paid</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
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
              <td className="px-6 py-4">200 000</td>
              <td className="px-6 py-4">100 000</td>
              <td className="px-6 py-4">300 000</td>
              <td className="px-6 py-4">paid</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
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
              <td className="px-6 py-4">200 000</td>
              <td className="px-6 py-4">100 000</td>
              <td className="px-6 py-4">300 000</td>
              <td className="px-6 py-4">paid</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
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
              <td className="px-6 py-4">200 000</td>
              <td className="px-6 py-4">100 000</td>
              <td className="px-6 py-4">300 000</td>
              <td className="px-6 py-4">paid</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};
