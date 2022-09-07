import axios from "axios";
import {
  GET_SEARCHDATA_PENDING,
  GET_SEARCHDATA_SUCCESS,
  GET_SEARCHDATA_ERROR,
  CLEAR_SEARCH_RESULTS,
} from "./index";

export const getSearchData = (searchTerm) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SEARCHDATA_PENDING });
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
    );
    dispatch({
      type: GET_SEARCHDATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_SEARCHDATA_ERROR,
      payload: err,
    });
  }
};
export const clearSearch = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_SEARCH_RESULTS,
    payload: [],
  });
};
