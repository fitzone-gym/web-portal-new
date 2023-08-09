import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Doctor/leaverequest.css'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
      
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function R_Leaverequest() {
  return (
    <div>
        <Header/>
        <Sidenav/>


        <div className='leaveform'>

        <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-red-400">Leave Request Form </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="mt-10 grid grid-rows-2 gap-x-6 gap-y-8 sm:grid-cols-3 ml-24">


            <div className="sm:col-span-1">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-red-400">
                Date From
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-100 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>


              <label htmlFor="username" className="block text-sm font-medium leading-6 text-red-400">
                Date From
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-100 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
        </div>


        
        </div>
  
  
 


        </div>
        </div>
  )
}

export default R_Leaverequest