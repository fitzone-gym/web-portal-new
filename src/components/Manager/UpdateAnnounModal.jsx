/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const UpdateAnnonModal = ({ onClose, announcement }) => {
  console.log("Announcement:", announcement);
  if (!announcement) {
    console.log("Announcement is undefined");
  } else {
    console.log("Heading:", announcement.title);
    console.log("Description:", announcement.description);
    console.log("For:", announcement.for);
    console.log(typeof announcement.for);
  }

  const [values, setValues] = useState({
    heading: announcement ? announcement.title : "",
    body: announcement ? announcement.description : "",
    recipients: [announcement.for], // Initialize an array to store recipients
  });

  const handleCheckboxChange = (event) => {
    console.log("handlecheckbox");
    const { value, checked } = event.target;
    console.log(checked);
    if (checked) {
      setValues((prevValues) => ({
        ...prevValues,
        recipients: [...prevValues.recipients, value], // Add value to the array
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        recipients: prevValues.recipients.filter((item) => item !== value), // Remove value from the array
      }));
    }
    console.log("Recipients after change:", values.recipients);
  };

  const navigate = useNavigate();

  const handleEdit = async (announcement_id) => {
    console.log("awa");
    try {
      console.log(announcement_id);

      const updatedData = {
        title: values.heading,
        for: values.recipients.join(','), // Use the heading as the new 'for'
        description: values.body, // Use the body as the new 'description'
      };
      // console.log(updatedData);
      const apiUrl = "http://localhost:5400/announcement/update/";
      const updateUrl = `${apiUrl}${announcement_id}`;
      await axios.put(updateUrl, updatedData);  
    
      console.log("Announcement updated successfully");

      alert("Announcement updated successfully");
      // setData((prevData) => prevData.filter((announcement) => announcement.announcement_id !== announcement_id));
      onClose();
      navigate("/Staffmembers/Trainer");
    } catch (error) {
      console.error("Error updating announcement:", error);
      alert("Error editing announcement");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 flex items-center justify-center bg-black opacity-10"></div>
      <form
        onSubmit={handleEdit}
        className="bg-[#555555] rounded-3xl border-white/[1.5] opacity-100 z-10"
        style={{
          height: 590,
          width: "65%",
        }}
      >
        <div className="mr-[-90%]">
          <button
            onClick={onClose}
            className="ml-[50%] text-gray-500 hover:text-gray-800 mt-4"
            style={{
              width: "28px", // Set the desired width
              height: "28px", // Set the desired height
              color: "#ffffff", // Set the desired color (white)
            }}
          >
            <IoCloseSharp />
          </button>
        </div>

        <div>
          <h1 className="font-bold text-3xl text-left py-7 px-14 mt-[-2%] mb-4">
            Edit Announcement
          </h1>
        </div>

        <div className="mb-6 ">
          <label className="mb-2 text-lg font-medium text-white ml-20">
            Heading
          </label>
          <textarea
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            style={{
              width: "84%",
              marginLeft: "7.5%",
            }}
            placeholder="Add Heading"
            // value={announcement.title}
            name="heading"
            onChange={(e) => setValues({ ...values, heading: e.target.value })}
            required
          >
            {announcement.title}
          </textarea>
        </div>
        <div className="mb-6">
          <label className="text-white block mb-2 text-lg font-medium ml-20">
            Body
          </label>
          <textarea
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            style={{
              width: "84%",
              height: 139,
              marginLeft: "7.5%",
            }}
            placeholder="Add Body..."
            // value={announcement.description}
            name="body"
            onChange={(e) => setValues({ ...values, body: e.target.value })}
          >
            {announcement.description}
          </textarea>
        </div>

        <label className="text-white block mb-2 text-medium font-medium ml-20">
          Recipients
        </label>

        <div className="flex  ">
          <div className="flex ml-28">
            <input
              type="checkbox"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              value="members"
              required
              checked={values.recipients.includes("members")} // Check if value is in the array
              onChange={handleCheckboxChange} // Attach the change handler
              // checked
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Members
          </label>

          <div className="flex ml-16 ">
            <input
              type="checkbox"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              value="trainers"
              required
              checked={values.recipients.includes("trainers")} // Check if value is in the array
              onChange={handleCheckboxChange} // Attach the change handler
              // checked
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Trainers
          </label>

          <div className="flex  ml-16">
            <input
              type="checkbox"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300"
              value="doctor"
              required
              checked={values.recipients.includes("doctor")} // Check if value is in the array
              onChange={handleCheckboxChange} // Attach the change handler
              // checked
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Doctor
          </label>
        </div>
        <div className="flex mr-auto ml-auto">
          <button
            type="submit"
            className="ml-auto mr-auto mt-9 text-white bg-green-500 w-60 rounded-xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm px-5 py-2.5 text-center"
            onClick={handleEdit(announcement.announcement_id)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
