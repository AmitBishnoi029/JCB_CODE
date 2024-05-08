import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOnlyJcb } from "../All-API/service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initial = {
  address:"",
  jcbcount:"",
  jcbtime: "",
  jcbdistance: "",
};

const JCBFare = ({detail}) => {
  const [data, setData] = useState(initial);
  const [total,setTotal] = useState("")
  const [flag,setFlag] = useState(false)
  const navigate = useNavigate()
  const inputData = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

  const showFare = (e) => {
    e.preventDefault();
    let jcbcount = Math.ceil(data.jcbcount);
    let time = Math.ceil(data.jcbtime);
    let distance = Math.ceil(data.jcbdistance);
    let timeFare = detail?.JCB_PRIZE * time;
    let distanceFare = detail?.DISTANCE * distance*jcbcount;
    setTotal(timeFare + distanceFare)

    const token = localStorage.getItem("token")
    const id = localStorage.getItem("userId")
    const vehicle = "only JCB"

    const obj = new Object()
    obj.id = id
    obj.vehicle = vehicle
    obj.payment = total
    obj.address = data.address

  if(token && flag){
    total && BookOnlyJcb(obj).then((response)=>{
      const {message,success} = response.data
      if(success){
        toast.success(message)
          setTimeout(() => {
              navigate("/")
          }, 2000);
      } else{
        toast.error(message)
      }
      })
  }
  else{
    if(!token && flag){
        navigate("/login",{state:{flag:true,path:"jcbfare",data:obj}})
    } 
  }
    setFlag(true)
  };
  return (
    <div className="container">
      <ToastContainer/>
      <form action="">
        <div className="row">
          <div className="col">
            <h3 className="title">Please Fill the Entry</h3>
            <div className="inputBox">
                <span>Enter the Address of Destination : </span>
                <input type="text" name='address'  onChange={inputData} placeholder="Location"/>

            </div>
            <div className="inputBox">
                <span>Enter the number of JCB Machine required: </span>
                <input type="text"   onChange={inputData} name='jcbcount' placeholder="00"/>
              </div>
            <div className="inputBox">
              <span>Enter the expected time(in Hr),you need JCB : </span>
              <input
                type="text"
                name="jcbtime"
                onChange={inputData}
                placeholder="00"
              />
            </div>
            <div className="inputBox">
              <span>Enter expected distance of Destination(in KM) : </span>
              <input
                type="text"
                name="jcbdistance"
                onChange={inputData}
                placeholder="00"
              />
            </div>
          </div>
         {flag? <div className="showFare" >
            <h3>Total Fare (in $): <span>{total}</span> </h3>
          </div> : ""}
          <input
            type="submit"
            onClick={showFare}
            value={flag? "Book Now":"Proceed To Checkout"}
            className="submit-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default JCBFare;
