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

export const NavbarHome = styled(Link)`
    text-decoration: none;
`

export const NavbarLogo = styled.img`
    display: block;
    position: relative;
    height: 50px;
    margin-left: 20px;
`

export const SearchBar = styled.input`
    width: 30%;
    height: 40px;
    border-radius: 10px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ConnectWallet = styled.button`
    background-color: white;
    text-decoration: none;
    color: #11B6CC;
    box-sizing: border-box;
    width: 140px;
    height: 40px;
    margin: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`

export const SignOutButton = styled.button`
    background-color: #11B6CC;
    color: white;
    text-decoration: none;
    box-sizing: border-box;
    width: 140px;
    height: 40px;
    margin: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`