
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/trainerlist.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const R_Trainerlist = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5400/trainerDetails/getTrainerDetails");
        // console.log("tt"+ response.data.data); // Check the API response data
        // console.log(typeof response.data.data); // Check the type of response.data
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
    
    <Header />
    <div className='body-members'>
    
    <Sidenav />


    <div
      className=""
      style={{
        position: " ",
        top: -25,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
  
     

      <div className="w-[85%] ml-64 ">
        <div className="grid grid-flow-col auto-cols-2 bg-neutral-900 ml-20 pt-6 pb-6 rounded-t-lg mt-10">
          <div className="text-white text-2xl ">Gym Trainers Details</div>
          <div
            className=" "
            style={{
              marginLeft: 600,
            }}
          >
            <form>
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
                  className="text-white absolute right-2.5 bg-gray-800 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              className="text-white bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                  Trainer name
                </th>
                <th scope="col" className="px-6 py-3">
                  Joined Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Availability
                </th>
                <th scope="col" className="px-6 py-3">
                  Members
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

            {data.map((trainer, index) => {
                return (

              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4">{trainer.member_id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {trainer.first_name + " " + trainer.last_name}{" "}
                </th>
                <td className="px-6 py-4">{trainer.email}</td>
                <td className="px-6 py-4">{trainer.package}</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">
                  <a
                    href="/Receptionist/Memberprofile"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
              
 );
              })}
                
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div></div> 

  )
}

export default R_Trainerlist