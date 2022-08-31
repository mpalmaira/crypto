import React, { useState, useEffect } from "react";
import axios from "axios";
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

export default function Navbar(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [marketData, setMarketData] = useState(null);
  const [hasError, setHasError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      setMarketData(data.data);
      setIsLoading(false);
    } catch (err) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
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
            <Dropdown
              handleCurrency={props.handleCurrency}
              selectedCurrency={props.selectedCurrency}
            />
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
