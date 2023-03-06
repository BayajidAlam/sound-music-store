import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [ user, setUser ] = useState('')
  const [ loading, setLoading ] = useState()

  // create a user 
  const createUser = (eamil,password) => {
    return createUserWithEmailAndPassword(auth,eamil,password);
  }

  // sign in a existing user 
  const signIn = (eamil,password) => {
    return signInWithEmailAndPassword(auth,eamil,password);
  }
  const authInfo = {
    user,
    loading,
    createUser,
    signIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;