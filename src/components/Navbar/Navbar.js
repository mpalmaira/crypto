import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import {
  LeftContainer,
  NavContainer,
  NavTopContainer,
  MarketDataContainer,
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
import { NavMarketData } from "../NavBarMarketData/NavBarMaketData";
import { getData } from "../../store/marketData/action";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const marketData = useSelector((state) => state.marketData.marketData);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <NavContainer>
      <NavTopContainer>
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
            <Dropdown />
          </DropDownDiv>
          <ToggleThemeLogo onClick={props.toggleTheme}>
            <ToggleThemeLeftDiv>
              <StyledToggleThemeLeft />
            </ToggleThemeLeftDiv>
            <ToggleThemeRigtDiv>
              <StyledToggleThemeRight />
            </ToggleThemeRigtDiv>
          </ToggleThemeLogo>
        </RightContainer>
      </NavTopContainer>
      <MarketDataContainer>
        {marketData && <NavMarketData marketData={marketData} />}
      </MarketDataContainer>
    </NavContainer>
  );
}
