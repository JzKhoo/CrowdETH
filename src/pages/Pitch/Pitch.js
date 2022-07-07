import React from 'react';
import GlobalStyle from '../../globalStyles';
import Navbar3 from '../../components/Navbar3/Navbar3';
import { 
  PitchWrapper,
  Form,
  Heading,
  Subtitle,
  FormLabel,
  FormInput,
  ErrorMessage,
  FormButton
} from './Pitch.styles';

import { AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";

function Pitch() {

  return (
    <>
      <AccountContextProvider>
        <ModalContextProvider>
          <GlobalStyle />
          <Navbar3 />
          <PitchWrapper>
            <Form>
              <Heading>Pitch Your IdeaETH</Heading>
              <Subtitle>Got an Idea? Pitch it now to gain the hearts of everyone! Start your IdeaETH by filling the template below!</Subtitle>
              <FormLabel htmlFor='for'>Project Title</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>Project Poster</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>Project Description</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>Project Website/Link</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>Start Date</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>End Date</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>Amount to be Raised (ETH)</FormLabel>
              <FormInput />

              <ErrorMessage>Error message here</ErrorMessage>

              <FormButton>Pitch It!</FormButton>
            </Form>
          </PitchWrapper>
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Pitch