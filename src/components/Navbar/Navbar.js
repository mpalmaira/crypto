import React from "react";
import { LeftContainer, NavContainer, RightContainer, SearchInput, SearchDiv, StyledLink, DollarSignDiv, DropDownDiv, ColoredCurrency } from "./Navbar.styles";
import { ReactComponent as SearchIcon } from '../SVG/Search.svg';
import { ReactComponent as DollarSign } from '../SVG/DollarSign.svg';
import { ReactComponent as ToggleTheme } from '../SVG/ToggleTheme.svg';
import { ReactComponent as ArrowDown } from '../SVG/ArrowDown.svg';


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
                <div>
                    <ToggleTheme/>
                </div>
               </RightContainer>
               
                
            </NavContainer>
               
        )
    }
}

export default Navbar; 