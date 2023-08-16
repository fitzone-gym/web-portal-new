import React from 'react'
import { ManagerProfile } from '../../components/Manager/ManagerProfile'
import { ManagerHeader } from '../../components/Manager/ManagerHeader'


export const Profile = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-leave bg-no-repeat bg-center bg-cover bg-fixed fixed left-0 opacity-95">
    <ManagerHeader />
    <div className="flex flex-row">
      <ManagerProfile />
    </div>
  </div>
  )
}
