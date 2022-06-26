import React from 'react'
import GlobalStyle from '../../globalStyles'
import Navbar from '../../components/Navbar/Navbar'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjTwo, homeObjThree } from './Data'
import ScrollToTop from '../../ScrollToTop'

const Explore = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Explore