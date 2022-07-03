import React from 'react';
import GlobalStyle from '../../globalStyles';
import Navbar2 from '../../components/Navbar2/Navbar2';
import ScrollToTop from '../../ScrollToTop';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObjOne, homeObjTwo } from './Data';
import { AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";

function Landing() {
  return (
    <>
      <AccountContextProvider>
        <ModalContextProvider>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar2 />
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Landing