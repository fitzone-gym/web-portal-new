// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaPlus } from "react-icons/fa";
// import { FiEdit } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { CreatAnnonModal } from "./CreatAnnonModal";

// export const ManagerAnnouncement = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleAddNewClick = () => {
//         setShowModal(true);
//         console.log("Add");
//       };

//       const handleCloseModal = () => {
//         setShowModal(false);
//         console.log("close");
//       };

//   return (
//     <div
//      className="w-[80%]"
//       style={{
//         position: "relative",
//         top: -25,
//         left: 0,
//         right: 0,
//         bottom: 0,
//       }}
//     >
//       <div>
//         <h1 class="font-bold text-red-600 text-5xl text-left ml-32 mt-16 mb-10">
//           Special Announcements
//         </h1>

//       <Link to="/Announcement/CreateAnnoun">
//         <button
//           type="button"
//           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[-1%] "
//           style={{
//             marginRight: "-91%",
//           }}
//           onClick={handleAddNewClick} // Call the function to show the modal
//         >
//           <div class="mr-1">
//             <FaPlus />
//           </div>
//           Add New
//         </button>
//         </Link>
//          {/* Render the modal conditionally */}
// //         {showModal && <CreatAnnonModal onClose={handleCloseModal} />}
//         </div>

//       <div
//         class="bg-gray-400 font-bold text-2xl rounded-xl ml-44 mt-12"
//         style={{
//           height: "30%",
//           width: "83%",
//         }}
//       >
//         <p
//           className="text-left text-lg py-6 px-6"
//           style={{
//             marginLeft: "2%",
//             width: "95%",
//           }}
//         >
//           Dear Trainers, Exciting news! We're introducing new training programs
//           and workshops to enhance our members' fitness journey. Your dedication
//           has been crucial to our success, and we encourage your active
//           participation and ideas. Special training sessions for your growth are
//           on the way. Let's work together to create an unmatched fitness
//           experience. Thank you for your commitment.
//         </p>

//         <p
//           className="text-left text-lg py-4 px-6 ml-7"
//           style={{
//             marginTop: "-2%",
//           }}
//         >
//           Jayani
//         </p>
//         <p
//           className="text-left text-lg py-4 px-6"
//           style={{
//             marginTop: "-2.5%",
//             marginLeft: "2.2%",
//           }}
//         >
//           Gym Manager
//         </p>

//         <div class="">
//           <button
//             type="button"
//             class="text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
//             style={{
//               height: 30,
//               width: "9%",
//               marginRight: "2%",
//               marginTop: "%",
//             }}
//           >
//             <div class="mr-1 ml-3">
//               <FiEdit />
//             </div>
//             Edit
//           </button>

//           <button
//             type="button"
//             class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
//             style={{
//               height: 30,
//               width: "9.5%",
//               marginRight: "-62%",
//               marginTop: "-3%",
//             }}
//           >
//             <div class="mr-1">
//               <MdDelete />
//             </div>
//             Remove
//           </button>
//         </div>
//       </div>

//       <div
//         class="bg-gray-400 font-bold text-2xl rounded-xl ml-44 mt-12"
//         style={{
//           height: "30%",
//           width: "83%",
//         }}
//       >
//         <p
//           className="text-left text-lg py-6 px-6"
//           style={{
//             marginLeft: "2%",
//             width: "95%",
//           }}
//         >
//           Dear Trainers, Exciting news! We're introducing new training programs
//           and workshops to enhance our members' fitness journey. Your dedication
//           has been crucial to our success, and we encourage your active
//           participation and ideas. Special training sessions for your growth are
//           on the way. Let's work together to create an unmatched fitness
//           experience. Thank you for your commitment.
//         </p>

//         <p
//           className="text-left text-lg py-4 px-6 ml-7"
//           style={{
//             marginTop: "-2%",
//           }}
//         >
//           Jayani
//         </p>
//         <p
//           className="text-left text-lg py-4 px-6"
//           style={{
//             marginTop: "-2.5%",
//             marginLeft: "2.2%",
//           }}
//         >
//           Gym Manager
//         </p>

//         <div class="">
//           <button
//             type="button"
//             class="text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
//             style={{
//               height: 30,
//               width: "9%",
//               marginRight: "2%",
//               marginTop: "%",
//             }}
//           >
//             <div class="mr-1 ml-3">
//               <FiEdit />
//             </div>
//             Edit
//           </button>

