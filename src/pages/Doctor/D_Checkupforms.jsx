import React from "react";

import Header from "../../components/Receptionist/header";
import Sidenav from "../../components/Receptionist/sidenav";
import "../../styles/Receptionist/contactUsSubmitions.css";

function Layout() {
  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />
      </div>
    </>
  );
}

export default Layout;
