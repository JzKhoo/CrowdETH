import React from 'react'
import GlobalStyle from './globalStyles'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import ScrollToTop from './ScrollToTop'

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root /
app.get(/.*/, function (req, res) {
 res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)

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
