import axios from "axios";
import {
  GOT_BITCOIN_ERROR,
  GOT_BITCOIN_PENDING,
  GOT_BITCOIN_SUCCESS,
} from "./index";

export const getData = () => async (dispatch, getState) => {
  const state = getState();
  const selectedCurrency = state.currency.selectedCurrency;
  try {
    dispatch({ type: GOT_BITCOIN_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${selectedCurrency.value}&days=30&interval=daily`
    );
    const { data: dataHourly } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${selectedCurrency.value}&days=1&interval=hourly`
    );
    const { data: dataCurrent } = await axios(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${selectedCurrency.value}&include_24hr_vol=true`
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
