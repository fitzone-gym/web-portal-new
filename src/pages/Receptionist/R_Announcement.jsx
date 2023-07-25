import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/announcement.css'



function R_Announcement() {
  return (
    <div>
        <div>
    
    <Header />
    <div className='body-members'>
    
    <Sidenav />

    <div className='announcement'>

    
<div className="bg-red-600 px-4 py-3 text-black">
  <p className="text-center text-sm font-medium">
    Love Alpine JS?
    <a href="#" className="inline-block underline">Check out this new course!</a>
  </p>
</div>

<div
  class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-8xl md:flex-row">
  
  <div class="flex flex-col justify-start p-1 -left-1">
    <h5
      class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
      Announcement Title 
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
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
  )
}

export default R_Announcement