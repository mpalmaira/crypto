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
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleOptionClicked = (selectedCurrency, selectedSymbol) => {
    this.setState({
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
            <CurrencyDiv>{this.props.selectedCurrency.symbol}</CurrencyDiv>
            <span>{this.props.selectedCurrency.value.toUpperCase()}</span>
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
                      key={option.value}
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
