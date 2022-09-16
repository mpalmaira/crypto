import axios from "axios";
import dayjs from "dayjs";
import {
  GET_ASSETDATA_PENDING,
  GET_ASSETDATA_SUCCESS,
  GET_ASSETDATA_ERROR,
  CLEAR_ASSETDATA_RESULTS,
  SELECT_ASSET_FROM_RESULTS,
  CLEAR_ASSET_FROM_RESULTS,
  ASSET_DATA_PENDING,
  ASSET_DATA_SUCCESS,
  ASSET_DATA_ERROR,
  DELETE_ASSET,
  EDIT_ASSET,
} from "./index";

export const getAssetSearchData = (searchTerm) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: GET_ASSETDATA_PENDING });
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
    );
    dispatch({
      type: GET_ASSETDATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ASSETDATA_ERROR,
      payload: err,
    });
  }
};
export const clearAssetSearch = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_ASSETDATA_RESULTS,
    payload: null,
  });
};

export const selectedAssetFromResults = (selected) => (dispatch, getState) => {
  dispatch({
    type: SELECT_ASSET_FROM_RESULTS,
    payload: selected,
  });
};
export const clearAssetFromResults = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_ASSET_FROM_RESULTS,
    payload: {},
  });
};

export const addAssetSelected = (asset) => async (dispatch, getState) => {
  const state = getState();
  const selectedCurrency = state.settings.selectedCurrency.value;
  const assets = state.portfolio.assets;
  const addedAsset = [...assets, asset];
  try {
    dispatch({ type: ASSET_DATA_PENDING });
    const assetData = await Promise.all(
      addedAsset.map(async (coin) => {
        const {
          data,
        } = await axios(`https://api.coingecko.com/api/v3/coins/${coin.data.id}
        `);
        const { data: purchased } = await axios(
          `https://api.coingecko.com/api/v3/coins/${
            coin.data.id
          }/history?date=${dayjs(coin.datePurchased).format("DD-MM-YYYY")}`
        );
        return {
          ...coin,
          id: `${Math.random()}`,
          currentPrice: data.market_data.current_price[selectedCurrency],
          priceChange24h:
            data.market_data.price_change_24h_in_currency[selectedCurrency],
          totalVolume: data.market_data.total_volume[selectedCurrency],
          marketCap: data.market_data.market_cap[selectedCurrency],
          circulatingSupply: data.market_data.circulating_supply,
          maxSupply: data.market_data.max_supply,
          purchasedPrice: purchased.market_data.current_price[selectedCurrency],
        };
      })
    );
    dispatch({
      type: ASSET_DATA_SUCCESS,
      payload: assetData,
    });
  } catch (err) {
    dispatch({
      type: ASSET_DATA_ERROR,
      payload: err,
    });
  }
};

export const deleteAsset = (asset) => (dispatch, getState) => {
  const state = getState();
  const assets = state.portfolio.assets;
  dispatch({
    type: DELETE_ASSET,
    payload: assets.filter((el) => el.id !== asset.id),
  });
};

export const editAsset = (asset) => (dispatch, getState) => {
  const state = getState();
  const assets = state.portfolio.assets;
  const newAssets = assets.map((el) => {
    if (el.id === asset.id) {
      console.log(asset);
      return {
        ...el,
        ...asset,
      };
    } else {
      return el;
    }
  });
  dispatch({
    type: EDIT_ASSET,
    payload: newAssets,
  });
};
