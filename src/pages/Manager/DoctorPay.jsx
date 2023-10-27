import React from 'react'
import { DoctorPayment } from '../../components/Manager/DoctorPayment'
import { ManagerHeader } from '../../components/Manager/ManagerHeader'
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'


export const DoctorPay = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <DoctorPayment />
      </div>
    </div>
   )
}
