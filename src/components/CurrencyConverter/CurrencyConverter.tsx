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

interface Props {
  currentPrice: number;
  cryptoName: string;
  selectedCurrency: any;
}

const CurrencyConverter = (props: Props) => {
  const [crypto, setCrypto] = useState(1);
  const [currency, setCurrency] = useState(props.currentPrice);

  const currentPrice = props.currentPrice;
  const handleCryptoChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setCrypto(value);
    setCurrency((parseInt(value) * parseInt(currentPrice)).toLocaleString());
    if (value === "") {
      setCrypto("");
      setCurrency("");
    }
    const handleCurrencyChange = (e: { target: { value: any } }) => {
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
  };
};
export default CurrencyConverter;
