import React from 'react'
import Navbar2 from './Navbar2'
import { Background, Description, ExploreButton, Gif } from './Explore.styles'
import GifImage from '../images/Logo.gif'

function Explore() {
  return (
    <>
        <Navbar2 />
        <Background>
            <Description>
                <h1>Explore & Look</h1>
                <p>A <strong>BIG</strong> business starts small</p>
                <p>Explore the unlimited projects pitched by talented entrepreneurs all over the world!</p>
                <ExploreButton to='/'>Explore Now</ExploreButton>
            </Description>
            <Gif src={GifImage} alt='Gif'></Gif>
        </Background>
    </>
  )
}

export default Explore