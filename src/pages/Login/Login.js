import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import GlobalStyle from "../../globalStyles";
import Navbar from '../../components/Navbar/Navbar'
import { Container, Button } from "../../globalStyles";
import { LoginWrapper,
  LoginColumn,
  Heading,
  Subtitle,
  Form,
  FormInput
} from "./Login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/Landing");
  }, [user, loading]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <LoginWrapper>
        <Container>
          <LoginColumn>
            <Heading>Login</Heading>
            <Subtitle>Start your venture journey with us!</Subtitle>
            <Form>
              <FormInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Username' />
              <FormInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              <Button onClick={() => logInWithEmailAndPassword(email, password)}>Venture In!</Button>
            </Form>
          </LoginColumn>
        </Container>
      </LoginWrapper>
    </> 
  )
}

export default Login