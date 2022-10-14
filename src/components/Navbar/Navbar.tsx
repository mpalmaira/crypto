import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  LeftContainer,
  NavContainer,
  NavTopContainer,
  MarketDataContainer,
  RightContainer,
  StyledLink,
  DropDownDiv,
  ToggleThemeLeftDiv,
  ToggleThemeRigtDiv,
  ToggleThemeLogo,
  StyledToggleThemeLeft,
  StyledToggleThemeRight,
  SearchBarDiv,
  StyledHeader,
} from "./Navbar.styles";
import { NavMarketData } from "../NavBarMarketData/NavBarMaketData";
import { getData } from "../../store/marketData/action";

export default function Navbar(props: { switchTheme: any; }) {
  const dispatch = useDispatch();
  const marketData = useSelector((state) => state.marketData.marketData);

  useEffect(() => {
    dispatch(getData());
    // eslint-disable-next-line
  }, []);
  return (
    <NavContainer>
      <NavTopContainer>
        <LeftContainer>
          <StyledHeader>Overview</StyledHeader>
          <StyledLink to="/" exact={true} activeClassName="active">
            Coins
          </StyledLink>
          <StyledLink to="/portfolio" activeClassName="active">
            Portfolio
          </StyledLink>
        </LeftContainer>
        <RightContainer>
          <SearchBarDiv>
            <SearchBar />
          </SearchBarDiv>
          <DropDownDiv>
            <Dropdown />
          </DropDownDiv>
          <ToggleThemeLogo onClick={props.switchTheme}>
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
