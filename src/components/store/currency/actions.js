import { DROPDOWN_STATUS, ACTIVE_CURRENCY } from "../currency/index";
import { currencies } from "../currency/index";

export const handleToggle = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: DROPDOWN_STATUS,
    payload: !state.currency.isOpen,
  });
};

export const handleCurrency = (selectedCurrency, selectedSymbol) => (
  dispatch,
  getState
) => {
  dispatch({
    type: ACTIVE_CURRENCY,
    payload: currencies[selectedCurrency],
  });
};
