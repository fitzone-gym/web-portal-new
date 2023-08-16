import React from "react";

export const M_Members = () => {
  return (
    <div
      class="bg-black opacity-90 "
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
         Gym Members
        </h1>
      </div>

      <div
        class="grid grid-flow-col auto-cols-2 bg-blue-900 ml-20 pt-6 rounded-t-lg"
        style={{
          width: 1759,
          height: 90,
        }}
      >
        <div class="text-white text-2xl ">Member Details</div>
        <div
          class="w-1/2 "
          style={{
            marginLeft: 600,
          }}
        >
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Name,Level..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  marginTop: -41,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div class="">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              height: 45,
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
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-b-lg w-11/12 ml-20">
        <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Member name
              </th>
              <th scope="col" class="px-6 py-3">
                Joined Date
              </th>
              <th scope="col" class="px-6 py-3">
                Package Type
              </th>
              <th scope="col" class="px-6 py-3">
                Performance level
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
              <td class="px-6 py-4">1 Month</td>
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
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
              <td class="px-6 py-4">6 Months</td>
              <td class="px-6 py-4">4</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kalani Ranasinghe
              </th>
              <td class="px-6 py-4">7th October 2022</td>
              <td class="px-6 py-4">Annual</td>
              <td class="px-6 py-4">2</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
            <tr class="border-b bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Damitha Senadheera
              </th>
              <td class="px-6 py-4">6th January 2020</td>
              <td class="px-6 py-4">Annual</td>
              <td class="px-6 py-4">3</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Walter Ranasinghe
              </th>
              <td class="px-6 py-4">12th September 2021</td>
              <td class="px-6 py-4">6 Months</td>
              <td class="px-6 py-4">3</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};