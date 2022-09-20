import React, { useEffect } from "react";
import BitcoinLine from "../BitcoinLine/BitcoinLine";
import BitcoinBar from "../ BitcoinBar/BitcoinBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { convertedNumber } from "../util/ConvertedNumber";
import {
  MainContainer,
  LineContainer,
  MainTextContainer,
  BarContainer,
  BitcoinHeader,
  BitcoinNumber,
  StyledDate,
  MobileContainer,
  LineContainerMobile,
  BarContainerMobile,
} from "./BitcoinTable.styles";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/bitcoinCharts/actions";

export default function BitcoinTable(props) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );
  const bitcoin = useSelector((state) => state.bitcoin.bitcoin);
  const isLoading = useSelector((state) => state.bitcoin.isLoading);
  const hasError = useSelector((state) => state.bitcoin.hasError);
  const bitcoinCurrent = useSelector((state) => state.bitcoin.bitcoinCurrent);
  const bitcoinHourly = useSelector((state) => state.bitcoin.bitcoinHourly);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
  useEffect(() => {
    dispatch(getData());
    getDate();
    //eslint-disable-next-line
  }, [selectedCurrency.value]);

  const showChart = bitcoin && !isLoading && !hasError;
  return (
    <>
      {showChart && (
        <MainContainer>
          <MobileContainer>
            <Slider {...settings}>
              <div>
                <LineContainerMobile>
                  <MainTextContainer>
                    <BitcoinHeader>BTC Price</BitcoinHeader>
                    <BitcoinNumber>
                      {selectedCurrency.symbol}
                      {Object.values(bitcoinCurrent)[0].toLocaleString()}
                    </BitcoinNumber>
                    <StyledDate>{getDate()}</StyledDate>
                  </MainTextContainer>
                  <BitcoinLine bitcoin={bitcoin} />
                </LineContainerMobile>
              </div>
              <div>
                <div>
                  <BarContainerMobile>
                    <MainTextContainer>
                      <BitcoinHeader>BTC Volume 24h</BitcoinHeader>
                      <BitcoinNumber>
                        {selectedCurrency.symbol}
                        {convertedNumber(Object.values(bitcoinCurrent)[1])}
                      </BitcoinNumber>
                      <StyledDate>{getDate()}</StyledDate>
                    </MainTextContainer>
                    <BitcoinBar bitcoin={bitcoinHourly} />
                  </BarContainerMobile>
                </div>
              </div>
            </Slider>
          </MobileContainer>
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
