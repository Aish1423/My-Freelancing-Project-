import React, { useEffect, useState } from 'react'
import ApiServices from '../Layouts/ApiServices'

export default function Dashboard() {
    var [dashboard,setDashboard] = useState([])
    useEffect(()=>{
        ApiServices.Dashboard()
        .then((res)=>{
            console.log("Response is :",res.data.data)
            setDashboard(res.data.data)
        })
        .catch((err)=>{
            console.log("Error is:",err)
        })
    })
  return (
    <>
    {
        dashboard?.map((el,index)=>{
            <tr key={index}>
                
            </tr>
        })
    }
    </>
  )
}
