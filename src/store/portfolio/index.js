const initialState = {
  isLoading: false,
  hasError: false,
  assetSearch: null,
  addAssetSelection: {},
  assets: [
    {
      amount: 33,
      circulatingSupply: 19147775,
      currentPrice: 21553,
      data: {
        api_symbol: "bitcoin",
        id: "bitcoin",
        large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        market_cap_rank: 1,
        name: "Bitcoin",
        symbol: "BTC",
        thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      },
      datePurchased: "11-09-2022",
      dateUnformatted: "09-11-2022",
      marketCap: 412497810192,
      maxSupply: 21000000,
      priceChange24h: 334.66,
      purchasedPrice: 21707.38731931814,
      totalVolume: 31633324621,
    },
  ],
  dataAssetLoading: false,
  dataAssetError: false,
};

export const GET_ASSETDATA_PENDING = "GET_ASSETDATA_PENDING";
export const GET_ASSETDATA_SUCCESS = "GET_ASSETDATA_SUCCESS";
export const GET_ASSETDATA_ERROR = "GET_ASSETDATA_ERROR";
export const CLEAR_ASSETDATA_RESULTS = "CLEAR_ASSETDATA_RESULTS";
export const SELECT_ASSET_FROM_RESULTS = "SELECT_ASSET_FROM_RESULTS";
export const CLEAR_ASSET_FROM_RESULTS = "CLEAR_ASSET_FROM_RESULTS";
export const ASSET_DATA_PENDING = "ASSET_DATA_PENDING";
export const ASSET_DATA_SUCCESS = "ASSET_DATA_SUCCESS";
export const ASSET_DATA_ERROR = "ASSET_DATA_ERROR";
export const DELETE_ASSET = "DELETE_ASSET";

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ASSETDATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_ASSETDATA_SUCCESS:
      return {
        ...state,
        assetSearch: action.payload,
      };
    case GET_ASSETDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case CLEAR_ASSETDATA_RESULTS:
      return {
        ...state,
        assetSearch: action.payload,
      };
    case SELECT_ASSET_FROM_RESULTS:
      return {
        ...state,
        addAssetSelection: action.payload,
      };
    case CLEAR_ASSET_FROM_RESULTS:
      return {
        ...state,
        addAssetSelection: action.payload,
      };
    case ASSET_DATA_PENDING:
      return {
        ...state,
        dataAssetLoading: true,
        dataAssetError: false,
      };
    case ASSET_DATA_SUCCESS:
      return {
        ...state,
        assets: action.payload,
      };
    case ASSET_DATA_ERROR:
      return {
        ...state,
        dataAssetLoading: false,
        dataAssetError: true,
      };
    case DELETE_ASSET:
      return {
        ...state,
        assets: action.payload,
      };
    default:
      return state;
  }
}
export default portfolioReducer;
