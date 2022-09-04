const initialState = {
  coins: [],
  isLoading: false,
  hasError: false,
  page: 1,
};
export const GOT_COINS_SUCCESS = "GOT_COINS_SUCCESS";
export const GOT_COINS_PENDING = "GOT_COINS_PENDING";
export const GOT_COINS_ERROR = "GOT_COINS_ERROR";
export const UPDATING_PAGE = "UPDATING_PAGE";

function coinTableReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GOT_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
        isLoading: false,
        page: 1
      };
    case GOT_COINS_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    case UPDATING_PAGE:
      return {
        ...state,
        page: action.payload.page,
        coins: action.payload.coins
      };
    default:
      return state;
  }
}
export default coinTableReducer;
