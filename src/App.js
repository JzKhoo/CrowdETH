import React from 'react'
import GlobalStyle from './globalStyles'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import ScrollToTop from './ScrollToTop'

const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 8080 // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`))

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
