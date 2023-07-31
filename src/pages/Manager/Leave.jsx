import React from 'react'
import { M_Leave } from '../../components/Manager/M_Leave'
import { M_Header } from "../../components/Manager/M_Header";
import { M_Sidebar } from "../../components/Manager/M_Sidebar";

export const Leave = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-leave bg-no-repeat bg-center bg-cover bg-fixed fixed left-0 opacity-95">
    <M_Header />
    <div className="flex flex-row">
      <M_Sidebar />
      <M_Leave />
    </div>
  </div>
    )
}
