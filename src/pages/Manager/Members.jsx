import React from "react";
import { ManagerMembers } from "../../components/Manager/ManagerMembers";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Members = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerMembers />
      </div>
    </div>
  );
};
