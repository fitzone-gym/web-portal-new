import React from "react";
import { ManagerFeedback } from "../../components/Manager/ManagerFeedback";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";

export const Feedback = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-leave bg-no-repeat bg-center bg-cover bg-fixed fixed left-0 opacity-95">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerFeedback />
      </div>
    </div>
  );
};
