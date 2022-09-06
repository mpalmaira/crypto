import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tippy from "@tippyjs/react";
import { useParams } from "react-router-dom";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import IndividualChart from "../../components/IndividualChart/IndividualChart";
import RangeSelector from "../../components/RangeSelector/RangeSelector";
import { getCoin } from "../../store/coinPage/actions";
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

function usePrevious(value) {
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);
  return prevRef.current;
}

export default function CoinPage(props) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );
  const coinData = useSelector((state) => state.coinPage.coinData);
  const chartData = useSelector((state) => state.coinPage.chartData);
  const [days, setDays] = useState(1);
  const { id } = useParams();
  const prevId = usePrevious(id);
  const prevDays = usePrevious(days);

  const getProfit = (priceChange24, CurrentPrice) => {
    const profit = ((priceChange24 * CurrentPrice) / 100).toFixed(5);
    return profit > 0 ? (
      <ProfitGain>
        {selectedCurrency.symbol}
        {profit}
      </ProfitGain>
    ) : (
      <ProfitLoss>
        {selectedCurrency.symbol}
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
    console.log("calling!");
    dispatch(getCoin(id, days));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id !== prevId) {
      dispatch(getCoin(id, days));
    }
    if (days !== prevDays) {
      dispatch(getCoin(id, days));
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
                  {selectedCurrency.symbol}
                  {coinData.market_data.current_price[
                    selectedCurrency.value
                  ].toLocaleString()}
                </CoinPrice>
                <CoinPercentage
                  value={
                    coinData.market_data
                      .price_change_percentage_24h_in_currency[
                      selectedCurrency.value
                    ]
                  }
                >
                  {coinData.market_data.price_change_percentage_24h_in_currency[
                    selectedCurrency.value
                  ] > 0 ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )}
                  {coinData.market_data.price_change_percentage_24h_in_currency[
                    selectedCurrency.value
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
                      selectedCurrency.value
                    ],
                    coinData.market_data.current_price[selectedCurrency.value]
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
                    All Time High: {selectedCurrency.symbol}
                    {coinData.market_data.ath[
                      selectedCurrency.value
                    ].toLocaleString()}
                  </span>
                  <span>
                    {getDate(
                      coinData.market_data.ath_date[selectedCurrency.value]
                    )}
                  </span>
                </ATH>
              </ATHDiv>
              <ATLDiv>
                <ArrowDown />
                <ATL>
                  <span>
                    All Time Low: {selectedCurrency.symbol}
                    {coinData.market_data.atl[
                      selectedCurrency.value
                    ].toLocaleString()}
                  </span>
                  <span>
                    {getDate(
                      coinData.market_data.atl_date[selectedCurrency.value]
                    )}
                  </span>
                </ATL>
              </ATLDiv>
            </CoinMiddle>
            <CoinRight>
              <CoinRightTop>
                <CoinRightNum>
                  <Plus>+</Plus>Market Cap: {selectedCurrency.symbol}
                  {coinData.market_data.market_cap[
                    selectedCurrency.value
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Fully Diluted Valuation:
                  {selectedCurrency.symbol}
                  {coinData.market_data.fully_diluted_valuation[
                    selectedCurrency.value
                  ]
                    ? coinData.market_data.fully_diluted_valuation[
                        selectedCurrency.value
                      ].toLocaleString()
                    : "0.00"}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Volume 24h: {selectedCurrency.symbol}
                  {coinData.market_data.total_volume[
                    selectedCurrency.value
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Volume / Market:
                  {(
                    coinData.market_data.total_volume[selectedCurrency.value] /
                    coinData.market_data.market_cap[selectedCurrency.value]
                  ).toFixed(5)}
                </CoinRightNum>
              </CoinRightTop>
              <CoinRightMiddle>
                <CoinRightNum>
                  <Plus>+</Plus>Total Volume: {selectedCurrency.symbol}
                  {coinData.market_data.total_volume[
                    selectedCurrency.value
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
              selectedCurrency={selectedCurrency}
              currentPrice={
                coinData.market_data.current_price[selectedCurrency.value]
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
