import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import BackgroundImage from '../../images/Cosmic.jpeg'

export const Background = styled.div`
    background-image: url(${BackgroundImage});
    width: 1920px;
    height: 1080px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    width: 500px;
    gap: 50px;
    font-size: medium;
`
export const StartButton= styled.button`
    text-align: center;
    background-color: #A7A7A7;
    color: white;
    height: 60px;
    width: 200px;
    border-radius: 10px;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
`

export const Gif = styled.img`
    width: 670px;
    height: 480px;
`