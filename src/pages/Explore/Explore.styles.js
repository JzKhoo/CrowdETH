import styled from "styled-components";
import { Link } from "react-router-dom";

export const ExploreWrapper = styled.div`
    padding: 80px 0;
    background: #101522;
`

export const ExploreContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
`

export const ExploreCardWrapper = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`