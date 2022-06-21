import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background-color: #30362F;
    height: 64px;
    display: flex;
    justify-content: space-between;
`

export const NavLink = styled(Link)`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
`

export const NavLogo = styled.img`
    width: 130px;
    height: auto;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavBtnLink1 = styled(Link)`
    box-sizing: border-box;
    border-radius: 4px;
    background: white;
    padding: 10px 2rem;
    margin: 24px;
    color: #37c1ff;
    text-decoration: none;
    cursor: pointer;
`

export const NavBtnLink2 = styled(Link)`
    box-sizing: border-box;
    border-radius: 4px;
    background: #11B6CC;
    padding: 10px 2rem;
    margin: 24px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`