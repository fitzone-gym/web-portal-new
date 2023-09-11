import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Doctor/leaverequest.css'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Leavedetails from '../../components/Receptionist/leavedetails';
      
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function R_Leaverequest() {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
    
    <Header />
 
    <div className="flex flex-row">
    <Sidenav />

    <Leavedetails/>

      

    </div>

    </div>

  )
}

export default R_Leaverequest