import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
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

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/Landing' onClick={closeMobileMenu}>
            <NavIcon src={Logo} />
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/Explore'>
                Explore
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/Pitch'>
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