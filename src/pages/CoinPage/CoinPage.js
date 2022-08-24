import React from "react";
import axios from "axios";
import Tippy from "@tippyjs/react";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
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
    const profit = ((priceChange24 * CurrentPrice) / 100).toFixed(5);
    return profit > 0 ? (
      <ProfitGain>
        {this.props.selectedCurrency.symbol}
        {profit}
      </ProfitGain>
    ) : (
      <ProfitLoss>
        {this.props.selectedCurrency.symbol}
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

  openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  copyLink = async (url) => {
    await navigator.clipboard.writeText(url);
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
      <>
        {this.state.coinData && (
          <MainContainer>
            <YourSummary>Your Summary</YourSummary>
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
                  <StyledNewTab
                    onClick={() =>
                      this.openNewTab(this.state.coinData.links.homepage[0])
                    }
                  />
                  <CoinLink href={this.state.coinData.links.homepage[0]}>
                    {this.state.coinData.links.homepage[0].replace(
                      /^https?:\/\//,
                      ""
                    )}
                  </CoinLink>
                </CoinLinkDiv>
              </CoinLeft>
              <CoinMiddle>
                <CoinTop>
                  <CoinPrice>
                    {this.props.selectedCurrency.symbol}
                    {this.state.coinData.market_data.current_price[
                      this.props.selectedCurrency.value
                    ].toLocaleString()}
                  </CoinPrice>
                  <CoinPercentage
                    value={
                      this.state.coinData.market_data
                        .price_change_percentage_24h_in_currency[
                        this.props.selectedCurrency.value
                      ]
                    }
                  >
                    {this.state.coinData.market_data
                      .price_change_percentage_24h_in_currency[
                      this.props.selectedCurrency.value
                    ] > 0 ? (
                      <ArrowUp />
                    ) : (
                      <ArrowDown />
                    )}
                    {this.state.coinData.market_data.price_change_percentage_24h_in_currency[
                      this.props.selectedCurrency.value
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
                        this.props.selectedCurrency.value
                      ],
                      this.state.coinData.market_data.current_price[
                        this.props.selectedCurrency.value
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
                      All Time High: {this.props.selectedCurrency.symbol}
                      {this.state.coinData.market_data.ath[
                        this.props.selectedCurrency.value
                      ].toLocaleString()}
                    </span>
                    <span>
                      {this.getDate(
                        this.state.coinData.market_data.ath_date[
                          this.props.selectedCurrency.value
                        ]
                      )}
                    </span>
                  </ATH>
                </ATHDiv>
                <ATLDiv>
                  <ArrowDown />
                  <ATL>
                    <span>
                      All Time Low: {this.props.selectedCurrency.symbol}
                      {this.state.coinData.market_data.atl[
                        this.props.selectedCurrency.value
                      ].toLocaleString()}
                    </span>
                    <span>
                      {this.getDate(
                        this.state.coinData.market_data.atl_date[
                          this.props.selectedCurrency.value
                        ]
                      )}
                    </span>
                  </ATL>
                </ATLDiv>
              </CoinMiddle>
              <CoinRight>
                <CoinRightTop>
                  <CoinRightNum>
                    <Plus>+</Plus>Market Cap:{" "}
                    {this.props.selectedCurrency.symbol}
                    {this.state.coinData.market_data.market_cap[
                      this.props.selectedCurrency.value
                    ].toLocaleString()}
                  </CoinRightNum>
                  <CoinRightNum>
                    <Plus>+</Plus>Fully Diluted Valuation:{" "}
                    {this.props.selectedCurrency.symbol}
                    {this.state.coinData.market_data.fully_diluted_valuation[
                      this.props.selectedCurrency.value
                    ]
                      ? this.state.coinData.market_data.fully_diluted_valuation[
                          this.props.selectedCurrency.value
                        ].toLocaleString()
                      : "0.00"}
                  </CoinRightNum>
                  <CoinRightNum>
                    <Plus>+</Plus>Volume 24h:{" "}
                    {this.props.selectedCurrency.symbol}
                    {this.state.coinData.market_data.total_volume[
                      this.props.selectedCurrency.value
                    ].toLocaleString()}
                  </CoinRightNum>
                  <CoinRightNum>
                    <Plus>+</Plus>Volume / Market:
                    {(
                      this.state.coinData.market_data.total_volume[
                        this.props.selectedCurrency.value
                      ] /
                      this.state.coinData.market_data.market_cap[
                        this.props.selectedCurrency.value
                      ]
                    ).toFixed(5)}
                  </CoinRightNum>
                </CoinRightTop>
                <CoinRightMiddle>
                  <CoinRightNum>
                    <Plus>+</Plus>Total Volume:{" "}
                    {this.props.selectedCurrency.symbol}
                    {this.state.coinData.market_data.total_volume[
                      this.props.selectedCurrency.value
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
            <DescriptionText>Description</DescriptionText>
            <DescriptionDiv>
              <StackImgDiv>
                <Stackedimg />
              </StackImgDiv>
              <CoinDescription
                dangerouslySetInnerHTML={{
                  __html: this.state.coinData.description.en,
                }}
              >
                {}
              </CoinDescription>
            </DescriptionDiv>
            <MainLinksDiv>
              <LinkDiv>
                <StyledNewTab
                  onClick={() =>
                    this.openNewTab(
                      this.state.coinData.links.blockchain_site[0]
                    )
                  }
                />
                <CoinLink href={this.state.coinData.links.blockchain_site[0]}>
                  {this.state.coinData.links.blockchain_site[0].replace(
                    /^https?:\/\//,
                    ""
                  )}
                </CoinLink>
                <Tippy
                  content={<ToolTip>Copied Link!</ToolTip>}
                  trigger="click"
                >
                  <StyledCopyLink
                    onClick={() =>
                      this.copyLink(
                        this.state.coinData.links.blockchain_site[0]
                      )
                    }
                  />
                </Tippy>
              </LinkDiv>
              <LinkDiv>
                <StyledNewTab
                  onClick={() =>
                    this.openNewTab(
                      this.state.coinData.links.blockchain_site[1]
                    )
                  }
                />
                <CoinLink href={this.state.coinData.links.blockchain_site[1]}>
                  {this.state.coinData.links.blockchain_site[1].replace(
                    /^https?:\/\//,
                    ""
                  )}
                </CoinLink>
                <Tippy
                  content={<ToolTip>Copied Link!</ToolTip>}
                  trigger="click"
                >
                  <StyledCopyLink
                    onClick={() =>
                      this.copyLink(
                        this.state.coinData.links.blockchain_site[1]
                      )
                    }
                  />
                </Tippy>
              </LinkDiv>
              <LinkDiv>
                <StyledNewTab
                  onClick={() =>
                    this.openNewTab(
                      this.state.coinData.links.blockchain_site[2]
                    )
                  }
                />
                <CoinLink href={this.state.coinData.links.blockchain_site[2]}>
                  {this.state.coinData.links.blockchain_site[2].replace(
                    /^https?:\/\//,
                    ""
                  )}
                </CoinLink>
                <Tippy
                  content={<ToolTip>Copied Link!</ToolTip>}
                  trigger="click"
                >
                  <StyledCopyLink
                    onClick={() =>
                      this.copyLink(
                        this.state.coinData.links.blockchain_site[2]
                      )
                    }
                  />
                </Tippy>
              </LinkDiv>
            </MainLinksDiv>
            <CurrencyConverterDiv>
              <CurrencyConverter
                selectedCurrency={this.props.selectedCurrency}
                currentPrice={
                  this.state.coinData.market_data.current_price[
                    this.props.selectedCurrency.value
                  ]
                }
                cryptoName={this.state.coinData.symbol}
              />
            </CurrencyConverterDiv>
          </MainContainer>
        )}
      </>
    );
  }
}
export default CoinPage;
