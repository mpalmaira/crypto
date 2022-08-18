import React from "react";
import {
  MarketDataDiv,
  MarketDataItem,
  MarketDataItemSlider,
  ProgressBarDiv,
} from "./NavBarMarketData.styles";
import ProgressBar from "../ProgressBar/ProgressBar";
import { convertedNumber } from "../util/ConvertedNumber";
export const NavMarketData = (props) => {
  return (
    <MarketDataDiv>
      <div>
        <span>Coins</span>{" "}
        <span>{props.marketData.active_cryptocurrencies}</span>
      </div>
      <div>
        <span>Exchange</span> <span>{props.marketData.markets}</span>
      </div>
      <div>
        •{props.symbol}
        <span>{convertedNumber(props.marketData.total_market_cap.usd)}</span>
      </div>
      <div>
        •{props.symbol}
        <span>{convertedNumber(props.marketData.total_volume.usd)}</span>
        <div>
          <ProgressBar
            value={props.marketData.total_volume.usd}
            max={props.marketData.total_market_cap.usd}
          />
        </div>
      </div>
      <div>
        <span>{props.marketData.market_cap_percentage.btc.toFixed(0)}%</span>
        <div>
          <ProgressBar
            value={props.marketData.market_cap_percentage.btc}
            max={100}
          />
        </div>
      </div>
      <div>
        <span>{props.marketData.market_cap_percentage.eth.toFixed(0)}%</span>
        <div>
          <ProgressBar
            value={props.marketData.market_cap_percentage.etc}
            max={100}
          />
        </div>
      </div>
    </MarketDataDiv>
  );
};
