import React from 'react';
import GlobalStyle from '../../globalStyles';
import ScrollToTop from '../../ScrollToTop';
import Navbar3 from '../../components/Navbar3/Navbar3'
import { ExploreWrapper } from './Explore.styles';

import { AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";


function Projects() {
  return (
    <>
      <AccountContextProvider>
        <ModalContextProvider>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar3 />
          <ExploreWrapper>
            
          </ExploreWrapper>
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Projects