import React from "react";
import { ManagerProfile } from "../../components/Manager/ManagerProfile";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Profile = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
      <ManagerSidebar />
        <ManagerProfile />
      </div>
    </div>
  );
};
