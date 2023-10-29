import React from 'react'
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'
import { ManagerTrainer } from '../../components/Manager/ManagerTrainer'


export const Trainer = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerTrainer />
      </div>
    </div>
  );
}
