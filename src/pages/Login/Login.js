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

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Login = () => {

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
              <FormInput 
                type={values.showPassword ? "text" : "password"} 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                  }
                />
              <Button onClick={() => logInWithEmailAndPassword(email, password)}>Venture In!</Button>
            </Form>
          </LoginColumn>
        </Container>
      </LoginWrapper>
    </> 
  )
}

export default Login