import axios from "axios";
import {
  GOT_BITCOIN_ERROR,
  GOT_BITCOIN_PENDING,
  GOT_BITCOIN_SUCCESS,
} from "./index";

export const getData = () => async (dispatch, getState) => {
  const state = getState();
  const selectedCurrency = state.settings.selectedCurrency;
  try {
    dispatch({ type: GOT_BITCOIN_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${selectedCurrency.value}&days=30&interval=daily&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`
    );
    const { data: dataHourly } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${selectedCurrency.value}&days=7&interval=daily&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`
    );
    const { data: dataCurrent } = await axios(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${selectedCurrency.value}&include_24hr_vol=true&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({
      type: GOT_BITCOIN_SUCCESS,
      payload: {
        bitcoin: data,
        bitcoinHourly: dataHourly,
        bitcoinCurrent: dataCurrent.bitcoin,
      },
    });
  } catch (err) {
    dispatch({ type: GOT_BITCOIN_ERROR, payload: err });
  }
};
