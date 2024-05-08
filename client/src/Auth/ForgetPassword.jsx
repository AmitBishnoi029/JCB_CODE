import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avtar from "../image/avtar.png"



const PORT = "https://earthmoversonline.onrender.com"

const ForgetPassword = () => {
  const [email,setEmail]=useState('')
  const navigate=useNavigate()
  const onchangehandler=(e)=>{
    setEmail(e.target.value)

  }
  const sendotp=(e)=>{
    e.preventDefault();

  }
  // console.log('email ',email);
  return (

    <div class="loginbox">
       <div className="form" >
  <img src={avtar} alt="Not Found" className="avatar"/>
    <h1>Forget Password</h1>
    <form>
        <p>Enter Email here to recover Account</p>
        <input type="email" name="email"  onChange={onchangehandler} placeholder="Enter Email"/>
        <input type="submit" name="submit" value="Send" onClick={sendotp}/>
        <p onClick={()=>navigate("/login",{state:{flag:true}})}> Back to Login</p>
      </form>
</div>
</div>
  )
}

export default ForgetPassword