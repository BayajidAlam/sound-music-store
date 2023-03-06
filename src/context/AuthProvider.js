import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState();

  // create a user
  const createUser = (eamil, password) => {
    return createUserWithEmailAndPassword(auth, eamil, password);
  };

  // sign in a existing user
  const signIn = (eamil, password) => {
    return signInWithEmailAndPassword(auth, eamil, password);
  };

  // update a user profile
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // sign out a user
  const signOutUser = () => {
    return signOut(auth);
  };

  // set a observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateUser,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
