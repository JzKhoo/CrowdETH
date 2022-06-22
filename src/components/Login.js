import React from 'react'
import Navbar from './Navbar'
import { Background, Password, Username, LoginButton } from './Login.styles'

function Login() {
  return (
    <>
      <Navbar />
      <Background>
        <h1>Login</h1>
        <p>Start your venture journey with us!</p>
        <Username placeholder='Username'></Username>
        <Password placeholder='Password'></Password>
        <LoginButton to='/Landing'>Venture In!</LoginButton>
      </Background>
    </>
  )
}

export default Login