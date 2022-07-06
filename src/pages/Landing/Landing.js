import React from 'react';
import GlobalStyle from '../../globalStyles';
import ScrollToTop from '../../ScrollToTop';
import Navbar2 from '../../components/Navbar2/Navbar2';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObjOne, homeObjTwo } from './Data';
import Footer2 from '../../components/Footer2/Footer2'

// Backend
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
          <Footer2 />
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Landing