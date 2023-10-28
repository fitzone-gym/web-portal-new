/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AddDoctorModal = ({ onClose, fetchDoctor }) => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone_no, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [doctor_type, setDoctorType] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("call here");
    e.preventDefault();

    //send data to the backend
    axios
      .post("http://localhost:5400/doctor/add", {
        first_name,
        last_name,
        phone_no,
        email,
        role_id: "3",
        address: "",
        qualification,
        message: "",
        facebook: "",
        instergram: "",
        twitter: "",
        nic,
        password,
        doctor_type,
      })
      .then((response) => {
        console.log("Data submit successfully to backend", response.data);

        alert("Data submitted successfully!");

        setFirstname("");
        setLastname("");
        setPhoneno("");
        setEmail("");
        setQualification("");
        setDoctorType("");
        setNic("");
        setPassword("");

        console.log("Before navigation");
        onClose();
        fetchDoctor();
      })
      .catch((error) => {
        console.log("Error submitting data", error);
        alert("Error submitting data");
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 flex items-center justify-center bg-black opacity-80"></div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#555555] rounded-3xl opacity-200 z-10"
        style={{
          height: 690,
          width: 790,
        }}
      >
        <div className="mr-[-90%] mt-4">
          <button
            onClick={() => onClose(false)}
            className="ml-4 text-gray-500 hover:text-gray-800"
            style={{
              width: "28px", // Set the desired width
              height: "28px", // Set the desired height
              color: "#ffffff", // Set the desired color (white)
            }}
          >
            <IoCloseSharp />
          </button>
        </div>

        <div className="text-left px-16 py-10 text-2xl mt-[-2%] text-white ">
          <h2>Add New Doctor</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 ml-16 justify-center items-center text-left ">
          <div className="col">
            <span className="mt-52 col text-white ">First Name </span>
          </div>
          <div>
            <span className="mt-52 col text-white ">Last Name</span>
          </div>
          <div className="">
            <input
              className="rounded-md w-72"
              type="text"
              name="firstname"
              placeholder="first name"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="lastname"
              placeholder="last name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div>
            <span className="mt-52 col text-white ">Mobile no</span>
          </div>
          <div>
            <span className="mt-52 col text-white ">E-mail</span>
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="phoneno"
              placeholder="eg-07123456789"
              onChange={(e) => setPhoneno(e.target.value)}
            />
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="email"
              placeholder="jayani98@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col">
            <span className="mt-52 col text-white ">Qualification </span>
          </div>
          <div>
            <span className="mt-52 col text-white ">Doctor Type</span>
          </div>
          <div className="">
            <input
              className="rounded-md w-72"
              type="text"
              name="qualification"
              placeholder=""
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="roleid"
              placeholder="Doctor Type - Specialist"
              onChange={(e) => setDoctorType(e.target.value)}
            />
          </div>

          <div>
            <span className="mt-52 col text-white ">NIC</span>
          </div>
          <div>
            <span className="mt-52 col text-white ">Password</span>
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="nic"
              placeholder="nic"
              onChange={(e) => setNic(e.target.value)}
            />
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success w-1/3 bg-red-600 mt-16 hover:bg-red-800 justify-center items-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg font-bold rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDoctorModal;
