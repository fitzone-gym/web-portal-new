import React from 'react'
import { ReceptionistPayment } from '../../components/Manager/ReceptionistPayment'
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'

export const ReceptionistPay = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ReceptionistPayment />
      </div>
    </div>
  );
}
