import React ,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { OnlyTrollyDeshBoard } from '../All-API/service';
const initial = {
    trolly_price:"",
    trolly_distance:""
}
const OnlyTrolly_deshboard = () => {
    
const [data,setData] = useState(initial)
const navigate = useNavigate()
    const inputData = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const saveData = (e) =>{
        e.preventDefault()
        OnlyTrollyDeshBoard(data)
        .then((response)=>{
          const {success,message} = response.data
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
    <><ToastContainer/>
    <div className='container'>
         <form action="">
        <div className="row">
            <div className="col">
                <h3 className="title">Please update the Data</h3>
                <div className="inputBox">
                <span>Enter the price of one Trolly : </span>
                <input type="text" name='trolly_price'  onChange={inputData} placeholder="00"/>

            </div>
                <div className="inputBox">
                    <span>Enter the  for additional charge per km that will start after 5KM : </span>
                    <input type="text"   onChange={inputData} name='trolly_distance' placeholder="00"/>
    
                </div>
                <div className="inputBox">
            <input type="submit" className="Update" onClick={saveData} />
            </div>
            </div>
        </div>
    </form>
    </div>
    </>)
}

export default OnlyTrolly_deshboard