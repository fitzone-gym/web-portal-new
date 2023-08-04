import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { VscFeedback } from "react-icons/Vsc";
import { MdOutlinePayments } from "react-icons/md";
import { TbLogout } from "react-icons/Tb";
import priofileimg from "../../assets/managerprofile.jpg";
import { Link } from "react-router-dom";

export const ManagerSidebar = () => {
  return (
    <div className="sidenavbar font-bold rounded-tr-lg bg-[#E54646] w-[15%] h-[108%] ">
      <div className="profileimage max-lg:hidden">
        <img
          src={priofileimg}
          alt=""
          className="w-40 h-40 mt-[20%]  ml-[21%] rounded-full"
          style={{ borderRadius: "100%" }}
        />
        <h1>Jayani Ranasinghe</h1>
        <h2> Manager</h2>
      </div>

      <ul className="flex flex-col py-4 space-y-1 ml-[21%] mt-[5%]">
        <li>
          <Link
            to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <div className="max-lg:w-6">
              <RxDashboard />
            </div>
            <span className="max-lg:hidden ml-[3%] text-sm tracking-wide truncate">
              DASHBOARD
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/Members"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <div className="max-lg:w-6">
              <BsPeople />
            </div>
            <span className="max-lg:hidden ml-[3%] text-sm tracking-wide truncate">
              MEMBERS
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/Staffmembers"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <div className="max-lg:w-6">
              <MdPeopleOutline />
            </div>
            <span className="max-lg:hidden ml-[3%] text-sm tracking-wide truncate">
              STAFF MEMBERS
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/Announcement"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <div className="max-lg:w-6">
              <MdOutlineAnnouncement />
            </div>
            <span className="max-lg:hidden ml-[3%] text-sm tracking-wide truncate">
              ANNOUNCEMENTS
            </span>
          </Link>
        </li>

        <li>
          <Link
            to="/Leave"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <div className="max-lg:w-6">
              <MdOutlineStickyNote2 />
            </div>
            <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
              LEAVES
            </span>
          </Link>
        </li>

        <li>
          <Link
            to=""
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <div className="max-lg:w-6">
              <VscFeedback />
            </div>
            <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
              FEEDBACK
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/Payment"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <div className="max-lg:w-6">
              <MdOutlinePayments />
            </div>
            <span className="max-lg:hidden ml-[3%] text-sm tracking-wide truncate">
              PAYMENTS
            </span>
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-600 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 mt-32"
          >
            <div className="max-lg:w-6">
              <TbLogout />
            </div>
            <span className="max-lg:hidden ml-[3%] text-sm tracking-wide truncate">
              LOGOUT
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
