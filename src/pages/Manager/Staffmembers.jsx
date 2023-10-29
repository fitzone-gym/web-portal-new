import React from 'react'
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'
import { ManagerStaffmembers } from '../../components/Manager/ManagerStaffmembers'

export const Staffmembers = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerStaffmembers />
      </div>
    </div>
  );
}
