import React from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  CurrencyDiv,
} from "./Dropdown.styles";
import { currencies } from "../../App";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";

class Dropdown extends React.Component {
  state = {
    isOpen: false,
    selectedCurrency: "usd",
    selectedSymbol: "$",
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
    const options = Object.values(currencies);
    return (
      <div>
        <DropDownContainer>
          <DropDownHeader onClick={this.handleToggle}>
            <CurrencyDiv>{this.state.selectedSymbol}</CurrencyDiv>
            <span>{this.state.selectedCurrency.toUpperCase()}</span>
            {this.state.isOpen ? <ArrowUp /> : <ArrowDown />}
          </DropDownHeader>
          {this.state.isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map((option) => {
                  return (
                    <ListItem
                      onClick={() =>
                        this.handleOptionClicked(option.value, option.symbol)
                      }
                      key={Math.random()}
                    >
                      <CurrencyDiv>{option.symbol}</CurrencyDiv>
                      {option.value.toUpperCase()}
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
