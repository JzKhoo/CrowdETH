import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
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
   NavBtnLink
} from './Navbar.styles'
import Logo from '../../images/Logo1.png'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)

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

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <NavIcon src={Logo} />
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='GetStarted' onClick={handleClick} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Get Started
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='AboutUs' onClick={handleClick} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='OurFeatures' onClick={handleClick} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Our Features
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
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar