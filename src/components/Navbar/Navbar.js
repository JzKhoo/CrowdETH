import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { Nav,
   NavBarContainer, 
   NavLogo, 
   NavIcon, 
   MobileIcon, 
   NavMenu,
   NavItem,
   NavLinks,
   NavItemBtn,
   NavBtnLink} from './Navbar.styles'
import Logo from '../../images/Logo1.png'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            <NavIcon src={Logo} />
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/explore'>
                Explore
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/howitworks'>
                How It Works
              </NavLinks>
            </NavItem>

            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/Login'>
                  <Button primary>Login</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/Login'>
                  <Button fontBig primary>
                    Login
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/Signup'>
                  <Button primary>Sign Up</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/Signup'>
                  <Button fontBig primary>
                    Sign Up
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar