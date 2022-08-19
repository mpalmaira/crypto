import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { HomePage, CoinPage, Portfolio } from "./pages";
import { darkTheme, lightTheme } from "./components/Theme/Theme";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color: ${(props) => props.theme.main};
    font-family: 'Poppins', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
`;
export const currencies = {
  usd: {
    value: "usd",
    symbol: "$",
  },
  gbp: {
    value: "gbp",
    symbol: "£",
  },
  eur: {
    value: "eur",
    symbol: "€",
  },
  btc: {
    value: "btc",
    symbol: "₿",
  },
  eth: {
    value: "eth",
    symbol: "Ξ",
  },
};

export default class App extends React.Component {
  state = {
    dark: true,
    selectedCurrency: {
      value: "usd",
      symbol: "$",
    },
  };
  toggleTheme = () => {
    this.setState({
      dark: !this.state.dark,
    });
  };
  handleCurrency = (selectedCurrency) => {
    this.setState({
      selectedCurrency: currencies[selectedCurrency],
    });
  };
  render() {
    const theme = this.state.dark ? darkTheme : lightTheme;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar
            toggleTheme={this.toggleTheme}
            handleCurrency={this.handleCurrency}
            selectedCurrency={this.state.selectedCurrency}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <HomePage
                  {...props}
                  currency={this.state.selectedCurrency.value}
                  symbol={this.state.selectedCurrency.symbol}
                />
              )}
            />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/coinpage/:coinId" component={CoinPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
