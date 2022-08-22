import React from "react";
import BitcoinTable from "../../components/BitcoinTable/BitcoinTable";
import CoinTable from "../../components/CoinTable";
import { Container } from "./HomePage.styles";

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <BitcoinTable selectedCurrency={this.props.selectedCurrency} 
        />
        <CoinTable selectedCurrency={this.props.selectedCurrency}/>
      </Container>
    );
  }
}
export default HomePage;
