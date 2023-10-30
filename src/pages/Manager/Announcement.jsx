import React from 'react'
import { ManagerAnnouncement } from '../../components/Manager/ManagerAnnouncement';
import Header from "../../components/header";
import { ManagerSidebar } from '../../components/Manager/ManagerSidebar';

export const Announcement = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />
      <div className="flex flex-row">
        <ManagerSidebar selected="announcements" />
        <ManagerAnnouncement />
      </div>
    </div>
  );
};
