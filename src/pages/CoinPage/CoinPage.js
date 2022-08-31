import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Tippy from "@tippyjs/react";
import { useParams } from "react-router-dom";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import IndividualChart from "../../components/IndividualChart/IndividualChart";
import RangeSelector from "../../components/RangeSelector/RangeSelector";
import {
  MainContainer,
  YourSummary,
  CoinContainer,
  CoinLeft,
  CoinImage,
  CoinImageContainer,
  CoinName,
  CoinLink,
  CoinLinkDiv,
  StyledNewTab,
  CoinMiddle,
  CoinPercentage,
  CoinPrice,
  CoinTop,
  Profit,
  ProfitGain,
  ProfitLoss,
  Stackedimg,
  StackImgDiv,
  ATHDiv,
  ATH,
  ATLDiv,
  ATL,
  CoinRight,
  CoinRightTop,
  Plus,
  CoinRightNum,
  CoinRightMiddle,
  DescriptionText,
  DescriptionDiv,
  CoinDescription,
  MainLinksDiv,
  LinkDiv,
  StyledCopyLink,
  ToolTip,
  CurrencyConverterDiv,
} from "./CoinPage.styles";
import { ReactComponent as ArrowUp } from "../../components/SVG/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../../components/SVG/ArrowDownRed.svg";

