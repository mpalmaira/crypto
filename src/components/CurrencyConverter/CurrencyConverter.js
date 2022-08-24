import React from "react";
import {
  Container,
  StyledCurrencyArrows,
  ConverterDiv,
  InputDiv,
  Input,
  StyledName,
  Symbol,
} from "./CurrencyConverter.styles";

class CurrencyConverter extends React.Component {
  state = {
    crypto: 1,
    currency: this.props.currentPrice,
  };
  handleCryptoChange = (e) => {
    const value = Number(e.target.value);
    this.setState({
      crypto: value,
      currency: value * this.state.currency,
    });
    if (value === "") {
      this.setState({ crypto: "", currency: "" });
    }
  };
  handleCurrencyChange = (e) => {
    const value = Number(e.target.value);
    this.setState({
      currency: value,
      crypto: value / this.state.currency,
    });
  };

  render() {
    return (
      <Container>
        <ConverterDiv>
          <StyledName>
            <span>{this.props.cryptoName.toUpperCase()}</span>
          </StyledName>
          <InputDiv>
            <div>{this.props.cryptoName.toUpperCase()}</div>
            <Input
              placeholder="Enter Amount"
              onChange={this.handleCryptoChange}
              value={this.state.crypto.toLocaleString()}
              type="text"
            ></Input>
          </InputDiv>
        </ConverterDiv>
        <StyledCurrencyArrows />
        <ConverterDiv>
          <StyledName>
            <span>{this.props.selectedCurrency.value.toUpperCase()}</span>
          </StyledName>
          <InputDiv>
            <Symbol>{this.props.selectedCurrency.symbol}</Symbol>
            <Input
              placeholder="Enter Amount"
              onChange={this.handleCurrencyChange}
              value={this.state.currency.toLocaleString()}
              type="text"
            ></Input>
          </InputDiv>
        </ConverterDiv>
      </Container>
    );
  }
}
export default CurrencyConverter;
