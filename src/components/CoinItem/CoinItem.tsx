import React from "react";
import {
  CoinIcon,
  TableItem,
  TableRow,
  CoinSymbol,
  CoinRank,
  TableCoinChart,
  TableItemNum,
  StyledArrow,
  ConvertedNumberDiv,
  ProgressandConvertedDiv,
  ProgressBarContainer,
  StyledLink,
} from "./CoinItem.styles";
import CoinChart from "../CoinChart/CoinChart";
import { convertedNumber } from "../util/ConvertedNumber";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDownRed.svg";
import { useSelector } from "react-redux";

interface Coins {
  market_cap_rank: number;
  image: string;
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
  circulating_supply: number;
  total_supply: number;
  sparkline_in_7d: { prices: number[] };
}
interface Props {
  coins: Coins;
}

const CoinItem = (props: Props) => {
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );

  return (
    <TableRow>
      <CoinRank>{props.coins.market_cap_rank}</CoinRank>
      <td>
        <CoinSymbol>
          <CoinIcon src={props.coins.image} alt="" />
        </CoinSymbol>
        <td>
          <StyledLink to={`/coinpage/${props.coins.id}`}>
            {props.coins.name}({props.coins.symbol.toUpperCase()})
          </StyledLink>
        </td>
      </td>

      <TableItem>
        {selectedCurrency.symbol}
        {props.coins.current_price.toLocaleString()}
      </TableItem>
      <TableItem>
        <StyledArrow>
          {props.coins.price_change_percentage_1h_in_currency > 0 ? (
            <ArrowUp />
          ) : (
            <ArrowDown />
          )}
        </StyledArrow>
        <TableItemNum
          value={
            props.coins.price_change_percentage_1h_in_currency
              ? props.coins.price_change_percentage_1h_in_currency
              : 0
          }
        >
          {props.coins.price_change_percentage_1h_in_currency.toFixed(2)
            ? props.coins.price_change_percentage_1h_in_currency.toFixed(2)
            : 0}
          %
        </TableItemNum>
      </TableItem>
      <TableItem>
        <StyledArrow>
          {props.coins.price_change_percentage_24h_in_currency > 0 ? (
            <ArrowUp />
          ) : (
            <ArrowDown />
          )}
        </StyledArrow>
        <TableItemNum
          value={props.coins.price_change_percentage_24h_in_currency}
        >
          {props.coins.price_change_percentage_24h_in_currency.toFixed(2)}%
        </TableItemNum>
      </TableItem>
      <TableItem>
        <StyledArrow>
          {props.coins.price_change_percentage_7d_in_currency > 0 ? (
            <ArrowUp />
          ) : (
            <ArrowDown />
          )}
        </StyledArrow>
        <TableItemNum
          value={props.coins.price_change_percentage_7d_in_currency}
        >
          {props.coins.price_change_percentage_7d_in_currency.toFixed(2)}%
        </TableItemNum>
      </TableItem>
      <TableItem>
        <ProgressandConvertedDiv>
          <ConvertedNumberDiv>
            <span>
              {selectedCurrency.symbol}
              {convertedNumber(props.coins.total_volume)}
            </span>
            <span>
              {selectedCurrency.symbol}
              {convertedNumber(props.coins.market_cap)}
            </span>
          </ConvertedNumberDiv>
          <ProgressBarContainer>
            <ProgressBar
              value={props.coins.total_volume}
              max={props.coins.market_cap}
            />
          </ProgressBarContainer>
        </ProgressandConvertedDiv>
      </TableItem>
      <TableItem>
        <ProgressandConvertedDiv>
          <ConvertedNumberDiv>
            <span>
              {selectedCurrency.symbol}
              {convertedNumber(props.coins.circulating_supply)}
            </span>
            <span>
              {selectedCurrency.symbol}
              {convertedNumber(props.coins.total_supply)}
            </span>
          </ConvertedNumberDiv>

          <ProgressBar
            value={props.coins.circulating_supply}
            max={props.coins.total_supply}
          />
        </ProgressandConvertedDiv>
      </TableItem>
      <TableCoinChart>
        <CoinChart coins={props.coins} />
      </TableCoinChart>
    </TableRow>
  );
};

export default CoinItem;
