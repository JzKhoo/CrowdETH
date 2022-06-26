import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundImage from '../images/Cosmic.jpeg'

export const Background = styled.div`
    background-image: url(${BackgroundImage});
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 150px;
    gap: 50px;

    h1 {
        font-size: 56px;
        color: white;
        width: 50%;
    }

    p {
        font-size: 20px;
        color: white;
        width: 50%;
    }
`

export const StartButton = styled(Link)`
    background-color: #A7A7A7;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    opacity: 80%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
`

export const Gif = styled.img`
    width: 30%;
    height: 60%;
    margin-right: 200px;
    opacity: 80%;
`