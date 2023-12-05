import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function Layouts() {
  return (
    <div>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default Layouts
