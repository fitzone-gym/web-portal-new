import React from "react";
import { ManagerFeedback } from "../../components/Manager/ManagerFeedback";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";
import Header from "../../components/header";

export const Feedback = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar selected="feedback" />
        <ManagerFeedback />
      </div>
    </div>
  );
};
