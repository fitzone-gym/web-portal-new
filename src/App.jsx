import { useState } from "react";
import "./App.css";
// import { Login } from "./pages/Login/Login";
// import { Members } from "./pages/Manager/Members";
// import { Staffmembers } from "./pages/Manager/Staffmembers";
// import { Addtrainer } from "./pages/Manager/Addtrainer";
 import { Dashboard } from "./pages/Manager/Dashboard";
// import { Trainer } from "./pages/Manager/Trainer";
// import { Doctor } from "./pages/Manager/Doctor";
// import {ReceptionistDashboard} from './pages/Receptionist/R_Dashboard';

// import R_Dashboard from "./pages/Receptionist/R_Dashboard";

import R_Header from './components/Receptionist/header';
import  R_Dashboard  from "./pages/Receptionist/R_Dashboard";
import R_Memeberlist from "./pages/Receptionist/R_Memeberlist";
import R_Trainerlist from "./pages/Receptionist/R_Trainerlist";
import R_Announcement from "./pages/Receptionist/R_Announcement";
import R_Userprofile from "./pages/Receptionist/R_Userprofile";
import R_Attendence from "./pages/Receptionist/R_Attendence"
import R_onememberattendence from "./pages/Receptionist/onememberattendence"
import D_Dashboard from "./pages/Doctor/D_Dashboard";
import D_Leaverequest from "./pages/Doctor/D_Leaverequest";
import D_PaymentHistory from "./pages/Doctor/D_PaymentHistory";
import R_Leaverequest from "./pages/Receptionist/R_Leaverequest";
import R_Payment from './pages/Receptionist/R_Payment'




function App() {
  

  return (
    <>

    
      {/* <Login /> */}
      {/* <Dashboard />  */}
      {/* <Members />  */}
      {/* <Trainer /> */}
      {/* <Doctor /> */}
       {/* <Staffmembers /> */}
       {/* <Addtrainer /> */}

       {/* <ReceptionistDashboard /> */}
       <R_Payment />
    </>
  );
}

export default App;
