import React from "react";
import { ManagerTrainerProfile } from "../../components/Manager/ManagerTrainerProfile";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";

export const TrainerProfile = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerTrainerProfile />
      </div>
    </div>
  );
};
