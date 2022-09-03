import {DROPDOWN_STATUS} from '../currency/index'
export const handleToggle = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: DROPDOWN_STATUS,
    payload: !state.currency.isOpen,
  });
};
