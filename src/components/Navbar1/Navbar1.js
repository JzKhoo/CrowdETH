import React from 'react'
import { IconContext } from 'react-icons/lib'
import { Nav,
   NavBarContainer, 
   NavLogo, 
   NavIcon, 
} from './Navbar1.styles'
import Logo from '../../images/Logo1.png'

function Navbar1() {
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>
            <NavIcon src={Logo} />
          </NavLogo>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar1