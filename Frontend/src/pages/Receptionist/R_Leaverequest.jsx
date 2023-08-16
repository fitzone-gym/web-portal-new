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

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">


          
      <form
      
        className="bg-[#555555] rounded-3xl"
        style={{
          height: 640,
          width: 790,
        }}
      >


        <div className="text-left px-16 py-10 text-2xl mt-[-2%] text-white ">
          <h2>Add New Trainer</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 ml-16 justify-center items-center text-left ">
          <div className="col">
            <span className="mt-52 col text-white ">First Name </span>
          </div>
          <div>
            <span className="mt-52 col text-white ">Last Name</span>
          </div>
          <div className="">
            <input
              className="rounded-md w-72"
              type="text"
              name="firstname"
              placeholder="first name"
              onChange={e=>
                setValues({ ...values, firstname: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="lastname"
              placeholder="last name"
              onChange={e =>
                setValues({ ...values, lastname: e.target.value })
              }
            />
          </div>

          <div className="col">
            <span className="mt-52 col text-white ">Mobile No</span>
          </div>
          <div>
            <span className="mt-52 col text-white ">E-mail</span>
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="phoneno"
              placeholder="mobile no"
              onChange={e =>
                setValues({ ...values, phoneno: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="email"
              placeholder="email"
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div>
            <span className="mt-52 col text-white ">Username</span>
          </div>
          <div>
            <span className="mt-52 col text-white ">Password</span>
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="text"
              name="username"
              placeholder="username"
              onChange={e =>
                setValues({ ...values, username: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="rounded-md w-72"
              type="password"
              name="password"
              placeholder="password"
              onChange={e =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success w-1/3 bg-red-600 mt-20 hover:bg-red-800 justify-center items-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg font-bold rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add
        </button>
      </form>
    </div>

        
        </div>
  )
}

export default R_Leaverequest