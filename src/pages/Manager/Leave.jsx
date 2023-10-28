import React from "react";
import { ManagerLeave } from "../../components/Manager/ManagerLeave";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Leave = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar selected="leaves" />
        <ManagerLeave />
      </div>
    </div>
  );
};
