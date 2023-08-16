import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/userprofile.css'
import profilephoto from '../../assets/profileimage.jpg'

function R_Trainerprofile() {
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
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    className="bg-pink-500 active:bg-gray-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Chat
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-50">
                      22
                    </span>
                    <span className="text-sm text-slate-50">Reg No</span>
                  </div>
            
             
                </div>
              </div>
            </div>

            <div className='profilephoto'>
                <img src={profilephoto}/>

            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-50 mb-2">
                Jasitharan
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-slate-50 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-50" />
                Dehiwala, Colombo
              </div>
              <div className="mb-2 text-slate-50 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-slate-50" /> 
                Managining Director, Inaiyam Digital
              </div>
              <div className="mb-2 text-slate-50">
                <i className="fas fa-university mr-2 text-lg text-slate-50" />
                University of Colombo School of Computing
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-slate-50">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  {/* <a href="#pablo" className="font-normal text-pink-500">
                    Show more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>  
    
    
    
    
    </div>




</>



        
    </div>
    </div>
  )
}

export default R_Trainerprofile