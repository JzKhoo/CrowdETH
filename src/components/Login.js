import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from './Navbar';
import { Background, Password, Username, LoginButton } from './Login.styles'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/Landing");
  }, [user, loading]);

  return (
    <>
      <Navbar />
      <Background>
        <h1>Login</h1>
        <p>Start your venture journey with us!</p>
        <Username 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Username'></Username>
        <Password 
          value={password}
          onChange={(e) => setPassword(e.target.value)}        
          placeholder='Password'></Password>
        <LoginButton
          onClick={() => logInWithEmailAndPassword(email, password)}
          >Venture In!</LoginButton>
      </Background>
    </> 
  )
}

export default Login