import React from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  CurrencyDiv,
  StyledGBP,
  StyledEUR,
  StyledBTC,
  StyledETH,
} from "./Dropdown.styles";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";
import { ReactComponent as USD } from "../SVG/DollarSign.svg";

class Dropdown extends React.Component {
  state = {
    isOpen: false,
    selectedCurrency: "USD",
    selectedSymbol: <USD />,
    options: [
      { symbol: <USD />, currency: "USD" },
      { symbol: <StyledGBP />, currency: "GBP" },
      { symbol: <StyledEUR />, currency: "EUR" },
      { symbol: <StyledBTC />, currency: "BTC" },
      { symbol: <StyledETH />, currency: "ETH" },
    ],
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleOptionClicked = (selectedCurrency, selectedSymbol) => {
    this.setState({
      selectedCurrency: selectedCurrency,
      selectedSymbol: selectedSymbol,
      isOpen: false,
    });
    this.props.handleCurrency(selectedCurrency);
  };
  render() {
    return (
      <div>
        <DropDownContainer>
          <DropDownHeader onClick={this.handleToggle}>
            <CurrencyDiv>{this.state.selectedSymbol}</CurrencyDiv>
            <span>{this.state.selectedCurrency}</span>{" "}
            {this.state.isOpen ? <ArrowUp /> : <ArrowDown />}
          </DropDownHeader>
          {this.state.isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {this.state.options.map((option) => {
                  return (
                    <ListItem
                      onClick={() =>
                        this.handleOptionClicked(option.currency, option.symbol)
                      }
                      key={Math.random()}
                    >
                      <CurrencyDiv>{option.symbol}</CurrencyDiv>
                      {option.currency}
                    </ListItem>
                  );
                })}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </div>
    );
  }
}
export default Dropdown;
