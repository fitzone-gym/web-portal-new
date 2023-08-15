import { CheckIcon } from '@heroicons/react/20/solid'
import '../../styles/Receptionist/dashboard.css'
import background_image from '../../assets/dashboard_bg.png';


const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

function Dashboard() {
  return (
    
    <div className='dashboard'>

      <div className='statistics'>

      <div className="max-w-full mx-4 py-6  bg-grey-600 sm:mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div
          class="bg-[#222222] border border-white/[.5] font-bold rounded-sm text-left rounded-md"
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Members</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members</p>
        </div>
        </div>

        <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
        <div
          class="bg-[#222222] border border-white/[1.] font-bold rounded-sm text-left rounded-md"
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Members</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members</p>
        </div>
        </div>
        <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
        <div
          class="bg-[#222222] border border-white/[1.] font-bold rounded-sm text-left rounded-md"
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Members</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members</p>
        </div>
        </div>
        <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
        <div
          class="bg-[#222222] border border-white/[1.] font-bold rounded-sm text-left rounded-md"
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Members</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members</p>
        </div>
        </div>
    </div>

    <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
        <div
          class="bg-[#222222] border border-white/[1.] font-bold rounded-sm text-left rounded-md"
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Members</h1>
          <p className="text-5xl ml-8 mt-4 text-white">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members</p>
        </div>
        </div>


        
    </div>

    <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-2/3 sm:my-8">
            <div className="bg-white p-12 h-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Announcements</h3>
                        <p className="text-3xl font-bold text-black">71,897</p>
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
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
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
</div>
  )
}

export default Dashboard