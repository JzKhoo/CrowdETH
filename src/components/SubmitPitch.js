import React from 'react'
import Navbar2 from './Navbar2'
import props from 'prop-types'
import { Container, ProjectTitle, ProjectDescription, UploadButton, SubmitButton } from './Submit Pitch.styles'

function SubmitPitch() {

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programmatically click the hidden file input element when the UploadButton component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  }

  // Call a function (passed as a prop from the parent component) to handle the user-selected file
  const handleChange = event => {
    const fileUploaded = event.targeted.files[0];
    props.handleFile(fileUploaded);
  }

  return (
    <>
        <Navbar2 />
        <Container>
            <h1>Pitch your ideaETH</h1>
            <p>Got an Idea? Pitch it now to gain the hearts of everyone!</p>
            <p>Start your IdeaETH by filling the template below!</p>
            <ProjectTitle placeholder='Project Title'></ProjectTitle>
            <ProjectDescription placeholder='Project Description'></ProjectDescription>
            <UploadButton onClick={handleClick}>
              Upload a file
            </UploadButton>
            <input type='file' ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}} />
            <SubmitButton to='/Landing'>PITCH IT!</SubmitButton>
        </Container>
    </>
  )
}

export default SubmitPitch