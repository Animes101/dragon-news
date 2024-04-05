import { createContext, useEffect, useState } from "react"
import { PropTypes } from 'prop-types';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user ,setUser]=useState(null);
    const [loading ,setLoading]=useState(true);
//create user width email or password
  const createUserEmailPassword=(email,password)=>{

        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in 

    const loginUser=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    //log out user

    const logOut=()=>{
      setLoading(true)
      return signOut(auth)
    }


    const authInfo={user,createUserEmailPassword,loginUser,logOut ,loading}


    //on auth state change

    useEffect(()=>{

     const unSubscrib =  onAuthStateChanged(auth, (userCureent) => {
        if (userCureent) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user

          setUser(userCureent)
          setLoading(false)
          // ...
        } else {
          // User is signed out
          // ...
          setUser(null)
        }
      });

      return ()=>{
        unSubscrib();
      }

    },[])
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.prototype={
    children:PropTypes.node,
}