//           <button
//             type="button"
//             class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
//             style={{
//               height: 30,
//               width: "9.5%",
//               marginRight: "-62%",
//               marginTop: "-3%",
//             }}
//           >
//             <div class="mr-1">
//               <MdDelete />
//             </div>
//             Remove
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };



import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CreatAnnonModal } from "./CreatAnnonModal";
import { UpdateAnnonModal } from "./UpdateAnnounModal";


export const ManagerAnnouncement = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get("http://localhost:5400/announcement");
        console.log("This is what",response.data.data)
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleAddNewClick = () => {
    setShowModal(true);
    console.log("Add");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("close");
  };

  const handleDelete = async (announcementId) => {
    console.log(announcementId);
    try {
      const apiUrl = "http://localhost:5400/announcement/delete/";
      const deleteUrl = `${apiUrl}${announcementId}`;
      await axios.delete(deleteUrl);
      // Perform any additional actions (e.g., refreshing the list) after successful deletion
      // You can call the fetchTrainers function here to refresh the data after deletion
      alert("Announcement deleted successfully");
       // Update the state after successful deletion
    setData((prevData) => prevData.filter((announcement) => announcement.announcement_id !== announcementId));
    } catch (error) {
      console.error("Error deleting announcement:", error);
      // Handle errors if necessary
      alert("Error deleting announcement");
    }
  };

  // State to track the announcement being edited
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const handleEditClick = (announcement) => {
    setEditingAnnouncement(announcement);
    setShowModal(true); // Open the update modal
    console.log("This is announcement to select",announcement.announcement_id);
  };

  return (
    <div
      className=""
      style={{
        marginRight: "20px",
        marginLeft: "15%",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <div className="pt-6 ml-[57%] w-[24%]">
        <div className="ml-[115%] mt-[0ss%]">
          <button
            type=""
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2 "
            style={{
              height: 45,
              width: 120,
              backgroundColor: "#ad2828",
            }}
            onClick={handleAddNewClick} // Call the function to show the modal
          >
            <div className="mr-1">
              <FaPlus />
            </div>
            Add New
          </button>
          {showModal && <CreatAnnonModal onClose={handleCloseModal} />}
        </div>
      </div>

      <table className="font-semibold h-[28%] py-3 px-6 border-separate border-spacing-10">
        <tbody className="">
          {data.map((announcement, index) => {
            return (
              <tr
                key={index}
                className="bg-white drop-shadow-lg text-left text-lg"
              >
                <td className="rounded-lg">
                  <div>
                    <p className="mt-2 ml-7 font-bold">{announcement.title}</p>
                    {/* <hr className="ml-7 w-1/2 border-t-1 border-black"></hr> */}
                  </div>
                  <br />
                  <div
                    className="msg"
                    style={{ fontWeight: 300, fontSize: 14 }}
                  >
                    <p className="ml-[3%] mt-1 mr-3">
                      Dear {announcement.for}, {announcement.description}.
                    </p>
                    {/* <p className="ml-[3%] mt-[1%]">Jayani</p>
                    <p className="ml-[3%] ">Gym Manager</p> */}
                  </div>

                  <div className="actions">
                    {/* <Link to="/Manager/Announcement/UpdateAnnoun"> */}
                    <button
                      className="text-white bg-green-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 text-center inline-flex text-center items-center mr-2"
                      style={{
                        height: 30,
                        width: 100,
                        marginRight: "3%",
                        marginTop: "1%",
                        marginLeft: "70%",
                        fontSize: 15,
                        backgroundColor: "#363062",
                      }}
                      onClick={() => handleEditClick(announcement)}
                    >
                      <div className="mr-1 ml-3">
                        <FiEdit />
                      </div>
                      Edit
                    </button>
                    {/* </Link> */}
                    {/* Render the update modal conditionally */}
                    {editingAnnouncement && (
                      <UpdateAnnonModal
                        onClose={() => {
                          setEditingAnnouncement(null); // Close the modal
                          handleCloseModal();
                        }}
                        announcement={editingAnnouncement} // Pass the announcement data
                      />
                    )}

                    <Link
                      onClick={() => handleDelete(announcement.announcement_id)}
                    >
                      <button
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center "
                        style={{
                          height: 30,
                          width: 110,
                          marginTop: "1%",
                          fontSize: 15,
                          backgroundColor: "#E4DCCF",
                          color: "#363062",
                        }}
                      >
                        <div className="ml-[-6%]">
                          <MdDelete />
                        </div>
                        Remove
                      </button>
                    </Link>
                  </div>
                  <br />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
