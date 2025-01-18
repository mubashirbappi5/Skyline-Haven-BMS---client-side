import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../../Firebace/Firebace.init';
import useAxiosPublic from './../../Hooks/useAxiosPublic';

export const Authcontext = createContext()
const AuthProvider = ({children}) => {
    const [user,setuser]=useState()
  const[loading,setloading] =useState(true)
  const  axiosPublic = useAxiosPublic()
    const provider = new GoogleAuthProvider();
    const googlelogin = ()=>{
        return signInWithPopup(auth,provider)
      }
      const signupUser = ( email, password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const updateuser = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    
      }
      const signinUser = ( email, password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
               
        setuser(currentUser)
        if (currentUser) {
          
          const userInfo = { email: currentUser.email };
          axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
                localStorage.setItem('access-token', res.data.token);
                console.log(localStorage.getItem('access-token'))
                setloading(false)
            }
        })
  }
  else {
    // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
    localStorage.removeItem('access-token');
    setloading(false)
  }
    
  
       
      })
      return ()=>{
          unsubscribe()
      }
      },[])
      
      const signoutUser = ()=>{
    
        signOut(auth)
        .then(()=>{
           
        })
        .catch(error=> console.log(error))
    }

    const authinfo = {
        name:'bappi',
        googlelogin,
        signupUser ,
        updateuser,
        signinUser,
        signoutUser,
        loading,
        setloading,
        user
    }
    return (
        <Authcontext.Provider value={authinfo}>
           {children} 
        </Authcontext.Provider>
    );
};

export default AuthProvider;