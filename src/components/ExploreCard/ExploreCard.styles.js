import styled from "styled-components";

export const ExploreCardWrapper = styled.div`
    padding: 16px;
    background-color: #101522;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const ExploreCardContainer = styled.div`
    background: white;
    max-width: 300px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 16px;

    @media screen and (max-width: 768px) {
        padding: 16px;
    }
`

export const Poster = styled.img`
    margin-bottom: 16px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
`

export const Heading = styled.h1`
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.1;
    color: #1c2237;
    text-align: center;
`

export const Description = styled.h1`
    color: #a9b3c1;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
`