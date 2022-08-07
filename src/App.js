import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  import { ThemeProvider} from 'styled-components'
import { HomePage, CoinPage, Portfolio } from './pages'
import { darkTheme, lightTheme } from './components/Theme/Theme'



export default class App extends React.Component {
  state ={
    theme: 'dark'
  }
  render(){
    const theme = this.state.theme === 'dark' ? darkTheme : lightTheme
    
    return (
      <ThemeProvider theme ={theme} >
      <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path='/coinpage/:coinId' component={CoinPage}/>   
          </Switch>
      </Router>
    </ThemeProvider>
  );
  }
}

