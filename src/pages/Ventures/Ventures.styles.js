import styled from "styled-components";

export const VentureWrapper = styled.div`
    padding: 160px 0;
    background: #101522;
`

export const VentureContainer = styled.div`
    display: flex;
`

export const VentureInformation = styled.div`
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
    margin-bottom: 32px;
    font-size: 48px;
    line-height: 1.1;
    color: #f7f8fa;
    text-align: center;
`

export const Poster = styled.img`
    margin-bottom: 32px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
`

export const Description = styled.h1`
    margin-bottom: 32px;
    margin-top: 32px;
    color: #a9b3c1;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const KeyValueContainer = styled.div`
    display: flex;
    margin-bottom: 32px;
`

export const VentureLabel = styled.p`
    font-size: 14px;
    color: white;
    margin-right: 8px;
`

export const VentureLink = styled.a`
    color: #a9b3c1;
    font-size: 14px;
    text-decoration: none;
`

export const VentureNumber = styled.p`
    font-size: 14px;
    color: #a9b3c1;
`