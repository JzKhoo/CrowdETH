import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundImage from '../images/Cosmic.jpeg'

export const Background = styled.div`
    background-image: url(${BackgroundImage});
    height: 910px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    
    h1 {
        color: #00FFE0;
        font-size: 40px;
    }

    p {
        color: white;
        font-size: 16px;
    }
`

export const Username = styled.input`
    border-radius: 5px;
    box-sizing: border-box;
    width: 16%;
    height: 4%;
`

export const Password = styled.input`
    border-radius: 5px;
    box-sizing: border-box;
    width: 16%;
    height: 4%;
`

export const SignupButton = styled(Link)`
    background-color: #A7A7A7;
    opacity: 90%;
    width: 10%;
    height: 5%;
    text-decoration: none;
    color: #00FFE0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`