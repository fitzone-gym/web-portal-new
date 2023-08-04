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
import { Viewleave } from "./pages/Manager/Viewleave";
import { Receptionist } from "./pages/Manager/Receptionist";
import { AddDoctor } from "./pages/Manager/AddDoctor";
import { AddReceptionist } from "./pages/Manager/AddReceptionist";
import { Payment } from "./pages/Manager/Payment";
import { TrainerPay } from "./pages/Manager/TrainerPay";
import { ReceptionistPay } from "./pages/Manager/ReceptionistPay";
import { DoctorPay } from "./pages/Manager/DoctorPay";
import { MemberPay } from "./pages/Manager/MemberPay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Manager/Profile";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Staffmembers" element={<Staffmembers />} />
          <Route path="/Staffmembers/Trainer" element={<Trainer />} />
          <Route path="/Staffmembers/Doctor" element={<Doctor />} />
          <Route path="/Staffmembers/Receptionist" element={<Receptionist />} />
          <Route
            path="/Staffmembers/Trainer/Addtrainer"
            element={<Addtrainer />}
          />
          <Route path="/Announcement" element={<Announcement />} />
          <Route path="/Announcement/CreateAnnoun" element={<CreateAnnoun />} />
          <Route path="/Leave" element={<Leave />} />
          {/* <Route path="/Feedback" element={<Feedback />} /> */}
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Payment/TrainerPay" element={<TrainerPay />} />
          <Route path="/Payment/DoctorPay" element={<DoctorPay />} />
          <Route
            path="/Payment/ReceptionistPay"
            element={<ReceptionistPay />}
          />
          <Route path="/Payment/MemberPay" element={<MemberPay />} />
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
