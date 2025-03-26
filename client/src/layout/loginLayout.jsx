import Login from '@/pages/Login'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div>login
        <Outlet />
    </div>
  )
}

export default LoginLayout