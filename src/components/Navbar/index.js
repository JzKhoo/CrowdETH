import React from 'react'
import Logo from '../../images/Logo1.png'
import { Nav, NavLink, NavBtn, NavBtnLink1, NavBtnLink2 } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='Logo'/>
        </NavLink>
        <NavBtn>
          <NavBtnLink1 to='/login'>Login</NavBtnLink1>
          <NavBtnLink2 to='/sign-up'>Sign Up</NavBtnLink2>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar