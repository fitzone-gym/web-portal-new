import React from "react";
import { ManagerMembers } from "../../components/Manager/ManagerMembers";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";
import ManagerHeader from "../../components/header";
export const Members = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerMembers />
      </div>
    </div>
  );
};
