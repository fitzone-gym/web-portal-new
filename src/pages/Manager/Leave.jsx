import React from 'react';
import { ManagerLeave } from '../../components/Manager/ManagerLeave';
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar';

export const Leave = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerLeave />
      </div>
    </div>
  );
}
