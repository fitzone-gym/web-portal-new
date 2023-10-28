import React from "react";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";
import { ManagerTrainer } from "../../components/Manager/ManagerTrainer";

export const Trainer = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerTrainer />
      </div>
    </div>
  );
};
