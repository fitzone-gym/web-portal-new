import React from 'react'
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import Payment from '../../components/Receptionist/Payment';
import '../../styles/Doctor/paymenthistory.css'


function D_PaymentHistory() {
  return (
    <div className='body'>
        <Header/>

        
    <div className="flex flex-row">
    <Sidenav />

    
        <Payment/>

  
</div>
    
   

    </div>
  )
}

export default D_PaymentHistory