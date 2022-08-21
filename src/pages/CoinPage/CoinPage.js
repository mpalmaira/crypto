import React from "react";
import axios from "axios";
import {
  MainContainer,
  CoinContainer,
  CoinLeft,
  CoinImage,
  CoinImageContainer,
  CoinName,
  CoinLink,
  CoinLinkDiv,
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
} from "./CoinPage.styles";
import { ReactComponent as ArrowUp } from "../../components/SVG/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../../components/SVG/ArrowDownRed.svg";
import { ReactComponent as CopyLink } from "../../components/SVG/copylink.svg";

class CoinPage extends React.Component {
  state = {
    isLoading: false,
    coinData: null,
    hasError: false,
  };

  getCoin = async (coin) => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      this.setState({ coinData: data, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getProfit = (priceChange24, CurrentPrice) => {
    const profit = ((priceChange24 * CurrentPrice) / 100).toFixed(2);
    return profit > 0 ? (
      <ProfitGain>
        {this.props.symbol}
        {profit}
      </ProfitGain>
    ) : (
      <ProfitLoss>
        {this.props.symbol}
        {profit}
      </ProfitLoss>
    );
  };
  getDate = (date) => {
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

  componentDidMount() {
    this.getCoin(this.props.match.params.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getCoin(this.props.match.params.id);
    }
  }
  render() {
    return (
      <MainContainer>
        {this.state.coinData && (
          <CoinContainer>
            <CoinLeft>
              <CoinImageContainer>
                <CoinImage>
                  <img src={this.state.coinData.image.small} alt="coin img" />
                </CoinImage>
                <CoinName>
                  {this.state.coinData.name}(
                  {this.state.coinData.symbol.toUpperCase()})
                </CoinName>
              </CoinImageContainer>
              <CoinLinkDiv>
                <CopyLink />
                <CoinLink>{this.state.coinData.links.homepage[0]}</CoinLink>
              </CoinLinkDiv>
            </CoinLeft>
            <CoinMiddle>
              <CoinTop>
                <CoinPrice>
                  {this.props.symbol}
                  {this.state.coinData.market_data.current_price[
                    this.props.currency
                  ].toLocaleString()}
                </CoinPrice>
                <CoinPercentage
                  value={
                    this.state.coinData.market_data
                      .price_change_percentage_24h_in_currency[
                      this.props.currency
                    ]
                  }
                >
                  {this.state.coinData.market_data
                    .price_change_percentage_24h_in_currency[
                    this.props.currency
                  ] > 0 ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )}
                  {this.state.coinData.market_data.price_change_percentage_24h_in_currency[
                    this.props.currency
                  ].toFixed(2)}
                  %
                </CoinPercentage>
              </CoinTop>
              <Profit>
                <span>
                  Profit:{" "}
                  {this.getProfit(
                    this.state.coinData.market_data
                      .price_change_percentage_24h_in_currency[
                      this.props.currency
                    ],
                    this.state.coinData.market_data.current_price[
                      this.props.currency
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
                    All Time High: {this.props.symbol}
                    {this.state.coinData.market_data.ath[
                      this.props.currency
                    ].toLocaleString()}
                  </span>
                  <span>
                    {this.getDate(
                      this.state.coinData.market_data.ath_date[
                        this.props.currency
                      ]
                    )}
                  </span>
                </ATH>
              </ATHDiv>
              <ATLDiv>
                <ArrowDown />
                <ATL>
                  <span>
                    All Time Low: {this.props.symbol}
                    {this.state.coinData.market_data.atl[
                      this.props.currency
                    ].toLocaleString()}
                  </span>
                  <span>
                    {this.getDate(
                      this.state.coinData.market_data.atl_date[
                        this.props.currency
                      ]
                    )}
                  </span>
                </ATL>
              </ATLDiv>
            </CoinMiddle>
            <CoinRight>
              <CoinRightTop>
                <CoinRightNum>
                  <Plus>+</Plus>Market Cap: {this.props.symbol}
                  {this.state.coinData.market_data.market_cap[
                    this.props.currency
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Fully Diluted Valuation: {this.props.symbol}
                  {this.state.coinData.market_data.fully_diluted_valuation[
                    this.props.currency
                  ]
                    ? this.state.coinData.market_data.fully_diluted_valuation[
                        this.props.currency
                      ]
                    : "0.00"}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Volume 24h: {this.props.symbol}
                  {this.state.coinData.market_data.total_volume[
                    this.props.currency
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Volume / Market:
                  {(
                    this.state.coinData.market_data.total_volume[
                      this.props.currency
                    ] /
                    this.state.coinData.market_data.market_cap[
                      this.props.currency
                    ]
                  ).toFixed(5)}
                </CoinRightNum>
              </CoinRightTop>
              <CoinRightMiddle>
                <CoinRightNum>
                  <Plus>+</Plus>Total Volume: {this.props.symbol}
                  {this.state.coinData.market_data.total_volume[
                    this.props.currency
                  ].toLocaleString()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Circulating Supply:
                  {this.state.coinData.market_data.circulating_supply.toLocaleString()}{" "}
                  {this.state.coinData.symbol.toUpperCase()}
                </CoinRightNum>
                <CoinRightNum>
                  <Plus>+</Plus>Max Supply:{" "}
                  {this.state.coinData.market_data.circulating_supply.toLocaleString()}{" "}
                  {this.state.coinData.symbol.toUpperCase()}
                </CoinRightNum>
              </CoinRightMiddle>
            </CoinRight>
          </CoinContainer>
        )}
      </MainContainer>
    );
  }
}
export default CoinPage;
