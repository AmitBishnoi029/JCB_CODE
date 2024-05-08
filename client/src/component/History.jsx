import React, { useEffect, useState } from 'react'
import { getHistory } from '../All-API/service'
import Card from './Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mystyle = {
  width:"100%",
  height:"100%",
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}

const History = () => {
    const [history,setHistory] = useState([])
    console.log("history : ",history);
    useEffect(()=>{
        const id = localStorage.getItem("userId")
        console.log("history : ",id);
        getHistory(id).then((response)=>{
            const {success,History,message} = response.data
            if(success){
                toast.success(message)
                setHistory(History)
            } else{
                toast.error(message);
            }
            })
    },[])
  return (
    <div style={mystyle} >
      <h2>History</h2>
    {
      history && history.map((item)=>(
        <Card card={item} />
      ))   
    }
    </div>
  )
}

export default History