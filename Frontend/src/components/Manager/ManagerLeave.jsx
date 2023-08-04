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
        <h1 className="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Leave Requests
        </h1>
      </div>

      <div className="relative overflow-x-auto">
        <table
          className="w-full text-sm text-left text-white dark:text-gray-400 table-auto "
          style={{
            height: 160,
            width: "87%",
            marginLeft: "10%",
            marginTop: "1%",
            marginRight: "-22%",
          }}
        >
          <thead className="text-base text-white uppercase dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Reason
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Applied Date
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-white bg-[#333333] dark:bg-gray-800 border-white ">
              <th
                scope="row"
                className="px-6 py-4 font-base text-base whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Lasith</td>
              <td className="px-6 py-4">30 September 2023</td>
              <td className="px-6 py-4">
                <div className="">
                <button
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
                  </button>

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
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
                      height: 30,
                      width: "23%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "21%",
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
                className="px-6 py-4 font-base text-base whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">Lasith</td>
              <td className="px-6 py-4">30 September 2023</td>
              <td className="px-6 py-4">
                <div className="">
                <button
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
                  </button>

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                        marginLeft: "18%",
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
                      width: "23%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "21%",
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
                className="px-6 py-4 font-base text-base whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Lasith</td>
              <td className="px-6 py-4">30 September 2023</td>
              <td className="px-6 py-4">
                <div className="">
                <button
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
                  </button>

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                        marginLeft: "18%",
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
                      width: "23%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "21%",
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
                className="px-6 py-4 font-base text-base whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Lasith</td>
              <td className="px-6 py-4">30 September 2023</td>
              <td className="px-6 py-4">
                <div className="">
                <button
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
                  </button>

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                        marginLeft: "18%",
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
                      width: "23%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "21%",
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
                className="px-6 py-4 font-base text-base whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Lasith</td>
              <td className="px-6 py-4">30 September 2023</td>
              <td className="px-6 py-4">
                <div className="">
                <button
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
                  </button>

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                        marginLeft: "18%",
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
                      width: "23%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "21%",
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
                className="px-6 py-4 font-base text-base whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Lasith</td>
              <td className="px-6 py-4">30 September 2023</td>
              <td className="px-6 py-4">
                <div className="">
                <button
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
                  </button>

                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                        marginLeft: "18%",
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
                      width: "23%",
                      marginRight: "-62%",
                      marginTop: "-3%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "21%",
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
