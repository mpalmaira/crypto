import React from "react";
import { LeftContainer, NavContainer, RightContainer, SearchInput, SearchDiv, StyledLink, DollarSignDiv, DropDownDiv, ColoredCurrency, ToggleThemeLeftDiv, ToggleThemeRigtDiv, ToggleThemeLogo } from "./Navbar.styles";
import { ReactComponent as SearchIcon } from '../SVG/Search.svg';
import { ReactComponent as DollarSign } from '../SVG/DollarSign.svg';
import { ReactComponent as ArrowDown } from '../SVG/ArrowDown.svg';
import { ReactComponent as ToggleThemeRight } from '../SVG/ToggleThemeRight.svg';
import { ReactComponent as ToggleThemeLeft } from '../SVG/ToggleThemeLeft.svg';




class Navbar extends React.Component {
    render(){
        return(
            <NavContainer>
                <LeftContainer>
                    <StyledLink to ='/'>Coins</StyledLink>
                    <StyledLink to ='/Portfolio'>Portfolio</StyledLink>
                </LeftContainer>
               <RightContainer>
                <SearchDiv>
                    <SearchIcon/>
                    <SearchInput placeholder="Search..."/>
                </SearchDiv>
                <DropDownDiv>
                    <DollarSignDiv>
                        <DollarSign/>
                    </DollarSignDiv>
                    <ColoredCurrency>USD</ColoredCurrency>
                    <ArrowDown/>
                </DropDownDiv>
                <ToggleThemeLogo>
                    <ToggleThemeLeftDiv>
                        <ToggleThemeLeft/>
                    </ToggleThemeLeftDiv>
                    <ToggleThemeRigtDiv>
                        <ToggleThemeRight/>
                    </ToggleThemeRigtDiv>
                </ToggleThemeLogo>
               </RightContainer>
               
                
            </NavContainer>
               
        )
    }
}

export default Navbar; 