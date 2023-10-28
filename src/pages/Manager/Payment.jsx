import React from "react";
import { ManagerPayment } from "../../components/Manager/ManagerPayment";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Payment = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar selected="leaves"/>
        <ManagerPayment />
      </div>
    </div>
  );
};
