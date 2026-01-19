import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function Master() {
  return (
    <>
    <Header/>
    <ToastContainer/>
    <Outlet/>
    <Footer/>
    </>
  )
}
