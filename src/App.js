import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/Theme";
import { HomePage, CoinPage, Portfolio } from "./pages";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import { switchTheme } from "./store/settings/actions";

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

export default function App() {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.settings.dark);
  const theme = dark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar switchTheme={() => dispatch(switchTheme())} />
        <NavbarMobile/>
        <Switch>
          <Route exact path="/" component={(props) => <HomePage />} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/coinpage/:id"
            component={(props) => <CoinPage />}
          />
          j
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
