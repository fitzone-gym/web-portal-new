import React from "react";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Receptionist/contactUsSubmitions.css";

function Dashboard() {
  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />
      </div>
    </>
  );
}

export default Dashboard;
