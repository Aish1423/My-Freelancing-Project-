import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from './ClientHeader'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

export default function ClientMaster() {
  return (
    <>
    <ClientHeader/>
    <ToastContainer/>
    <Outlet/>
    <Footer/>
    </>
  )
}
