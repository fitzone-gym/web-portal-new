import React from "react"; // Import React from the 'react' package
import "../../styles/Receptionist/Sidenav.css";
import { useLocation } from "react-router-dom";

import {
  BsAlarmFill,
  BsFillPeopleFill,
  BsFillPinAngleFill,
  BsCurrencyDollar,
  BsFillPersonCheckFill,
  BsClipboardDataFill,
} from "react-icons/bs";

function Sidenav() {
  const { pathname } = useLocation();
  const isDoctorDashboard = pathname === "/Doctor/Dashboard";
  const isDoctorMemberlist = pathname === "/Doctor/Memberslist";
  const isDoctorAppointments = pathname === "/Doctor/Appointments";
  const isDoctorPayments = pathname === "/Doctor/Payment";
  const isDoctorProfile = pathname === "/Doctor/Myprofile";
  const isDoctorLeaveRequests = pathname === "/Doctor/LeaveRequests";

  const activeStyles = {
    borderRadius: "50px",
    marginLeft: "10px",
    marginRight: "20px",
    width: "250px",
    background: "white",
    color: "rgb(229, 70, 70)",
  };
  console.log(isDoctorDashboard);
  return (
    <div className="sidenavbar" style={{paddingTop:"60px"}}>
      <ul className="flex flex-col py-5 space-y-1 font-bold text-center ml-10">
        <li>
          <a
            href="/Doctor/Dashboard"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 hover:border-indigo-500 pr-6"
            style={isDoctorDashboard ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsClipboardDataFill/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Dashboard
            </span>
          </a>
        </li>
        <li>
          <a
            href="/Doctor/Memberslist"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800  pr-6"
            style={isDoctorMemberlist ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsFillPersonCheckFill/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Members</span>
          </a>
        </li>
        <li>
          <a
            href="/Doctor/Appointments"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800  pr-6"
            style={isDoctorAppointments ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsAlarmFill/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Appointments
            </span>
          </a>
        </li>

        <li>
          <a
            href="/Doctor/Payment"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800  pr-6"
            style={isDoctorPayments ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsCurrencyDollar/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Payments
            </span>
          </a>
        </li>

        <li>
          <a
            href="/Doctor/Myprofile"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800  pr-6"
            style={isDoctorProfile ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsFillPeopleFill/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
          </a>
        </li>
        <li>
          <a
            href="Doctor/LeaveRequests"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800  pr-6"
            style={isDoctorLeaveRequests ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsFillPinAngleFill/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Leave Requests
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
