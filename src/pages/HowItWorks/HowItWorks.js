import React from 'react'
import GlobalStyle from '../../globalStyles'
import Navbar from '../../components/Navbar/Navbar'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjThree } from './Data'
import ScrollToTop from '../../ScrollToTop'

const HowItWorks = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default HowItWorks