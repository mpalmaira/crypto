import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getData, updatePage } from "../store/coinTable/actions";
import {
  TableContainer,
  StyledTable,
  TableHeadRank,
  TableHeadName,
  TableHead,
} from "./CoinTable.styles";
import CoinItem from "../CoinItem/CoinItem";

function usePrevious(value) {
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);
  return prevRef.current;
}

export default function CoinTable(props) {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);
  const page = useSelector((state) => state.coins.page);
  const prevPage = usePrevious(page);

  useEffect(() => {
    dispatch(getData());
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (page !== prevPage) {
      dispatch(getData());
    }
  });
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
              {coins.map((coins) => {
                return (
                  <CoinItem
                    key={coins.id}
                    coins={coins}
                    symbol={props.selectedCurrency.symbol}
                  />
                );
              })}
            </tbody>
          </InfiniteScroll>
        </StyledTable>
      )}
    </TableContainer>
  );
}
