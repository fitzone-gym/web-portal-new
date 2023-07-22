import { useState } from "react";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Members } from "./pages/Manager/Members";
import { Staffmembers } from "./pages/Manager/Staffmembers";
import { Addtrainer } from "./pages/Manager/Addtrainer";
import { Dashboard } from "./pages/Manager/Dashboard";
import { Trainer } from "./pages/Manager/Trainer";
import { Doctor } from "./pages/Manager/Doctor";


function App() {
  const [text, setText] = useState("");

  return (
    <>
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <Members />  */}
      {/* <Trainer /> */}
      {/* <Doctor /> */}
       {/* <Staffmembers /> */}
       <Addtrainer />
    </>
  );
}

export default App;
