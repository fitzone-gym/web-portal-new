import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import priofileimg from "../../assets/managerprofile.jpg";

export const R_Trainerlists = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const fetchTrainers = async () => {
    try {
      const response = await axios.get("http://localhost:5400/trainers");
      // console.log("tt"+ response.data.data); // Check the API response data
      // console.log(typeof response.data.data); // Check the type of response.data
      setData(response.data.data); // Assuming the response contains an array of trainer objects
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5400/trainers/searchTrainers?searchTerm=${searchTerm}`
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleDelete = async (trainerId) => {
    try {
      const apiUrl = "http://localhost:5400/trainers/";
      const deleteUrl = `${apiUrl}${trainerId}`;
      await axios.delete(deleteUrl);
      // Perform any additional actions (e.g., refreshing the list) after successful deletion
      // You can call the fetchTrainers function here to refresh the data after deletion
      alert("Trainer deleted successfully");
      // Update the state after successful deletion
      setData((prevData) =>
        prevData.filter((trainer) => trainer.trainer_id !== trainerId)
      );
    } catch (error) {
      console.error("Error deleting trainer:", error);
      // Handle errors if necessary
      alert("Error deleting trainer");
    }
  };

  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // history.push("/Staffmembers/Trainer");
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
      <div className="w-[95%]">
        <div className="flex items-center">
        <div className="w-[25%] ">
          <h1>Gym Trainers</h1>
        </div>
        <div className="pt-6 pb-6 ml-[50%] w-[24%]">

          
          <form onSubmit={handleSearch}>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-[100%] ml-[-25%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Name,Package Type..."
                required
              />
              <button
                type="submit"
                className="mr-[-5%] text-white absolute right-2.5 w-18 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20 mt-12">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-20 py-3">
                  Trainer name
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  NIC
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Working Experience
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
              {searchResults.length > 0
                ? searchResults.map((trainer, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="h-10 w-10 rounded-full ml-14"
                          src={priofileimg}
                          alt=""
                        />
                        <div className="pl-12 mt-[-2%]">
                          <div className="text-base font-semibold">
                            {trainer.first_name + " " + trainer.last_name}{" "}
                          </div>
                          <div className="font-normal text-gray-500">
                            {trainer.email}
                          </div>
                        </div>

                        {/* Changed variable name to "trainer" */}
                      </th>
                      {/* <td className="px-6 py-4">{trainer.nic}</td>{" "} */}
                      {/* <td className="px-6 py-4">{trainer.trainer_id}</td>{" "} */}
                      <td className="px-6 py-4">
                        {trainer.working_experience}
                      </td>{" "}
                      {/* Changed variable name to "trainer" */}
                      {/* <td className="px-6 py-4"></td>{" "} */}
                      {/* Changed variable name to "trainer" */}
                      <td className="px-6 py-4">{trainer.phone_no}</td>{" "}
                      {/* Changed variable name to "trainer" */}
                      <td className="px-6 py-4">
                        <Link
                          to={`/Manager/Staffmembers/Trainer/Trainerprofile/${trainer.trainer_id}`} /* Changed variable name to "trainer" */
                          className="font-medium text-blue-600 dark:text-blue-500  mr-4"
                        >
                          View
                        </Link>
                        <Link
                          onClick={() =>
                            handleDelete(trainer.trainer_id)
                          } /* Pass trainer.id to handleDelete */
                          className="font-medium text-blue-600 dark:text-blue-500"
                        >
                          Delete
                        </Link>
                      </td>
                      <td>
                        <Link className="font-medium text-blue-600 dark:text-blue-500">
                          Report
                        </Link>
                      </td>
                    </tr>
                  ))
                : data.map((trainer, index) => {
                    // Changed variable name to "trainer"
                    console.log("JJJ", trainer);
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
                              {trainer.first_name + " " + trainer.last_name}{" "}
                            </div>
                            <div className="font-normal text-gray-500">
                              {trainer.email}
                            </div>
                          </div>
                        </th>
                        {/* <td className="px-6 py-4">{trainer.nic}</td>{" "} */}
                        {/* <td className="px-6 py-4">{trainer.trainer_id}</td>{" "} */}
                        <td className="px-6 py-4">
                          {trainer.working_experience}
                        </td>{" "}
                        {/* Changed variable name to "trainer" */}
                        {/* <td className="px-6 py-4">{trainer.email}</td>{" "} */}
                        {/* Changed variable name to "trainer" */}
                        <td className="px-6 py-4">{trainer.phone_no}</td>{" "}
                        {/* Changed variable name to "trainer" */}
                        <td className="px-6 py-4">
                          <Link
                            to={`/Manager/Staffmembers/Trainer/Trainerprofile/${trainer.trainer_id}`} /* Changed variable name to "trainer" */
                            className="font-medium text-blue-600 dark:text-blue-500  mr-4"
                          >
                            View
                          </Link>
                          <Link
                            onClick={() =>
                              handleDelete(trainer.trainer_id)
                            } /* Pass trainer.id to handleDelete */
                            className="font-medium text-blue-600 dark:text-blue-500 mr-4"
                          >
                            Delete
                          </Link>
                        </td>
                        <td>
                          <Link className="font-medium text-blue-600 dark:text-blue-500">
                            Report
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default R_Trainerlists