import { ACTIVE_CURRENCY, SWITCH_THEME } from "./index";
import { currencies } from "./index";

export const handleCurrency = (selectedCurrency, selectedSymbol) => (
  dispatch,
  getState
) => {
  dispatch({
    type: ACTIVE_CURRENCY,
    payload: currencies[selectedCurrency],
  });
  dispatch({
    type: "CHANGE_PAGE",
    payload: 1,
  });
};

export const switchTheme = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SWITCH_THEME,
    payload: !state.settings.dark
  });
};
