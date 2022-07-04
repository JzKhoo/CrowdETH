import React from 'react';
import GlobalStyle from '../../globalStyles';
import Navbar2 from '../../components/Navbar2/Navbar2';
import { Container, Button } from '../../globalStyles';
import {
  PitchWrapper,
  PitchColumn,
  Heading,
  Subtitle,
  Form,
  PitchTitle,
  PitchDescription,
  UploadFile
} from './Pitch.styles';

import props from 'prop-types';

import { AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";

function Pitch() {

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
      <AccountContextProvider>
        <ModalContextProvider>
          <GlobalStyle />
          <Navbar2 />
          <PitchWrapper>
            <Container>
              <PitchColumn>
                <Heading>Pitch Your IdeaETH</Heading>
                <Subtitle>Got an Idea? Pitch it now to gain the hearts of everyone!</Subtitle>
                <Subtitle>Start your IdeaETH by filling the template below!</Subtitle>
                <Form>
                  <PitchTitle placeholder='Project Title'></PitchTitle>
                  <PitchDescription placeholder='Project Description'></PitchDescription>
                  <UploadFile onClick={handleClick}>Upload a File</UploadFile>
                  <input type='file' ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />
                  <Button to='/Landing'>Pitch It!</Button>
                </Form>
              </PitchColumn>
            </Container>
          </PitchWrapper>
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Pitch