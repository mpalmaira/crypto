import React from "react";
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
export default class Navbar extends React.Component {
  state = {
    isLoading: false,
    marketData: null,
    hasError: false,
  };
  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      this.setState({ marketData: data.data, isLoading: false });
      console.log(this.state.marketData);
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };
  componentDidMount() {
    this.getData();
  }

  render() {
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
                handleCurrency={this.props.handleCurrency}
                selectedCurrency={this.props.selectedCurrency}
              />
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
        </NavTopContainer>
        <MarketDataContainer>
          {this.state.marketData && (
            <NavMarketData
              marketData={this.state.marketData}
            />
          )}
        </MarketDataContainer>
      </NavContainer>
    );
  }
}