export default function CoinPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [coinData, setCoinData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [days, setDays] = useState(1);
  const { id } = useParams();
  const prevIdRef = useRef();
  const prevId = prevIdRef.current;
  const prevDaysRef = useRef();
  const prevDays = prevDaysRef.current;
  useEffect(() => {}, [id, days]);

  const getCoin = async (coin) => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      const { data: dataChart } =
        await axios(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${props.selectedCurrency.value}&days=${days}
      `);
      setCoinData(data);
      setChartData(dataChart.prices);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getProfit = (priceChange24, CurrentPrice) => {
    const profit = ((priceChange24 * CurrentPrice) / 100).toFixed(5);
    return profit > 0 ? (
      <ProfitGain>
        {props.selectedCurrency.symbol}
        {profit}
      </ProfitGain>
    ) : (
      <ProfitLoss>
        {props.selectedCurrency.symbol}
        {profit}
      </ProfitLoss>
    );
  };
  const getDate = (date) => {
    const formatDate = new Date(date);
    const hours = formatDate.getHours();
    const minutes = formatDate.getMinutes();
    const seconds = formatDate.getSeconds();

    return `${formatDate.toLocaleDateString("en-US")}, 
    ${hours < 12 ? hours : hours - 12}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}
    ${hours < 12 ? "AM" : "PM"}`;
  };

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const copyLink = async (url) => {
    await navigator.clipboard.writeText(url);
  };
  const handleRangeChange = (range) => {
    setDays(range);
  };
  useEffect(() => {
    getCoin(id);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    prevIdRef.current = id;
    prevDaysRef.current = days;
    if (id !== prevId) {
      getCoin(id);
    }
    if (days !== prevDays) {
      getCoin(id);
    }
    //eslint-disable-next-line
  }, [id, days]);
  return (
    <>
      {coinData && (
        <MainContainer>
          <YourSummary>Your Summary</YourSummary>
          <CoinContainer>
            <CoinLeft>
              <CoinImageContainer>
                <CoinImage>
                  <img src={coinData.image.small} alt="coin img" />
                </CoinImage>
                <CoinName>
                  {coinData.name}({coinData.symbol.toUpperCase()})
                </CoinName>
              </CoinImageContainer>
              <CoinLinkDiv>
                <StyledNewTab
                  onClick={() => openNewTab(coinData.links.homepage[0])}
                />
                <CoinLink href={coinData.links.homepage[0]}>
                  {coinData.links.homepage[0].replace(/^https?:\/\//, "")}
                </CoinLink>
              </CoinLinkDiv>
            </CoinLeft>
            <CoinMiddle>
              <CoinTop>
                <CoinPrice>
                  {props.selectedCurrency.symbol}
                  {coinData.market_data.current_price[
                    props.selectedCurrency.value
                  ].toLocaleString()}
                </CoinPrice>
                <CoinPercentage
                  value={
                    coinData.market_data
                      .price_change_percentage_24h_in_currency[
                      props.selectedCurrency.value
                    ]
                  }
                >
                  {coinData.market_data.price_change_percentage_24h_in_currency[
                    props.selectedCurrency.value
                  ] > 0 ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )}
                  {coinData.market_data.price_change_percentage_24h_in_currency[
                    props.selectedCurrency.value
                  ].toFixed(2)}
                  %
                </CoinPercentage>
              </CoinTop>
              <Profit>
                <span>
                  Profit:{" "}
                  {getProfit(
                    coinData.market_data
                      .price_change_percentage_24h_in_currency[
                      props.selectedCurrency.value
                    ],
                    coinData.market_data.current_price[
                      props.selectedCurrency.value
                    ]
                  )}
                </span>
              </Profit>
              <StackImgDiv>
                <Stackedimg />
              </StackImgDiv>
              <ATHDiv>
                <ArrowUp />
                <ATH>
                  <span>
                    All Time High: {props.selectedCurrency.symbol}
                    {coinData.market_data.ath[
                      props.selectedCurrency.value
                    ].toLocaleString()}
                  </span>
                  <span>
                    {getDate(
                      coinData.market_data.ath_date[
                        props.selectedCurrency.value
                      ]
                    )}
                  </span>
                </ATH>
              </ATHDiv>
              <ATLDiv>
                <ArrowDown />
                <ATL>
                  <span>
                    All Time Low: {props.selectedCurrency.symbol}
                    {coinData.market_data.atl[
                      props.selectedCurrency.value
                    ].toLocaleString()}
                  </span>
                  <span>
                    {getDate(
                      coinData.market_data.atl_date[
                        props.selectedCurrency.value
                      ]
                    )}
                  </span>
                </ATL>
              </ATLDiv>
            </CoinMiddle>
            <CoinRight>
              <CoinRightTop>
                <CoinRightNum>
                  <Plus>+</Plus>Market Cap: {props.selectedCurrency.symbol}
                  {coinData.market_data.market_cap[
                    props.selectedCurrency.value
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Fully Diluted Valuation:
                  {props.selectedCurrency.symbol}
                  {coinData.market_data.fully_diluted_valuation[
                    props.selectedCurrency.value
                  ]
                    ? coinData.market_data.fully_diluted_valuation[
                        props.selectedCurrency.value
                      ].toLocaleString()
                    : "0.00"}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Volume 24h: {props.selectedCurrency.symbol}
                  {coinData.market_data.total_volume[
                    props.selectedCurrency.value
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Volume / Market:
                  {(
                    coinData.market_data.total_volume[
                      props.selectedCurrency.value
                    ] /
                    coinData.market_data.market_cap[
                      props.selectedCurrency.value
                    ]
                  ).toFixed(5)}
                </CoinRightNum>
              </CoinRightTop>
              <CoinRightMiddle>
                <CoinRightNum>
                  <Plus>+</Plus>Total Volume: {props.selectedCurrency.symbol}
                  {coinData.market_data.total_volume[
                    props.selectedCurrency.value
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Circulating Supply:
                  {coinData.market_data.circulating_supply.toLocaleString()}{" "}
                  {coinData.symbol.toUpperCase()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Max Supply:{" "}
                  {coinData.market_data.circulating_supply.toLocaleString()}{" "}
                  {coinData.symbol.toUpperCase()}
                </CoinRightNum>
              </CoinRightMiddle>
            </CoinRight>
          </CoinContainer>
          <DescriptionText>Description</DescriptionText>
          <DescriptionDiv>
            <StackImgDiv>
              <Stackedimg />
            </StackImgDiv>
            <CoinDescription
              dangerouslySetInnerHTML={{
                __html: coinData.description.en,
              }}
            >
              {}
            </CoinDescription>
          </DescriptionDiv>
          <MainLinksDiv>
            <LinkDiv>
              <StyledNewTab
                onClick={() => openNewTab(coinData.links.blockchain_site[0])}
              />
              <CoinLink href={coinData.links.blockchain_site[0]}>
                {coinData.links.blockchain_site[0].replace(/^https?:\/\//, "")}
              </CoinLink>
              <Tippy content={<ToolTip>Copied Link!</ToolTip>} trigger="click">
                <StyledCopyLink
                  onClick={() => copyLink(coinData.links.blockchain_site[0])}
                />
              </Tippy>
            </LinkDiv>
            <LinkDiv>
              <StyledNewTab
                onClick={() => openNewTab(coinData.links.blockchain_site[1])}
              />
              <CoinLink href={coinData.links.blockchain_site[1]}>
                {coinData.links.blockchain_site[1].replace(/^https?:\/\//, "")}
              </CoinLink>
              <Tippy content={<ToolTip>Copied Link!</ToolTip>} trigger="click">
                <StyledCopyLink
                  onClick={() => copyLink(coinData.links.blockchain_site[1])}
                />
              </Tippy>
            </LinkDiv>
            <LinkDiv>
              <StyledNewTab
                onClick={() => openNewTab(coinData.links.blockchain_site[2])}
              />
              <CoinLink href={coinData.links.blockchain_site[2]}>
                {coinData.links.blockchain_site[2].replace(/^https?:\/\//, "")}
              </CoinLink>
              <Tippy content={<ToolTip>Copied Link!</ToolTip>} trigger="click">
                <StyledCopyLink
                  onClick={() => copyLink(coinData.links.blockchain_site[2])}
                />
              </Tippy>
            </LinkDiv>
          </MainLinksDiv>
          <CurrencyConverterDiv>
            <CurrencyConverter
              selectedCurrency={props.selectedCurrency}
              currentPrice={
                coinData.market_data.current_price[props.selectedCurrency.value]
              }
              cryptoName={coinData.symbol}
            />
          </CurrencyConverterDiv>
          <RangeSelector handleRangeChange={handleRangeChange} />
          <IndividualChart chart={chartData} />
        </MainContainer>
      )}
    </>
  );
}
