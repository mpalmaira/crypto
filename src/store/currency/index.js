const initialState = {
  isOpen: false,
  selectedCurrency: {
    value: "usd",
    symbol: "$",
  },
};
export const DROPDOWN_STATUS = "DROPDOWN_STATUS";
export const ACTIVE_CURRENCY = "ACTIVE_CURRENCY";

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

function currencyReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case DROPDOWN_STATUS:
      return {
        ...state,
        isOpen: action.payload,
      };
    case ACTIVE_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    default:
      return state;
  }
}
export default currencyReducer;
