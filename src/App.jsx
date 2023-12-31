// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import R_Dashboard from "./pages/Receptionist/R_Dashboard";
import R_Memeberlist from "./pages/Receptionist/R_Memeberlist";
import R_Trainerlist from "./pages/Receptionist/R_Trainerlist";
import R_Announcement from "./pages/Receptionist/R_Announcement";
import R_Userprofile from "./pages/Receptionist/R_Userprofile";
import R_Attendence from "./pages/Receptionist/R_Attendence";
// import R_onememberattendence from "./pages/Receptionist/onememberattendence";
// import R_Leaverequest from "./pages/Receptionist/R_Leaverequest";
import R_Payment from "./pages/Receptionist/R_Payment";
import R_Memberprofile from "./pages/Receptionist/R_Memberprofile";
import R_Trainerprofile from "./pages/Receptionist/R_Trainerprofile";
import R_Editmyprofile from "./components/Receptionist/editprofile";
import R_myprofile from "./components/Receptionist/Myprofile";
// import R_Attendence_All from "./pages/Receptionist/R_Attendence_All";
import Feedback_R from './pages/Receptionist/Feedback'
import R_events from "./pages/Receptionist/R_events";
import R_Oncalldoctor from "./pages/Receptionist/R_Oncalldoctor";

//manager
import { Login } from "./pages/Login/Login";
import { Members } from "./pages/Manager/Members";
import { Staffmembers } from "./pages/Manager/Staffmembers";

import { Dashboard } from "./pages/Manager/Dashboard";
import { Trainer } from "./pages/Manager/Trainer";
import { Doctor } from "./pages/Manager/Doctor";
import { Announcement } from "./pages/Manager/Announcement";

import { Leave } from "./pages/Manager/Leave";

import { Receptionist } from "./pages/Manager/Receptionist";

import { Test } from "./pages/test";
import { Profile } from "./pages/Manager/Profile";
import { Feedback } from "./pages/Manager/Feedback";
import { TrainerProfile } from "./pages/Manager/TrainerProfile";
import { UpdateAnnoun } from "./pages/Manager/UpdateAnnoun";
import { Messages } from "./pages/Manager/Messages";

import R_Contactus_submitions from "./pages/Receptionist/ContactUsSUbmitions";
import { TrainerLeaveReqList } from "./pages/Manager/TrainerLeaveReqList";

import D_Dashboard from "./pages/Doctor/D_Dashboard";
import D_Leaverequest from "./pages/Doctor/D_LeaveRequest";
import D_PaymentHistory from "./pages/Doctor/D_PaymentHistory";
import D_Myprofile from "./pages/Doctor/D_Myprofile";
import D_Memberslist from "./pages/Doctor/D_Memberslist";
import D_Appointments from "./pages/Doctor/D_Appointments";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Receptionist/Dashboard" element={<R_Dashboard />} />
        <Route path="/Receptionist/MembersList" element={<R_Memeberlist />} />
        <Route
          path="/Receptionist/Memberprofile"
          element={<R_Memberprofile />}
        />
        <Route path="/Receptionist/Trainerlist" element={<R_Trainerlist />} />
        <Route
          path="/Receptionist/Trainerprofile"
          element={<R_Trainerprofile />}
        />
        <Route path="/Receptionist/Announcement" element={<R_Announcement />} />
        <Route path="/Receptionist/Payment" element={<R_Payment />} />
        <Route path="/Receptionist/Myprofile" element={<R_Userprofile />} />
        <Route
          path="/Receptionist/Memberattendence"
          element={<R_Attendence />}
        />
        {/* <Route path="/Receptionist/leaveRequest" element={<R_Leaverequest />} /> */}
        <Route path="/Receptionist/editprofile" element={<R_Editmyprofile />} />
        <Route path="/Receptionist/feedback" element={<Feedback_R />} />
        <Route path="/Receptionist/events" element={<R_events />} />
        <Route path="/Receptionist/onCallDoctor" element={<R_Oncalldoctor />} />

        <Route
          path="/Receptionist/contactUsSubmitions"
          element={<R_Contactus_submitions />}
        />
        <Route path="/Receptionist/profile" element={<R_myprofile />} />

        <Route path="/" element={<Login />} />

        {/* Doctor */}
        <Route path="/Doctor/Dashboard" element={<D_Dashboard />} />
        <Route path="/Doctor/Payment" element={<D_PaymentHistory />} />
        <Route path="/Doctor/Myprofile" element={<D_Myprofile />} />
        <Route path="/Doctor/MembersList" element={<D_Memberslist />} />
        <Route path="/Doctor/Appointments" element={<D_Appointments />} />
        <Route path="/Doctor/LeaveRequests" element={<D_Leaverequest />} />

        <Route path="/" element={<Login />} />
        <Route path="/Manager/Dashboard" element={<Dashboard />} />
        <Route path="/Manager/Profile" element={<Profile />} />
        <Route path="/Manager/Messages" element={<Messages />} />
        <Route path="/Manager/Members" element={<Members />} />
        <Route path="/Manager/Staffmembers" element={<Staffmembers />} />
        <Route path="/Manager/Staffmembers/Trainer" element={<Trainer />} />
        <Route path="/Manager/Staffmembers/Doctor" element={<Doctor />} />
        <Route
          path="/Manager/Staffmembers/Receptionist"
          element={<Receptionist />}
        />
        <Route
          path="/Manager/Staffmembers/Trainer/TrainerProfile"
          element={TrainerProfile}
        />
        <Route path="/Manager/Announcement" element={<Announcement />} />
        <Route path="/Manager/Leave" element={<Leave />} />
        <Route
          path="/Manager/Leave/TrainerList"
          element={<TrainerLeaveReqList />}
        />
        <Route path="/Manager/Feedback" element={<Feedback />} />
        <Route path="/Manager/Payment" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
