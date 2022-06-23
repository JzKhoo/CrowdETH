import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import Logo from '../images/Logo1.png';
import { NavBarContainer, NavbarHome, NavbarLogo, SearchBar, Buttons, ConnectWallet, SignOutButton } from './Navbar2.styles';

function Navbar2() {

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
      <NavBarContainer>
        <NavbarHome to='/Landing'>
          <NavbarLogo src={Logo} alt='Logo'></NavbarLogo>
        </NavbarHome>
        <SearchBar placeholder='Search'></SearchBar>
        <Buttons>
          <ConnectWallet
            onClick={connectWallet}
          >
            {buttonText}
          </ConnectWallet>
          <SignOutButton
            onClick={() => { logout(); navigate("../") }}
          >Sign Out</SignOutButton>
        </Buttons>
      </NavBarContainer>
    </>
  )
}

export default Navbar2