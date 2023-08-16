import React from "react";
import { ManagerTrainerProfile } from "../../components/Manager/ManagerTrainerProfile";
import { ManagerHeader } from "../../components/Manager/ManagerHeader";

export const TrainerProfile = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-leave bg-no-repeat bg-center bg-cover bg-fixed fixed left-0 opacity-95">
      <ManagerHeader />
      <div className="flex flex-row">
        <ManagerTrainerProfile />
      </div>
    </div>
  );
};
