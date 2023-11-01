import "../../styles/Receptionist/sidenav.css";
import {
  BsAlarmFill,
  BsFillPeopleFill,
  BsHouseAddFill,
  BsFillPinAngleFill,
  BsCurrencyDollar,
  BsFillPersonCheckFill,
  BsClipboardDataFill,
} from "react-icons/bs";

import { useLocation } from "react-router-dom";

function Sidenav() {
  const { pathname } = useLocation();
  const isReceptionistDashboard = pathname === "/Receptionist/Dashboard";
  const isReceptionistMemberlist = pathname === "/Receptionist/Memberslist";
  const isReceptionistTrainerlist = pathname === "/Receptionist/Trainerlist";
  const isReceptionistDoctor = pathname === "/Receptionist/onCallDoctor";
  const isReceptionistemberAttendance =
    pathname === "/Receptionist/Memberattendence";
  const isContactUsSubmitions =
    pathname === "/Receptionist/contactUsSubmitions";
  const isReceptionistPayments = pathname === "/Receptionist/Payment";
  const activeStyles = {
    borderRadius: "50px",
    marginLeft: "10px",
    marginRight: "20px",
    width: "250px",
    background: "white",
    color: "rgb(229, 70, 70)",
  };
  return (
    <div className="sidenavbar">
      <ul className="flex flex-col py-5 space-y-1 font-bold text-center ml-10">
        <li>
          <a
            href="/Receptionist/Dashboard"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent "
            style={isReceptionistDashboard ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsClipboardDataFill />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Dashboard
            </span>
          </a>
        </li>
        <li>
          <a
            href="/Receptionist/Memberslist"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent "
            style={isReceptionistMemberlist ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsFillPeopleFill />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Members</span>
          </a>
        </li>
        <li>
          <a
            href="/Receptionist/Trainerlist"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent "
            style={isReceptionistTrainerlist ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsAlarmFill />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Trainers
            </span>
          </a>
        </li>

        <li>
          <a
            href="/Receptionist/onCallDoctor"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent "
            style={isReceptionistDoctor ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsHouseAddFill />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              On-Call Doctors
            </span>
          </a>
        </li>

        <li>
          <a
            href="/Receptionist/Payment"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent "
            style={isReceptionistPayments ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsCurrencyDollar />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Salary Details
            </span>
          </a>
        </li>
        <li>
          <a
            href="/Receptionist/Memberattendence"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent "
            style={isReceptionistemberAttendance ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsFillPersonCheckFill />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Attendence
            </span>
          </a>
        </li>
        <li>
          <a
            href="/Receptionist/contactUsSubmitions"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent "
            style={isContactUsSubmitions ? activeStyles : {}}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <BsFillPinAngleFill />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Questions
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
