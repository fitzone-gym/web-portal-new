// import React from "react";
import logo from "../../assets/logo.png";
import priofileimg from "../../assets/managerprofile.jpg";
import "../../styles/header.css";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ManagerHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar top-nav-collapse">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={logo} className="navbar_logo ml-[-20%]" />
 
          <div className="w-full md:block md:w-auto mr-[-20%]" id="navbar-default ">
            <div className="userDetails">
              <img
                className="h-10 w-10 rounded-full "
                src={priofileimg}
                alt=""
              />

              <div className="logUserDetails ">
                <p className="userName">Jayani Ranasinghe</p>
                <p className="userEmail">jayaniranasinghe@gmail.com</p>
              </div>

              <Menu as="div" className="relative ml-3 ">
                <div>
                  <Menu.Button className="">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <ArrowDropDownIcon />
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
                        <a
                          href="/Manager/Profile"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
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


