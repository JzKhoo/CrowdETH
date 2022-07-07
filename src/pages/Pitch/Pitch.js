import React from 'react';
import GlobalStyle from '../../globalStyles';
import ScrollToTop from '../../ScrollToTop';
import Navbar3 from '../../components/Navbar3/Navbar3';
import { 
  PitchWrapper,
  Form,
  Heading,
  Subtitle,
  FormLabel,
  FormInput,
  FormInputDescription,
  FormButton
} from './Pitch.styles';
import Footer3 from '../../components/Footer3/Footer3'
import UploadImg from '../../components/UploadImg/UploadImg';


// Backend
import { AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";

function Pitch() {

  return (
    <>
      <AccountContextProvider>
        <ModalContextProvider>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar3 />
          <PitchWrapper>
            <Form>
              <Heading>Pitch Your IdeaETH</Heading>
              <Subtitle>Got an Idea? Pitch it now to gain the hearts of everyone! Start your IdeaETH by filling the template below!</Subtitle>
              
              <FormLabel htmlFor='for'>Project Title</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>Project Description</FormLabel>
              <FormInputDescription />
              <FormLabel htmlFor='for'>Project Website/Link</FormLabel>
              <FormInput />
              <FormLabel htmlFor='for'>Project Poster</FormLabel>
              <UploadImg />
              <FormLabel htmlFor='for'>Amount to be Raised (ETH)</FormLabel>
              <FormInput />
              <FormButton>Pitch It!</FormButton>
            </Form>
          </PitchWrapper>
          <Footer3 />
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Pitch