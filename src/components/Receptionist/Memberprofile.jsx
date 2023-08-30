import React from 'react'
import '../../styles/Receptionist/memberlist.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import profilephoto from '../../assets/profileimage.jpg'

function Memberprofile() {
  return (
   <div>
    <section className="relative  w-[100%] ml-80 mt-40">
      <div className="container mx-auto px-3 mt-14">
        <div className="relative flex flex-col min-w-0 break-words bg-neutral-300 w-full mb-6 shadow-xl rounded-lg -mt-64 text-gray-800">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0 ">
                 <Link to="/Receptionist/editprofile">
                  <button
                    className="bg-pink-500 active:bg-gray-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  >
                    CHAT
                  </button> </Link>
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-0 p-3 text-left">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-800">
                      MEMBER PROFILE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='profilephoto'>
                <img src={profilephoto}/>

            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                Jasitharan
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-800 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-50" />
                Member , FitZone
              </div>
           
              <div className="mb-2 text-slate-50">
                <i className="fas fa-university mr-2 text-lg text-slate-50" />
                University of Colombo School of Computing
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center w-full">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-11/12 px-4">
               
              
                 
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex  space-x-2 font-semibold text-gray-900 leading-8 ">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-m text-left">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">Jane</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">Doe</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">Female</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">+11 998001001</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
               
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>  
        
    </div>
  )
}

export default Memberprofile