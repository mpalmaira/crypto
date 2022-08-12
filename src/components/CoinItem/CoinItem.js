import React from "react";
import {
  CoinIcon,
  TableItem,
  TableRow,
  CoinSymbol,
  CoinRank,
  TableCoinChart

} from "./CoinItem.styles";
import CoinChart from "../CoinChart/CoinChart";
import { convertedNumber } from "../util/ConvertedNumber";

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
        {props.coins.price_change_percentage_1h_in_currency.toFixed(2)}%
      </TableItem>
      <TableItem>
        {props.coins.price_change_percentage_24h_in_currency.toFixed(2)}%
      </TableItem>
      <TableItem>
        {props.coins.price_change_percentage_7d_in_currency.toFixed(2)}%
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
