import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import Navbar from './Navbar'
import { Background, Username, Password, SignupButton } from './Signup.styles'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Login");
  }, [user, loading]); 

  return (
    <>
      <Navbar />
      <Background>
        <h1>Sign Up</h1>
        <p>Join us in empowering ventures!</p>
        <Username 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Username'></Username>
        <Password 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'></Password>
        <SignupButton onClick={register}>Venture Now!</SignupButton>
      </Background>
    </>
  )
}

export default Signup;