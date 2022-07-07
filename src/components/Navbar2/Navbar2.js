// Navbar for Landing.js - all links & smooth scroll

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { animateScroll as scroll } from 'react-scroll'
import { Button } from "../../globalStyles";
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
} from "./Navbar2.styles";
import Logo from '../../images/Logo1.png'

// Backend
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import ConnectWallet from "../Wallet/ConnectWallet";

function Navbar2() {

  const navigate = useNavigate();

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
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/Landing' onClick={toggleHome}>
            <NavIcon src={Logo} />
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='Explore' onClick={handleClick} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Explore
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Pitch' onClick={handleClick} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Pitch
              </NavLinks>
            </NavItem>
            
            <ConnectWallet />
            <NavItemBtn>
              {button ? (
                <NavBtnLink>
                  <Button primary onClick={() => { logout(); navigate("../") }}>Sign Out</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink>
                  <Button fontBig primary onClick={() => { logout(); navigate("../") }}>
                    Sign Out
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

export default Navbar2