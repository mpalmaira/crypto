const initialState = {
  isLoading: false,
  hasError: false,
  searchData: null,
};

export const GET_SEARCHDATA_PENDING = "GET_SEARCHDATA_PENDING";
export const GET_SEARCHDATA_SUCCESS = "GET_SEARCHDATA_SUCCESS";
export const GET_SEARCHDATA_ERROR = "GET_SEARCHDATA_ERROR";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCHDATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_SEARCHDATA_SUCCESS:
      return {
        ...state,
        searchData: action.payload,
      };
    case GET_SEARCHDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searchData: action.payload,
      };
    default:
      return state;
  }
}
export default searchReducer;
