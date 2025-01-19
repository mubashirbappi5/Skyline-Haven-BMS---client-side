import React, { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const location = useLocation()
 if(loading){
    return <Loading/>
 }
 
    if(user){
        return children
    }
   
      return <div>
               <Navigate to="/login" state={{from: location}} replace></Navigate>
      </div> 


  
};

export default PrivateRoute;