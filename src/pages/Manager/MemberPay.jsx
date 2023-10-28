import React from "react";
import { MembersPayment } from "../../components/Manager/MembersPayment";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const MemberPay = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <MembersPayment />
      </div>
    </div>
  );
};
