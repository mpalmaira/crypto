import React from "react";
import axios from "axios";
import {
  TableContainer,
  StyledTable,
  TableHeadRank,
  TableHeadName,
  TableHead 
} from "./CoinTable.styles";
import CoinItem from "../CoinItem/CoinItem";
class CoinTable extends React.Component {
  state = {
    isLoading: false,
    coins: null,
    hasError: false,
  };

  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      this.setState({ coins: data, isLoading: false });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <TableContainer>
        {this.state.coins && (
          <StyledTable>
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
                return <CoinItem key={coins.id} coins={coins} />;
              })}
            </tbody>
          </StyledTable>
        )}
      </TableContainer>
    );
  }
}

export default CoinTable;
