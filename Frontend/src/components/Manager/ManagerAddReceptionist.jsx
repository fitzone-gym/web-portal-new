import React from 'react'

export const ManagerAddReceptionist = () => {
  return (
    <div
      className="text-white items-center justify-center flex"
      style={{
        position: "relative",
        top: 95,
      }}
    >
      <form
        className="bg-[#555555] rounded-3xl mt-10"
        style={{
          height: 640,
          width: 790,
        }}
      >
        <div class="text-left px-16 py-10 text-2xl">
          <h2>Add New Receptionist</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 ml-16 justify-center items-center text-left ">
          <div className="col">
            <span className="mt-52 col">First Name </span>
          </div>
          <div>
            <span className="mt-52 col">Last Name</span>
          </div>
          <div className="">
            <input className="rounded-md w-72" type="text" name="first-name" placeholder="first name" />
          </div>
          <div>
            <input className="rounded-md w-72" type="text" name="last-name" placeholder="last name" />
          </div>

          <div className="col">
            <span className="mt-52 col">Mobile No</span>
          </div>
          <div>
            <span className="mt-52 col">E-mail</span>
          </div>
          <div>
            <input className="rounded-md w-72" type="text" name="mob-no" placeholder="mobile no" />
          </div>
          <div>
            <input className="rounded-md w-72"
              type="email"
              name="email"
              placeholder="email"
            
            />
          </div>
     
          <div>
            <span className="mt-52 col">Username</span>
          </div>
          <div>
            <span className="mt-52 col">Password</span>
          </div>
          <div>
            <input className="rounded-md w-72"
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div>
            <input className="rounded-md w-72"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-1/3 bg-red-600 mt-20 hover:bg-red-800 justify-center items-center  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg font-bold rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add
        </button>
      </form>
    </div>
  )
}
