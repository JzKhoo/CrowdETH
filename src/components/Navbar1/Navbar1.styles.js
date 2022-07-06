import styled from "styled-components"
import { Container } from "../../globalStyles"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
    background: #30362F;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
`

export const NavIcon = styled.img`
    height: 80%;
    width: auto;
`