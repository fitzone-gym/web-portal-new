import React from 'react'
import { ManagerViewLeave } from '../../components/Manager/ManagerViewLeave'
import { ManagerHeader } from '../../components/Manager/ManagerHeader'
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'


export const Viewleave = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar />
        <ManagerViewLeave />
      </div>
    </div>
  )
}
