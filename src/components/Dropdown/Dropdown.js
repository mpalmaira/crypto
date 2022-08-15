import React from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./Dropdown.styles";

class Dropdown extends React.Component {
  state = {
    selectedCurrency: "usd",
  };
  handleCurrency = (e) => {
    const selectedCurrency = e.target.value;
    this.setState({ selectedCurrency: e.target.value });
    this.props.handleCurrency(selectedCurrency);
   
  };
  render() {
    return (
      <div>
        <select onChange={this.handleCurrency}>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
          <option value="eur">EUR</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
        </select>
      </div>
    );
  }
}
export default Dropdown;
