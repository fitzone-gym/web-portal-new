import React from "react";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";
import { TrainerleavesList } from "../../components/Manager/TrainerleavesList";

export const TrainerLeaveReqList = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <TrainerleavesList />
      </div>
    </div>
  );
};
