import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookOnlyTrolly } from '../All-API/service';

const initial = {
  address:"",
    trolly: "",
    trollyDistance: "",
  };

const TrollyFare = ({detail}) => {
    const [data, setData] = useState(initial);
    const [total,setTotal] = useState(0)
    const [flag,setFlag] = useState(false)
    const navigate = useNavigate()
    const inputData = (e) => {
      setData({...data, [e.target.name]: e.target.value });
    };
  
    const showFare = (e) => {
      e.preventDefault();
      let trolly = data.trolly
      let trollyFare = detail?.TROLLY_PRIZE * trolly;
      let trollyDistance = data.trollyDistance - 5
      let DestinationFare = 0;
      if(trollyDistance>0){
        DestinationFare = trollyDistance * detail.DISTANCE*trolly
      } 
      setTotal(trollyFare + DestinationFare)
      const token = localStorage.getItem("token")
      const id = localStorage.getItem("userId")
      const vehicle = "only Trolly"
      const obj = new Object()
      obj.id = id
      obj.vehicle = vehicle
      obj.payment = total
      obj.address = data.address

    if(token && flag){
      total && BookOnlyTrolly(obj).then((response)=>{
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
      } else {
      if(!token && flag){
        navigate("/login",{state:{flag:true,path:"trollyfare",data:obj}})
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
                    <span>Enter the number of Trolly required: </span>
                    <input type="text"   onChange={inputData} name='trolly' placeholder="00"/>
    
                </div>
                <div className="inputBox">
                    <span>Enter the expected distance from Pickup location to Drop-off Location(in KM) : </span>
                    <input type="text"   onChange={inputData} name='trollyDistance'  placeholder="00"/>
    
                </div>
            </div>
            {flag? <div className="showFare" >
            <h3>Total Fare (in $): <span>{total}</span> </h3>
            </div> : ""}
            <input type="submit" value={flag?"Book now":"Proceed To Checkout"} onClick={showFare} className="submit-btn"/>
        </div>
    </form>
        </div>
  )
}

export default TrollyFare