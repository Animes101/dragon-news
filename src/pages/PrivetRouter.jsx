import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider'
import {useLocation} from 'react-router-dom'

const PrivetRouter = ({children}) => {

    const {user,loading}=useContext(AuthContext);

    const location =useLocation()

    console.log(location);

    if(loading){
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>

      }

    if(user){
        return children
    }
  return  <Navigate to='/login' state={loading.pathname}></Navigate>
}

export default PrivetRouter