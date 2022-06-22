import styled from "styled-components";
import BackgroundImage from '../images/Cosmic.jpeg'

export const Container = styled.div`
    background-image: url(${BackgroundImage});
    width: 1915px;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    gap: 20px;

    h1, p {
        margin-left: 150px;
    }

    h1 {
        margin-top: 150px;
    }
`

export const ProjectTitle = styled.input`
    margin-left: 150px;
    width: 80%;
    height: 30px;
    border-radius: 5px;
    border: none;
`

export const ProjectDescription = styled.input`
    margin-left: 150px;
    width: 80%;
    height: 30%;
    border-radius: 5px;
    border: none;
`

export const SubmitButton = styled.button`
    background-color: #37C1FF;
    color: white;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    font-size: 18px;
    align-self: center;
`