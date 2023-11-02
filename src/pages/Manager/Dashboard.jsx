import React from "react";
import { ManagerDashboard } from "../../components/Manager/ManagerDashboard";
import Header from "../../components/header";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar selected="dashboard" />
        <ManagerDashboard />
      </div>
    </div>
  );
};
