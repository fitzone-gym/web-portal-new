import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/attendence.css'

function R_Memeberlist() {

    return (
    <div>
    
    <Header />
    <div className='body-members'>
    
    <Sidenav />


    <div class="heading-members">
        <span>
         Member's Attendence
        </span>

        <span className='seeall'>
         SEE ALL
        </span>
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
                <td class="px-6 py-4"> 01.01.2022 </td>
                <td class="px-6 py-4">22.07.2023  </td>
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
        </div>
        </div>

        
    <div class="heading-members">
        <span>
        Trainer's Attendence
        </span>
        <span className='seeall'>
         SEE ALL
        </span>
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


          
        </div>
        </div>






        
</div></div> 

  )
}

export default R_Memeberlist