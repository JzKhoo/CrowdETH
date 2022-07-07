import styled from "styled-components";
import { Link } from "react-router-dom";

export const PitchWrapper = styled.div`
    padding: 160px 0;
    background: #101522;
`

export const Form = styled.form`
    background: #101522;
    max-width: 800px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: #f7f8fa;
    text-align: center;
`

export const Subtitle = styled.h1`
    margin-bottom: 40px;
    color: #a9b3c1;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: white;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormInputDescription = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 32px;
    resize: none;
    height: 200px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7') };
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: white;
        background: ${({primary}) => (primary ? '#4B59F7' : '#0467Fb') };
    }
`