import React from "react";
import Logo from "../assets/logo.png";
// import Profile from "../assets/{{sessionStorage.getItem("profile_image")}}";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsFillCaretRightFill, BsArrowRightShort } from "react-icons/bs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



function Navbar() {
    let navigate = useNavigate();
    const handleLogout = () => {
      sessionStorage.clear();
      navigate("/");
    };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar top-nav-collapse">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={Logo} className="navbar_logo" />

          <div className="w-full md:block md:w-auto" id="navbar-default">
            <div className="userDetails">
              <img
                className="h-8 w-8 rounded-full"
                src={`../src/assets/Users/${sessionStorage.getItem(
                  "profile_image"
                )}`}
                alt=""
              />

              <div className="logUserDetails">
                <p className="userName">
                  {sessionStorage.getItem("first_name")}&nbsp;
                  {sessionStorage.getItem("last_name")}
                </p>
                <p className="userEmail">{sessionStorage.getItem("email")}</p>
              </div>

              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <BsFillCaretRightFill
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        paddingTop: 10,
                      }}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/Doctor/Myprofile"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          My Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <span onClick={handleLogout()}>Sign out</span>
                          <div className=""></div>
                        </span>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;




