
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/memberlist.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Gymtrainerattendence from '../../components/Receptionist/Gymtrainerattendence';

export const R_Gymtrainerattendence = () => {



    return (
<div className="flex flex-col h-screen w-full bg-white">
    
    <Header />
 
    <div className="flex flex-row">
    <Sidenav />

      <Gymtrainerattendence/>

    </div>

    </div>
   

  )
} 

export default R_Gymtrainerattendence
