const initialState = {
  isOpen: false,
};
export const DROPDOWN_STATUS = "DROPDOWN_STATUS";

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case DROPDOWN_STATUS:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
}
export default currencyReducer;
