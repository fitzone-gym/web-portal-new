import React from 'react'
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'
import { TrainerleavesList } from '../../components/Manager/TrainerleavesList'

export const TrainerLeaveReqList = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <TrainerleavesList />
      </div>
    </div>
  );
}


