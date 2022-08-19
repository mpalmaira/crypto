import React from "react";
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

class BitcoinTable extends React.Component {
  state = {
    isLoading: false,
    bitcoin: null,
    hasError: false,
    bitcoinHourly: null,
    bitcoinCurrent: null,
  };
  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=30&interval=daily`
      );
      const { data: dataHourly } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=1&interval=hourly`
      );
      const { data: dataCurrent } = await axios(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${this.props.currency}&include_24hr_vol=true`
      );
      this.setState({
        bitcoin: data,
        isLoading: false,
        bitcoinHourly: dataHourly,
        bitcoinCurrent: dataCurrent.bitcoin,
      });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getDate = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  componentDidMount() {
    this.getData();
    this.getDate();
  }

  render() {
    const showChart =
      this.state.bitcoin && !this.state.isLoading && !this.state.hasError;
    return (
      <>
        {showChart && (
          <MainContainer>
            <LineContainer>
              <MainTextContainer>
                <BitcoinHeader>BTC Price</BitcoinHeader>
                <BitcoinNumber>
                  {this.props.symbol}
                  {Object.values(this.state.bitcoinCurrent)[0].toLocaleString()}
                </BitcoinNumber>
                <StyledDate>{this.getDate()}</StyledDate>
              </MainTextContainer>
              <BitcoinLine bitcoin={this.state.bitcoin} />
            </LineContainer>
            <BarContainer>
              <MainTextContainer>
                <BitcoinHeader>BTC Volume 24h</BitcoinHeader>
                <BitcoinNumber>
                  {this.props.symbol}
                  {convertedNumber(Object.values(this.state.bitcoinCurrent)[1])}
                </BitcoinNumber>
                <StyledDate>{this.getDate()}</StyledDate>
              </MainTextContainer>
              <BitcoinBar bitcoin={this.state.bitcoinHourly} />
            </BarContainer>
          </MainContainer>
        )}
      </>
    );
  }
}

export default BitcoinTable;
