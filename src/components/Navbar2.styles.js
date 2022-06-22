import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavBarContainer = styled.nav`
    width: 100%;
    height: 64px;
    background-color: #30362F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`

export const NavbarLogo = styled.img`
    height: 70%;
    width: auto;
    margin-left: 20px;
`

export const SearchBar = styled.input`
    width: 30%;
    height: 40px;
    border-radius: 10px;
`

export const ProfileTab = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 25px;
    margin-right: 20px;
`