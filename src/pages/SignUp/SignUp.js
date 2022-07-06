import React, { useEffect, useState } from "react";
import GlobalStyle from "../../globalStyles";
import ScrollToTop from "../../ScrollToTop";
import Navbar1 from "../../components/Navbar1/Navbar1";
import { SignUpWrapper,
  Form,
  Heading,
  Subtitle,
  FormLabel,
  FormInput,
  FormButton
} from "./SignUp.styles";
import Footer1 from '../../components/Footer1/Footer1'

// Backend
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Login");
  }, [user, loading]); 

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar1 />
      <SignUpWrapper>
        <Form>
          <Heading>Sign Up</Heading>
          <Subtitle>Join up in empowering ventures!</Subtitle>
          <FormLabel htmlFor='for'>Email</FormLabel>
          <FormInput value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormLabel htmlFor='for'>Password</FormLabel>
          <FormInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <FormButton onClick={register}>Venture Now!</FormButton>
        </Form>
      </SignUpWrapper>
      <Footer1 />
    </>
  )
}

export default SignUp;