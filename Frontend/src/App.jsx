import { useState } from "react";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Members } from "./pages/Manager/Members";
import { Staffmembers } from "./pages/Manager/Staffmembers";
import { Addtrainer } from "./pages/Manager/Addtrainer";
import { Dashboard } from "./pages/Manager/Dashboard";
import { Trainer } from "./pages/Manager/Trainer";
import { Doctor } from "./pages/Manager/Doctor";
import { Announcement } from "./pages/Manager/Announcement";
import { CreateAnnoun } from "./pages/Manager/CreateAnnoun";
import { Leave } from "./pages/Manager/Leave";
// import { Viewleave } from "./pages/Manager/Viewleave";
import { Receptionist } from "./pages/Manager/Receptionist";
// import { AddDoctor } from "./pages/Manager/AddDoctor";
// import { AddReceptionist } from "./pages/Manager/AddReceptionist";
import { Payment } from "./pages/Manager/Payment";
import { TrainerPay } from "./pages/Manager/TrainerPay";
import { ReceptionistPay } from "./pages/Manager/ReceptionistPay";
import { DoctorPay } from "./pages/Manager/DoctorPay";
import { MemberPay } from "./pages/Manager/MemberPay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Manager/Profile";
import { Feedback } from "./pages/Manager/Feedback";
import { TrainerProfile } from "./pages/Manager/TrainerProfile";
import { UpdateAnnoun } from "./pages/Manager/UpdateAnnoun";
import { Messages } from "./pages/Manager/Messages";


function App() {
  const [text, setText] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Manager/Dashboard" element={<Dashboard />} />
          <Route path="/Manager/Profile" element={<Profile />} />
          <Route path="/Manager/Messages" element={<Messages />} />
          <Route path="/Manager/Members" element={<Members />} />
          <Route path="/Manager/Staffmembers" element={<Staffmembers />} />
          <Route path="/Manager/Staffmembers/Trainer" element={<Trainer />} />
          <Route path="/Manager/Staffmembers/Doctor" element={<Doctor />} />
          <Route path="/Manager/Staffmembers/Receptionist" element={<Receptionist />} />
          {/* <Route
            path="/Manager/Staffmembers/Trainer/Addtrainer"
            element={<Addtrainer />}
          /> */}
          <Route path="/Manager/Staffmembers/Trainer/TrainerProfile" element={TrainerProfile} />
          <Route path="/Manager/Announcement" element={<Announcement />} />
          {/* <Route path="/Manager/Announcement/CreateAnnoun" element={<CreateAnnoun />} /> */}
          {/* <Route path="/Manager/Announcement/UpdateAnnoun" element={<UpdateAnnoun />} /> */}
          <Route path="/Manager/Leave" element={<Leave />} />
          <Route path="/Manager/Feedback" element={<Feedback />} /> 
          <Route path="/Manager/Payment" element={<Payment />} />
          <Route path="/Manager/Payment/TrainerPay" element={<TrainerPay />} />
          <Route path="/Manager/Payment/DoctorPay" element={<DoctorPay />} />
          <Route
            path="/Manager/Payment/ReceptionistPay"
            element={<ReceptionistPay />}
          />
          <Route path="/Manager/Payment/MemberPay" element={<MemberPay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Login />  */
}
{
  /* <Dashboard />  */
}
{
  /* <Members />  */
}
{
  /* <Trainer /> */
}
{
  /* <Doctor /> */
}
{
  /* <Receptionist /> */
}
{
  /* <Staffmembers /> */
}
{
  /* <Addtrainer /> */
}
{
  /* <AddDoctor /> */
}
{
  /* <AddReceptionist /> */
}
{
  /* <Announcement /> */
}
{
  /* <CreateAnnoun /> */
}
{
  /* <Leave /> */
}
{
  /* <Viewleave /> */
}
{
  /* <Payment /> */
}
{
  /* <TrainerPay /> */
}
{
  /* <ReceptionistPay /> */
}
{
  /* <DoctorPay /> */
}
{
  /* <MemberPay /> */
}
