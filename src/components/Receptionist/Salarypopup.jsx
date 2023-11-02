import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import Payment from '../../components/Receptionist/payment';
import Logo from "../../assets/logo.png";
function Salarypopup() {
  return (
    <dh-component>
            
    <div class="py-12 bg-slate-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 opacity-95 " id="modal">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg ">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 mt-40">
                <div class="w-full flex justify-start text-gray-600 mb-3">
                <img src={Logo} className="h-20 justify-center" />
                </div>
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> Monthly Salary Details </h1>
             <div className=''>
                <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal w-25">Staff Name Name</label>
                <h4 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> Jasitharan </h4>

            </div>    
            <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal"> Month </label>
                <div class="relative mb-5 mt-2">
                <h4 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> July </h4>

                </div>
                <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal"> Salary </label>
                <div class="relative mb-5 mt-2">
                <h4 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> Rs.48,500 </h4>

                </div>
                <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Paid on</label>
                <div class="relative mb-5 mt-2">
                <h4 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"> 25.07.2023 </h4>

                </div>
                <div class="flex items-center justify-start w-full">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-gray-400 bg-gray-800 rounded text-white px-10 py-2 text-sm flex-center justify-center align-content: center;">Print Pay Sheet</button>
                </div>
                <a href='/Receptionist/Payment'>
                <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                    <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>  </a>
            </div>
        </div>
    </div>
   

<div>

<Header/>

        
<div className="flex flex-row">
<Sidenav />


    <Payment/>


</div>

</div>
    
</dh-component>
  )
}

export default Salarypopup