import React from 'react'
import { Loginform } from '../../components/Login/Loginform'

export const Login = () => {
  return (
    <div className='flex h-screen w-full bg-login bg-no-repeat bg-center bg-cover bg-fixed fixed left-0 opacity-95'>
        <Loginform />
    </div>
  )
}
