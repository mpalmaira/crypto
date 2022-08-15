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
    currency: "usd",
    symbol: "$",
  };
  toggleTheme = () => {
    this.setState({
      dark: !this.state.dark,
    });
  };
  handleCurrency = (selectedCurrency) => {
    this.setState({ currency: selectedCurrency });
    switch (selectedCurrency) {
      case "usd":
        this.setState({ symbol: "$" });
        break;
      case "gbp":
        this.setState({ symbol: "£" });
        break;
      case "eur":
        this.setState({ symbol: "€" });
        break;
      case "btc":
        this.setState({ symbol: "₿" });
        break;
      case "eth":
        this.setState({ symbol: "Ξ" });
        break;
      default:
        this.setState({ symbol: "$" });
    }
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
            handleSymbol = {this.handleSymbol}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <HomePage
                  {...props}
                  currency={this.state.currency}
                  symbol={this.state.symbol}
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
