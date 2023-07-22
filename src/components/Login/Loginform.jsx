import React, { useState } from "react";

export const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., making an API call
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div
      class="flex items-center py-8 justify-between gap-x-10 mx-auto md:h-screen lg:py-0 max-w-fit"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        class=" hidden lg:block text-left "
      >
        <h1 class="w-60 text-7xl text-white m-0 mb-5 ">
          Exercise smartly and be physically active
        </h1>
        <h3 class="w-1/2 text-red-700 text-4xl font-semibold mb-5">
          Increase your target to be healthier to continue exercising{" "}
        </h3>
        <h4 class="w-1/2 text-gray-300 text-2xl font-semibold">
          This application can improve yourself to have exercise smartly and be
          physically active
        </h4>
      </div>
      <div class="w-full bg-black opacity-80 rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-4xl font-bold leading-tight tracking-tight text-red-600">
            Sign in
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="username"
                class="block mb-2 text-base font-medium text-white dark:text-white "
              >
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                class="bg-black border border-gray-300 text-white base:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jayani"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-base font-medium text-white dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                class="bg-black border border-gray-300 text-white base:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-white dark:text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                class="text-base font-semibold text-red-600 text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              class="w-1/2 bg-red-600 hover:bg-red-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg font-bold rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-white dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
