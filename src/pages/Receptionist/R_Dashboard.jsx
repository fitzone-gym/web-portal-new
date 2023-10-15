import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import Dashboard from '../../components/Receptionist/dashboard';


function R_Dashboard() {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
        <Header/>
        <div className="flex flex-row">
        <Sidenav/>
        <Dashboard/>
        </div>
    </div>
  )
}

export default R_Dashboard






