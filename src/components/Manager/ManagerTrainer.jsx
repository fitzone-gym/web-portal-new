
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddTrainerModal from "./AddTrainerModal";
import priofileimg from "../../assets/managerprofile.jpg";

export const ManagerTrainer = () => {
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

  const [reloadVariable, setReloadVariable] = useState(true);
  const reload = () => {
    setReloadVariable(!reloadVariable);
  };
  useEffect(() => {
    fetchTrainers();
  }, [reloadVariable]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5400/trainers/searchTrainers?searchTerm=${searchTerm}`
      );
      setData(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleDelete = async (trainerId) => {
    try {
      const apiUrl = "http://localhost:5400/trainers/";
      const deleteUrl = `${apiUrl}${trainerId}`;
      await axios.delete(deleteUrl);
      alert("Trainer deleted successfully");
      setData((prevData) =>
        prevData.filter((trainer) => trainer.trainer_id !== trainerId)
      );
    } catch (error) {
      console.error("Error deleting trainer:", error);
      alert("Error deleting trainer");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    return formattedDate;
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
        arginRight: "0px",
        marginLeft: "14%",
        marginTop: "160px",
        textAlign: "center",
      }}
    >
      <div className="">
        <div
          className="pt-6 pb-6 ml-100 w-[24%]"
          style={{ display: "flex", gap: 100 }}
        >
          <h3
            style={{
              color: "#3A4D39",
              fontWeight: "bold",
              fontSize: "25px",
              marginLeft: "80px",
            }}
          >
            Managers
          </h3>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-[-120%]">
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
                className="block w-[600%] ml-[-125%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search by name "
                required
              />
              <button
                type="submit"
                className="text-black
                 absolute right-2.5 w-18 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                  transform:"translateX(200px)"
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="ml-[85%] mt-[-4.9%]">
          {/* <Link to="/Manager/Staffmembers/Trainer/Addtrainer"> */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2  "
            style={{
              height: 45,
              backgroundColor: "#3A4D39",
            }}
            onClick={handleAddNewClick} // Call the function to show the modal
          >
            <div className="mr-1">
              <FaPlus />
            </div>
            Add New
          </button>
          {/* </Link> */}

          {/* Render the modal conditionally */}
          {showModal && (
            <AddTrainerModal
              fetchTrainers={fetchTrainers}
              onClose={handleCloseModal}
            />
          )}
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20 mt-12 w-[90%]">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-10 py-3">
                  Trainer name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone No
                </th>
                <th scope="col" className="px-6 py-3">
                  Joined Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Qualifications
                </th>
                <th scope="col" className="px-6 py-3">
                  Working Experience
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
                {/* <th>Download</th> */}
              </tr>
            </thead>
            <tbody>
                {data.map((trainer, index) => {
                    // Changed variable name to "trainer"
                    console.log("JJJ", trainer);
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                        {/* <th scope="col" className="p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-all-search"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-all-search"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </th> */}
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                         <img
                        className="h-10 w-10 rounded-full ml-7 "
                        src={`/manager/users/${trainer.profile_picture}`}
                        onError={(e) => {
                          e.target.src = "/manager/users/placeholder.png";
                        }}
                        alt=""
                      />
                          <div className="pl-5 mt-[-15%] ml-16">
                            <div className="text-base font-semibold">
                              {trainer.first_name + " " + trainer.last_name}{" "}
                            </div>
                            <div className="font-normal text-gray-500">
                              {trainer.email}
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">{trainer.phone_no}</td>{" "}
                        <td className="px-6 py-4">
                          {formatDate(trainer.joined_date)}
                        </td>
                        <td className="px-6 py-4">{trainer.qualification}</td>
                        <td className="px-6 py-4">
                          {trainer.working_experience}
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            onClick={() =>
                              handleDelete(trainer.trainer_id)
                            } /* Pass trainer.id to handleDelete */
                            className="font-medium text-blue-600 dark:text-blue-500 mr-4"
                          >
                            Delete
                          </Link>
                        </td>
                        {/* <td>
                          <Link className="font-medium text-blue-600 dark:text-blue-500">
                            Report
                          </Link>
                        </td> */}
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
