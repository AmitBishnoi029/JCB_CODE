import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { OnlyJcbDeshBoard } from '../All-API/service';

const initial = {
    jcb_price:"",
    jcb_distance:""
}

const OnlyJcb_deshBoard = () => {

const [data,setData] = useState(initial)
const navigate = useNavigate()

const inputData = (e) =>{
  setData({...data,[e.target.name]:e.target.value})
}
const saveData = (e) =>{
  e.preventDefault()
  OnlyJcbDeshBoard(data).then((response)=>{
    console.log("resp : ",response);
    const {success,message,data} = response.data
    if(success){
        toast.success(message)
          setTimeout(() => {
              navigate("/",{state:{data:data}})
          }, 2000);
      } else{
        toast.error(message)
      }
      })
}

  return (
    <div className='container' >
        <ToastContainer/>
         <form action="">
        <div className="row">
            <div className="col">
                <h3 className="title">Please update the Data</h3>
                <div className="inputBox">
                <span>Enter the price of one JCB per Hour : </span>
                <input type="text" name='jcb_price'  onChange={inputData} placeholder="00"/>
            </div>
            <div className="inputBox">
                <span>Enter the that additional charge per km that will start after 5KM : </span>
                <input type="text"   onChange={inputData} name='jcb_distance' placeholder="00"/>
            </div>
            <div className="inputBox">
            <input type="submit" className="Update" onClick={saveData} />
            </div>
           
        </div>
            
        </div>
    </form>
    </div>
  )
}

export default OnlyJcb_deshBoard