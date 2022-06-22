import React from 'react'
import GifImage from '../images/Logo.gif'
import {Background, Description, StartButton, Gif} from './Hero.styles'

function Hero() {
  return (
    <>
        <Background>
            <Description>
                <h1>The Platform for Secure Crowdfunding</h1>
                <p>Harness the unlimited potential of smart contracts and DeFi to invest in a business or start your new business venture.</p>
                <StartButton>Get Started</StartButton>
            </Description>
            <Gif src={GifImage} alt='Gif'></Gif>
        </Background>
    </>
  )
}

export default Hero