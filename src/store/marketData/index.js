const initialState = {
  isLoading: false,
  hasError: false,
  marketData: null,
};
export const GOT_MARKETDATA_SUCCESS = "GOT_MARKETDATA_SUCCESS";
export const GOT_MARKETDATA_PENDING = "GOT_MARKETDATA_PENDING";
export const GOT_MARKETDATA_ERROR = "GOT_COINS_ERROR";
function marketDataReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_MARKETDATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GOT_MARKETDATA_SUCCESS:
      return {
        ...state,
        marketData: action.payload,
        isLoading: false,
        hasError: false,
      };
    case GOT_MARKETDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
export default marketDataReducer;
