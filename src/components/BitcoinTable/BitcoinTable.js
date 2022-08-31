import React, { useState, useEffect } from "react";
import axios from "axios";
import BitcoinLine from "../BitcoinLine/BitcoinLine";
import BitcoinBar from "../ BitcoinBar/BitcoinBar";
import { convertedNumber } from "../util/ConvertedNumber";
import {
  MainContainer,
  LineContainer,
  MainTextContainer,
  BarContainer,
  BitcoinHeader,
  BitcoinNumber,
  StyledDate,
} from "./BitcoinTable.styles";

export default function BitcoinTable(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [bitcoin, setBitcoin] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [bitcoinHourly, setBitcoinHourly] = useState(null);
  const [bitcoinCurrent, setBitcoinCurrent] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.selectedCurrency.value}&days=30&interval=daily`
      );
      const { data: dataHourly } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.selectedCurrency.value}&days=1&interval=hourly`
      );
      const { data: dataCurrent } = await axios(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${props.selectedCurrency.value}&include_24hr_vol=true`
      );
      setBitcoin(data);
      setIsLoading(false);
      setBitcoinHourly(dataHourly);
      setBitcoinCurrent(dataCurrent.bitcoin);
    } catch (err) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getDate = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  useEffect(() => {
    getData();
    getDate();
    //eslint-disable-next-line
  }, []);

  const showChart = bitcoin && !isLoading && !hasError;
  return (
    <>
      {showChart && (
        <MainContainer>
          <LineContainer>
            <MainTextContainer>
              <BitcoinHeader>BTC Price</BitcoinHeader>
              <BitcoinNumber>
                {props.selectedCurrency.symbol}
                {Object.values(bitcoinCurrent)[0].toLocaleString()}
              </BitcoinNumber>
              <StyledDate>{getDate()}</StyledDate>
            </MainTextContainer>
            <BitcoinLine bitcoin={bitcoin} />
          </LineContainer>
          <BarContainer>
            <MainTextContainer>
              <BitcoinHeader>BTC Volume 24h</BitcoinHeader>
              <BitcoinNumber>
                {props.selectedCurrency.symbol}
                {convertedNumber(Object.values(bitcoinCurrent)[1])}
              </BitcoinNumber>
              <StyledDate>{getDate()}</StyledDate>
            </MainTextContainer>
            <BitcoinBar bitcoin={bitcoinHourly} />
          </BarContainer>
        </MainContainer>
      )}
    </>
  );
}
