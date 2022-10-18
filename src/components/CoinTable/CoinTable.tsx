import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getData, updatePage } from "../../store/coinTable/actions";
import {
  TableContainer,
  StyledTable,
  TableHeadRank,
  TableHeadName,
  TableHead,
} from "./CoinTable.styles";
import CoinItem from "../CoinItem/CoinItem";

export interface Coin {
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

const CoinTable = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );

  useEffect(() => {
    dispatch(getData());
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    dispatch(getData());
    //eslint-disable-next-line
  }, [selectedCurrency.value]);

  return (
    <TableContainer>
      {coins && (
        <StyledTable>
          <InfiniteScroll
            dataLength={coins.length}
            next={() => {
              dispatch(updatePage());
            }}
            hasMore={true}
            loader={<h4>Loading 10 more items...</h4>}
          >
            <thead>
              <tr>
                <TableHeadRank>#</TableHeadRank>
                <TableHeadName>Name</TableHeadName>
                <TableHead>Price</TableHead>
                <TableHead>1h%</TableHead>
                <TableHead>24h%</TableHead>
                <TableHead>7d%</TableHead>
                <TableHead>24h Volume/Market Cap</TableHead>
                <TableHead>Circulating/Total Supply</TableHead>
                <TableHead>Last 7d</TableHead>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin: Coin) => {
                return <CoinItem key={coin.id} coins={coin} />;
              })}
            </tbody>
          </InfiniteScroll>
        </StyledTable>
      )}
    </TableContainer>
  );
};
export default CoinTable;
