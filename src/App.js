import React from 'react'
import GlobalStyle from './globalStyles'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Home />
    </>
  )
}

export default App
