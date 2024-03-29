import axios from "axios";
import {
  GOT_MARKETDATA_SUCCESS,
  GOT_MARKETDATA_PENDING,
  GOT_MARKETDATA_ERROR,
} from "./index";

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GOT_MARKETDATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: GOT_MARKETDATA_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: GOT_MARKETDATA_ERROR, payload: err });
  }
};
