import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookBoth } from '../All-API/service';

const initial = {
  address:"",
  jcbcount:"",
  trolly: "",
    jcbtime:"",
    tractortime:'',
    distanceFromOffice: "",
  };
const CombinedFare = ({detail}) => {
    const [data, setData] = useState(initial);
    const [total,setTotal] = useState(0)
    const [flag,setFlag] = useState(false)
    const navigate = useNavigate()
    const inputData = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const showFare = (e) => {
      e.preventDefault();
      let jcbcount=Math.ceil(data.jcbcount)
      let trolly = Math.ceil(data.trolly);
      let jcbtime = Math.ceil(data.jcbtime)
      let tractortime=Math.ceil(data.tractortime)
      let distanceFromOffice = Math.ceil(data.distanceFromOffice);
     
      let jcbtimeFare = detail?.BOTH_PRIZE?.JCB_PRIZE * jcbtime*jcbcount;
      let trollyFare = detail?.BOTH_PRIZE?.TROLLY_PRIZE* trolly*tractortime;
      let bothFromOffice = detail?.BOTH_EXTRA_PRIZE?.JCB_EXTRA_PRIZE*distanceFromOffice*jcbcount+detail?.BOTH_EXTRA_PRIZE?.TROLLY_EXTRA_PRIZE*trolly*distanceFromOffice
      setTotal(jcbtimeFare + trollyFare + bothFromOffice)
      // console.log("jtf :",detail?.BOTH_PRIZE.JCB_PRIZE);
      const token = localStorage.getItem("token")
      const id = localStorage.getItem("userId")
      if(!token){
          navigate("/login")
      } else {
        const vehicle = "Both Jcb and Trolly"
      const obj = new Object()
      obj.id=id     
       obj.vehicle=vehicle
      obj.payment=total
      obj.address = data.address
      if(!token && flag){
        navigate("/login",{state:{flag:true,path:"bothfare",data:obj}})
    } else {
      total && BookBoth(obj).then((response)=>{
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
                <span>Enter the Number of Tractor-Trolly required : </span>
                <input type="text" name='trolly'   onChange={inputData} placeholder="00"/>
            </div>
            <div className="inputBox">
            <span>Enter the expected time(in Hr),you need JCB Machine : </span>
                <input type="text" name='jcbtime'   onChange={inputData} placeholder="00"/>
            </div>
            <div className="inputBox">
            <span>Enter the expected time(in Hr),you need Tractor-Trolly : </span>
                <input type="text" name='tractortime'   onChange={inputData} placeholder="00"/>
            </div>
            <div className="inputBox">
                <span>Enter expected distance to reach the Destination for work (in KM) : </span>
                <input type="text" name='distanceFromOffice'  onChange={inputData} placeholder="00"/>

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

export default CombinedFare