import React from 'react'
import Navbar from './Navbar'
import { Background, Username, Password, SignupButton } from './Signup.styles'

function Signup() {
  return (
    <>
      <Navbar />
      <Background>
        <h1>Sign Up</h1>
        <p>Join us in empowering ventures!</p>
        <Username placeholder='Username'></Username>
        <Password placeholder='Password'></Password>
        <SignupButton to='/'>Venture Now!</SignupButton>
      </Background>
    </>
  )
}

export default Signup