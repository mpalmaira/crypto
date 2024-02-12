import axios from "axios";
import {
  GOT_COINPAGE_PENDING,
  GOT_COINPAGE_SUCCESS,
  GOT_COINPAGE_ERROR,
} from "./index";

export const getCoin = (coin, days) => async (dispatch, getState) => {
  const state = getState();
  const selectedCurrency = state.settings.selectedCurrency;
  try {
    dispatch({ type: GOT_COINPAGE_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`
    );
    const { data: dataChart } =
      await axios(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${selectedCurrency.value}&days=${days}&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}
          `);
    dispatch({
      type: GOT_COINPAGE_SUCCESS,
      payload: {
        coinData: data,
        chartData: dataChart.prices,
      },
    });
  } catch (err) {
    dispatch({ type: GOT_COINPAGE_ERROR, payload: err });
  }
};
