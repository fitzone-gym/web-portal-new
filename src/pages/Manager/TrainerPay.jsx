import React from 'react'
import { TrainerPayment } from '../../components/Manager/TrainerPayment'
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'


export const TrainerPay = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <TrainerPayment />
      </div>
    </div>
  );
}
