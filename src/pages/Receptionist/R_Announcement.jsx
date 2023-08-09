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

    
<div className="bg-black-800 px-4 py-3 text-red-200">
  <p className="text-center text-sm font-medium">
  Get Fit This Season with Our Exclusive Gym Offer!

<a href="#" className="inline-block underline">Check out this new packages!</a>

<hr/>
  </p>
</div>

<div
  class="flex flex-col rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-8xl md:flex-row">
  
  <div class="flex flex-col justify-start p-1 text-left	">
    <h5
      class="mb-2 text-xl font-medium text-neutral-50 dark:text-neutral-50">
 Gym Class Schedule Update: New Classes Added!    </h5>
    <p class="mb-4 text-base text-neutral-50 dark:text-neutral-200">
    Attention all gym members! We are excited to announce the addition of new classes to our schedule. From high-energy cardio sessions to relaxing yoga, there's something for everyone. Check out the updated schedule on our website or at the front desk and book your spot today!
    </p>
    <p class="text-xs text-gray-300 dark:text-neutral-300">
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