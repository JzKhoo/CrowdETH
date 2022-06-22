import React from 'react'
import Logo from '../images/Logo1.png'
import { NavBarContainer, NavbarHome, NavbarLogo, SearchBar, Buttons, ConnectWallet, SignOutButton } from './Navbar2.styles'

function Navbar2() {
  return (
    <>
      <NavBarContainer>
        <NavbarHome to='/Landing'>
          <NavbarLogo src={Logo} alt='Logo'></NavbarLogo>
        </NavbarHome>
        <SearchBar placeholder='Search'></SearchBar>
        <Buttons>
          <ConnectWallet>Connect Wallet</ConnectWallet>
          <SignOutButton>Sign Out</SignOutButton>
        </Buttons>
      </NavBarContainer>
    </>
  )
}

export default Navbar2