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




function App() {
  

  return (
    <>
 
      <Routes>
        <Route path="/" element={<R_Dashboard />} />
        <Route path="/Receptionist/MembersList" element={<R_Memeberlist />} />
        <Route path="/Receptionist/Memberprofile" element={<R_Memberprofile />} />
        <Route path="/Receptionist/Trainerlist" element={<R_Trainerlist />} />
        <Route path="/Receptionist/Trainerprofile" element={<R_Trainerprofile />} />
        <Route path="/Receptionist/Announcement" element={<R_Announcement />} />
        <Route path="/Receptionist/Payment" element={<R_Payment />} />
        <Route path="/Receptionist/Myprofile" element={<R_Userprofile />} />
        <Route path="/Receptionist/Memberattendence" element={<R_Attendence />} />
        {/* <Route path="/Profile" element={<R_Userprofile />} /> */}
        {/* <Route path="/Members" element={<Members />} /> */}
        {/* <Route path="/Staffmembers" element={<Staffmembers />} />
        <Route path="/Staffmembers/Trainer" element={<Trainer />} />
        <Route path="/Staffmembers/Doctor" element={<Doctor />} />
        <Route path="/Staffmembers/Receptionist" element={<Receptionist />} />
        <Route
          path="/Staffmembers/Trainer/Addtrainer"
          element={<Addtrainer />}
        /> */}
        {/* <Route path="/Announcement" element={<Announcement />} />
        <Route path="/Announcement/CreateAnnoun" element={<CreateAnnoun />} />
        <Route path="/Leave" element={<Leave />} /> */}
        {/* <Route path="/Feedback" element={<Feedback />} /> */}
        {/* <Route path="/Payment" element={<Payment />} />
        <Route path="/Payment/TrainerPay" element={<TrainerPay />} />
        <Route path="/Payment/DoctorPay" element={<DoctorPay />} />
        <Route
          path="/Payment/ReceptionistPay"
          element={<ReceptionistPay />}
        />
        <Route path="/Payment/MemberPay" element={<MemberPay />} />
        <Route path="/Doctor/Doctorcheckup" element={<D_Checkupforms />} /> */}




      </Routes>

  </>



  );
}

export default App;
