import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avtar from "../image/avtar.png"
import { ChangePasswordApi } from '../All-API/service';

const initial={
    email:"",
    oldpassword:"",
    newpassword:"",
    confirmpassword:"",

}
const PORT = "https://earthmoversonline.onrender.com"


function ChangePassword(){
    const [user,setUser] = useState(initial);
    const navigate = useNavigate()

    const onchangeHandler = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }


/* ON SUBMIT BUTTOM */
const onclickHandler = (e)=>{
    e.preventDefault()
try {
    /* CHECK FIELDS ARE EMPTY OR FILLED */
    const {oldpassword,newpassword, confirmpassword} = user;

    if(!oldpassword || !newpassword || !confirmpassword){
        toast.error("all fields are required")
      } else {

    if(newpassword === confirmpassword){
        ChangePasswordApi(user).then((response)=>{
            const {message,success} = response.data
            if(success){
                toast.success(message)
                setTimeout(() => {
                    navigate("/")
                }, 2000);
            } else{
                toast.error(message);
            }
            })
        } else {
            toast.error("Password not match")
        }
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
  <h1>Change Password</h1>
  <form>
    <p>Enter Email</p>
    <input type="email" name="email"  onChange={onchangeHandler} placeholder="Enter Email"/>
      <p>Old Password</p>
      <input type="password" name="oldpassword" onChange={onchangeHandler}  placeholder="Enter Password"/>
      <p>New Password</p>
      <input type="text" name="newpassword"  onChange={onchangeHandler} placeholder="Enter Password"/>
      <p>Confirm Password</p>
      <input type="password" name="confirmpassword"  onChange={onchangeHandler} placeholder="Enter Password"/>
      <input type="submit" name="submit"  value="Change" onClick={onclickHandler}/>
      <p onClick={()=>navigate("/forgetPassword")}>Forget password?</p>
  </form>
  </div>
</div></>
  );
  }


export default ChangePassword