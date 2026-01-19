import React from 'react'
import { Outlet } from 'react-router-dom'
import BdeHeader from './BdeHeader'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

export default function BdeMaster() {
  return (
    <>
    <BdeHeader/>
    <ToastContainer/>
    <Outlet/>
    <Footer/>
    </>
  )
}
