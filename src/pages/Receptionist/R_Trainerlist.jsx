import Header from "../../components/header";
import Sidenav from "../../components/Receptionist/sidenav";
import R_trainerlists from "../../components/Receptionist/trainerlist";
import "../../styles/Receptionist/memberlist.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const R_Memeberlist = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <Header />

      <div className="flex flex-row">
        <Sidenav />

        <R_trainerlists />
      </div>
    </div>
  );
};

export default R_Memeberlist;
