import React from "react";
import axios from "axios";
import { StyledTable, TheadNumandName, THeadRest } from "./CoinTable.styles";
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
      <>
        {this.state.coins && (
          <StyledTable>
            <thead>
              <tr>
                <TheadNumandName>
                  <td>#</td>
                  <td>Name</td>
                </TheadNumandName>
                <th>Price</th>
                <th>1h%</th>
                <th>7d%</th>
                <th>24h Volume/Market Cap</th>
                <th>Circulating/Total Supply</th>
                <th>Last 7d</th>
              </tr>
            </thead>
            <tr>
              <tr>
                {this.state.coins.map((coins) => {
                  return <CoinItem key={coins.id} coins={coins} />;
                })}
              </tr>
            </tr>
          </StyledTable>
        )}
      </>
    );
  }
}

export default CoinTable;
