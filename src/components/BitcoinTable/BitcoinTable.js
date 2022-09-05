import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/bitcoinCharts/actions";

export default function BitcoinTable(props) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const bitcoin = useSelector((state) => state.bitcoin.bitcoin);
  const isLoading = useSelector((state) => state.bitcoin.isLoading);
  const hasError = useSelector((state) => state.bitcoin.hasError);
  const bitcoinCurrent = useSelector((state) => state.bitcoin.bitcoinCurrent);
  const bitcoinHourly = useSelector((state) => state.bitcoin.bitcoinHourly);

  const getDate = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  useEffect(() => {
    dispatch(getData());
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
                {selectedCurrency.symbol}
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
                {selectedCurrency.symbol}
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
