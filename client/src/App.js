import './App.css';
import "./style/index.css"
import "./style/register.css"
import "./style/fare.css"
import "./style/card.css"
import "./style/dashboard.css"

import Register from './Auth/Register';
import HomePage from "./component/HomePage"
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Login from './Auth/Login';
import JCBFare from './Form/JCBFare';
import TrollyFare from './Form/TrollyFare';
import CombinedFare from './Form/CombinedFare';
import ForgetPassword from './Auth/ForgetPassword';
import ChangePassword from './Auth/ChangePassword';
import History from './component/History';
import Dashboard from './component/Dashboard';
import { getDashData } from './All-API/service';
import { useEffect, useState } from 'react';


function App() {
  const [data,setData]=useState()
  useEffect(()=> {
    const dashId = localStorage.getItem("id");
    getDashData(dashId).then((response)=>{
      const {data} = response.data
    setData(data)
    })
  
  }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage data={data} setData={setData}/> } />
      <Route path='/register' element={ <Register/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/jcbfare' element={ <JCBFare detail={data} /> } />
      <Route path='/trollyfare' element={ <TrollyFare detail={data} /> } />
      <Route path='/bothfare' element={ <CombinedFare detail={data} /> } />
      <Route path='/forgetPassword' element={ <ForgetPassword/> } />
      <Route path='/changePassword' element={ <ChangePassword/> } />
      <Route path='/history' element={ <History/> } />  
      <Route path='/dashboard' element={ <Dashboard/> } />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
