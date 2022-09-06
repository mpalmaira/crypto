const initialState = {
  isLoading: false,
  hasError: false,
  coinData: null,
  chartData: null,
};
export const GOT_COINPAGE_PENDING = "GOT_COINPAGE_PENDING";
export const GOT_COINPAGE_SUCCESS = "GOT_COINPAGE_SUCCESS";
export const GOT_COINPAGE_ERROR = "GOT_COINPAGE_ERROR";

function coinPageReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_COINPAGE_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GOT_COINPAGE_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case GOT_COINPAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
export default coinPageReducer;
