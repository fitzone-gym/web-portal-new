import React from 'react'
import Header from "../../components/header";
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/onememberattendence.css'
import profilephoto from '../../assets/profileimage.jpg'

function R_Userprofile() {
  return (
    <div>
    <Header />
    <Sidenav />


      <div className='userprofile'>
    <>
  {/* component */}
  {/* <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  /> */}
 
  

    <div className='profilecard'>
    <section className="relative py-1 ">
      <div className="container mx-auto px-3">
        <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
         
           
            </div>

            <div className='profilephoto'>
                <img src={profilephoto}/>

            </div>
            <div className="text-center mt-12">
              <h6 className="text-4xl font-semibold leading-normal mb-2 text-slate-50 mb-2">
                Jasitharan
              </h6>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <table class="w-full border-collapse bg-black text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Date</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Check in Time</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Check out Time</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Duration</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                    11.07.2023
                </td>
              <td class="px-6 py-4">
                06.00 PM 
                </td>
                <td class="px-6 py-4">
                07.30 PM
                </td>
         
                <td class="px-6 py-4">
                    01 Hour 30 Minutes
                </td>
              </tr>

            {/* New Row  */}


            
            </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>

    </section>  </div>




</>



        
    </div>
    </div>
  )
}

export default R_Userprofile