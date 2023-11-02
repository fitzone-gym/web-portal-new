
import Header from "../../components/header";
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/memberlist.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import All_Attendence_R from '../../components/Receptionist/All_Attendence_R';

export const R_Attendence_All= () => {



    return (
<div className="flex flex-col h-screen w-full bg-white">
    
    <Header />
 
    <div className="flex flex-row">
    <Sidenav style={{paddingTop:"150px"}}/>

      <All_Attendence_R/>

    </div>

    </div>
   

  )
} 

export default R_Attendence_All
