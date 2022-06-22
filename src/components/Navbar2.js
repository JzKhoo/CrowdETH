import React from 'react'
import Logo from '../images/Logo1.png'
import { NavBarContainer, NavbarHome, NavbarLogo, SearchBar, ProfileTab } from './Navbar2.styles'

function Navbar2() {
  return (
    <>
      <NavBarContainer>
        <NavbarHome to='/Landing'>
          <NavbarLogo src={Logo} alt='Logo'></NavbarLogo>
        </NavbarHome>
        <SearchBar placeholder='Search'></SearchBar>
        <ProfileTab to='/'></ProfileTab>
      </NavBarContainer>
    </>
  )
}

export default Navbar2