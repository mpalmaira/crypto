const initialState = {
  selectedCurrency: {
    value: "usd",
    symbol: "$",
  },
  dark: true,
};
//add theme to settings
export const ACTIVE_CURRENCY = "ACTIVE_CURRENCY";
export const SWITCH_THEME = "SWITCH_THEME";
export const currencies = {
  usd: {
    value: "usd",
    symbol: "$",
  },
  gbp: {
    value: "gbp",
    symbol: "£",
  },
  eur: {
    value: "eur",
    symbol: "€",
  },
  btc: {
    value: "btc",
    symbol: "₿",
  },
  eth: {
    value: "eth",
    symbol: "Ξ",
  },
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    case SWITCH_THEME:
      return {
        ...state,
        dark: action.payload,
      };
    default:
      return state;
  }
}
export default settingsReducer;
