import React from 'react'
import Logo from '../images/Logo1.png'
import { NavBarContainer, NavbarLogo, SearchBar, ProfileTab } from './Navbar2.styles'

function Navbar2() {
  return (
    <>
      <NavBarContainer>
        <NavbarLogo src={Logo} alt='Logo'></NavbarLogo>
        <SearchBar placeholder='Search'></SearchBar>
        <ProfileTab></ProfileTab>
      </NavBarContainer>
    </>
  )
}

export default Navbar2