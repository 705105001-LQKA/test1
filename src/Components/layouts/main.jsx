import React, { useEffect, useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}