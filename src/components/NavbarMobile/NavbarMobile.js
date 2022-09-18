import React from "react";
import {
  MainContainer,
  NavItem,
  StyledText,
  StyledOverview,
  StyledPortfolio,
  StyledSummary,
  StyledSearch,
  IconDiv,
} from "./NavbarMobile.styles";

const NavbarMobile = () => {
  return (
    <MainContainer>
      <NavItem to="/">
        <IconDiv>
          <StyledOverview />
        </IconDiv>
        <StyledText>Overview</StyledText>
      </NavItem>
      <NavItem to="/Portfolio">
        <IconDiv>
          <StyledPortfolio />
        </IconDiv>
        <StyledText>Portfolio</StyledText>
      </NavItem>
      <NavItem to="/">
        <IconDiv>
          <StyledSummary />
        </IconDiv>
        <StyledText>Summary</StyledText>
      </NavItem>
      <NavItem to="/Search">
        <IconDiv>
          <StyledSearch />
        </IconDiv>
        <StyledText>Search</StyledText>
      </NavItem>
    </MainContainer>
  );
};

export default NavbarMobile;
