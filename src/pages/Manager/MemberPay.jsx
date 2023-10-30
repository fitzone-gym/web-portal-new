import React from 'react'
import { MembersPayment } from '../../components/Manager/MembersPayment'
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'

export const MemberPay = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar />
        <MembersPayment />
      </div>
    </div>
  );
}
