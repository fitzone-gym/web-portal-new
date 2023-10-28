import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { images } from "../../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import priofileimg from "../../assets/managerprofile.jpg";
import AddReceptionistModal from "./AddReceptionistModal";

export const ManagerReceptionist = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array
  const [showModal, setShowModal] = useState(false);

  const fetchReceptionist = async () => {
    try {
      console.log("ts");
      const response = await axios.get(
        "http://localhost:5400/receptionistDetails"
      );
      console.log("tt" + response.data.data); // Check the API response data
      // console.log(typeof response.data.data); // Check the type of response.data
      setData(response.data.data); // Assuming the response contains an array of trainer objects
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchReceptionist();
  }, []);

  const handleDelete = async (receptionistId) => {
    try {
      const apiUrl = "http://localhost:5400/receptionistDetails/";
      const deleteUrl = `${apiUrl}${receptionistId}`;
      await axios.delete(deleteUrl);
      // Perform any additional actions (e.g., refreshing the list) after successful deletion
      // You can call the fetchTrainers function here to refresh the data after deletion
      alert("Receptionist deleted successfully");
      // Update the state after successful deletion
      setData((prevData) =>
        prevData.filter(
          (receptionist) => receptionist.receptionist_id !== receptionistId
        )
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
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="w-[90%]">
        <div className="text-4xl mr-[53%]">
          <h4>Receptionists Details</h4>
        </div>

        <div className="pt-6 pb-6 ml-[62%] w-[24%]">
          <div className="ml-[115%] ">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2  "
              style={{
                height: 45,
                width: 120,
              }}
              onClick={handleAddNewClick} // Call the function to show the modal
            >
              <div className="mr-2">
                <FaPlus />
              </div>
              Add New
            </button>

            {/* Render the modal conditionally */}
            {showModal && (
              <AddReceptionistModal
                fetchReceptionist={fetchReceptionist}
                onClose={handleCloseModal}
              />
            )}
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
              </tr>
            </thead>
            <tbody>
              {data.map((receptionist, index) => {
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
                      <div className="pl-12 mt-[-9%] ml-16">
                        <div className="text-base font-semibold">
                          {receptionist.first_name +
                            " " +
                            receptionist.last_name}{" "}
                        </div>
                        <div className="font-normal text-gray-500">
                          {receptionist.email}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{receptionist.address}</td>
                    <td className="px-6 py-4">{receptionist.phone_no}</td>{" "}
                    <td className="px-6 py-4">
                      <Link
                        onClick={() =>
                          handleDelete(receptionist.receptionist_id)
                        }
                        className="font-medium text-blue-600 dark:text-blue-500"
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
