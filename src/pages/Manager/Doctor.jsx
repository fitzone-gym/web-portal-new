import React from "react";
import Header from "../../components/header";
import { ManagerDoctor } from "../../components/Manager/ManagerDoctor";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Doctor = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header/>
      <div className="flex flex-row">
        <ManagerSidebar selected="staff"/>
        <ManagerDoctor />
      </div>
    </div>
  );
};
