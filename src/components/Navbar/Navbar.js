import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  LeftContainer,
  NavContainer,
  RightContainer,
  SearchInput,
  SearchDiv,
  StyledLink,
  DropDownDiv,
  ToggleThemeLeftDiv,
  ToggleThemeRigtDiv,
  ToggleThemeLogo,
  StyledSearchIcon,
  StyledToggleThemeLeft,
  StyledToggleThemeRight,
} from "./Navbar.styles";

export default class Navbar extends React.Component {
  render() {
    return (
      <NavContainer>
        <LeftContainer>
          <StyledLink to="/">Coins</StyledLink>
          <StyledLink to="/Portfolio">Portfolio</StyledLink>
        </LeftContainer>
        <RightContainer>
          <SearchDiv>
            <StyledSearchIcon />
            <SearchInput placeholder="Search..." />
          </SearchDiv>
          <DropDownDiv>
            <Dropdown handleCurrency={this.props.handleCurrency} currencies = {this.props.currencies} />
          </DropDownDiv>
          <ToggleThemeLogo onClick={this.props.toggleTheme}>
            <ToggleThemeLeftDiv>
              <StyledToggleThemeLeft />
            </ToggleThemeLeftDiv>
            <ToggleThemeRigtDiv>
              <StyledToggleThemeRight />
            </ToggleThemeRigtDiv>
          </ToggleThemeLogo>
        </RightContainer>
      </NavContainer>
    );
  }
}
