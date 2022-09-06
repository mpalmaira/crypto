import axios from "axios";
import {
  GOT_COINS_SUCCESS,
  GOT_COINS_PENDING,
  GOT_COINS_ERROR,
  UPDATING_PAGE,
} from "./index";

export const getData = () => async (dispatch, getState) => {
  const state = getState();
  const page = state.coins.page;
  const selectedCurrency = state.settings.selectedCurrency;
  try {
    dispatch({ type: GOT_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency.value}&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GOT_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GOT_COINS_ERROR,
      payload: err,
    });
  }
};

export const updatePage = () => async (dispatch, getState) => {
  const state = getState();
  const page = state.coins.page + 1;
  const selectedCurrency = state.settings.selectedCurrency;
  const { data } = await axios(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency.value}&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
  );
  dispatch({
    type: UPDATING_PAGE,
    payload: {
      page: page,
      coins: [...state.coins.coins, ...data],
    },
  });
};
