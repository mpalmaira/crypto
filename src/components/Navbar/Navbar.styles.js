import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'

export const NavContainer = styled.div `
    width: 100%;
    background-color: ${props => props.theme.cardColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LeftContainer = styled.div `
    display: flex;
`
export const StyledLink = styled(Link)
`
    color: ${props => props.theme.fontColor};
    font-size: 30px;
    padding: 25px 50px;
    text-decoration: none;
    font-weight:500;
`

export const RightContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchInput = styled.input `
    background: transparent;
    border: none;
    outline:none;
    padding: 8px;
    color: ${props => props.theme.fontColor};
    font-size: 17px;
    ::placeholder{
        color: ${props=>props.theme.fontColor}
    }
`
export const SearchDiv = styled.div `
    background-color: ${props=>props.theme.navBarBG};
    width: 380px;
    height: 40px;
    border-radius: 10px;
    display: flex; 
    align-items: center;
    padding: 6px;
    margin-right: 25px;
    color: black;
`

export const DollarSignDiv = styled.div `
    background-color: black;
    border-radius: 30px;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const DropDownDiv = styled.div `
    background-color: ${props=>props.theme.navBarBG};
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
    width: 136px;
    height: 50px;
    margin-right: 25px;
`

export const ColoredCurrency = styled.p `
    color: ${props=>props.theme.fontColor};
    font-weight: 500
`

export const ToggleThemeLeftDiv = styled.div `
    transform: rotate(90deg);
    margin-right: -13px;
  
`
export const ToggleThemeRigtDiv = styled.div `
    transform: rotate(90deg);
    opacity: 50%;
`
export const ToggleThemeLogo = styled.div `
    display: flex;
    algin-items: center;
    justify-content: center; 
    background-color: ${props=>props.theme.navBarBG};
    padding: 15px 10px;
    border-radius: 10px;
    margin-right: 25px;
    cursor:pointer;
`