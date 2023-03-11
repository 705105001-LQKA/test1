import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.scss'

const LayoutAuth = () => {
  return (
    <div className='container-Layout-auth'>
        <Outlet />
    </div>
  )
}

export default LayoutAuth