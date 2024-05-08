import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avtar from "../image/avtar.png"
import { RegisterApi } from "../All-API/service";

const initial = {
    name:"",
    email:"",
    contact:"",
    password:""
}
const PORT = "https://earthmoversonline.onrender.com"

function Register(){
    const [user,setUser] = useState(initial);
    const naviagte = useNavigate()

    const onchangeHandler = (e) =>{
       setUser({...user,[e.target.name]:e.target.value})
    }

/* ON SUBMIT BUTTOM */
const onclickHandler = (e)=>{
    e.preventDefault()
try {
    /* CHECK FIELDS ARE EMPTY OR FILLED */
    const {name , email , contact , password} = user;

    if(!email || !contact  || !name || !password){
      toast.error("all fields are required")
    } else {

    RegisterApi(user).then((response)=>{
        const {message,success,token,id,role} = response.data
        if(success){
            toast.success(message)
            localStorage.setItem("token",token);
            localStorage.setItem("userId",id);
            localStorage.setItem("role",role);
            setTimeout(() => {
                naviagte("/")
            }, 2000);
        } else{
            toast.error(message)
        }
        })
    }
    
} catch (error) {
    console.log("Error while registering API",error.message);
}

    }
    return (
        <><ToastContainer/>
        <div className="loginbox">
        <div className="form" >
        <img src={avtar} alt="Not Found" className="avatar"/>
        <h1>Register Here</h1>
        <form>
            <p>Username</p>
            <input type="text" name="name"  onChange={onchangeHandler}  placeholder="Enter Username"/>
            <p>Email</p>
            <input type="password" name="email"  onChange={onchangeHandler}  placeholder="Enter Email"/>
            <p>Contact</p>
            <input type="text" name="contact"  onChange={onchangeHandler} placeholder="Enter Contact"/>
            <p>Password</p>
            <input type="password" name="password"  onChange={onchangeHandler} placeholder="Enter Password"/>
            <input type="submit" name="submit" onClick={onclickHandler} value="Register" />
            
        </form>
    </div>
    </div>
    </> );
}

export default Register