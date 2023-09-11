import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import Leaverequestform from '../../components/Receptionist/Leaverequestform';

function R_Leaverequestform() {
    return (
        <div className="flex flex-col h-screen w-full bg-white">
            
            <Header />
         
            <div className="flex flex-row">
            <Sidenav />
        
             <Leaverequestform/>
        
            </div>
        
            </div>
    )
}

export default R_Leaverequestform