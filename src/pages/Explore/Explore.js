import React from 'react';
import GlobalStyle from '../../globalStyles';
import ScrollToTop from '../../ScrollToTop';
import Navbar3 from '../../components/Navbar3/Navbar3'
import { 
  ExploreWrapper,
  ExploreContainer,
  ExploreCardWrapper 
} from './Explore.styles';
import ExploreCard from '../../components/ExploreCard/ExploreCard';

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
            <ExploreContainer>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
              <ExploreCardWrapper to='/Landing'>
                <ExploreCard />
              </ExploreCardWrapper>
            </ExploreContainer>
          </ExploreWrapper>
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Projects