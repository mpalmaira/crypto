import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomePage, CoinPage, Portfolio } from "./pages";
import { darkTheme, lightTheme } from "./components/Theme/Theme";
import Navbar from "./components/Navbar";

export default class App extends React.Component {
  state = {
    dark: true,
  };
  toggleTheme = () => {
    this.setState({
      dark: !this.state.dark
    });
  };
  render() {
    const theme = this.state.dark ? darkTheme : lightTheme;
    return (
      <ThemeProvider theme={theme}>
        <Router>
            <Navbar toggleTheme={this.toggleTheme} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/coinpage/:coinId" component={CoinPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
