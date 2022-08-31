import React, { useState } from "react";
import {
  Container,
  StyledCurrencyArrows,
  ConverterDiv,
  InputDiv,
  Input,
  StyledName,
  Symbol,
} from "./CurrencyConverter.styles";

export default function CurrencyConverter(props) {
  const [crypto, setCrypto] = useState(1);
  const [currency, setCurrency] = useState(props.currentPrice);

  const currentPrice = props.currentPrice;
  const handleCryptoChange = (e) => {
    const value = e.target.value;
    setCrypto(value);
    setCurrency((parseInt(value) * parseInt(currentPrice)).toLocaleString());
    if (value === "") {
      setCrypto("");
      setCurrency("");
    }
  };
  const handleCurrencyChange = (e) => {
    const value = e.target.value;
    setCurrency(value);
    setCrypto((parseInt(value) / parseInt(currentPrice)).toFixed(5));
    if (value === "") {
      setCrypto("");
      setCurrency("");
    }
  };
  return (
    <Container>
      <ConverterDiv>
        <StyledName>
          <span>{props.cryptoName.toUpperCase()}</span>
        </StyledName>
        <InputDiv>
          <div>{props.cryptoName.toUpperCase()}</div>
          <Input
            placeholder="Enter Amount"
            onChange={handleCryptoChange}
            value={crypto}
            type="text"
          ></Input>
        </InputDiv>
      </ConverterDiv>
      <StyledCurrencyArrows />
      <ConverterDiv>
        <StyledName>
          <span>{props.selectedCurrency.value.toUpperCase()}</span>
        </StyledName>
        <InputDiv>
          <Symbol>{props.selectedCurrency.symbol}</Symbol>
          <Input
            placeholder="Enter Amount"
            onChange={handleCurrencyChange}
            value={currency}
            type="text"
          ></Input>
        </InputDiv>
      </ConverterDiv>
    </Container>
  );
}
