import React from "react";
import { ManagerProfile } from "../../components/Manager/ManagerProfile";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";

export const Profile = () => {
  return (
    <div className="flex h-screen w-full bg-white">
    <ManagerHeader />
    <div className="flex flex-row">
      <ManagerProfile />
    </div>
  );
};
