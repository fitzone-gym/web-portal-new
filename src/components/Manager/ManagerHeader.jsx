// import React from 'react'
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { BiSolidBell } from 'react-icons/bi'
// import { BiSolidMessageDetail } from 'react-icons/bi'
// import logo from '../../assets/logo.jpeg'
// import priofileimg from "../../assets/managerprofile.jpg";
// import { Link } from "react-router-dom";
// // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const user = {
//   name: 'Jayani Ranasinghe',
//   email: 'jayanirana@gmail.com',
 
// }
//   const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
//     { name: 'Reports', href: '#', current: false },
//   ]
// const userNavigation = [
//   { name: 'View Profile', href: '/Manager/Profile' },
//   { name: 'Logout', href: '/' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export const ManagerHeader = () => {
//   return (
//     <>
//         <Disclosure as="nav" className="bg-[#121212] w-full w-screen h-[8%] fixed">
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
//                 <div className="flex relative h-16 items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="mt-2 h-8 w-16"
//                         src={logo}
//                       />
//                     </div>
//                     <div className="hidden md:block">
                  
//                     </div>
//                   </div>
//                   <div className="hidden md:block mt-3">
//                     <div className="ml-4 flex items-center md:ml-6">
//                       <Link to="/Manager/Messages" >
//                       <button
//                         type="button"
//                         className="rounded-full g-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-5"
//                       >
//                         <span className="sr-only">View Messages</span>
//                         <BiSolidMessageDetail className="h-6 w-6" aria-hidden="true" />
//                       </button>
//                       </Link>

//                       <button
//                         type="button"
//                         className="rounded-full g-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-5"
//                       >
//                         <span className="sr-only">View notifications</span>
//                         <BiSolidBell className="h-6 w-6" aria-hidden="true" />
//                       </button>

//                       {/* Profile dropdown */}
//                       <Menu as="div" className="relative ml-3">
//                         <div>
//                           <Menu.Button className="flex max-w-2xl items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                             <span className="sr-only">Open user menu</span>
//                             <img className="h-11 w-11 rounded-full border-white border-2" src={priofileimg} alt="" />
//                           </Menu.Button>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <a
//                                     href={item.href}
//                                     className={classNames(
//                                       active ? 'bg-gray-100' : '',
//                                       'block px-4 py-2 text-sm text-gray-700'
//                                     )}
//                                   >
//                                     {item.name}
//                                   </a>
//                                 )}
//                               </Menu.Item>
//                             ))}
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>

//                       <div className='text-white ml-4 mr-4'>
//                         <h3 className='text-left'>Jayani Ranasinghe</h3>
//                         <h3 className=''>jayaniranasinghe@gmail.com</h3>
//                       </div>

//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="md:hidden">
             
//                 <div className="border-t border-gray-700 pb-3 pt-4">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img className="h-10 w-10 rounded-full" src={priofileimg} alt="" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">{user.name}</div>
//                       <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
//                     </div>
//                     <button
//                       type="button"
//                       className="mr-12 flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BiSolidBell className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 space-y-1 px-2">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
//     </>
//   )
// }

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


