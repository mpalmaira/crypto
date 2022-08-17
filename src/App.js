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

export default class App extends React.Component {
  state = {
    dark: true,
    currencies: {
      USD: {
        value: "USD",
        symbol: "$",
      },
      GBP: {
        value: "GBP",
        symbol: "£",
      },
      EUR: {
        value: "EUR",
        symbol: "€",
      },
      BTC: {
        value: "BTC",
        symbol: "₿",
      },
      ETH: {
        value: "ETC",
        symbol: "Ξ",
      },
    },
    SelectedCurrency: {
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
      SelectedCurrency: this.state.currencies[selectedCurrency],
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
          />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <HomePage
                  {...props}
                  currency={this.state.SelectedCurrency.value}
                  symbol={this.state.SelectedCurrency.symbol}
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
