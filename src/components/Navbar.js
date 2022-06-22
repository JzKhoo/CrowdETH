import React from 'react'
import { NavBarContainer, NavbarHome, NavbarLogo, Buttons, LoginButton, SignUpButton } from './Navbar.styles'
import Logo from '../images/Logo1.png'

function Navbar() {
  return (
    <>
      <NavBarContainer>
        <NavbarHome to='/'>
          <NavbarLogo src={Logo} alt='Logo'></NavbarLogo>
        </NavbarHome>
        <Buttons>
          <LoginButton to='/Login'>Login</LoginButton>
          <SignUpButton to='/Signup'>Sign Up</SignUpButton>
        </Buttons>        
      </NavBarContainer>
    </>
  )
}

export default Navbar