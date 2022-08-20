import React from "react";
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
class CoinTable extends React.Component {
  state = {
    isLoading: false,
    coins: [],
    hasError: false,
    page: 1,
  };

  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currency}&order=market_cap_desc&per_page=10&page=${this.state.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coins: [...this.state.coins, ...data],
        isLoading: false,
      });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }
  render() {
    return (
      <TableContainer>
        {this.state.coins && (
          <StyledTable>
            <InfiniteScroll
              dataLength={this.state.coins.length}
              next={() => {
                this.setState({ page: this.state.page + 1 });
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
                  <th>24h Volume/Market Cap</th>
                  <th>Circulating/Total Supply</th>
                  <th>Last 7d</th>
                </tr>
              </thead>
              <tbody>
                {this.state.coins.map((coins) => {
                  return (
                    <CoinItem
                      key={coins.id}
                      coins={coins}
                      symbol={this.props.symbol}
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
}

export default CoinTable;
