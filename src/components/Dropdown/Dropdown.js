import React, { useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  CurrencyDiv,
} from "./Dropdown.styles";
import { currencies } from "../../store/settings/index";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";
import { handleCurrency } from "../../store/settings/actions";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );
  const options = Object.values(currencies);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <DropDownContainer>
        <DropDownHeader onClick={() => handleToggle()}>
          <CurrencyDiv>{selectedCurrency.symbol}</CurrencyDiv>
          <span>{selectedCurrency.value.toUpperCase()}</span>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer onMouseLeave={() => handleToggle()}>
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
