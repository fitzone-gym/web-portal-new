import React from "react";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";
import { ManagerStaffmembers } from "../../components/Manager/ManagerStaffmembers";

export const Staffmembers = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar selected="staff" />
        <ManagerStaffmembers />
      </div>
    </div>
  );
};
