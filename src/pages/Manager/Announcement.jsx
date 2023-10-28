import React from "react";
import { ManagerAnnouncement } from "../../components/Manager/ManagerAnnouncement";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";
import { ManagerSidebar } from "../../components/Manager/ManagerSidebar";

export const Announcement = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerSidebar selected="announcements" />
        <ManagerAnnouncement />
      </div>
    </div>
  );
};
