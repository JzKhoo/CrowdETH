// Navbar for Login.js & SignUp.js - Home.js Link, no smooth scroll

import React from 'react'
import { Nav,
   NavBarContainer, 
   NavLogo, 
   NavIcon, 
} from './Navbar1.styles'
import Logo from '../../images/Logo1.png'

function Navbar1() {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>
            <NavIcon src={Logo} />
          </NavLogo>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default Navbar1