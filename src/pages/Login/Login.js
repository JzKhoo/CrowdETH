import React, { useEffect, useState } from "react";
import GlobalStyle from "../../globalStyles";
import Navbar1 from '../../components/Navbar1/Navbar1'
import { LoginWrapper,
  Heading,
  Subtitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from "./Login.styles";
import Footer1 from '../../components/Footer1/Footer1'


// Backend
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Login = () => {

  // Backend
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
      <Navbar1 />
      <LoginWrapper>
        <Form>
          <Heading>Login</Heading>
          <Subtitle>Start your venture journey with us!</Subtitle>
          <FormLabel htmlFor='for'>Email</FormLabel>
          <FormInput value={email} onChange={(e) => setEmail(e.target.value)} required />
          <FormLabel htmlFor='for'>Password</FormLabel>
          <FormInput 
            type={values.showPassword ? "text" : "password"} 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            required
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
          <FormButton onClick={() => logInWithEmailAndPassword(email, password)}>Venture In!</FormButton>
          <Text>Forgot Password</Text>
        </Form>
      </LoginWrapper>
      <Footer1 />
    </> 
  )
}

export default Login