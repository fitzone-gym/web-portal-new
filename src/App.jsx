import { useState } from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
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
import D_Checkupforms from "./pages/Doctor/D_Checkupforms";
import R_Memberprofile from './pages/Receptionist/R_Memberprofile'
import R_Trainerprofile from "./pages/Receptionist/R_Trainerprofile";
import D_Myprofile from './pages/Doctor/D_Myprofile'
import { Login } from "./pages/login";
import D_Memberslist from './pages/Doctor/D_Memberslist'
import D_Appointments from "./pages/Doctor/D_Appointments";








function App() {
  

  return (
    <>
 
      <Routes>
        <Route path="/Receptionist/Dashboard" element={<R_Dashboard />} />
        <Route path="/Receptionist/MembersList" element={<R_Memeberlist />} />
        <Route path="/Receptionist/Memberprofile" element={<R_Memberprofile />} />
        <Route path="/Receptionist/Trainerlist" element={<R_Trainerlist />} />
        <Route path="/Receptionist/Trainerprofile" element={<R_Trainerprofile />} />
        <Route path="/Receptionist/Announcement" element={<R_Announcement />} />
        <Route path="/Receptionist/Payment" element={<R_Payment />} />
        <Route path="/Receptionist/Myprofile" element={<R_Userprofile />} />
        <Route path="/Receptionist/Memberattendence" element={<R_Attendence />} />
        <Route path="/Receptionist/leaveRequest" element={<R_Leaverequest />} />
        
        <Route path="/" element={<Login />} />


        {/* Doctor */}
        <Route path="/Doctor/Dashboard" element={<D_Dashboard />} />
        <Route path="/Doctor/Payment" element={<D_PaymentHistory />} />
        <Route path="/Doctor/Myprofile" element={<D_Myprofile />} />
        <Route path="/Doctor/MembersList" element={<D_Memberslist />} />
        <Route path="/Doctor/checkupform" element={<D_Checkupforms />} />
        <Route path="/Doctor/Appointments" element={<D_Appointments />} />



      </Routes>

  </>



  );
}

export default App;
