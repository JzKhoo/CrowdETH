import React from 'react'
import GlobalStyle from '../../globalStyles'
import ScrollToTop from '../../ScrollToTop'
import Navbar from '../../components/Navbar/Navbar'
import InfoSection from '../../components/InfoSection/InfoSection'
import Footer from '../../components/Footer/Footer'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home