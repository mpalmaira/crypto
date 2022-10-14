import React from "react";
import {
  MarketDataDiv,
  MarketDataItem,
  MarketDataItemSlider,
  ProgressBarDiv,
  StyledImage,
} from "./NavBarMarketData.styles";
import ProgressBar from "../ProgressBar/ProgressBar";
import { convertedNumber } from "../util/ConvertedNumber";

interface MarketData {
  active_cryptocurrencies: number;
  markets: number;
  total_market_cap: { usd: number };
  total_volume: { usd: number };
  market_cap_percentage: { btc: number; eth: number };
}
interface Props {
  marketData: MarketData;
}

export const NavMarketData = (props: Props) => {
  return (
    <MarketDataDiv>
      <MarketDataItem>
        <div>Coins {props.marketData.active_cryptocurrencies}</div>
      </MarketDataItem>
      <MarketDataItem>
        <div>Exchange {props.marketData.markets}</div>
      </MarketDataItem>
      <MarketDataItem>
        <div>• ${convertedNumber(props.marketData.total_market_cap.usd)}</div>
      </MarketDataItem>
      <MarketDataItemSlider>
        <div>• ${convertedNumber(props.marketData.total_volume.usd)}</div>
        <ProgressBarDiv>
          <ProgressBar
            value={props.marketData.total_volume.usd}
            max={props.marketData.total_market_cap.usd}
          />
        </ProgressBarDiv>
      </MarketDataItemSlider>
      <MarketDataItemSlider>
        <StyledImage
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          alt="btc img"
        />
        <div>{props.marketData.market_cap_percentage.btc.toFixed(0)}%</div>
        <ProgressBarDiv>
          <ProgressBar
            value={props.marketData.market_cap_percentage.btc}
            max={100}
          />
        </ProgressBarDiv>
      </MarketDataItemSlider>
      <MarketDataItemSlider>
        <StyledImage
          src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
          alt="etc img"
        />
        <div>{props.marketData.market_cap_percentage.eth.toFixed(0)}%</div>
        <ProgressBarDiv>
          <ProgressBar
            value={props.marketData.market_cap_percentage.eth}
            max={100}
          />
        </ProgressBarDiv>
      </MarketDataItemSlider>
    </MarketDataDiv>
  );
};
