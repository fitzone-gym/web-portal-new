import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    //simulating a simple login logic
    if (email === "" || password === "") {
      setError("Invalid Username or Password");
      alert("Invalid Username or Password");
    } else {
      setError("");

      try {
        const response = await axios.post("http://localhost:5400/auth/login", {
          email: email,
          password: password,
        });

        console.log(response.data);
        if (response.data.success) {
          const currentUser = response.data.data;
          console.log(currentUser);

          if (currentUser.role_id === 3) {
            sessionStorage.setItem("first_name", currentUser.first_name);
            sessionStorage.setItem("last_name", currentUser.last_name);
            sessionStorage.setItem("email", currentUser.email);
            sessionStorage.setItem("role_id", currentUser.role_id);
            sessionStorage.setItem("id", currentUser.user_id);
            sessionStorage.setItem(
              "profile_image",
              currentUser.profile_picture
            );
            navigate("/Doctor/Dashboard");
          } else if (currentUser.role_id === 4) {
            sessionStorage.setItem("first_name", currentUser.first_name);
            sessionStorage.setItem("last_name", currentUser.last_name);
            sessionStorage.setItem("email", currentUser.email);
            sessionStorage.setItem("role_id", currentUser.role_id);
            sessionStorage.setItem("id", currentUser.user_id);
            sessionStorage.setItem(
              "profile_image",
              currentUser.profile_picture
            );
            // sessionStorage.setItem("role", "manager");
            navigate("/Manager/Dashboard");
          } else if (currentUser.role_id === 5) {
            sessionStorage.setItem("first_name", currentUser.first_name);
            sessionStorage.setItem("last_name", currentUser.last_name);
            sessionStorage.setItem("email", currentUser.email);
            sessionStorage.setItem("role_id", currentUser.role_id);
            sessionStorage.setItem("id", currentUser.user_id);
            sessionStorage.setItem(
              "profile_image",
              currentUser.profile_picture
            );
            // sessionStorage.setItem("role", "receptionist");
            navigate("/Receptionist/Dashboard");
          }
          // navigate("/Doctor/Dashboard");

          // if cookie is set else add JWT token sessoin, local storage
          // add to the session
          // state application state
          //define the route
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (<>
    <div className="flex items-center py-8 justify-between mx-40 md:h-screen lg:py-0 max-w-fit pb-20 ">
      <div className="max-lg:hidden lg:block pr-20 lg:pr-40 ml-8 md:ml-20 text-left">
        <div>
          <h2 className="text-5xl 2xl:text-6xl justify-left text-white mb-5 md:mb-10 mt-20">
            Exercise smartly and be physically active
          </h2>
        </div>
        <div>
          <h3 className="text-red-700 text-3xl 2xl:text-4xl font-semibold mb-5 md:mb-10">
            Increase your target to be healthier to continue exercising
          </h3>
        </div>
        <div>
          <h4 className="text-gray-300 text-2xl 2xl:text-2xl font-semibold">
            You can improve yourself to have exercise smartly and be physically
            active
          </h4>
        </div>
      </div>

      <div
        className="bg-black opacity-80 rounded-3xl sm:max-w-xl xl:py-4 md:mr-[10%] h-[60%] "
        style={{ width: 1000, height: 500 }}
      >
        <div className="p-6 space-y-4 md:space-y-10 sm:px-24">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-red-600">
            Sign in
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base md:text-lg font-medium text-white dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="md:w-[100%] bg-black border border-gray-300 text-white base:text-base md:text-12 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="user@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontSize: 14 }}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-base md:text-lg font-medium text-white dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="md:w-[100%] bg-black border border-gray-300 text-white base:text-base md:text-12 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ fontSize: 14 }}
              />
            </div>
            {error ? <p>{error}</p> : null}
            <div className="flex items-center justify-between">
              {/* <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-1 text-xs lg:text-sm">
                  <label
                    htmlFor="remember"
                    className="text-white dark:text-gray-300 ml--10"
                  >
                    Remember me
                  </label>
                </div>
              </div> */}
              <div>
                <a
                  href="#"
                  className="text-xs lg:text-sm text-red-100 text-primary-600 hover:underline dark:text-primary-500 ml-5"
                  style={{ merginLeft: -100 }}
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 md:w-[62%] bg-red-600 hover:bg-red-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-md md:text-lg font-bold rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={handleLogin}
            >
              Sign in
            </button>
            {/* </Link> */}
            {/* <p className="text-xs md:text-sm font-light text-white dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-red-600"
              >
                Sign up
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-red-700 text-3xl 2xl:text-4xl font-semibold mb-5 md:mb-10">
        Increase your target to be healthier to continue exercising
      </h3>
    </div>
    <div>
      <h4 className="text-gray-300 text-2xl 2xl:text-2xl font-semibold">
        This application can improve yourself to have exercise smartly and be physically active
      </h4>
    </div>
  


  <div className="w-[150%] bg-black opacity-80 rounded-3xl sm:max-w-xl xl:py-4 md:mr-[10%] h-[60%]">
    <div className="p-6 space-y-4 md:space-y-10 sm:px-24 ">
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-red-600">
        Sign in
      </h1>
      <form className="space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-base md:text-lg font-medium text-white dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="md:w-[100%] bg-black border border-gray-300 text-white base:text-base md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jayani"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-base md:text-lg font-medium text-white dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="md:w-[100%] bg-black border border-gray-300 text-white base:text-base md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-xs lg:text-sm">
              {/* <label htmlFor="remember" className="text-white dark:text-gray-300 mr-4">
                Remember me
              </label> */}
            </div>
          </div>
          <div>
            <a
              href="#"
              className="text-xs lg:text-sm text-red-600 text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="md:w-[62%] bg-red-600 hover:bg-red-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-md md:text-lg font-bold rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
        <p className="text-xs md:text-sm font-light text-white dark:text-gray-400">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  </div>
  </>);
};
