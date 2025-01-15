import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
      const signupUser = ( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const updateuser = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    
      }
      const signinUser = ( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
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
        user
    }
    return (
        <Authcontext.Provider value={authinfo}>
           {children} 
        </Authcontext.Provider>
    );
};

export default AuthProvider;