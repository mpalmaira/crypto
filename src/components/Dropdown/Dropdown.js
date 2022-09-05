import React from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  CurrencyDiv,
} from "./Dropdown.styles";
import { currencies } from "../../store/currency/index";
import { useSelector, useDispatch } from "react-redux";
import { handleToggle } from "../../store/currency/actions";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";
import { handleCurrency } from "../../store/currency/actions";

export default function Dropdown(props) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const isOpen = useSelector((state) => state.currency.isOpen);
  const options = Object.values(currencies);

  return (
    <div>
      <DropDownContainer>
        <DropDownHeader onClick={() => dispatch(handleToggle())}>
          <CurrencyDiv>{selectedCurrency.symbol}</CurrencyDiv>
          <span>{selectedCurrency.value.toUpperCase()}</span>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => {
                return (
                  <ListItem
                    onClick={() =>
                      dispatch(handleCurrency(option.value, option.symbol))
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
