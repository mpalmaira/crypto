import React from "react";
import { LeftContainer, NavContainer, RightContainer, SearchInput, SearchDiv, StyledLink, DollarSignDiv, DropDownDiv, ColoredCurrency, ToggleThemeLeftDiv, ToggleThemeRigtDiv, ToggleThemeLogo, StyledSearchIcon, StyledToggleThemeLeft,StyledToggleThemeRight } from "./Navbar.styles";
import { ReactComponent as DollarSign } from '../SVG/DollarSign.svg';
import { ReactComponent as ArrowDown } from '../SVG/ArrowDown.svg';

export default class Navbar extends React.Component {
   
    
    render(){
        return(
            <NavContainer>
                <LeftContainer>
                    <StyledLink to ='/'>Coins</StyledLink>
                    <StyledLink to ='/Portfolio'>Portfolio</StyledLink>
                </LeftContainer>
               <RightContainer>
                <SearchDiv>
                    <StyledSearchIcon />
                    <SearchInput placeholder="Search..."/>
                </SearchDiv>
                <DropDownDiv>
                    <DollarSignDiv>
                        <DollarSign/>
                    </DollarSignDiv>
                    <ColoredCurrency>USD</ColoredCurrency>
                    <ArrowDown/>
                </DropDownDiv>
                <ToggleThemeLogo onClick={this.props.toggleTheme}>
                    <ToggleThemeLeftDiv>
                        <StyledToggleThemeLeft/>
                    </ToggleThemeLeftDiv>
                    <ToggleThemeRigtDiv>
                        <StyledToggleThemeRight/>
                    </ToggleThemeRigtDiv>
                </ToggleThemeLogo>
               </RightContainer>
            </NavContainer>
               
        )
    }
}
