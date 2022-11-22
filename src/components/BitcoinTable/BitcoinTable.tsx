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
  StyledNextArrow,
  StyledBackArrow,
} from "./BitcoinTable.styles";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/bitcoinCharts/actions";

interface Arrow {
  className: any;
  onClick: any;
}

function SampleNextArrow(props: Arrow) {
  const { className, onClick } = props;
  return <StyledNextArrow className={className} onClick={onClick} />;
}

function SamplePrevArrow(props: Arrow) {
  const { className, onClick } = props;
  return <StyledBackArrow className={className} onClick={onClick} />;
}

interface RootState {
  settings: {
    selectedCurrency: {
      value: string;
      symbol: string;
    };
  };
  bitcoin: {
    isLoading: boolean;
    bitcoin: [];
    hasError: boolean;
    bitcoinHourly: [];
    bitcoinCurrent: [];
  };
}

export default function BitcoinTable() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: RootState) => state.settings.selectedCurrency
  );
  const bitcoin = useSelector((state: RootState) => state.bitcoin.bitcoin);
  const isLoading = useSelector((state: RootState) => state.bitcoin.isLoading);
  const hasError = useSelector((state: RootState) => state.bitcoin.hasError);
  const bitcoinCurrent = useSelector(
    (state: RootState) => state.bitcoin.bitcoinCurrent
  );
  const bitcoinHourly = useSelector(
    (state: RootState) => state.bitcoin.bitcoinHourly
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} onClick={undefined} />,
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
                      {Object.values(bitcoinCurrent)[0]}
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
                {Object.values(bitcoinCurrent)[0]}
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
