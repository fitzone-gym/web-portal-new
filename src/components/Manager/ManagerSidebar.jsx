import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { VscFeedback } from "react-icons/Vsc";
import { MdOutlinePayments } from "react-icons/md";
import { TbLogout } from "react-icons/Tb";
//import priofileimg from "../../assets/managerprofile.jpg";
import { Link } from "react-router-dom";
import "../../styles/Receptionist/Sidenav.css";

export const ManagerSidebar = () => {
  return (
    <div className="sidenavbar">
      <div className=" mt-20 ml-6">
        <ul className="flex flex-col py-5 space-y-1 font-bold text-center  ">
          <li>
            <Link
              to="/Manager/Dashboard"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={{
                borderRadius: "50px",
                marginLeft: "",
                marginRight: "20px",
                width: "250px",
                background: "white",
                color: " rgb(229, 70, 70)",
              }}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <RxDashboard />
              </div>
              <span className="ml-2 text-sm tracking-wide truncate">
                DASHBOARD
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Members"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <div className="inline-flex justify-center items-center ml-4">
                <BsPeople />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                MEMBERS
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Staffmembers"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdPeopleOutline />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                STAFF MEMBERS
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Announcement"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdOutlineAnnouncement />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                ANNOUNCEMENTS
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/Manager/Leave"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdOutlineStickyNote2 />
              </div>
              <span className="max-lg:hidden ml-2 text-md tracking-wide truncate">
                LEAVES
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/Manager/Feedback"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <div className="inline-flex justify-center items-center ml-4">
                <VscFeedback />
              </div>
              <span className="max-lg:hidden ml-2 text-md tracking-wide truncate">
                FEEDBACK
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Payment"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdOutlinePayments />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                PAYMENTS
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 mt-[90%]"
            >
              <div className="inline-flex justify-center items-center ml-4">
                <TbLogout />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                LOGOUT
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
