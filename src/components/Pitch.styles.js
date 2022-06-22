import styled from "styled-components";
import BackgroundImage from '../images/Cosmic.jpeg'
import { Link } from "react-router-dom"; 

export const Background = styled.div`
    background-image: url(${BackgroundImage});
    height: 910px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    margin-left: 40px;

    h1 {
        font-size: 56px;
        color: white;
        width: 100%;
    }

    p {
        font-size: 20px;
        color: white;
        width: 80%;
    }
`

export const PitchButton = styled(Link)`
    background-color: #A7A7A7;
    color: white;
    font-size: 18px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    opacity: 80%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

export const Gif = styled.img`
    width: 30%;
    height: 30%;
    margin-right: 200px;
    opacity: 80%;
`