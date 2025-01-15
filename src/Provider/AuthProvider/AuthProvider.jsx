import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../../Firebace/Firebace.init';

export const Authcontext = createContext()
const AuthProvider = ({children}) => {
    const [user,setuser]=useState()
  const[loading,setloading] =useState(true)
    const provider = new GoogleAuthProvider();
    const googlelogin = ()=>{
        return signInWithPopup(auth,provider)
      }


      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
               
        setuser(currentUser)
        setloading(false)
      })
      return ()=>{
          unsubscribe()
      }
      },[])

    const authinfo = {
        name:'bappi',
        googlelogin,
        user
    }
    return (
        <Authcontext.Provider value={authinfo}>
           {children} 
        </Authcontext.Provider>
    );
};

export default AuthProvider;