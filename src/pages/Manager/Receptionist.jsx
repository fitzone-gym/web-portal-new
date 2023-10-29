import React from 'react'
import { ManagerReceptionist } from '../../components/Manager/ManagerReceptionist'
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'


export const Receptionist = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerReceptionist />
      </div>
    </div>
  );
}
