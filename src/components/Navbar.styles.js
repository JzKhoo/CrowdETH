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

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const LoginButton = styled(Link)`
    background-color: white;
    text-decoration: none;
    color: #11B6CC;
    box-sizing: border-box;
    width: 140px;
    height: 40px;
    margin: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SignUpButton = styled(Link)`
    background-color: #11B6CC;
    color: white;
    text-decoration: none;
    box-sizing: border-box;
    width: 140px;
    height: 40px;
    margin: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`
