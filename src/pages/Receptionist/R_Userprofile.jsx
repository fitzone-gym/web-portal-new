import React from 'react'
import '../../styles/Receptionist/userprofile.css'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import Myprofile from '../../components/Receptionist/Myprofile';
import profilephoto from '../../assets/profileimage.jpg'
import { Link } from "react-router-dom";

function R_Userprofile() {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
    
    <Header />
 
    <div className="flex flex-row">
    <Sidenav />

      <Myprofile/>

    </div>

    </div>
   

    
  )
}

export default R_Userprofile