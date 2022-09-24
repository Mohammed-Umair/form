import React, { useEffect, useState } from 'react'
import moment from "moment";
import { useNavigate } from 'react-router-dom';

export const EventDisplay = () => {
    const [data ,setData]=useState()
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('event')))
    
     
    }, [])
    const nav = useNavigate()

    const handelEdit =()=>{
        nav('/create')
    }
    
  return (
    <div>
        <h1>{data?.eventName}</h1>
        <p>hosted by {data?.hostName}</p>
        <p> {moment(data?.stratDate).format('D MMMM, h:mma')}</p>
        <p>to {moment(data?.endDate).format('D MMMM, h:mma')}</p>
        <p><strong>Street Name </strong> <br/> {data?.adderss}</p>
        {/* <button onClick={()=>{handelEdit()}} >edit</button> */}
    </div>
  )
}
