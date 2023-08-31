import React from "react";
import priofileimg from "../../assets/managerprofile.jpg";

export const ManagerLeave = () => {
  return (
    <div
      className="w-[80%]"
      style={{
        position: "fixed",
        top: 160,
        left: 300,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="w-[93%]">
        <div className="pt-6 pb-6 ml-[73%] w-[20%]">
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-[-24%]">
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
                type="text"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-[130%] ml-[-25%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Name,Package Type..."
                required
              />
              <button
                type="submit"
                className="mr-[-5%] text-white absolute right-2.5 w-18 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20">
          <table
            className="w-full text-sm text-left text-gray-500  "
            // style={{
            //   height: 160,
            //   width: "87%",
            //   marginLeft: "8%",
            //   marginTop: "3%",
            //   marginRight: "-22%",
            // }}
          >
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-20 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
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
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900  whitespace-nowrap dark:text-white ml-[10%]"
                >
                  <img
                    className="h-10 w-10 rounded-full ml-14"
                    src={priofileimg}
                    alt=""
                  />
                  <div className="pl-28 mt-[-12%]">
                    <div className="text-base font-semibold">
                      Jayani Ranasinghe
                    </div>
                    <div className="font-normal text-gray-500">
                      jayaniranasingh@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 ">Sick leave</td>
                <td className="px-6 py-4 ">30 September</td>
                <td className="px-6 py-4 ">3rd to 6th October</td>
                <td className="px-6 py-4 ">5 days</td>
                <td className="px-6 py-4">
                  <div className="">
                    {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
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
                      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                    rounded-md px-2 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4  whitespace-nowrap dark:text-white"
                >
                 <img
                    className="h-10 w-10 rounded-full ml-14"
                    src={priofileimg}
                    alt=""
                  />
                  <div className="pl-28 mt-[-12%]">
                    <div className="text-base font-semibold">
                      Jayani Ranasinghe
                    </div>
                    <div className="font-normal text-gray-500">
                      jayaniranasingh@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">Sick leave</td>
                <td className="px-6 py-4">30 September</td>
                <td className="px-6 py-4">3rd to 6th October</td>
                <td className="px-6 py-4">5 days</td>
                <td className="px-6 py-4 ">
                  <div className="">
                    {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
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
                      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4  whitespace-nowrap dark:text-white "
                >
                 <img
                    className="h-10 w-10 rounded-full ml-14"
                    src={priofileimg}
                    alt=""
                  />
                  <div className="pl-28 mt-[-12%]">
                    <div className="text-base font-semibold">
                      Jayani Ranasinghe
                    </div>
                    <div className="font-normal text-gray-500">
                      jayaniranasingh@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">Sick leave</td>
                <td className="px-6 py-4">30 September</td>
                <td className="px-6 py-4">3rd to 6th October</td>
                <td className="px-6 py-4">5 days</td>
                <td className="px-6 py-4">
                  <div className="">
                    {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
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
                      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4  whitespace-nowrap dark:text-white"
                >
                 <img
                    className="h-10 w-10 rounded-full ml-14"
                    src={priofileimg}
                    alt=""
                  />
                  <div className="pl-28 mt-[-12%]">
                    <div className="text-base font-semibold">
                      Jayani Ranasinghe
                    </div>
                    <div className="font-normal text-gray-500">
                      jayaniranasingh@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">Sick leave</td>
                <td className="px-6 py-4">30 September</td>
                <td className="px-6 py-4">3rd to 6th October</td>
                <td className="px-6 py-4">5 days</td>
                <td className="px-6 py-4">
                  <div className="">
                    {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
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
                      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4  whitespace-nowrap dark:text-white"
                >
                 <img
                    className="h-10 w-10 rounded-full ml-14"
                    src={priofileimg}
                    alt=""
                  />
                  <div className="pl-28 mt-[-12%]">
                    <div className="text-base font-semibold">
                      Jayani Ranasinghe
                    </div>
                    <div className="font-normal text-gray-500">
                      jayaniranasingh@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">Sick leave</td>
                <td className="px-6 py-4">30 September</td>
                <td className="px-6 py-4">3rd to 6th October</td>
                <td className="px-6 py-4">5 days</td>
                <td className="px-6 py-4">
                  <div className="">
                    {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
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
                      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4  whitespace-nowrap dark:text-white"
                >
                 <img
                    className="h-10 w-10 rounded-full ml-14"
                    src={priofileimg}
                    alt=""
                  />
                  <div className="pl-28 mt-[-12%]">
                    <div className="text-base font-semibold">
                      Jayani Ranasinghe
                    </div>
                    <div className="font-normal text-gray-500">
                      jayaniranasingh@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">Sick leave</td>
                <td className="px-6 py-4">30 September</td>
                <td className="px-6 py-4">3rd to 6th October</td>
                <td className="px-6 py-4">5 days</td>
                <td className="px-6 py-4 ">
                  <div className="">
                    {/* <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
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
                      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
    </div>
  );
};
