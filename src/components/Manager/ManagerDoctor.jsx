import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { images } from "../../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import priofileimg from "../../assets/managerprofile.jpg";

export const ManagerDoctor = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        console.log("ts");
        const response = await axios.get("http://localhost:5400/doctor");
         console.log("tt"+ response.data.data); // Check the API response data
        // console.log(typeof response.data.data); // Check the type of response.data
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchDoctor();
  }, []);

  const handleDelete = async (trainerId) => {
    try {
      const apiUrl = "http://localhost:5400/trainers/";
      const deleteUrl = `${apiUrl}${trainerId}`;
      await axios.delete(deleteUrl);
      // Perform any additional actions (e.g., refreshing the list) after successful deletion
      // You can call the fetchTrainers function here to refresh the data after deletion
      alert("Trainer deleted successfully");
       // Update the state after successful deletion
    setData((prevData) => prevData.filter((trainer) => trainer.trainer_id !== trainerId));
    } catch (error) {
      console.error("Error deleting trainer:", error);
      // Handle errors if necessary
      alert("Error deleting trainer");
    }
  };

  return (
    <div
      className=""
      style={{
        position: "fixed",
        top: 140,
        left: 330,
        right: 0,
        bottom: 0,
      }}
    >
  
      <div className="w-[90%]">
        <div className="pt-6 pb-6 ml-[62%] w-[24%]">
          <div className="ml-[115%] mt-[-5%]">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2 "
              style={{
                height: 45,
                width: 120
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
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-20 py-3">
                  Doctor name
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
              {data.map((doctor, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
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
                            {doctor.first_name + " " + doctor.last_name}{" "}
                            </div>
                            <div className="font-normal text-gray-500">
                            {doctor.email}
                            </div>
                          </div>
                      
                    </th>
                    <td className="px-6 py-4">{doctor.address}</td>
                    {/* <td className="px-6 py-4">{doctor.email} </td> */}
                    <td className="px-6 py-4">{doctor.phone_no}</td>{" "}
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                      >
                        View
                      </a>

                      <Link
                        onClick={() =>handleDelete(doctor.doctor_id)  }
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </Link>
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

        <div className="grid grid-cols-2 ml-12 mt-16">
          {/* 1 box */}
          <div
            className="font-bold rounded-md text-left"
            style={{
              height: 490,
              width: 700,
            }}
          >
            <div className="text-3xl ml-8 py-3">
              <h1>New Member Appointments</h1>
              <img
                className="w-[100%] h-88 mt-16 ml-12"
                src={images.revenueImage}
                alt=""
              />
            </div>
          </div>

          {/* 2 box */}
          <div
            className="font-bold rounded-md text-left"
            style={{
              height: 490,
              width: 700,
            }}
          >
            <div className="text-3xl  ml-8 py-3">
              <h1>Monthly health checkup appointments</h1>
              <img
                className="w-[100%] h-88 mt-16 ml-12"
                src={images.revenueImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
