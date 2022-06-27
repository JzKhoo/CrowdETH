import React from 'react'
import GlobalStyle from '../../globalStyles'
import Navbar2 from '../../components/Navbar2/Navbar2'
import ScrollToTop from '../../ScrollToTop'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjOne, homeObjTwo } from './Data'

function Landing() {
  return (
    <>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar2 />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Landing