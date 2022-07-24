import styled from "styled-components"

export const InvestorFormWrapper = styled.div`
    padding: 32px;
    background-color: #101522;
`

export const FillerContainer = styled.div`
    padding: 80px;
    position: sticky;
`

export const InvestorFormContainer = styled.div`
    background: white;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 32px 32px;
    border-radius: 4px;
`

export const LargeLabel = styled.h1`
    margin-bottom: 8px;
    color: #1c2237;
    font-size: 20px;
    font-weight: 400;
`

export const SmallLabel = styled.p`
    color: #a9b3c1;
    font-size: 14px;
    margin-bottom: 16px;
`

export const ProgressBar = styled.div``

export const Form = styled.form`
    display: flex;
`

export const FormInput = styled.input`
    padding: 6px;
    margin-right: 4px;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB') };
    padding: 6px 18px;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: white;
        background: ${({primary}) => (primary ? '#0467Fb' : '#4B59F7') };
    }
`