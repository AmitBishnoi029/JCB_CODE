import React, { useState } from 'react'
import OnlyJcb_deshboard from "../Form/OnlyJcb_deshboard"
import OnlyTrolly_deshboard from "../Form/OnlyTrolly_deshboard"
import Combined_deshboard from "../Form/Combined_deshboard"

const Dashboard = () => {
  const [text,setText] = useState("onlyJcb")
  return (
    <div className='dashboard'>
    <div className='buttons'>
      <button onClick={()=>setText("onlyJcb")} >only JCB</button>
      <button onClick={()=>setText("onlyTrolly")} >only Trolly</button>
      <button onClick={()=>setText("Both")} >Both</button>
    </div>
    <div className='form' >
     {
      text === "onlyJcb"?<OnlyJcb_deshboard/>:
      text === "onlyTrolly"?<OnlyTrolly_deshboard/>:
      text === "Both"?<Combined_deshboard/>:""
     }
    </div>
    </div>
  )
}

export default Dashboard