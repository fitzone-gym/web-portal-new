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
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Total Members</h3>
                        <p className="text-3xl font-bold text-black">236</p>
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
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Total Trainers</h3>
                        <p className="text-3xl font-bold text-black">36</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Avg. Click Rate</h3>
                        <p className="text-3xl font-bold text-black">24.57%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Total Subscribers</h3>
                        <p className="text-3xl font-bold text-black">71,897</p>
                    </div>

                    
                </div>

                
            </div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Total Subscribers</h3>
                        <p className="text-3xl font-bold text-black">71,897</p>
                    </div>

                    
                </div>

                
            </div>
            
        </div>
 <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Avg. Open Rate</h3>
                        <p className="text-3xl font-bold text-black">58.16%</p>
                    </div>
                </div>
            </div>

            
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Avg. Click Rate</h3>
                        <p className="text-3xl font-bold text-black">24.57%</p>
                    </div>
                </div>
            </div>
        </div>


        
    </div>

    <div className="sm:flex sm:space-x-">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-12 h-6">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-400">Total Subscribers</h3>
                        <p className="text-3xl font-bold text-black">71,897</p>
                    </div>
                </div>
            </div>
        </div>


        </div>

    
</div>

</div>
</div>
  )
}

export default Dashboard