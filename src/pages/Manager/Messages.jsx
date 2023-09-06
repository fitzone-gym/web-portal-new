import React from 'react'
import { ManagerHeader } from '../../components/Manager/ManagerHeader'
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar'
import { ManagerMessages } from '../../components/Manager/ManagerMessages'

export const Messages = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
    <ManagerHeader />
    <div className="flex flex-row">
      <ManagerSidebar />
      <ManagerMessages />
    </div>
  </div>
  )
}
