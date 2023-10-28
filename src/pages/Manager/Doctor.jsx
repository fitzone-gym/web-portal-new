import React from "react";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerDoctor } from "../../components/Manager/ManagerDoctor";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Doctor = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerDoctor />
      </div>
    </div>
  );
};
