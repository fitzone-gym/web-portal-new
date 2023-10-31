
import Header from "../../components/header";
import Sidenav from '../../components/Receptionist/sidenav';
import Announcement_R from '../../components/Receptionist/Announcement_R';
import '../../styles/Receptionist/announcement.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";



export const R_Announcement = () => {
 

  return (
    <div className="flex flex-col h-screen w-full bg-white">
      
      <Header />
    
      <div className="flex flex-row">
      <Sidenav />
    
    
        <Announcement_R/>
    
      </div>
    
      </div>
  )
}

export default R_Announcement

