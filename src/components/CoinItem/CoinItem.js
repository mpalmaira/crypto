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
} from "./CoinItem.styles";
import CoinChart from "../CoinChart/CoinChart";
import { convertedNumber } from "../util/ConvertedNumber";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDownRed.svg";

const CoinItem = (props) => {
  return (
    <TableRow>
      <CoinRank>{props.coins.market_cap_rank}</CoinRank>
      <td>
        <CoinSymbol>
          <CoinIcon src={props.coins.image} alt="" />
        </CoinSymbol>
        <td>{props.coins.name}</td>
        <td>({props.coins.symbol.toUpperCase()})</td>
      </td>

      <TableItem>${props.coins.current_price.toLocaleString()}</TableItem>
      <TableItem>
        <StyledArrow>
          {props.coins.price_change_percentage_1h_in_currency > 0 ? (
            <ArrowUp />
          ) : (
            <ArrowDown />
          )}
        </StyledArrow>
        <TableItemNum
          value={props.coins.price_change_percentage_1h_in_currency}
        >
          {props.coins.price_change_percentage_1h_in_currency.toFixed(2)}%
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
        {convertedNumber(props.coins.total_volume)}
        {convertedNumber(props.coins.market_cap)}
      </TableItem>
      <TableItem>
        {convertedNumber(props.coins.circulating_supply)}
        {convertedNumber(props.coins.total_supply)}
      </TableItem>
      <TableCoinChart>
        <CoinChart coins={props.coins} />
      </TableCoinChart>
    </TableRow>
  );
};

export default CoinItem;
