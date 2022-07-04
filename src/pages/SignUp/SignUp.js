import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

import GlobalStyle from "../../globalStyles";
import Navbar from '../../components/Navbar/Navbar'
import { Container, Button } from "../../globalStyles";
import { SignUpWrapper,
  SignUpColumn,
  Heading,
  Subtitle,
  Form,
  FormInput
} from "./SignUp.styles";

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
      <Navbar />
      <SignUpWrapper>
        <Container>
          <SignUpColumn>
            <Heading>Sign Up</Heading>
            <Subtitle>Join up in empowering ventures!</Subtitle>
            <Form>
              <FormInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Username' />
              <FormInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              <Button onClick={register}>Venture Now!</Button>
            </Form>
          </SignUpColumn>
        </Container>
      </SignUpWrapper>
    </>
  )
}

export default SignUp;