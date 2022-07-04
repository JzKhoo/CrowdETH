import styled from "styled-components";
import { Link } from "react-router-dom";

export const PitchWrapper = styled.div`
    color: white;
    padding: 160px 0;
    background: #101522;
`
export const PitchColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: #f7f8fa;
`

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #f7f8fa;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`

export const PitchTitle = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        margin: 0 0 16px 0;
    }
`

export const PitchDescription = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        margin: 0 0 16px 0;
    }
`

export const UploadFile = styled.button`
    padding: 10px 20px;
    border-radius: 2px;
    margin: 10px;
    outline: none;
    border: none;
    font-size: 10px;
    border: 1px solid #fff;

    @media screen and (max-width: 820px) {
        margin: 0 0 16px 0;
    }
`