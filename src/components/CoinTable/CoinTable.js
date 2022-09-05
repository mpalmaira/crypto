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

export default function CoinTable(props) {
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
              {coins.map((coins, index) => {
                return <CoinItem key={index} coins={coins} />;
              })}
            </tbody>
          </InfiniteScroll>
        </StyledTable>
      )}
    </TableContainer>
  );
}
