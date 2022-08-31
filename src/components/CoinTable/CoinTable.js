import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const [isLoading, setIsLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);
  const prevPage = usePrevious(page);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.selectedCurrency.value}&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setCoins([...coins, ...data]);
      setIsLoading(false);
    } catch (err) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (page !== prevPage) {
      getData();
    }
  });
  return (
    <TableContainer>
      {coins && (
        <StyledTable>
          <InfiniteScroll
            dataLength={coins.length}
            next={() => {
              setPage(page + 1);
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
