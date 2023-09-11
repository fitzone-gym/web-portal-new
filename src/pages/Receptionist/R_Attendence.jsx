
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/memberlist.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Attendence_R from '../../components/Receptionist/Attendence_R';

export const R_Attendence= () => {



    return (
<div className="flex flex-col h-screen w-full bg-white">
    
    <Header />
 
    <div className="flex flex-row">
    <Sidenav />

      <Attendence_R/>

    </div>

    </div>
   

  )
} 

export default R_Attendence
