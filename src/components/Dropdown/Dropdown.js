import React, { useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  CurrencyDiv,
} from "./Dropdown.styles";
import { currencies } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import { handleToggle } from "../store/currency/actions";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";

export default function Dropdown(props) {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.currency.isOpen);
  const handleOptionClicked = (selectedCurrency, selectedSymbol) => {
    dispatch(handleToggle());
    props.handleCurrency(selectedCurrency);
  };
  const options = Object.values(currencies);

  return (
    <div>
      <DropDownContainer>
        <DropDownHeader onClick={() => dispatch(handleToggle())}>
          <CurrencyDiv>{props.selectedCurrency.symbol}</CurrencyDiv>
          <span>{props.selectedCurrency.value.toUpperCase()}</span>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => {
                return (
                  <ListItem
                    onClick={() =>
                      handleOptionClicked(option.value, option.symbol)
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
