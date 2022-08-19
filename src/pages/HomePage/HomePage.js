import React from "react";
import BitcoinTable from "../../components/BitcoinTable/BitcoinTable";
import CoinTable from "../../components/CoinTable";
import { Container } from "./HomePage.styles";

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <BitcoinTable currency = {this.props.currency} symbol = {this.props.symbol} 
        />
        <CoinTable currency = {this.props.currency} symbol = {this.props.symbol} />
      </Container>
    );
  }
}
export default HomePage;
