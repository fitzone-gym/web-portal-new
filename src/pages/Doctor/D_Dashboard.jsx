import React from 'react'
import Header from '../../components/Doctor/header';
import Sidenav from '../../components/Doctor/sidenav';

function D_Dashboard() {
  return (

    <div><Header/>
        <Sidenav/>
    
    <div className='dashboard'>

        

      <div className='statistics'>

      <div className="max-w-full mx-4 py-6  bg-grey-600 sm:mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Total Members</h3>
                        <p className="text-3xl font-bold text-black">216</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">New Members</h3>
                        <p className="text-3xl font-bold text-black">12</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Total Appoinment</h3>
                        <p className="text-3xl font-bold text-black">36</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Today Appoinment </h3>
                        <p className="text-3xl font-bold text-black">03</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-2/3 sm:my-8">
            <div className="bg-white p-12 h-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Announcements</h3>
                        <div
  class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-8xl md:flex-row">
  
  <div class="flex flex-col justify-start p-1 text-left	">
    <h5
      class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
 Gym Class Schedule Update: New Classes Added!    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Attention all gym members! We are excited to announce the addition of new classes to our schedule. From high-energy cardio sessions to relaxing yoga, there's something for everyone. Check out the updated schedule on our website or at the front desk and book your spot today!
    </p>
    <p class="text-xs text-neutral-500 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
  
</div>

<div
  class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-8xl md:flex-row">
  
  <div class="flex flex-col justify-start p-1 text-left	">
    <h5
      class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
      Member Appreciation Day: Let's Celebrate Together!
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Join us on Saturday for our Member Appreciation Day! We value each and every one of you, and to show our gratitude, we've planned a day full of fun activities, special workout sessions, and healthy snacks. Don't miss out on the chance to connect with fellow members and enjoy a memorable day at the gym!
    </p>
    <p class="text-xs text-neutral-500 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
  
</div>
                    </div>
                </div>
            </div>
        </div>


        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Member ID
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Check-in time 
                </label>
            
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="time"
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 my-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >
                Mark Attendence
              </button>
            </div>
          </form>

        </div>
        </div>
        </div>

        {/* Mmebers Revenue */}

        <div class="heading-members">
        <h1>Member's Attendence</h1>
        
        
    </div>

        <div class = "memberlist" >
        <div class="overflow-hidden rounded-lg border background-color: transparent border-gray-200 shadow-md m-5">
          <table class="w-full border-collapse bg-black text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Check in Time</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Check out Time</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Duration</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              <tr class="hover:bg-gray-50">
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-medium text-gray-700">Steven Jobs</div>
                    <div class="text-gray-400">jobs@sailboatui.com</div>
                  </div>
                </th>
                <td class="px-6 py-4">
                01.01.2022
                </td>
                <td class="px-6 py-4">22.07.2023</td>
                <td class="px-6 py-4">
                    T.K Bandara
                </td>
              </tr>



            {/* New Row  */}

            <tr class="hover:bg-gray-50">
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-medium text-gray-700">Steven Jobs</div>
                    <div class="text-gray-400">jobs@sailboatui.com</div>
                  </div>
                </th>
                <td class="px-6 py-4">
                01.01.2022
                </td>
                <td class="px-6 py-4">22.07.2023</td>
                <td class="px-6 py-4">
                    T.K Bandara
                </td>

              
             
              </tr>



            {/* New Row  */}


            <tr class="hover:bg-gray-50">
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-medium text-gray-700">Steven Jobs</div>
                    <div class="text-gray-400">jobs@sailboatui.com</div>
                  </div>
                </th>
                <td class="px-6 py-4">
                01.01.2022
                </td>
                <td class="px-6 py-4">22.07.2023</td>
                <td class="px-6 py-4">
                    T.K Bandara
                </td>

              
             
              </tr>



            {/* New Row  */}


            <tr class="hover:bg-gray-50">
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-medium text-gray-700">Steven Jobs</div>
                    <div class="text-gray-400">jobs@sailboatui.com</div>
                  </div>
                </th>
                <td class="px-6 py-4">
                01.01.2022
                </td>
                <td class="px-6 py-4">22.07.2023</td>
                <td class="px-6 py-4">
                    T.K Bandara
                </td>

              
             
              </tr>



            {/* New Row  */}


            <tr class="hover:bg-gray-50">
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div class="text-sm">
                    <div class="font-medium text-gray-700">Steven Jobs</div>
                    <div class="text-gray-400">jobs@sailboatui.com</div>
                  </div>
                </th>
                <td class="px-6 py-4">
                01.01.2022
                </td>
                <td class="px-6 py-4">22.07.2023</td>
                <td class="px-6 py-4">
                    T.K Bandara
                </td>
              </tr>



              
            {/* New Row  */}
            </tbody>
          </table>


        

</div> </div>

    
</div>

</div>
</div></div>

  )
}

export default D_Dashboard