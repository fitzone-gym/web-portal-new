import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {images} from '../../constants';
import axios from "axios";
import { Link } from "react-router-dom";
import priofileimg from "../../assets/managerprofile.jpg";

export const ManagerReceptionist = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        console.log("ts");
        const response = await axios.get("http://localhost:5400/receptionistDetails");
         console.log("tt"+ response.data.data); // Check the API response data
        // console.log(typeof response.data.data); // Check the type of response.data
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchDoctor();
  }, []);

  return (
    <div
      className=""
      style={{
        position: "fixed",
        top: 140,
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="w-[90%]">
        <div className="pt-6 pb-6 ml-[62%] w-[24%]">
          {/* <div
            className=""
            style={{
              marginLeft: 600,
            }}
          ></div> */}

        <div className="ml-[115%] ">
          {/* <Link to="/Manager/Staffmembers/Trainer/Addtrainer"> */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2  "
            style={{
              height: 45,
              width:120
            }}
          >
            <div className="mr-2">
              <FaPlus />
            </div>
            Add New
          </button>
        </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-36">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-20 py-3">
                  Receptionist name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Email
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Phone No
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th>
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
            {data.map((receptionist, index) => {
                return (
              <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   <img
                            className="h-10 w-10 rounded-full ml-14 "
                            src={priofileimg}
                            alt=""
                          />
                          <div className="pl-12 mt-[-11%] ml-16">
                            <div className="text-base font-semibold">
                            {receptionist.first_name + " " + receptionist.last_name}{" "}
                            </div>
                            <div className="font-normal text-gray-500">
                            {receptionist.email}
                            </div>
                          </div>
                 
                </th>
                <td className="px-6 py-4">{receptionist.address}</td>
                {/* <td className="px-6 py-4">{receptionist.email}</td> */}
                <td className="px-6 py-4">{receptionist.phone_no}</td>{" "}
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
                <td>
                          <Link className="font-medium text-blue-600 dark:text-blue-500">
                            Report Generation
                          </Link>
                        </td>
              </tr>
               );
              })}
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
