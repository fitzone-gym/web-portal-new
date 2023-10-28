// import React, { useState } from "react";
// import { RxDashboard } from "react-icons/rx";
// import { BsPeople } from "react-icons/bs";
// import { MdPeopleOutline } from "react-icons/md";
// import { MdOutlineAnnouncement } from "react-icons/md";
// import { MdOutlineStickyNote2 } from "react-icons/md";
// import { VscFeedback } from "react-icons/Vsc";
// import { MdOutlinePayments } from "react-icons/md";
// import { TbLogout } from "react-icons/Tb";
// import { Link } from "react-router-dom";
// import "../../styles/Receptionist/Sidenav.css";

// const ManagerSidebar = () => {
//   const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

//   const handleMenuItemClick = (menuItem) => {
//     setSelectedMenuItem(menuItem);
//   };

//   return (
//     <div className="sidenavbar">
//       <div className="mt-20 ml-6">
//         <ul className="flex flex-col py-5 space-y-1 font-bold text-center">
//           <li
//             className={`report_menu_item ${
//               selectedMenuItem === "Dashboard" ? "active" : ""
//             }`}
//             onClick={() => handleMenuItemClick("Dashboard")}
//           >
//             <Link
//               to="/Manager/Dashboard"
//               className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
//               style={{
//                 borderRadius: "50px",
//                 marginLeft: "",
//                 marginRight: "20px",
//                 width: "250px",
//                 background: selectedMenuItem === "Dashboard" ? "white" : "",
//                 color: "rgb(229, 70, 70)",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <RxDashboard />
//               </div>
//               <span className="ml-2 text-sm tracking-wide truncate">
//                 Dashboard
//               </span>
//             </Link>
//           </li>
//           <li
//             className={`report_menu_item ${
//               selectedMenuItem === "Members" ? "active" : ""
//             }`}
//             onClick={() => handleMenuItemClick("Members")}
//           >
//             <Link
//               to="/Manager/Members"
//               className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
//               style={{
//                 background: selectedMenuItem === "Members" ? "white" : "",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <BsPeople />
//               </div>
//               <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
//                 Members
//               </span>
//             </Link>
//           </li>
//           <li
//             className={`report_menu_item ${
//               selectedMenuItem === "Staff Members" ? "active" : ""
//             }`}
//             onClick={() => handleMenuItemClick("Staff Members")}
//           >
//             <Link
//               to="/Manager/Staffmembers"
//               className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
//               style={{
//                 background: selectedMenuItem === "Staff Members" ? "white" : "",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <MdPeopleOutline />
//               </div>
//               <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
//                 Staff Members
//               </span>
//             </Link>
//           </li>
//           <li
//             className={`report_menu_item ${
//               selectedMenuItem === "Announcement" ? "active" : ""
//             }`}
//             onClick={() => handleMenuItemClick("Announcement")}
//           >
//             <Link
//               to="/Manager/Announcement"
//               className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
//               style={{
//                 background: selectedMenuItem === "Announcement" ? "white" : "",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <MdOutlineAnnouncement />
//               </div>
//               <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
//                 Announcement
//               </span>
//             </Link>
//           </li>
//           <li
//             className={`report_menu_item ${
//               selectedMenuItem === "Leaves" ? "active" : ""
//             }`}
//             onClick={() => handleMenuItemClick("Leaves")}
//           >
//             <Link
//               to="/Manager/Leave"
//               className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
//               style={{
//                 background: selectedMenuItem === "Leaves" ? "white" : "",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <MdOutlineStickyNote2 />
//               </div>
//               <span className="max-lg:hidden ml-2 text-md tracking-wide truncate">
//                 Leaves
//               </span>
//             </Link>
//           </li>
//           <li
//             className={`report_menu_item ${
//               selectedMenuItem === "Feedback" ? "active" : ""
//             }`}
//             onClick={() => handleMenuItemClick("Feedback")}
//           >
//             <Link
//               to="/Manager/Feedback"
//               className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
//               style={{
//                 background: selectedMenuItem === "Feedback" ? "white" : "",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <VscFeedback />
//               </div>
//               <span className="max-lg:hidden ml-2 text-md tracking-wide truncate">
//                 Feedback
//               </span>
//             </Link>
//           </li>
//           <li
//             className={`report_menu_item ${
//               selectedMenuItem === "Payments" ? "active" : ""
//             }`}
//             onClick={() => handleMenuItemClick("Payments")}
//           >
//             <Link
//               to="/Manager/Payment"
//               className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
//               style={{
//                 background: selectedMenuItem === "Payments" ? "white" : "",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <MdOutlinePayments />
//               </div>
//               <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
//                 Payments
//               </span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/"
//               className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 mt-[90%]"
//               style={{
//                 background: selectedMenuItem === "Logout" ? "white" : "",
//               }}
//             >
//               <div className="inline-flex justify-center items-center ml-4">
//                 <TbLogout />
//               </div>
//               <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
//                 Logout
//               </span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ManagerSidebar;

import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlinePayments } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
//import priofileimg from "../../assets/managerprofile.jpg";
import { Link } from "react-router-dom";
import "../../styles/Receptionist/sidenav.css";

export const ManagerSidebar = (props) => {
  const selectedStyle = {
    borderRadius: "50px",
    marginLeft: "",
    marginRight: "20px",
    width: "250px",
    background: "white",
    color: " rgb(229, 70, 70)",
  };
  return (
    <div className="sidenavbar">
      <div className=" mt-20 ml-6">
        <ul className="flex flex-col py-5 space-y-1 font-bold text-center  ">
          <li>
            <Link
              to="/Manager/Dashboard"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={props.selected === "dashboard" ? selectedStyle : {}}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <RxDashboard />
              </div>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Members"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={props.selected === "members" ? selectedStyle : {}}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <BsPeople />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                Members
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Staffmembers"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={props.selected === "staff" ? selectedStyle : {}}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdPeopleOutline />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                Staff Members
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Announcement"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={props.selected === "announcements" ? selectedStyle : {}}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdOutlineAnnouncement />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                Announcement
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/Manager/Leave"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={props.selected === "leaves" ? selectedStyle : {}}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdOutlineStickyNote2 />
              </div>
              <span className="max-lg:hidden ml-2 text-md tracking-wide truncate">
                Leaves
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/Manager/Feedback"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={props.selected === "feedback" ? selectedStyle : {}}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <VscFeedback />
              </div>
              <span className="max-lg:hidden ml-2 text-md tracking-wide truncate">
                Feedback
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/Manager/Payment"
              className="mt-[5%] relative flex flex-row items-center h-11 focus:outline-none hover:bg-black-50 text-black-800 hover:text-black-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              style={props.selected === "payments" ? selectedStyle : {}}
            >
              <div className="inline-flex justify-center items-center ml-4">
                <MdOutlinePayments />
              </div>
              <span className="max-lg:hidden ml-2 text-sm tracking-wide truncate">
                Payments
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
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};