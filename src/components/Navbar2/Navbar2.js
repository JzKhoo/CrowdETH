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

function Navbar2() {

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


  const initialText = 'Connect Wallet';
  const [buttonText, setButtonText] = useState(initialText);
  const [walletAddress, setWalletAddress] = useState("")
  const navigate = useNavigate();

  const truncateAddress = (str) => {
    if (`${str}`.length == 42) {
      return `0x${str.substring(2, 6)}...${str.substring(38)}`;
    }
  };

  async function requestAccount() {
    // Check if Meta Mask extension exists
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        alert('Error Connnecting...');
      }
    } else {
      alert('Meta Mask extension not detected');
    }
  }

  function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      requestAccount();
      const status = truncateAddress(walletAddress);
      setButtonText("Connected to: " + status);
    }
  }

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
              <NavLinks to='/Landing'>
                Main
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/Landing'>
                Explore
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/Landing'>
                Pitch
              </NavLinks>
            </NavItem>

            <NavItemBtn>
              {button ? (
                <NavBtnLink>
                  <Button primary onClick={connectWallet}>Connect Wallet</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink>
                  <Button fontBig primary onClick={connectWallet}>
                    Connect Wallet
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
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