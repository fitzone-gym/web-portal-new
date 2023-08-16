import React from 'react'
import { TrainerPayment } from '../../components/Manager/TrainerPayment'
import { ManagerHeader } from '../../components/Manager/ManagerHeader'
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'


export const TrainerPay = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-leave bg-no-repeat bg-center bg-cover bg-fixed fixed left-0 opacity-95">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <TrainerPayment />
      </div>
    </div>
    )
}
