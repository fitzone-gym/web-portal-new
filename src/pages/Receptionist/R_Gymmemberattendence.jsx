
import Header from "../../components/header";
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/memberlist.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Gymmemberattendence from '../../components/Receptionist/Gymmemberattendence';

export const R_Gymmemberattendence = () => {



    return (
<div className="flex flex-col h-screen w-full bg-white">
    
    <Header />
 
    <div className="flex flex-row">
    <Sidenav />

      <Gymmemberattendence/>

    </div>

    </div>
   

  )
} 

export default R_Gymmemberattendence
