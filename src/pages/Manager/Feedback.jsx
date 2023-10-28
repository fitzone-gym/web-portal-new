import React from "react";
import { ManagerFeedback } from "../../components/Manager/ManagerFeedback";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";

export const Feedback = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar selected="feedback" />
        <ManagerFeedback />
      </div>
    </div>
  );
};
