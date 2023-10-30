import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { images } from "../../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import priofileimg from "../../assets/managerprofile.jpg";
import AddDoctorModal from "./AddDoctorModal"

export const ManagerDoctor = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array
  const [showModal, setShowModal] = useState(false);

 
    const fetchDoctor = async () => {
      try {
        console.log("ts");
        const response = await axios.get("http://localhost:5400/doctor");
        console.log("tt" + response.data.data); // Check the API response data
        // console.log(typeof response.data.data); // Check the type of response.data
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    useEffect(() => {
    fetchDoctor();
  }, []);

  const handleDelete = async (doctorId) => {
    console.log(doctorId);
    try {
      const apiUrl = "http://localhost:5400/doctor/";
      const deleteUrl = `${apiUrl}${doctorId}`;
      await axios.delete(deleteUrl);
      // Perform any additional actions (e.g., refreshing the list) after successful deletion
      // You can call the fetchTrainers function here to refresh the data after deletion
      alert("Doctor deleted successfully");
      // Update the state after successful deletion
      setData((prevData) =>
        prevData.filter((doctor) => doctor.doctor_id !== doctorId)
      );
    } catch (error) {
      console.error("Error deleting doctor:", error);
      // Handle errors if necessary
      alert("Error deleting doctor");
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
        marginLeft: "19%",
        marginTop: "160px",
        textAlign: "center",
      }}
    >
      <div className="">
        {/* <div className="text-4xl mr-[66%]">
          <h4>Doctors</h4>
        </div> */}

        <div className="">
          <div className="" style={{ display: "flex", gap: 830 }}>
            <h3
              style={{ color: "#124e78", fontWeight: "bold", fontSize: "25px" }}
            >
              Doctors
            </h3>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2 "
              style={{
                height: 45,
                width: 120,
                backgroundColor: "#124e78",
              }}
              onClick={handleAddNewClick} // Call the function to show the modal
            >
              <div className="mr-1">
                <FaPlus />
              </div>
              Add New
            </button>

            {/* Render the modal conditionally */}
            {showModal && (
              <AddDoctorModal
                fetchDoctor={fetchDoctor}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg mt-5">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-4">
                  Doctor name
                </th>
                <th scope="col" className="px-6 py-4">
                  Address
                </th>
                <th scope="col" className="px-6 py-4">
                  Joined Date
                </th>
                <th scope="col" className="px-6 py-4">
                  Phone No
                </th>
                <th scope="col" className="px-6 py-4">
                  Qualifications
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {data.map((doctor, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all-search" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="row"
                      className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="h-10 w-10 rounded-full ml-5 "
                        src={priofileimg}
                        alt=""
                      />
                      <div className="pl-12 mt-[-11%] ml-8">
                        <div className="text-base font-semibold">
                          {doctor.first_name + " " + doctor.last_name}{" "}
                        </div>
                        <div className="font-normal text-gray-500">
                          {doctor.email}
                        </div>
                        <div className="font-normal text-red-500">
                          {doctor.doctor_type}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{doctor.address}</td>
                    <td className="px-6 py-4">{formatDate(doctor.joined_date)} </td>
                    <td className="px-6 py-4">{doctor.phone_no}</td>{" "}
                    <td className="px-6 py-4">{doctor.qualification} </td>
                    <td className="px-6 py-4">
                      <Link
                        onClick={() => handleDelete(doctor.doctor_id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
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
