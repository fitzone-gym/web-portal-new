import React from 'react'
import Header from "../../components/header";
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/userprofile.css'
import profilephoto from '../../assets/profileimage.jpg'
import Trainerprofile from '../../components/Receptionist/Trainerprofile';

function R_Trainerprofile() {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
    
    <Header />
 
    <div className="flex flex-row">
    <Sidenav />

      
      <Trainerprofile/>

    </div>

    </div>
   
   
  )
}

export default R_Trainerprofile