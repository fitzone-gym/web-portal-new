import React from "react";


export const ManagerLeave = () => {
  return (
    <div
      className="w-[80%]"
      style={{
        position: "relative",
        top: -25,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-red-600 text-5xl text-left ml-24 mt-16 mb-10">
          Leave Requests
        </h1>
      </div>

      <div className="relative w-[30%] ml-[68%]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 "
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
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by name"
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

      <div className="relative overflow-x-auto">
        <table
          className="w-full text-sm text-left text-white dark:text-gray-400 table-auto "
          style={{
            height: 160,
            width: "87%",
            marginLeft: "8%",
            marginTop: "3%",
            marginRight: "-22%",
          }}
        >
          <thead className="text-base text-white dark:text-gray-400  text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                Reason
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Request Date
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Remaining leaves
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-white bg-[#333333] dark:bg-gray-800 border-white">
              <th
                scope="row"
                className="px-6 py-4  whitespace-nowrap dark:text-white  text-center"
              >
                Sick leave
              </th>
              <td className="px-6 py-4  text-center">Lasith</td>
              <td className="px-6 py-4  text-center">30 September</td>
              <td className="px-6 py-4  text-center">3rd to 6th October</td>
              <td className="px-6 py-4  text-center">5 days</td>
              <td className="px-6 py-4">
                <div className="">
                  {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "23%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "30%",
                        fontSize: "99%",
                      }}
                    >
                      View
                    </div>
                  </button> */}

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "9%",
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
                      height: 30,
                      width: "40%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15%",
                      }}
                    >
                      Decline
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="text-white bg-[#222222] dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4  whitespace-nowrap dark:text-white  text-center"
              >
                Sick leave
              </th>
              <td className="px-6 py-4  text-center">Lasith</td>
              <td className="px-6 py-4  text-center">30 September</td>
              <td className="px-6 py-4  text-center">3rd to 6th October</td>
              <td className="px-6 py-4  text-center">5 days</td>
              <td className="px-6 py-4 ">
                <div className="">
                  {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "23%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "30%",
                        fontSize: "99%",
                      }}
                    >
                      View
                    </div>
                  </button> */}

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "9%",
                      }}
                    >
                      Approve
                    </div>
                  </button>

                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15%",
                      }}
                    >
                      Decline
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="text-white bg-[#333333] dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4  whitespace-nowrap dark:text-white  text-center"
              >
                Sick leave
              </th>
              <td className="px-6 py-4  text-center">Lasith</td>
              <td className="px-6 py-4  text-center">30 September</td>
              <td className="px-6 py-4  text-center">3rd to 6th October</td>
              <td className="px-6 py-4  text-center">5 days</td>
              <td className="px-6 py-4">
                <div className="">
                  {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "30%",
                        fontSize: "99%",
                      }}
                    >
                      View
                    </div>
                  </button> */}

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "9%",
                      }}
                    >
                      Approve
                    </div>
                  </button>

                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15%",
                      }}
                    >
                      Decline
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="text-white bg-[#222222] dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4  whitespace-nowrap dark:text-white text-center"
              >
                Sick leave
              </th>
              <td className="px-6 py-4 text-center">Lasith</td>
              <td className="px-6 py-4 text-center">30 September</td>
              <td className="px-6 py-4 text-center">3rd to 6th October</td>
              <td className="px-6 py-4 text-center">5 days</td>
              <td className="px-6 py-4">
                <div className="">
                  {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "30%",
                        fontSize: "99%",
                      }}
                    >
                      View
                    </div>
                  </button> */}

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "9%",
                      }}
                    >
                      Approve
                    </div>
                  </button>

                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15%",
                      }}
                    >
                      Decline
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="text-white bg-[#333333] dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4  whitespace-nowrap dark:text-white text-center"
              >
                Sick leave
              </th>
              <td className="px-6 py-4 text-center">Lasith</td>
              <td className="px-6 py-4 text-center">30 September</td>
              <td className="px-6 py-4 text-center">3rd to 6th October</td>
              <td className="px-6 py-4 text-center">5 days</td>
              <td className="px-6 py-4">
                <div className="">
                  {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "30%",
                        fontSize: "99%",
                      }}
                    >
                      View
                    </div>
                  </button> */}

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "9%",
                      }}
                    >
                      Approve
                    </div>
                  </button>

                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "15%",
                      }}
                    >
                      Decline
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="text-white bg-[#222222] dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4  whitespace-nowrap dark:text-white text-center"
              >
                Sick leave
              </th>
              <td className="px-6 py-4 text-center">Lasith</td>
              <td className="px-6 py-4 text-center">30 September</td>
              <td className="px-6 py-4 text-center">3rd to 6th October</td>
              <td className="px-6 py-4 text-center">5 days</td>
              <td className="px-6 py-4 ">
                <div className="">
                  {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                    rounded-md px-6 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "23%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "30%",
                        fontSize: "99%",
                      }}
                    >
                      View
                    </div>
                  </button> */}

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "6%",
                      marginTop: "0%",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginLeft: "9%",
                      }}
                    >
                      Approve
                    </div>
                  </button>

                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    style={{
                      height: 30,
                      width: "40%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "%",
                      }}
                    >
                      Decline
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
