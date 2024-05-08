import React, { useEffect, useState } from "react";
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avtar from "../image/avtar.png"
import { BookBoth, BookOnlyJcb, BookOnlyTrolly, login } from "../All-API/service";

const initial = {
    email:"",
    contact:"",
    password:""
}


function Login(){
    const [user,setUser] = useState(initial);
    const [token,setToken] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const {flag,path,data} = location.state

    useEffect(()=>{
        const token = localStorage.getItem("token")
        setToken(token)
    },[])

    const onchangeHandler = (e) =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }

/* ON SUBMIT BUTTOM */
const onclickHandler = (e)=>{
    e.preventDefault()
        /* CHECK FIELDS ARE EMPTY OR FILLED */
        const {email , contact , password} = user;
    
        if((!email || !contact ) && !password){
          toast.error("Enter valid Details")
        } else {

        login(user).then((response)=>{
            const {message,success,token,id,role} = response.data
            if(success){
                localStorage.setItem("token",token);
                localStorage.setItem("userId",id);
                localStorage.setItem("role",role);
                
                if(flag){
                if(path === "jcbfare"){
                BookOnlyJcb(data).then((response)=>{
                    const {message,success} = response.data
                    if(success){
                        toast.success(message)
                        setTimeout(() => {
                            navigate("/")
                        }, 2000);
                    }
                })}
                if(path === "trollyfare"){
                BookOnlyTrolly(data).then((response)=>{
                    const {message,success} = response.data
                    if(success){
                        toast.success(message)
                        setTimeout(() => {
                            navigate("/")
                        }, 2000);
                    }
                })}
                if(path === "bothfare"){
                BookBoth(data).then((response)=>{
                    const {message,success} = response.data
                    if(success){
                    toast.success(message)
                    setTimeout(() => {
                        navigate("/")
                    }, 2000);
                   }
                })}

                } else {
                    toast.success(message)
                }
                setTimeout(() => {
                    navigate("/")
                }, 2000);
            } else{
                toast.error(message);
            }
            })
        }
}
    return(<>
    <ToastContainer/> 
        <div className="loginbox">
        <div className="form" >
        <img src={avtar} alt="Not Found" className="avatar"/>
        <h1>Login Here</h1>
        <form>
            <p>Email</p>
            <input type="email" name="email" onChange={onchangeHandler} placeholder="Enter email"/>
            <p>contact</p>
            <input type="text" name="contact" onChange={onchangeHandler} placeholder="Enter contact"/>
            <p>Password</p>
            <input type="password" name="password" onChange={onchangeHandler} placeholder="Enter Password"/>
            <input type="submit" onClick={onclickHandler} value="Login"/>
            <p onClick={()=>navigate("/changePassword")}>Change Password</p>
            <p onClick={()=>navigate("/forgetPassword")} >Forget Password?</p>
            <p onClick={()=>navigate("/register")} >Don't have an account?</p>
        </form>
        </div>
    </div>
    </>
    );
}

export default Login