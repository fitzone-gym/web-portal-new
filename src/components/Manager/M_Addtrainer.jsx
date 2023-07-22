import React from "react";

export const M_Addtrainer = () => {
  return (
    <div
      class="text-white"
      style={{
        position: "fixed",
        top: 95,
        left: 600,
        right: 0,
        bottom: 0,
      }}
    >
      <form
        class="bg-[#555555] rounded-3xl "
        style={{
          height: 770,
          width: 720,
        }}
      >
        <div >
          <div>
            <span class="mt-52">First Name</span>
            <input type="text" name="first-name" placeholder="first name" />
          </div>
          <div>
            <span>Last Name</span>
            <input type="text" name="last-name" placeholder="last name" />
          </div>

          <div>
            <div>
              <span>Mobile No</span>
              <input type="text" name="mob-no" placeholder="mobile no" />
            </div>
            <div>
              <span class="">E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="email"
                style={{
                  marginLeft: 30,
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <span>Username</span>
              <input
                type="text"
                name="username"
                placeholder="username"
                style={{
                  marginLeft: 4,
                }}
              />
            </div>
            <div>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="password"
                style={{
                  marginLeft: 9,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="w-1/3 bg-red-600 mt-96 hover:bg-red-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg font-bold rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
