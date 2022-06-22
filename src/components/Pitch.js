import React from 'react'
import GifImage from '../images/Pitch.gif'
import { Background, Description, PitchButton, Gif } from './Pitch.styles'

function Pitch() {
  return (
    <>
        <Background>
            <Description>
                <h1>Pitch It!</h1>
                <p>Are you an Entrepreneur?</p>
                <p>Showcase your brilliant ideas and win the hearts of the DeFi crowd!</p>
                <PitchButton to='/SubmitPitch'>Pitch Now</PitchButton>
            </Description>
            <Gif src={GifImage} alt='Gif'></Gif>
        </Background>
    </>
  )
}

export default Pitch