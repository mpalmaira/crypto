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
    isOpen: false,
    selectedCurrency: "USD",
    options: ["USD", "GBP", "EUR", "BTC", "ETH"],
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleOptionClicked = (selectedCurrency) => {
    this.setState({ selectedCurrency: selectedCurrency, isOpen: false });
    this.props.handleCurrency(selectedCurrency);
  };
  render() {
    return (
      <div>
        <DropDownContainer>
          <DropDownHeader onClick={this.handleToggle}>
            {this.state.selectedCurrency}
          </DropDownHeader>
          {this.state.isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {this.state.options.map((option) => {
                  return (
                    <ListItem
                      onClick={() => this.handleOptionClicked(option)}
                      key={Math.random()}
                    >
                      {option}
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
