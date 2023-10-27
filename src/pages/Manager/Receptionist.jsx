import React from 'react'
import { ManagerReceptionist } from '../../components/Manager/ManagerReceptionist'
import { ManagerHeader } from '../../components/Manager/ManagerHeader'
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'


export const Receptionist = () => {
  return (
    <div className="flex h-screen w-full bg-white">
    <ManagerHeader />
    <div className="flex flex-row">
      <ManagerSidebar />
      <ManagerReceptionist />
    </div>
  </div>
  )
}
