import React from 'react'
import Navbar2 from './Navbar2'
import { Container, ProjectTitle, ProjectDescription, SubmitButton } from './Submit Pitch.styles'

function SubmitPitch() {
  return (
    <>
        <Navbar2 />
        <Container>
            <h1>Pitch your ideaETH</h1>
            <p>Got an Idea? Pitch it now to gain the hearts of everyone!</p>
            <p>Start your IdeaETH by filling the template below!</p>
            <ProjectTitle placeholder='Project Title'></ProjectTitle>
            <ProjectDescription placeholder='Project Description'></ProjectDescription>
            <SubmitButton>PITCH IT!</SubmitButton>
        </Container>
    </>
  )
}

export default SubmitPitch