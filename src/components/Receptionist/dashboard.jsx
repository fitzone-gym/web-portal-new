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

<div className="max-w-full mx-4 py-6  bg-grey-600 sm:mx-auto sm:px-6 lg:px-8 mt-20">
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
          <p className="text-5xl ml-8 mt-4 text-white">273</p>
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
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">New Members</h1>
          <p className="text-5xl ml-8 mt-4 text-white">18</p>
          <p className="text-medium ml-8 mt-4 text-red-500">New Gym Members</p>
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
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Total Trainers</h1>
          <p className="text-5xl ml-8 mt-4 text-white">26</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Trainers</p>
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
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">New Trainers</h1>
          <p className="text-5xl ml-8 mt-4 text-white">5</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Newly joined gym trainers</p>
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
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Attendence Today</h1>
          <p className="text-5xl ml-8 mt-4 text-white">126</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members presnet today</p>
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
          <h1 className="text-xl mt-2 ml-8 mt-2 text-white">Current Presence</h1>
          <p className="text-5xl ml-8 mt-4 text-white">24</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Members at the time</p>
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
                    </div>
                </div>
            </div>
        </div>


        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 h-120">
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
                  type="text"
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Check-out time 
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

</div>

</div>
</div>
  )
}

export default Dashboard